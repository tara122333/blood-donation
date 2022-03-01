const express = require("express");
const path = require("path");

const app = express();
const port = 80;

const staticPath = path.join(__dirname,"../public");

app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.write("<h1>This is Tara</h1>")
    res.send();
});

app.listen(port,()=>{
    console.log(`Server has been started on localhost at port ${port} `);
})