const http=require('http')
const server=http.createServer((req,res)=>{
    res.write('hello world!!')
    res.write('this is my new server.')
    res.end()
})
server.listen(3000)