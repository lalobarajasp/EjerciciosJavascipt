let numerosCaso1 = [1,22,5,17,10,5,40,5];
let numerosCaso2 = [7,41,5,7,10,13,2];
let numerosCaso3 = [1,22,5,14,24,31,27,15,105];

let repetidos = function (nums){
    for (let i = 0; i < nums.length; i++) {
        let cont = 0;
        for (let j = 0; j < nums.length; j++){
            if (nums[i]==nums[j]){
                cont ++;
            }//if
        }
        if (cont!=1)
            console.log(`El número ${nums[i]} se repite ${cont} veces`);
    } // for i

}//repetidos

console.log(repetidos(numerosCaso1));
console.log(repetidos(numerosCaso2));
