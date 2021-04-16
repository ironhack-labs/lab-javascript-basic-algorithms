// Iteración 1: nombres y entrada

let hacker1 = 'Paloma'
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = 'Eléa'
console.log(`"The driver's name is ${hacker2}"`);


//Iteración 2: condicionales

if (hacker1.length > hacker2.length) {
  console.log('Es más largo');
}
 else if (hacker1.length < hacker2.length) {
    console.log('No es más largo');
  }
else { console.log('Son iguales');
}

hacker1 = hacker1[0].toUpperCase() + ' ' + hacker1[1].toUpperCase() + ' ' + hacker1[2].toUpperCase() + ' ' + hacker1[3].toUpperCase() + ' ' + hacker1[4].toUpperCase() + ' ' + hacker1[5].toUpperCase();

console.log(hacker1);

hacker2 = hacker2[3] + hacker2[2] + hacker2[1] + hacker2[0];

console.log(hacker2);



//Bonus 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sollicitudin augue. Aenean hendrerit molestie ultrices. Fusce vitae ultricies eros, et posuere sapien. Nulla rhoncus sagittis faucibus. Pellentesque ultrices velit at quam interdum, id placerat ipsum luctus. Donec sit amet mi pellentesque tortor bibendum convallis at venenatis nunc. Proin pharetra fringilla dolor, a interdum nisl facilisis quis. Nam convallis libero tempus lobortis porta. Fusce sollicitudin ex vel justo mollis iaculis. Aenean libero ante, auctor a vulputate a, volutpat at dolor. Sed ac porta sem.

Suspendisse potenti. Nulla facilisi. Nunc blandit nunc vel nunc cursus aliquet. Curabitur malesuada elit sapien, ac accumsan purus aliquet a. Nam eu tortor risus. Aenean ut dictum nulla. Curabitur viverra mi vitae massa ornare, ac blandit ante rutrum. Nunc fermentum lacinia tempor. Donec id metus auctor, semper nunc id, sollicitudin ipsum.

Proin eget interdum quam. Nullam venenatis nibh quis orci blandit facilisis. Cras vehicula dui id eros convallis iaculis. Donec dolor massa, viverra eget porttitor nec, consequat in magna. In luctus dui nec volutpat pulvinar. Pellentesque luctus turpis quis justo accumsan congue. Phasellus nec velit ullamcorper velit sodales fermentum sit amet vitae elit. Quisque condimentum augue sed lectus pulvinar faucibus. In quis tortor id eros tincidunt pretium. Mauris scelerisque eu est non rhoncus. Nunc vel velit id augue commodo tempus in a elit. Integer imperdiet cursus ligula, ut iaculis augue cursus eu. Aliquam vel nisl a ex laoreet iaculis. Quisque dictum convallis massa, a malesuada lorem accumsan et. Proin consectetur ligula in mauris finibus sollicitudin. Nulla eleifend, dolor ut luctus laoreet, sem erat consectetur mi, in rutrum libero metus egestas nunc.`;


let words = loremIpsum.split(' ');
console.log(words);


let element = 'et';
let count = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === element || words[i] === element +'.') {
        count++;
    }
}
console.log(count);



//Bonus 2

let phrase = 'put it up'

for (let i = 0, j = phrase.length-1; i < j; i++, j--) {
    if (phrase[i] == phrase[j]) {
      
      console.log('si es un palindromo')
      break;
    } 
    else {
      console.log('no es un palindromo')
    }
}

