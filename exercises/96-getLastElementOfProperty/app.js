// Write your function here
function getLastElementOfProperty(obj, key){
    var copia = 0
    if(obj.key == ''){
        return undefined;
    }else
     return obj.key[obj.key.length -1];
}