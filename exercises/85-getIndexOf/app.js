// Write your function here
function getIndexOf(char, string){
    for(var i = 0;i<string.length;i++){
        if(char == i){
            return i+1;
            break
        }
    }
}