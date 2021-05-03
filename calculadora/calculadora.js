var dato1;
var dato2;
var resutado;

function calcularSuma(){
    var dato1Element = document.getElementById("dato1");
    var dato2Element = document.getElementById("dato2");
    dato1 = parseInt(dato1Element.value);
    dato2 = parseInt(dato2Element.value);

    resultado = dato1 + dato2;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = 'Resultado =' + resultado;
}
function calcularResta(){
    var dato1Element = document.getElementById("dato1");
    var dato2Element = document.getElementById("dato2");
    dato1 = parseInt(dato1Element.value);
    dato2 = parseInt(dato2Element.value);


    resultado = dato1 - dato2;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = 'Resultado =' + resultado;
}
function calcularDivision(){
    var dato1Element = document.getElementById("dato1");
    var dato2Element = document.getElementById("dato2");
    dato1 = dato1Element.value;
    dato2 = dato2Element.value;

    resultado = dato1 / dato2;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = 'Resultado =' + resultado;
}
function calcularMultiplicacion(){
    var dato1Element = document.getElementById("dato1");
    var dato2Element = document.getElementById("dato2");
    dato1 = dato1Element.value;
    dato2 = dato2Element.value;

    resultado = dato1 * dato2;
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = 'Resultado =' + resultado;
}
function calcularCuadrado1(){
    var dato1Element = document.getElementById("dato1");
    dato1 = dato1Element.value;

    resultado = Math.pow(dato1, 2);
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = 'Resultado =' + resultado;
}
function calcularCuadrado2(){
    var dato2Element = document.getElementById("dato2");
    dato2 = dato2Element.value;

    resultado = Math.pow(dato2, 2);
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = 'Resultado =' + resultado;
}