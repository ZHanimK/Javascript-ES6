const http=require('http');
const hostname='localhost';
const port=3000;
const server=http.createServer((req, res)=>{
    if(req.method==='GET'){
        res.writeHead(200, {'Content-Type': 'apllication/json'})
        res.write(JSON.stringify({message:'This is a GET request'}));
        res.end();
    } else if (req.method==='POST'){
        res.writeHead(200, {'Content-Type': 'apllication/json'})
        res.write(JSON.stringify({message:'This is a POST request'}));
        res.end();
    } else {
        res.end('This is not a valid request');
    }
})
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/` )
});