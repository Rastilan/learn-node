const fs  = require('fs')
const http = require('http');
const url = require('url');
const port = 8080



const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    let filename = "." + url.parse(req.url, true).pathname;

    let error404 = fs.readFileSync('404.html');

    fs.readFile(filename, function (error,data) {
        if (error) {
            res.writeHead(404)
            res.write(error404);
        } else {
            res.write(data)
        }
        res.end()
    })

})


server.listen(port, function(error){
    if(error) {
        console.log('Something went wront' + error)
    } else {
        console.log('server is listening on port ' + port)
    }

})