// Write your function here
function addToFrontOfNew(input, num){
    var a = input.slice();
    a.unshift(num);
    return a;
}