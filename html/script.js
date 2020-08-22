document.getElementById('psswd').oninput = compare;
document.getElementById('psswd2').oninput = compare;
function compare(){
var first = document.getElementById('psswd2').value;
var second = document.getElementById('psswd').value;
if (first == second){ 
        alert ('first and second are equal!');
} else { alert ('first and second are not equal!');
}
}
