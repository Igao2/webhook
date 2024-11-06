const express = require("express");
const app = express();


const port = process.env.PORT || 8000;

app.use(express.json())

app.post("/receber",(req,res)=>{
    var b = req.body;
    
    console.log(b)
    res.status(200).send("Recebido")
})
app.listen(port,()=>{

})
