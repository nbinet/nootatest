//Exercice 1

var data = require('../src/transcript.json');
var button = document.getElementById('button1');

button.addEventListener('click', searchWord);

function searchWord() {
    for (i = 0; i < 3; i++) {
        var time = document.getElementById('time' + i).value;
            for (let j = 0; j < data.length; j++) {
            if (data[j].start < time && data[j].end > time) {
                var word = document.getElementById('word' + i);
                word.innerHTML = data[j].Mot;
            }
        }
    }
}

//************************************* */

for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++){
        if (data[i].start > data[j].start) {
            let memo = data[i];
            data[i] = data[j];
            data[j] = memo;
        }
    }
}

let answer = "";

data.forEach(element => {
    answer = answer + element.Mot + " ";
});

document.getElementById('answer').innerHTML = answer;

//************************************* */

var tabutton = document.getElementById('button2');
tabutton.addEventListener('click', addTable);

function addTable() {
    let tab = document.getElementById('tab2');
    tab.insertAdjacentHTML('afterbegin', '<tr><th scope="col">word</th><th scope="col">start</th><th scope="col">stop</th></tr>');
    for (i = 0; i < data.length; i++) {
        tab.insertAdjacentHTML("beforeend", '<tr><th>' + data[i].Mot + '</th><th>' + data[i].start + '</th><th>' + data[i].end + '</th></tr>');
    }
}

//Exercice 2

let nb = document.getElementById('textzone');
nb.addEventListener('keyup', countCharacters, false);

function countCharacters() {
    var result = document.getElementById('textzone').value.length;
    var counter = document.getElementById('counter');
    counter.innerHTML = result.toString();
}