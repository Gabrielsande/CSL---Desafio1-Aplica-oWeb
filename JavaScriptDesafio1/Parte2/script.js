//6. Verificador de Par ou Ímpar
var numero = prompt("Digite um número:");
if (numero % 2 === 0) {
    document.getElementById("par-ímpar").innerHTML = numero + " é par.";
}
else {
    document.getElementById("par-ímpar").innerHTML = numero + " é ímpar.";
}

//7. Comparando dois valores
var valor1 = prompt("Digite o primeiro valor:");    
var valor2 = prompt("Digite o segundo valor:");
if (valor1 > valor2) {
    document.getElementById("comparando").innerHTML = "O maior valor é " + valor1 + ".";
}
else if (valor2 > valor1) {
    document.getElementById("comparando").innerHTML = "O maior valor é " + valor2 + ".";
}
else {
    document.getElementById("comparando").innerHTML = "Os valores são iguais.";
}

//8. Situação Escolar
var nota = prompt("Digite a sua nota:(0 a 100)");

if (nota >= 70 && nota <= 100) {
    document.getElementById("situação-escolar").innerHTML = "Aprovado";
}
else if (nota >= 50 && nota < 70) {
    document.getElementById("situação-escolar").innerHTML = "Recuperação";
}
else if (nota >= 0 && nota < 50) {
    document.getElementById("situação-escolar").innerHTML = "Reprovado";
}
else {
    document.getElementById("situação-escolar").innerHTML = "Nota inválida.";
}

//9. Ano Bissexto
var ano = prompt("Digite um ano:");
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    document.getElementById("ano").innerHTML = ano + " é um ano bissexto.";
}
else {
    document.getElementById("ano").innerHTML = ano + " não é um ano bissexto.";
}

//10. Menu de Operações Matemáticas
var num1 = prompt("Digite o primeiro número:");
var num2 = prompt("Digite o segundo número:");
var operacao = prompt("Escolha a operação (+, -, *, /):");
switch (operacao) {
    case '+':
        var resultado = parseFloat(num1) + parseFloat(num2);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        break;
    case '-':
        var resultado = parseFloat(num1) - parseFloat(num2);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        break;
    case '*':
        var resultado = parseFloat(num1) * parseFloat(num2);
        break;
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    case '/':
        if (num2 != 0) {
            var resultado = parseFloat(num1) / parseFloat(num2);
            document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
        } else {
            var resultado = "Divisão por zero não é permitida.";
            document.getElementById("resultado").innerHTML = resultado;
        }
        break;
    default:
        var resultado = "Operação inválida.";
        document.getElementById("resultado").innerHTML = resultado;
        break;
}