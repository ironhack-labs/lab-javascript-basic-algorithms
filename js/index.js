console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Manuel';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Myrian';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  var a = hacker1.length
  console.log(`The driver has the longest name, it has ${a} characters.`)
}
else if (hacker2.length > hacker1.length) {
  var b = hacker2.length
  console.log(`It seems the navigator has the longest name, it has ${b} characters.`)
}else {
  console.log('Wow, you both have equally long names, '+ hacker1.length + ' characters!')
}
// Iteration 3: Loops

let x = '';

for(let i = 0; i < hacker1.length; i++) {
  x = x + hacker1[i].toUpperCase()+ ' '
}

console.log(x);

let y = "";

for(let i = hacker2.length -1 ; i >= 0; i--) {
  y += hacker2[i]
}

console.log(y);

let z = [hacker1, hacker2];

z.sort();

if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`)
} else if (z[0] === hacker1){
  console.log(`The driver's name goes first.`)
} else if (z[0] === hacker2){
  console.log(`Yo, the navigator's goes first definitely.`) 
}


// Bonus 1


let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque lorem mauris, fringilla porta tellus lobortis ut. Suspendisse volutpat sagittis fringilla. Ut fermentum odio diam. Donec sem lorem, vehicula vel condimentum eu, posuere vitae nunc. Phasellus dignissim auctor sem et euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor erat id ipsum condimentum, id tincidunt ligula auctor. Vivamus sollicitudin ultricies leo eget finibus. Nunc sodales ipsum ut leo ullamcorper posuere. Cras in nunc sit amet tortor rutrum tincidunt non venenatis neque. Pellentesque rhoncus, nibh in commodo pharetra, justo neque scelerisque ante, vel finibus ipsum nunc commodo purus. Mauris fringilla purus id dui auctor, eu congue lacus scelerisque. Donec quis sem ac nunc sodales volutpat eu a sapien. Integer leo velit, auctor vitae enim id, pulvinar ullamcorper nulla. Maecenas pellentesque orci eget velit congue vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum fringilla erat sit amet tempor varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras fermentum, lacus ut semper eleifend, mauris ante placerat lectus, eget consectetur metus ex vel tortor. Ut hendrerit eu mauris eget dapibus. Maecenas fermentum blandit nisl, vitae laoreet ante feugiat in. Sed lacinia posuere euismod. Etiam posuere arcu vel ante vulputate semper. Vestibulum purus orci, rhoncus ullamcorper pretium et, imperdiet id ex. Curabitur consectetur augue velit, eu elementum dolor feugiat imperdiet. Proin sodales a sapien sit amet iaculis. Sed eleifend dignissim ultricies. Donec laoreet viverra sollicitudin. Proin sodales maximus urna, a suscipit purus interdum non. Ut purus orci, viverra placerat condimentum nec, iaculis cursus diam. Mauris maximus laoreet ante, eu facilisis magna accumsan ac. In suscipit felis at suscipit molestie. Sed imperdiet magna aliquam quam maximus, tempus tristique erat egestas. Maecenas congue dignissim nisl, eu dictum eros ultricies non. Suspendisse potenti.'

let stringCount = loremIpsum.split(' ');

console.log(stringCount.length);

let etCount = 0;

for (let i = 0; i < stringCount.length; i++) {
  if (stringCount[i] === 'et') {
etCount ++
  }
}

console.log(etCount);