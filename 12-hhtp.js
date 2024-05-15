const { AsyncLocalStorage } = require('async_hooks')
const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to our homepage')    
        return
    }
    if (req.url === '/about') {
        res.end('About')    
        return
    }
    res.end('Error page')
})

server.listen(3000)

