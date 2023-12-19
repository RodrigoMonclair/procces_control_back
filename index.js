import express from 'express';
import * as dotenv from 'dotenv';
import connect from "./config/db.config.js";
import processosRoute from "./routes/processos.routes.js";

dotenv.config()

const app = express();
app.use(express.json());

connect();

// rotas únicas

app.use("/processos", processosRoute);

//listen--------------------------------------------------------------
app.listen(process.env.PORT, ()=>{
    console.log(`APP up and running on port http://localhost: ${process.env.PORT}`);
})