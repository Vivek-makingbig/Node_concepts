// Method 1 of creating a server
// Creating a basic http server and perform routing
const http = require('http');
const server = http.createServer((req,res)=>
{
    if(req.url=='/'){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Welcome to home page');
    }
    else if(req.url=='/about'){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Welcome to About page');
    }
    else
    {
       
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('Page not found');
    
    }
});
// const PORT = 3000;
// server.listen(PORT,()=>{
//     console.log('Server running on port : 3000');
// })


//Method 2
// Creating an express app to create a server and perform routing
const express = require('express');
const app = express();


app.get('/',(req,res)=>
{
    res.send("Welcome to the express home page");
});
app.get('/about',(req,res)=>
{
    res.send("Welcome to the express about page");
});


const PORT = 3000;
app.listen(PORT,()=>
{
    console.log('Server running on port : 3000');
})




