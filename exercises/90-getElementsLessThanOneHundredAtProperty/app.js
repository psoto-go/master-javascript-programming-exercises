// Write your function here
function getElementsLessThan100AtProperty(obj, key){
    var copia = []
    for(var i in obj.key){
        if(i < 100){
            copia.push(obj.key[i])
        }
    }
    return copia;
}
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]