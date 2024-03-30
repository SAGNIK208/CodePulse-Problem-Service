const express = require("express");
const {PORT} = require("./config/server.config")
const app = express();

app.get("/health",(req,res)=>{
    res.json({"success":true});
})

app.listen(PORT,()=>{
    console.log(`Server started at port: ${PORT}`);
});