// Write your function here
function getAverageOfElementsAtProperty(obj, key){
    var suma = 0;
    if(obj.key.length > 1){
    for(var i=0 ; i<= obj.key.length -1;i++){
       suma += obj.key[i]
    }
    return suma/obj.key.length;
}else return 0
}