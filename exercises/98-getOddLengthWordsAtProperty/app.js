// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    var copia = []
    for(var i in obj.key){
        if(i.length % 2 != 0){
            copia.push(obj.key[i])
        }
    }
    return copia;
}
