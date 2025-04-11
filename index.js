import express from "express";
//npm i express nodemon para instalar paquetes
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, ()=> {
    console.log('Listening on http://localhost' + port)
})