// Se definen las variables.
let numeros = [-1, 3, 4, 2, 6];
let menor = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor){
        menor = numeros[i];
    };
    
}
console.log(menor);