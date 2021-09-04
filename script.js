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

function maior() {
  var numero1 = document.querySelector('.numero1').value;
  var numero2 = document.querySelector('.numero2').value;
  var numero3 = document.querySelector('.numero3').value;
  var numero4 = document.querySelector('.numero4').value;
  var numero5 = document.querySelector('.numero5').value;

  var valorMax = Math.max(numero1, numero2, numero3, numero4, numero5);

  var resultadoMax = valorMax;
  document.querySelector('.resultadoMax').innerHTML = resultadoMax;
}

function idadeMax() {
  var idadis1 = document.querySelector('.idadis1').value;
  var idadis2 = document.querySelector('.idadis2').value;
  var idadis3 = document.querySelector('.idadis3').value;
  var idadis4 = document.querySelector('.idadis4').value;

  if (idadis1 >= 18) {
    var idadeMaior1 = idadis1;
  } else {
    var idadeMenor1 = idadis1;
  }

  if (idadis2 >= 18) {
    var idadeMaior2 = idadis2;
  } else {
    var idadeMenor2 = idadis2;
  }

  if (idadis3 >= 18) {
    var idadeMaior3 = idadis3;
  } else {
    var idadeMenor3 = idadis3;
  }

  if (idadis4 >= 18) {
    var idadeMaior4 = idadis4;
  } else {
    var idadeMenor4 = idadis4;
  }

  idadesMaiores.push(idadeMaior1, idadeMaior2, idadeMaior3, idadeMaior4);

  idadesMenores.push(idadeMenor1, idadeMenor2, idadeMenor3, idadeMenor4);

  var quantIdadeMax = idadesMaiores.lenght;
  var quantIdadeMen = idadesMenores.lenght;
  document.querySelector('.resultadoIdades').innerHTML =
    'Idades maximas =' + quantIdadeMax + ' E idades menores =' + quantIdadeMen;
}

///Exercicio 5

function altura() {
  var quantPessoas = 0;
  var qtdAlturas = [];
  var alturaF = 0;
  var alturaM = 0;
  var pessoasF = 0;
  var pessoasM = 0;

  while (quantPessoas < 4) {
    var sexo = prompt('Digite sexo da pessoa ' + (quantPessoas + 1));
    var altura = parseFloat(
      prompt('Digite a ALTURA da Pessoa ' + (totalPessoas + 1)),
    );

    if (sexo == 'F' || sexo == 'f') {
      qtdAlturas.push(altura);
      alturaF = alturaF + altura;
      console.log(alturaF);
      pessoasF++;
      console.log(pessoasF);
    } else {
      if (sexo == 'M' || sexo == 'm') {
        qtdAlturas.push(altura);
        alturaM = alturaM + altura;
        console.log(alturaM);
        pessoasM++;
        console.log(pessoasM);
      }
    }

    quantPessoas++;
  }

  function maiores() {
    var maiorAlturaM = Math.max.apply(null, alturaM);
    var maiorAlturaF = Math.max.apply(null, alturaF);
    if (maiorAlturaM > maiorAlturaF) {
      console.log('A maior altura é de um homem' + maiorAlturaM);
    } else {
      console.log('A maior altura é de uma mulher' + maiorAlturaF);
    }
  }

  document.write('Quantidade de mulheres' + pessoasF);

  document.write('Quantidade de homem: ' + pessoasM);
}
//---------------------------------------------------------
function nomes() {
  var name1 = document.querySelector('.nome1').value;
  var name2 = document.querySelector('.nome2').value;
  var name3 = document.querySelector('.nome3').value;
  var name4 = document.querySelector('.nome4').value;

  var nameTotal = [];
  nameTotal.push(name1, name2, name3, name4);
  var resultadoNomes = nameTotal.reverse();
  document.querySelector('.resultadoNomes').innerHTML = resultadoNomes;
}

function data() {
  var date = document.querySelector('.data').value;

  var dia = date.getDate();

  var mes = date.getMonth() + 1;

  var ano = date.getYear();

  var resultadoData = 'dia é:' + dia + ' o mes é :' + mes + ' o ano é :' + ano;
  document.querySelector('.resultadoData').innerHTML = resultadoData;
}

function pageAIA() {
  window.location.href = 'pageAIA.html';
}

function pageGX2() {
  window.location.href = 'https://www.gx2.com.br';
}

//-----------------------Exercicio 10

function clique1() {
  var cliques = 1;
  document.querySelector('.caixa1').innerHTML = 'Caixa' + cliques + 'Ativada';
}

function clique2() {
  var cliques = 2;
  document.querySelector('.caixa2').innerHTML = 'Caixa' + cliques + 'Ativada';
}

function clique3() {
  var cliques = 3;

  document.querySelector('.caixa3').innerHTML = 'Caixa' + cliques + 'Ativada';
}

function clique4() {
  var cliques = 4;

  document.querySelector('.caixa4').innerHTML = 'Caixa' + cliques + 'Ativada';
}

function clique5() {
  var cliques = 5;

  document.querySelector('.caixa5').innerHTML = 'Caixa' + cliques + 'Ativada';
}

function clique6() {
  var cliques = 6;
  document.querySelector('.caixa6').innerHTML = 'Caixa' + cliques + 'Ativada';
}

//------------------------------------------------------

// Exercicio 11

function body2() {
  alert('Perdeu o foco!');
}

//-------------------------------------------------------

//Exercicio12

function escala() {
  var numero = document.querySelector('.num').value;
  if (numero <= 10) {
    alert(numero + '= numero insuficiente');
  }
  if (numero >= 10 && numero <= 14) {
    alert(numero + '= Bom');
  }
  if (numero > 14) {
    alert(numero + '= Muito Bom');
  }
}
//--------------------------------------------------------

