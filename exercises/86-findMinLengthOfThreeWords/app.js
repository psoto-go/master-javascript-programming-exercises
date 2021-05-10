// Write your function here
function findMinLengthOfThreeWords(string1, string2, string3){
    if(string1.length < string2.length){
        if(string1.length < string3.length){
            return string1.length
        }else{
            return string3.length;
        }
    }else
        if(string2.length < string3.length){
            return string2.length;
        }else
            return string3.length
}