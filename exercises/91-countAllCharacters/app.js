// Write your function here
function countAllCharacters(key){
    var count= {};
    for(var i = 0; i < key.length; i++){
        if (count[key[i]] === undefined){
            count[key[i]] = 0;
        } 
        count[key[i]]++;
    }
    return count;
}
var output = countAllCharacters('');
console.log(output);