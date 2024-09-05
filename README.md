# proxy_server_with_cache
A simple proxy server with cache, implemented using javascript
[Repository](https://github.com/Lucian11-LA/proxy_server_with_cache)
# Servidor Proxy com Cache em Node.js

Este projeto implementa um servidor proxy com cache em Node.js. O proxy recebe solicitações de um cliente, as encaminha para um servidor de origem, e armazena as respostas em cache para melhorar o desempenho em futuras solicitações.

## Funcionalidades

- **Encaminhamento de Solicitações:** Recebe solicitações e as encaminha para um servidor de origem especificado.
- **Cache de Respostas:** Armazena respostas em cache para acelerar respostas a solicitações repetidas.
- **Cabeçalhos Informativos:** Adiciona o cabeçalho `X-Cache` para indicar se a resposta foi obtida do cache (`HIT`) ou do servidor de origem (`MISS`).
- **Limpeza de Cache:** Permite a limpeza do cache quando necessário.

## Como Usar

### Requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema. Você também precisará do pacote `yargs` para analisar argumentos de linha de comando.

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
npm install
```

### Inicializar o Servidor

Para iniciar o servidor proxy, use o seguinte comando:

```bash
node caching-proxy.js --port <PORTA> --origin <URL_DO_SERVIDOR_DE_ORIGEM>
```

Substitua `<PORTA>` pela porta desejada para o servidor proxy e `<URL_DO_SERVIDOR_DE_ORIGEM>` pela URL do servidor ao qual as solicitações serão encaminhadas.

### Limpar o Cache

Para limpar o cache, execute:

```bash
node caching-proxy.js --clear-cache
```

### Exemplo de Uso

Para iniciar o servidor proxy na porta 3000 e encaminhar solicitações para `http://dummyjson.com`, use:

```bash
node caching-proxy.js --port 3000 --origin http://dummyjson.com
```

### Comportamento do Cache

- **Primeira Solicitação:** A resposta será obtida do servidor de origem e armazenada em cache.
- **Solicitações Repetidas:** Se a resposta estiver em cache, o servidor proxy retornará a resposta do cache com o cabeçalho `X-Cache: HIT`.
- **Resposta do Servidor de Origem:** Se a resposta não estiver em cache, o servidor proxy retornará a resposta do servidor de origem com o cabeçalho `X-Cache: MISS`.

## Estrutura do Projeto

- `caching-proxy.js`: Código principal do servidor proxy.
- `cache/`: Diretório onde as respostas em cache são armazenadas.

## Testes

Você pode realizar os seguintes testes para verificar o funcionamento do servidor proxy:

- **Teste de Inicialização:** Verifique se o servidor inicia corretamente na porta especificada.
- **Teste de Requisição Simples:** Verifique se o servidor proxy encaminha as solicitações corretamente.
- **Teste de Armazenamento em Cache:** Verifique se as respostas são armazenadas e retornadas corretamente.
- **Teste de Resposta de Cache:** Verifique se o cache está funcionando para solicitações repetidas.
- **Teste de Limpeza de Cache:** Verifique se o comando de limpeza remove os arquivos de cache.

## Contribuições

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir um [issue](https://github.com/Lucian11-LA/proxy_server_with_cache/) ou enviar um [pull request](https://github.com/Lucian11-LA/proxy_server_with_cache/).

## Licença

Este projeto está licenciado sob a [Apache License](LICENSE).

## Contato

Para mais informações, entre em contato:

- [lucian alfred](mailto:lucianalfred60@example.com)
- [LinkedIn](https://www.linkedin.com/in/luciano-alfredo-7babbb216/)
