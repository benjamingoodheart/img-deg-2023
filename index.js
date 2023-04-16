const httpServer= require('http');
const fs = require('fs')


const hostname = '127.0.0.1';
const port = 3000;

const rawImage = fs.readFile("/input-src/test.jpg", (()=>{
    console.log("image loaded")
}))

httpServer.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'image/jpeg'})
    res.end(rawImage)
}).listen(port, hostname)
console.log(`Server running at ${hostname}:${port}`)

//OPEN UP THE RAW FILE

/**
fs.readFile("./input-src/test.jpg", function (err, data){
        if (err) throw err;
        httpServer.createServer(function(req, res){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.write('<html><body><img src="data:image/jpeg;base64,')
            res.write(Buffer.from(data).toString('base64'));
            res.end('"/></body></html>');
        }).listen(port, hostname)
        console.log(`Server running at ${hostname}:${port}`)
    })

    */



