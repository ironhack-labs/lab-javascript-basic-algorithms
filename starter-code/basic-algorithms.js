// Names and Input
var hacker1 = 'Marcelo';

console.log("The driver's name is " + hacker1);

var hacker2 = 'Brunooo';

console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

for (var i = 0; i <= hacker1.length-1; i++) {
    console.log(hacker1[i].toUpperCase());
}

for (var y = hacker2.length-1; y >= 0; y--) {
    console.log(hacker2[y].toUpperCase());
}

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first");
} else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo, the navigator goes first definitely");
} else if (hacker1.localeCompare(hacker2) == 0) {
    console.log("What?! You both got the same name?");
}
//Conditionals
//var string = prompt("Qual a string?");
var string = 'A man, a plan, a canal, Panama!';
var checkagem = true;
var w = 0;

/* for (var w = 0; w <= string.length-1; w++) {
    if (string[w] == string[string.length-1-w]) {
        checkagem = true;
    } else {
        checkagem = false;
        break;
    }
} */

/* if (checkagem == true) {
    console.log("É um baita dum palíndrome");
} else if (checkagem == false) {
    console.log("É fake!");
} */

string = string.replace(/[^A-za-z]/g, '');
string = string.toLowerCase();
console.log(string);

while (checkagem && w <= string.length-1) {
    if (string[w] == string[string.length-1-w]) {
        checkagem = true;
    } else {
        checkagem = false;
    }
    w++
}

if (checkagem == true) {
    console.log("É um baita dum palíndrome");
} else if (checkagem == false) {
    console.log("É fake!");
}

// Lorem ipsum generator

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis ligula vel varius bibendum. Sed efficitur turpis libero, id varius elit imperdiet et. Sed facilisis tincidunt rutrum. Nullam quis nisi augue. Maecenas ac placerat felis. Donec molestie eros pharetra est feugiat finibus. Pellentesque tempor sollicitudin turpis et facilisis. Vivamus varius condimentum lorem sagittis fermentum. Donec ornare, tellus non lacinia consequat, lectus purus mollis urna, a interdum metus neque eu est. In posuere ac mi quis ultrices. Suspendisse potenti. Fusce viverra lacus nec orci porttitor hendrerit. Nunc ac neque justo. Phasellus sollicitudin, dui sit amet elementum molestie, orci enim fermentum ex, posuere bibendum orci magna quis ante. Nullam ultricies condimentum metus, nec porttitor tortor ullamcorper a. Sed vitae enim nulla. Cras aliquet purus ut arcu accumsan, lobortis pulvinar nisi iaculis. Morbi rutrum tortor ut augue maximus varius. Praesent suscipit eros nec neque faucibus accumsan sed fermentum mi. Curabitur a elit sed dolor varius fermentum ut eu ipsum. Aenean nec metus eu massa tristique iaculis. Nulla varius elementum nunc sed facilisis. Fusce fermentum ipsum ut consectetur maximus. Suspendisse id ligula accumsan, tristique odio non, auctor mauris. Nunc auctor eget tortor quis ultrices. Nam eget enim et libero lacinia mollis id eget quam. In faucibus eros nunc, a sagittis leo sollicitudin ut. Mauris convallis dignissim lectus, sit amet laoreet massa ultricies at. Pellentesque ullamcorper erat ac leo scelerisque lobortis. Vestibulum cursus ac magna vitae egestas. Sed turpis justo, ultrices non porttitor quis, posuere at nisi. Integer aliquet ante nec tellus vulputate pulvinar. Vestibulum id neque placerat, commodo erat sit amet, egestas sapien. Nunc elementum ligula quis ornare eleifend.";
var contador = 0;
var contador2 = 0;


for (var x = 0; x < lorem.length-1; x++) {
    if (lorem[x] == " ") {
        contador++;
    }
}

console.log("Número de palavras é: " + (contador + 1));



for (var x = 0; x < lorem.length-1; x++) {
    if (lorem[x-2] == " " && lorem[x-1] == "e" && lorem[x] == "t") {
        contador2++;
    }
}

console.log("Número de ets é: " + contador2);