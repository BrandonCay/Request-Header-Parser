const express = require("express");
const app=express();
const cors=require("cors");
const path=require("path");


app.use(cors());


app.get("/api/data",(req,res)=>{
    res.json({"ipAddress": req.ip,"acceptLanguage":req.get('Accept-Language'),"userInfo":req.get("User-Agent")});
})
const PORT=process.env.PORT || 4000;

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })

}
app.listen(PORT, ()=>console.log(`Listening to port ${PORT}`))