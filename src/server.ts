import express from "express";

// creating an express app
const app = express();

// port for the server to listen on 
const PORT = 3000;

app.use(express.json());

// start the server 
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
});