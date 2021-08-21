const fs=require('fs');
const PDFParser=require('pdf2json');
const Express = require("express");
const path = require("path");
const app = Express();
const port = 8080; //porta

app.use(Express.static(path.join(__dirname, 'public')));

function readPDF(pdfCaminho,res){
    if (fs.existsSync(pdfCaminho)) {
        var pdfParser = new PDFParser();
        pdfParser.on("pdfParser_dataError", function (errData) {
           console.error(errData.parserError)
        });
        pdfParser.on("pdfParser_dataReady", function (pdfData) {
            res.json(pdfData)
        });
        pdfParser.loadPDF(pdfCaminho);
        console.log('Arquivo localizado');
      } else {
          console.log('Arquivo não localizado');
      }
}

app.get("/readpdf/:name",(req,res)=>{
    res.setHeader('content-type','application/json');
    readPDF(__dirname+`/public/readFiles/${req.params.name}`,res)
    
})

app.listen(port,e=>console.log("app rodando na porta "+port))