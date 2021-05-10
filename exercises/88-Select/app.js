// Write your function here
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
function select(array, obj){
    var copia = {};
    for(var i  in array){
        for(var j in obj){
            if(array[i] == j){
                copia[j] = obj[j];
            }
        }
    }
    return copia;
}

