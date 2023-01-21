const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(`<h1>this is a homepage</h1>`)
    }
    else if(req.url==='/about'){
        res.end(`<h1>this is my about page</h1>`)
    }else{
        res.write(`<h1>OOPS!!</h1>
        <br><p>failed to reach server.</p>`)
        res.end()
    }
    
})
server.listen(5500)