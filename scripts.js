let contador = 0;
let contador2 = 0;
let contador3 = 0;

for (let i = 1; i <= 20; i++) {
    let numero = parseFloat(prompt("digite o " + i + " numero:"));

   
    if (numero >= 0 && numero <= 100) {
        contador++;
    }else if(numero >= 101 && numero <= 200){
contador2++;
} else if (numero > 200) {
    contador3++;
    }
    }



alert("quantidade de numeros entre 0 e 100: " + contador);
alert("quantidade de numeros entre 101 e 200: " + contador2);
alert("quantidade de numeros maiores que 200: " + contador3);
