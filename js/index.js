// Iteration 1: Names and Input

let hacker1 = 'Rodolfo'
console.log('The driver´s name is ', hacker1)
let hacker2 = 'Rodolfo'
console.log('The navigator´s name is ', hacker2)

if (hacker1.length>hacker2.length){
  console.log('The driver has the longest name, it has' ,hacker1.length, 'characters')
} else if (hacker1.length<hacker2.length){
  coonsole.log('It seems that the navigator has the longest name, it has' ,hacker2.length, 'characters')
} else {
  console.log('Wow, you both have equally long names, ' ,hacker1.length, 'characters!')
}
// Iteration 2: Conditionals
//2.
if (hacker1.length>hacker2.length){
  console.log('The driver has the longest name, it has' ,hacker1.length, 'characters')
} else if (hacker1.length<hacker2.length){
  console.log('It seems that the navigator has the longest name, it has' ,hacker2.length, 'characters')
} else {
  console.log('Wow, you both have equally long names, ' ,hacker1.length, 'characters!')
}

// Iteration 3: Loops
//3.1
let  space = ' '; 

console.log(hacker1.split('').join(space).toUpperCase());

//3.2
console.log(hacker1.split('').reverse().join(''))

//3.3

if(hacker1.localeCompare(hacker2) == -1){
  console.log('The driver´s name goes first.')
} else if(hacker1.localeCompare(hacker2) == 1){
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?')
}

//BONUS 1
const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales augue sit amet justo imperdiet, a gravida metus pretium. Praesent mauris est, eleifend sed ipsum a, mollis posuere turpis. Phasellus convallis, magna et venenatis condimentum, erat ipsum mollis sem, ac commodo massa nulla vel neque. Nullam aliquet justo ut posuere elementum. Duis bibendum sollicitudin est vel pharetra. Sed fringilla fermentum sapien, nec luctus est ullamcorper ut. Pellentesque porttitor arcu a consequat mattis. Nunc mollis tortor et dolor sollicitudin porta. Vivamus eget tortor et massa posuere porttitor.Curabitur viverra justo ligula, sed lacinia urna molestie in. Pellentesque imperdiet lacus eget mi congue blandit. Nulla commodo tempus ante, eu rhoncus orci varius ac. Integer vehicula nulla ac dui porttitor, eu gravida dui aliquet. Phasellus tincidunt quis sem id rhoncus. Nam faucibus scelerisque facilisis. Duis a magna at mi tempus finibus. Vestibulum iaculis eget mi a volutpat. Fusce blandit lorem ut rutrum ultrices. Quisque fringilla eros id augue pretium, sit amet gravida augue convallis. Quisque tempor velit in tellus facilisis, ut lobortis augue posuere. Vestibulum iaculis malesuada purus, id vestibulum odio tempus ut. Nam lacinia, ligula ut mollis iaculis, sem urna malesuada nibh, et sagittis urna lacus id erat. Fusce interdum arcu ut vehicula gravida.Proin sapien eros, tristique vitae libero vel, elementum fermentum mauris. Proin consectetur eget mi eu egestas. Praesent auctor eget nibh nec laoreet. Donec venenatis tristique erat, vitae ornare lectus iaculis eget. Maecenas commodo purus neque, ut suscipit magna posuere eget. Sed posuere pulvinar metus ut rhoncus. In varius urna sit amet nunc consectetur, posuere vehicula magna sagittis. Sed nec ex lectus. Proin maximus ornare erat, quis ultrices velit placerat vel. Nullam vel metus vitae libero interdum efficitur et ut eros. Aliquam sem tortor, facilisis eu augue ac, aliquam imperdiet arcu."
let loremNumWords = 1

console.log(loremIpsumText)
for(let i=0;i<loremIpsumText.length;i++){
  if(loremIpsumText.charAt(i) == ' '){
    loremNumWords++
  }
}
loremNumWords += 2
console.log(loremNumWords)
let etCount = 0
let posicion = loremIpsumText.indexOf(" et ")
while ( posicion != -1 ) {
   etCount++;
   posicion = loremIpsumText.indexOf(" et ",posicion+1);
}
console.log(etCount)

//BONUS 2


function palindrome(str){
    let re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '')

    let len = str.length

    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]){
            return false;
        }
    return true;
    }
}
let phraseToCheck = "Was it a car or a cat I saw?"

if(palindrome(phraseToCheck) == true){
  console.log('The phrase is indeed a Palindrome')
} else {
  console.log('The phrase is NOT a Palindrome')
}