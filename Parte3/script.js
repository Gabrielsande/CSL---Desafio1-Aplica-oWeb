//11. Contagem de 1 a N
var num= prompt("Digite um número :");
for (var i = 1; i <= num; i++) {
    document.getElementById("contagem").innerHTML += i + " ";
}

//12. Somatório de 1 a N
var num = prompt("Digite um número para calcular o somatório:");
var soma = 0;

for (var i = 1; i <= num; i++) {
    soma += i;
}
document.getElementById("soma").innerHTML = "A soma de 1 a " + num + " é " + soma + ".";

//13. Tabuada
var num = prompt("Digite um número para ver a tabuada:");
for (var i = 1; i <= 10; i++) { 
    var resultado = num * i;
    document.getElementById("tabuada").innerHTML += num + " x " + i + " = " + resultado + "<br>";
}

//14. Fatorial
var num = prompt("Digite um número inteiro para calcular o fatorial:");
var fatorial = 1;
num = parseInt(num); // Garantindo que o número seja inteiro
for (var i = num; i > 1; i--) {
    fatorial *= i;
    document.getElementById("calculo").innerHTML = "O fatorial de " + num + " é " + fatorial + ".";
}


//15. Fibonacci
var numFibonacci = parseInt(prompt("informe um número para calcular a sequência de Fibonacci: "));
var a = 1, b = 1, fib;
for (var i = 1; i < numFibonacci; i++) {
    if (i == 1) {
        document.getElementById('Fibonacci').innerHTML += `${a} `;
    } else if (i == 1) {
        document.getElementById('Fibonacci').innerHTML += `${b} `;
    } else {
        fib = a + b;
        document.getElementById('Fibonacci').innerHTML += `${fib} `;
        a = b;
        b = fib;
    }
}