//Exercicio 13

function aia() {
  var numero = document.querySelector('.numeris').value;
  alert('AIA' + numero);
}
//--------------------------------------------------------
//Exercicio 14

function contador() {
  var contando = 0;
  var numero = document.querySelector('.num14').value;
  while (contando < numero) {
    alert((contando += 1));
  }
}
//--------------------------------------------------------
//Exercicio 15

function altura() {
  var quantPessoas = 0;
  var qtdAlturas = [];
  var alturaF = 0;
  var alturaM = 0;
  var pessoasF = 0;
  var pessoasM = 0;

  while (quantPessoas < 15) {
    var sexo = prompt('Digite sexo da pessoa ' + (quantPessoas + 1));
    var altura = parseFloat(
      prompt('Digite a ALTURA da Pessoa ' + (totalPessoas + 1)),
    );

    if (sexo == 'F' || sexo == 'f') {
      qtdAlturas.push(altura);
      alturaF = alturaF + altura;
      console.log(alturaF);
      pessoasF++;
      console.log(pessoasF);
    } else {
      if (sexo == 'M' || sexo == 'm') {
        qtdAlturas.push(altura);
        alturaM = alturaM + altura;
        console.log(alturaM);
        pessoasM++;
        console.log(pessoasM);
      }
    }

    quantPessoas++;
  }

  function maiores() {
    var maiorAltura = Math.max.apply(null, qtdAlturas);
    var menorAltura = Math.min.apply(null, qtdAlturas);
    var mediaAlturaF = parseFloat(alturaF / pessoasF);

    document.write('A media da altura das mulheres é:' + mediaAlturaF);

    document.write('A maior altura é: ' + maiorAltura);

    document.write('A menor altura é: ' + menorAltura);

    document.write('Quantidade de homem: ' + pessoasM);
  }
}

// ----------------------------------------------------------

//Exercicio 16

function cinema() {
  var quantPessoas = 0;
  var idadeOtimo = 0;
  var contaIdadeOtimo = 0;
  var quantregular = 0;
  var contquantregular = 0;
  var quantbom = 0;

  while (quantPessoas < 15) {
    idade = parseInt(prompt('Qual sua idade:'));
    opniao = prompt('Sua opnião ao filme: ótimo - 3, bom - 2, regular - 1:');

    if (opniao == 3) {
      idadeOtimo += idade;
      contaIdadeOtimo++;
    }
    if (opniao == 1) {
      quantregular += opniao;
      contquantregular++;
    }
    if (opniao == 2) {
      quantbom += opniao;
      contquantbom++;
    }
  }

  mediaOtimo = idadeOtimo / contaIdadeOtimo;
  percentualBom = (contquantbom * 100) / 15;
  document.write(
    'Média das idades das pessoas que responderam ótimo: ' + mediOtimo,
  );
  document.write(
    'Quantidade de pessoas que responderam regular é: ' + contquantregular,
  );
  document.write(
    'Porcentagem de pessoas que responderam bom: ' + percentualBom,
  );
}

// -------------------------------------------------------------------

//Exercicio 17

function pares() {
  var numeros = 0;
  var par = 0;
  var impar = 0;

  while (numeros < 10) {
    numeris = parseInt(prompt('Informe um numero:'));
    if (numeris % 2 == 0) {
      par += numeris;
    } else {
      impar += numeris;
    }
  }
  document.write('A soma dos números pares é: ' + par);
}

//Exercicios 18

function hM() {
  quantHomem = 0;
  quantMulher = 0;
  idadeHomem = 0;
  pesoMulher = 0;

  while (idade <= 10) {
    idade = parseInt(prompt('Sua idade: '));
    peso = parseInt(prompt('Seu peso: '));
    sexo = prompt('Sexo: M ou F:');

    if (sexo == 'M') {
      quantHomem++;
      idadeHomem += idade;
    }
    if (sexo == 'F') {
      quantMulher++;
      pesoMulher += peso;
    }
  }
  mediaIdadeHomem = idadeHomem / quantHomem;
  mediaPesoMulher = pesoMulher / quantMulher;
  document.write('Total de homens: ' + quantHomem);
  document.write('Total de mulheres: ' + quantMulher);
  document.write('Média das idades dos homens: ' + mediaIdadeHomem);
  document.write('Média dos pesos das mulheres: ' + mediaPesoMulher);
}

/// Exercicio 19

function lampada() {
  var lampada = document.querySelector('.lampada').src;
  var on =
    'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
  var off =
    'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';

  if (lampada === on) {
    document.querySelector('.lampada').src = off;
  } else {
    document.querySelector('.lampada').src = on;
  }
  document.querySelector('.lampada').addEventListener('click');
}

//----------------------------------------------------------------------------------

//Exercicio 20

function on() {
  var on =
    'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
  document.querySelector('.lampada2').src = on;
}

function off() {
  var off =
    'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
  document.querySelector('.lampada2').src = off;
}

//----------------------------------------------------------------------------

//Exercicio 21

function namis() {
  var nome = document.querySelector('.namis').value;
  var sobre = document.querySelector('.sobrenamis').value;
  alert(nome + ' ' + ' ' + sobre);
}

//-----------------------------------------------------------------------------

//Exercicio 22

function cpf() {
  var cpf = document.querySelector('.cpf').value;
  var cpfmodificado = cpf.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})/,
    '$1.$2.$3-$4',
  );
  document.querySelector('.cpfescrito').innerHTML = cpfmodificado;
}
