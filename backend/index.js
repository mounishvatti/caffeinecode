import express from "express";
const port = process.env.PORT | 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send({
        messsage: "Hello World"
    });
});

app.listen(port, function(){
    console.log(`Listening on port ${port}`)
});

