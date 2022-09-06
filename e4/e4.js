let numeros =[1, 2, 5, 14, 24, 31, 50, 105];

console.log(desordenar(numeros));

function desordenar(nums){
    //let numsd = new Array();
    let numsd = [];
    for (let i = 0, j=nums.length; i < nums.length; i++, j--) {
        if ((i%2)==0){
            nums[j] = nums[i];
        } else {
            numsd[i] = nums[i];
        }
        
    }// fori
    return numsd;
}// desordenar