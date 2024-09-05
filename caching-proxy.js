const http = require("http");
const  fs  = require("fs");
const path = require("path");
const   url = require('url');
const crypto = require('crypto');
const yargs = require('yargs');
const { ADDRCONFIG } = require("dns");

const   CACHE_DIR = 'cache';

if (!fs.existsSync(CACHE_DIR)){
    fs.mkdirSync(CACHE_DIR);
}

const argv =  yargs
    .option('port',{
        alias: 'p',
        type: 'number',
        description: 'Porta para executar o servidor proxy'
    })
    .option('origin',{
        alias: 'o',
        type: 'string',
        description: 'URL do servidor de oring'
    }
    )
    .option('clear-cache',{
        type:'boolean',
        description: 'Limpar o cache',

    })
    .help()
    .argv;

    const clearCache =()=> {
        fs.readdir(CACHE_DIR, (err, files) => {
            if (err) throw err;
            files.forEach(file => {
                fs.unlink(path.join(CACHE_DIR, file), err =>{
                    if(err) throw err; 
                });
            });
            console.log('Cache limpo');
        });
    };
    
    const getCacheKey = (reqUrl) =>{
        return crypto.createHash('md5').update(reqUrl).digest('hex');
    };

    const handleRequest = (req, res, originUrl) =>{
        const cacheKey = getCacheKey(req.url);
        const cacheFile = path.join(CACHE_DIR, cacheKey);

        if(fs.existsSync(cacheFile)){
            fs.readFile(cacheFile, (err, data) =>{
                if (err) throw err;
                res.writeHead(200, {'X-cache': 'HIT'});
                res.end(data);
            });
        }else{
            const options = {
                hostname: url.parse(originUrl).hostname,
                port: url.parse(originUrl).port,
                path: req.url,
                method: req.method,
                headers: req.headers,
            };

            const proxyReq = http.request(options,(proxyRes)=>{
                let body = '';

                proxyRes.on('data', chunk =>{
                    body += chunk;
                });

                proxyRes.on('end',()=>{
                    fs.writeFile(cacheFile, body, err =>{
                        if (err) throw err;
                    });
                    res.writeHead(proxyRes.statusCode, {
                        'X-Cache': 'MISS',
                        ...proxyRes.headers,
                    });
                    res.end(body);
                });
            });

            proxyReq.on('error', (err) =>{
                res.writeHead(500);
                res.end('Erro no servidor');
            });

            req.pipe(proxyReq);
        };
    };

    if(argv.clearCache)
    {
        clearCache();
    }else if (argv.port && argv.origin){
        const server = http.createServer((req,res)=>{
            handleRequest(req, res, argv.origin);
        });

        server.listen(argv.port, ()=>{
            console.log(`Servidor proxy com cache em execução na porta ${argv.port}, encaminhando para ${argv.origin}`);

        });

    }else{
        console.log('Argumentos invalidos. Use --port e --origin para iniciar o servidor')
    }

