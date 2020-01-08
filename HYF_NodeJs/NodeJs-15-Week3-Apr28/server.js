const http=require('http')
const app=require('./app')

const port=5000

//create web server

http
    .createServer(app)
    .listen(
        port,
        ()=>console.info(`Node app running at localhost:${port}`)
    )
