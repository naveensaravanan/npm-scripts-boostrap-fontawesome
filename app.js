const env          = process.env;

var static_server = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static_server.Server('./dist');

let server = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
});

server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
