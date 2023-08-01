const express = require('express');
const http = require('http');

const port = 3000;

const app = express();
app.get("/",(req,res)=> {
    res.send("Hello, world!")
})

const server = http.createServer(app);

server.listen(port,() => {
    console.log("Server running on port 3000");
})