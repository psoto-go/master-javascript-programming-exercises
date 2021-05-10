// Write your function here
function keep(obj, key){
    var copia = {}
    for(var i in obj.key){
        if(i > key){
            copia.push(obj.key[i])
        }
    }
    return copia;
}