var element = document.getElementById('resultado1');



var value;
let params = new URLSearchParams(document.location.search.substring(1));

var mode = params.get("select"); 
var value = params.get("value");
var x = value;

function f(x) {
    result = 3 * x - 7;      
    return result; 
}
function g(x) {
    result = 7 * x - 9;
    return result; 
}
if(mode == "f") {
    f(x);
    element.appendChild(document.createTextNode(' '+ result));
    
}
else if(mode == "g") {
    g(x);
    element.appendChild(document.createTextNode(' '+ result));
    
}
else if(mode == "fog") {
    f(g(x));
    element.appendChild(document.createTextNode(' '+ result));
    
}
else if(mode == "gof") {
    g(f(x));
    element.appendChild(document.createTextNode(' '+ result));
    
}
else {
    //do nothing
}




history.replaceState({}, null, "/");

