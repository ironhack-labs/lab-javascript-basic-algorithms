// Names and Input
//1-4

let hacker1 = 'adriana';
console.log("The driver's name is " + hacker1);
let hacker2 = '';
hacker2 = window.prompt('Dome tu nombre')
console.log('The navigator name is ' + hacker2);

//Conditionals
//5

if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
    } else if (hacker2.length > hacker1.length) {
      console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
    } else {
      console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!');
    };

// Lorem ipsum generator
// Names and Input

//6-8
console.log(hacker1.split('').join(' ').toUpperCase());
hacker2 = hacker2.split('');
hacker2 = hacker2.reverse('');
console.log(hacker2.join(''));

//8 
let flag = 0;
for (let i = 0; i < hacker1.length; i++) {
  if (hacker1 === hacker2) {
  console.log('What?! You both got the same name?');
  flag = 1;
}
  if ((hacker1[i] > hacker2[i]) && flag === 0) {
    console.log("The driver's name goes first");
    break;
  } else if ((hacker1[i] > hacker2[i]) && flag === 0){
    console.log("Yo, the navigator goes first definitely");
    break;
  }
}

//9
  let palabra = window.prompt('Escribe una palabra');
  let palabra2 = palabra.split('');
  palabra2.reverse();
  palabra2 = palabra2.join('');
  if (palabra === palabra2) {
    console.log('Es palíndrome');
  } else {
      console.log('No es palíndrome');
  }
