# proxy_server_with_cache [Roadmap project](https://roadmap.sh/projects/caching-server)
A simple proxy server with cache, implemented using javascript
[Repository](https://github.com/Lucian11-LA/proxy_server_with_cache)
# Proxy Server with Cache in Node.js

This project implements a proxy server with cache in Node.js. The proxy receives requests from a client, forwards them to a source server, and caches responses to improve performance on future requests.

## Features

- **Request Forwarding:** Receives requests and forwards them to a specified source server.

- **Answer Cache:** Stores answers in cache to speed up responses to repeated requests.

- **Informative Headers:** Adds the `X-Cache` header to indicate whether the answer was obtained from the cache (`HIT`) or from the source server (`MISS`).

- **Cache Cleaning:** Allows you to clean the cache when necessary.

## How To Use

### Requirements

Make sure you have [Node.js](https://nodejs.org/) installed on your system. You will also need the `yargs` package to analyze command line arguments.

### Installation

Clone the repository and install the dependencies:
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
npm install
```

### Initialize the Server

To start the proxy server, use the following command:
```bash
node caching-proxy.js --port <PORTA> --origin <URL_DO_SERVIDOR_DE_ORIGEM>
```

Replace `<PORT>` with the desired port for the proxy server and `<SOURCE_SERVER_URL>` with the URL of the server to which the requests will be forwarded.

### Clear the Cache

To clear the cache, run:

```bash
node caching-proxy.js --clear-cache
```

### Example of Use

To start the proxy server on port 3000 and forward requests to `http://dummyjson.com`, use:
```bash
node caching-proxy.js --port 3000 --origin http://dummyjson.com
```

### Cache Behavior

- **First Request:** The answer will be obtained from the source server and cached.

- **Repeated requests:** If the response is cached, the proxy server will return the cache response with the header `X-Cache: HIT`.

- **Source Server Response:** If the response is not cached, the proxy server will return the source server response with the `X-Cache: MISS` header.

## Project Structure

- `caching-proxy.js`: Proxy server main code.

- `cache/`: Directory where cached answers are stored.

## Tests

You can perform the following tests to verify the operation of the proxy server:

- **Startup Test:** Check if the server starts correctly on the specified port.

- **Simple Request Test:** Check if the proxy server forwards the requests correctly.

- **Cache Storage Test:** Check if the answers are stored and returned correctly.

- **Cache Response Test:** Check if the cache is working for repeated requests.

- **Cache Cleaning Test:** Check if the cleaning command removes the cache files.

## Contributions

Contributions are welcome! If you encounter any problems or have suggestions for improvements, feel free to open an [issue](https://github.com/Lucian11-LA/proxy_server_with_cache/) or send a [pull request](https://github.com/Lucian11-LA/proxy_server_with_cache/).

## License

This project is licensed under the [Apache License] (LICENSE).

## Contact

For more information, please contact:

- [lucian alfred](mailto:lucianalfred60@example.com)
- [LinkedIn](https://www.linkedin.com/in/luciano-alfredo-7babbb216/)
