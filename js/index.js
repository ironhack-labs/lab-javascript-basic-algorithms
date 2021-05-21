console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Thais"

console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Pedro"

console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}   else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}   else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1

let driversLetters = ''

for (let i = 0 ; i < hacker1.length; i += 1) {
    if (i - 1 < hacker1.length){
        driversLetters += hacker1[i] + ' '
    } else {
        driversLetters += hacker1[i]
    } 
}

console.log(driversLetters.toUpperCase());

//3.2

let contrario = '';

for (let i = hacker2.length - 1; i>= 0; i -= 1) { // reparar que o hacker.length tem que ser -1 porque tem 5 caracteres mas o js entende o 0 como primeiro caractere, então o index máximo é 4
    contrario += hacker2[i]
}

console.log(contrario);

//3.3

if (hacker1[0] < hacker2[0]) {
    console.log(`The driver's name goes first.`)
}   else if (hacker1[0] > hacker2[0]) {
    console.log(`Yo, the navigator goes first definitely.`);
}   else {
    console.log(`What?! You both have the same name?`)
}

// Bonus 1

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non tortor in velit luctus faucibus eu aliquam est. Nunc sodales id dui vehicula lacinia. In vel consectetur nibh. Integer id sapien blandit arcu dignissim eleifend eu blandit elit. Nullam a est et justo vestibulum interdum vel eu arcu. Mauris et pulvinar justo. Vestibulum et est id elit porttitor dapibus. Nunc at pellentesque nisi. \n Donec maximus scelerisque mi, id convallis urna vulputate id. Aenean dignissim purus justo, nec placerat purus mollis non. Nam egestas faucibus lorem eget euismod. Vestibulum at mollis lectus. Maecenas congue luctus augue, iaculis convallis lectus egestas eu. Aenean vitae neque nec justo vulputate sagittis. Nullam venenatis vel justo id auctor. Sed in tortor nunc. Proin mattis eros ac ligula tempor ornare. Nunc elementum ornare ultrices. \n et et et "

// ? arrumar paragrafos, pq o terceiro nao ta indo

function WordCount(str) { 
    return str.split(" ").length;
  }
  console.log("The paragraph has", WordCount(paragraph), "words."); // Sempre colocar vírgula , entre diferentes coisas que vão ser retornadas no console.log ("string", variable, "string") exemplo.


  let count = (paragraph.match(/et/g) || []).length; // ? deixar em funcoes que aprendemos ate agora
  console.log("The paragraph has", count, "'et' words");

  // Bonus 2

let phraseToCheck = 'race car'

let palindromeCheck = '';

for (let i = phraseToCheck.length - 1; i>= 0; i -= 1) { // reparar que o hacker.length tem que ser -1 porque tem 5 caracteres mas o js entende o 0 como primeiro caractere, então o index máximo é 4
    palindromeCheck += phraseToCheck[i]
}

if (phraseToCheck === palindromeCheck) { // ? esta faltando tirar os espacos do meio da string, senao todos estao dando not palindrome
    console.log('Palindrome phrase')
}   else {
    console.log('Phrase chosen is not palindrome.')
}
