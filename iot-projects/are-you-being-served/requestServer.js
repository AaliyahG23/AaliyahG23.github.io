// requestServer.js file
const http = require('http');
const request = require('request')
const port = 8990
var args = process.argv.slice(2);

http.createServer(function(req, res) {
    var url = args[0] ? args[0] : "<a default url>"
    request(url,function(error,response,body) {
        if (!body || !response || (error === null && response.statusCode !== 200)){
            res.end("bad URL\n");
            return;
        }
        else if (!error === true && response.statusCode === 200) {
            res.writeHead(200, {'content-type': 'text/html'})
            res.write(body)
        }
        else {
            res.writeHead(response.statusCode, {'content-type': 'text/plain'})
            res.write(error.toString())
        }
        res.end()
    })
}).listen(port)