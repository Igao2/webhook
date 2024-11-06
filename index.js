const express = require("express");
const app = express();


const port = process.env.PORT || 8000;
app.use(express.static('www'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/receber",(req,res)=>{
    var b = req.body;
    var s = JSON.parse(B);
    console.log("s")
    res.status(200).send("Recebido")
})
app.listen(port,()=>{

})
