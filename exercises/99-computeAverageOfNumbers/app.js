// Write your function here
function computeAverageOfNumbers(input){
    var copia = []
    var suma = 0;
    if(input.length == 0){
        return 0;
    }else{
        for(let i =0; i < input.length; i++){
        suma += input[i];
        }
    return suma / input.length;}
}