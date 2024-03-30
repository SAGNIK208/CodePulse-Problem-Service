const express = require("express");
const {PORT} = require("./config/server.config");
const bodyParser = require("body-parser");
const {apiRouter} = require("./routes");



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());

app.use("/api",apiRouter);

app.get("/health",(req,res)=>{
    res.json({
        success: true,
        msg: "Problem Service is healthy",
      });
})


app.listen(PORT,()=>{
    console.log(`Server started at port: ${PORT}`);
});