import express from "express";
import tiempo from "../src/time.js";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/hora', (req, res) => {
    res.send(tiempo.current_time);
})


app.get('/fecha-completa', (req, res) => {
    res.send(tiempo.current_fecha + ", " + tiempo.current_time.toString());
})

export default app