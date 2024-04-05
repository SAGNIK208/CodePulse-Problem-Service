const express = require("express");
const {PORT} = require("./config/server.config");
const connectToDB = require("./config/db.config");
const bodyParser = require("body-parser");
const {apiRouter} = require("./routes");
const errorHandler = require("./utils/errorHandler");



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

//error handler should be the last middleware
app.use(errorHandler);


app.listen(PORT,async ()=>{
    console.log(`Server started at port: ${PORT}`);
    await connectToDB();
    console.log("successfully connected to db");
});