const http=require("http")

const server=http.createServer((req,res)=>{
    if (req.url === "/") {
        res.end("home page");
    } else if (req.url === "/about") {
        res.end("about page");
    } else {
        res.end("oops");
    }
})

server.listen(5000)
