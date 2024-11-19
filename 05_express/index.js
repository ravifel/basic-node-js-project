// Calling the express framework.
let express = require('express');

// Creating an application, instantiating express. 
// Now the application will have access to all the methods that the express object has, to create the routes and start the server.
let app = express();

// Routes
app.get('/', function (request, response) {
    response.send('First Route with Express');
});

app.get('/test', function (request, response) {
    response.send('Testing route');
});

// Starting a web server in a Node.js application
app.listen(3000, function () {
    console.log("A aplicação está funcionando na porta 3000");
})