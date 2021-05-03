function getSuma(){
    var mydato1 = $('#dato1').val();
    var mydato2 = $('#dato2').val();

    var url = 'http://localhost:8080/suma/?dato1=' + mydato1 + '&dato2=' + mydato2;
    console.log(url)
    $.getJSON(url,
        function(json) {
           console.log(json);
           $('#resultado').html('<h1>' + json.resultado + '</h1>');
        }
      );
}

function getResta(){
    var mydato1 = $('#dato1').val();
    var mydato2 = $('#dato2').val();

    var url = 'http://localhost:8080/resta/?dato1=' + mydato1 + '&dato2=' + mydato2;
    console.log(url)
    $.getJSON(url,
        function(json) {
           console.log(json);
           $('#resultado').html('<h1>' + json.resultado + '</h1>');
        }
      );
}

function getDivision(){
    var mydato1 = $('#dato1').val();
    var mydato2 = $('#dato2').val();

    var url = 'http://localhost:8080/division/?dato1=' + mydato1 + '&dato2=' + mydato2;
    console.log(url)
    $.getJSON(url,
        function(json) {
           console.log(json);
           $('#resultado').html('<h1>' + json.resultado + '</h1>');
        }
      );
}

function getMultiplicacion(){
    var mydato1 = $('#dato1').val();
    var mydato2 = $('#dato2').val();

    var url = 'http://localhost:8080/multiplicacion/?dato1=' + mydato1 + '&dato2=' + mydato2;
    console.log(url)
    $.getJSON(url,
        function(json) {
           console.log(json);
           $('#resultado').html('<h1>' + json.resultado + '</h1>');
        }
      );
}

function getCuadrado1(){
    var mydato1 = $('#dato1').val();

    var url = 'http://localhost:8080/cuadrado1/?dato1=' + mydato1;
    console.log(url)
    $.getJSON(url,
        function(json) {
           console.log(json);
           $('#resultado').html('<h1>' + json.resultado + '</h1>');
        }
      );
}

function getCuadrado2(){
    var mydato2 = $('#dato2').val();

    var url = 'http://localhost:8080/cuadrado2/?dato2=' + mydato2;
    console.log(url)
    $.getJSON(url,
        function(json) {
           console.log(json);
           $('#resultado').html('<h1>' + json.resultado + '</h1>');
        }
      );
}