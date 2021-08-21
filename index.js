const fs=require('fs');
const PDFParser=require('pdf2json');
const Express = require("express");
const app = Express();
const port = 8080; //porta

app.get("/",(req,res)=>{
    res.setHeader('content-type','application/json');
    res.json({info:"OK rodando"})
})

app.listen(port,e=>console.log("app rodando na porta "+port))