import app from './app';
import http from 'http';
import * as config from './config/env'

const port = config.PORT;
app.set('port', port);

// Create server
const server = http.createServer(app);

server.listen(config.PORT, () => {
    console.log(`Server started listening on Port: ${config.PORT} in ${config.ENVIRONMENT} mode`)
})

server.on('error', (error) => {
    console.error("Error occured in the server", error)
})
