const http = require("http");
http.createServer(router).listen(3000);

function router(req,res){
    console.log("New request")
    console.log(req.url);

    switch(req.url){
        case "/hola":
            res.write("hola que tal")
            res.end();
            break;
        default:
            res.write("Error 404: no se lo que buscas")
            res.end()

    }

    // res.write("hola")
    // res.end();
}