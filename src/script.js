//Exercice 1

//########################

//Exercice 2

let nb = document.getElementById('textzone');
nb.addEventListener('keyup', countCharacters, false);

function countCharacters() {
    var result = document.getElementById('textzone').value.length;
    var counter = document.getElementById('counter');
    counter.innerHTML = result.toString();
}