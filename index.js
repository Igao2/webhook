const express = require("express");
const app = express();


const port = process.env.PORT || 8000;

app.use(express.json())

app.get("/receber",(req,res)=>{
    var b = req.body;
    var s = JSON.parse(b);
    console.log("s")
    res.status(200).send("Recebido")
})
app.listen(port,()=>{

})
