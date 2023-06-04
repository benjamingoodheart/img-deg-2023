const httpServer= require('http');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;




function serveOriginalImage(sourcePath){
    fs.readFile(sourcePath, function (err, data){
        if (err) throw err;
        httpServer.createServer(function(req, res){
            res.writeHead(200, {'Content-Type' : 'image/jpeg'})
            res.end(data)
        }).listen(port, hostname)
        console.log(`Server running at ${hostname}:${port}`)
    })
}

function createOutputDOM(){
    httpServer.createServer(function(req, res){
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write("<canvas id='canvas></canvas>")
        res.end()
    }).listen(3001, hostname)
    console.log("Output being served on " + `${hostname}:3001`)
}

const srcPath = "./input-src/test.jpg"

serveOriginalImage(srcPath)
createOutputDOM()

