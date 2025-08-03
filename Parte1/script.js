//PARTE 1 - JavaScript Básico
// 1. Boas-vindas ao JavaScript
var nome = prompt("Digite o seu nome:");
var mensagem = "Olá, " + nome + "! Bem-vindo ao seu primeiro programa em JavaScript.";

document.getElementById("boas-vindas").innerHTML = mensagem;

//2. Cálculo da área de um retângulo
var largura = prompt("Digite a largura do retângulo (em metros):");
var altura = prompt("Digite a altura do retângulo (em metros):");

largura = parseFloat(largura);
altura = parseFloat(altura);

var area = largura * altura;

document.getElementById("resultado").innerHTML = "A área do retângulo de " + largura + " m de largura por " + altura + " m de altura é " + area + " m².";

//3. Conversão de graus Celsius para Fahrenheit
var celsius = prompt("Digite a temperatura em graus Celsius:");

celsius = parseFloat(celsius);

var fahrenheit = (celsius * 9 / 5) + 32;

document.getElementById("Cálculo").innerHTML = celsius + "°C equivalem a " + fahrenheit.toFixed(1) + "°F.";

//4. Cálculo da média de três notas
var nota1 = prompt("Digite a primeira nota:");
var nota2 = prompt("Digite a segunda nota:");
var nota3 = prompt("Digite a terceira nota:");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

var media = (nota1 + nota2 + nota3) / 3;

document.getElementById("media").innerHTML = "Sua média foi de " + media.toFixed(1) + " pontos.";

//5. Cálculo do IMC (Índice de Massa Corporal)
var peso = prompt("Digite o seu peso em kg:");
var altura = prompt("Digite a sua altura em metros:");

peso = parseFloat(peso);
altura = parseFloat(altura);

var imc = peso / (altura ** 2);

imc = imc.toFixed(2);


document.getElementById("massa").innerHTML = "Seu IMC é de " + imc + " (considerando peso " + peso + " kg e altura " + altura + " m).";
