import dotenv from "dotenv";
import express from "express";
import { connection } from "./db/connect.js";
dotenv.config();
const database = await connection();
const appExpress = express(); 
appExpress.use(express.json());
const myserver = JSON.parse(process.env.MY_SERVER);

appExpress.get("/soloverde",(req ,res)=>{
database.query(
    "SELECT * FROM venta", 
    (err,data,fil)=>{
        if (err) {
            res.send(err.message);
        }
        res.send(JSON.stringify(data))
    }
)
})

appExpress.listen(myserver,()=>console.log(`http://${myserver.host}:${myserver.port}`))