import express from "express";
import current_time from "./time";
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/hora', (req, res) => {
    res.send(current_time);
})

export default app