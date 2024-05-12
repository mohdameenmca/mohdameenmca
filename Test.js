var http=require("http")
//Create Server
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("I am the Node Server");
}).listen(8080)