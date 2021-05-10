// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    var copia = []
    for(var i in obj.key){
        if(i === 10){
            copia.push(obj.key[i])
        }
    }
    return copia;
}