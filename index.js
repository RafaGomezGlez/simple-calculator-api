// import express and cors
const cors = require('cors');
const express = require('express');

//create the express app with cors enabled
const app = express();
app.use(cors());
app.options('*', cors());

//define port 
const port = 8080;

// define root controller (GET)
app.get('/', (req, res, next) => {
    res.send('welcome to my api...');
})

//define GET controller for triangulo
app.get('/suma', (req, res, next) => {
    var dato1 = req.query.dato1;
    var dato2 = req.query.dato2;
    console.log(dato1);
    console.log(dato2);

    var resultado = (parseInt(dato1) + parseInt(dato2));
    var objResult = {
        resultado: resultado
    };

    res.send(objResult);
});

app.get('/resta', (req, res, next) =>{
    var dato1 = req.query.dato1;
    var dato2 = req.query.dato2;
    console.log(dato1);
    console.log(dato2);


    var resultado = (dato1 - dato2);
    var objResult = {
        resultado: resultado
    };

    res.send(objResult);
});

app.get('/division', (req, res, next) =>{
    var dato1 = req.query.dato1;
    var dato2 = req.query.dato2;
    console.log(dato1);
    console.log(dato2);


    var resultado = (dato1 / dato2);
    var objResult = {
        resultado: resultado
    };

    res.send(objResult);
});

app.get('/multiplicacion', (req, res, next) =>{
    var dato1 = req.query.dato1;
    var dato2 = req.query.dato2;
    console.log(dato1);
    console.log(dato2);


    var resultado = (dato1 * dato2);
    var objResult = {
        resultado: resultado
    };

    res.send(objResult);
});

app.get('/cuadrado1', (req, res, next) =>{
    var dato1 = req.query.dato1;
    console.log(dato1);


    var resultado = Math.pow(dato1,2);
    var objResult = {
        resultado: resultado
    };

    res.send(objResult);
});

app.get('/cuadrado2', (req, res, next) =>{
    var dato2 = req.query.dato2;
    console.log(dato2);


    var resultado = Math.pow(dato2,2);
    var objResult = {
        resultado: resultado
    };

    res.send(objResult);
});

app.listen(port, () => 
console.log('listening on port ' + port)
);