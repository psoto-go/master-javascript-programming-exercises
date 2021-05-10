// Write your function here
function areValidCredentials(nom, pass){
    if(nom.length > 3 && pass.length > 8){
        return true;
    }else 
        return false;
}