// var http = require("http");



// http.createServer((req,res) => {
//     res.writeHead(201, {"Content-Type": "text/plain"}); //http status:200, content-type이 응답 헤더
//     res.write("guten tag");
//     res.end();
// }).listen(8080)

// //event-driven-callback
// const onRequest = (req, res) => {
//     console.log("request received");
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write("Hello World");
//     res.end();
// }

// http.createServer(onRequest).listen(8888);


