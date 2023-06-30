const http = require('http');
const fs = require('fs');
const { url } = require('inspector');

const hostname = '127.0.0.1';
const port = 80;
const home = fs.readFileSync('home.html');
const recent = fs.readFileSync('./recent.html');
const hire = fs.readFileSync('./hire.html');
const skills = fs.readFileSync('./skills.html');
const institutes = fs.readFileSync('./institutes.html')

const server = http.createServer((req,res)=>{
    console.log(req.url); 

    url = req.url;
    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/html');
    if(url=='/'){
        res.end(home);
    }
    else if (url=='/institutes'){
        res.end(institutes)
    }
    else if(url=='/skills'){
        res.end(skills);
    }
    else if(url=='/recent'){
        res.end(recent);
    }
    else if(url=='/hire'){
        res.end(hire);
    }
    else{
        res.end('<h1>404 not found</h1>');
    }


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });