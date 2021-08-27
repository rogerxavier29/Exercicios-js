function calcular() {
  var num1 = document.querySelector('.num1').value;
  var num2 = document.querySelector('.num2').value;
  var num3 = document.querySelector('.num3').value;

  var resultado = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
  document.querySelector('.resultado').innerHTML = resultado;
}

function quadrado() {
  var qua1 = document.querySelector('.qua1').value;
  var qua2 = document.querySelector('.qua2').value;
  var qua3 = document.querySelector('.qua3').value;
  var qua4 = document.querySelector('.qua4').value;
  var qua5 = document.querySelector('.qua5').value;

  var quadResult1 = parseInt(qua1) * parseInt(qua1);
  var quadResult2 = parseInt(qua2) * parseInt(qua2);
  var quadResult3 = parseInt(qua3) * parseInt(qua3);
  var quadResult4 = parseInt(qua4) * parseInt(qua4);
  var quadResult5 = parseInt(qua5) * parseInt(qua5);

  document.querySelector('.resultado1').innerHTML = quadResult1;
  document.querySelector('.resultado2').innerHTML = quadResult2;
  document.querySelector('.resultado3').innerHTML = quadResult3;
  document.querySelector('.resultado4').innerHTML = quadResult4;
  document.querySelector('.resultado5').innerHTML = quadResult5;
}
