let hacker1 = 'Luiz';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Andrea';
console.log(`The navigator's name is ${hacker2}`)


if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let newHacker1 = ''

for (i = 0; i < hacker1.length; i++) {
    newHacker1 += hacker1[i].toUpperCase() + ' ';   
}

console.log(newHacker1)

let reverseHacker1 = ''

for (let j= hacker1.length-1; j >= 0; j--) {
  reverseHacker1 += hacker1[j]
}

console.log(reverseHacker1)

if (hacker1.localeCompare(hacker2)=== -1) {
  console.log("The driver's name goes first");
}

else if (hacker1.localeCompare(hacker2)=== 1) {
  console.log("Yo, the navigator goes first definitely.");
}

else {
  console.log("What?! You both have the same name?");
}

/* Bonus 1 */
let countOfWords = 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec mollis lacus. Nulla viverra, ligula suscipit tincidunt vehicula, nisl augue sodales leo, vel consequat neque nisl sodales enim. Duis efficitur libero nisi, eu blandit erat tincidunt id. Curabitur vitae ante eget nisi sollicitudin gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi efficitur mauris nec odio porta placerat. Donec et sapien finibus, pellentesque massa eu, vehicula ante. Etiam lobortis mi nisl, et fringilla augue volutpat sit amet. Nullam sit amet efficitur felis, commodo rhoncus ligula.

Nulla scelerisque lectus eget tortor lacinia, sit amet dignissim magna tincidunt. Cras id tempor libero. Donec mattis id nisl a fringilla. Fusce facilisis dolor vel erat ultrices volutpat. Mauris eget nunc eu massa fringilla porta. Duis elit urna, aliquet vestibulum est non, rhoncus eleifend sem. Donec cursus scelerisque scelerisque. Phasellus luctus accumsan mi id imperdiet. Pellentesque turpis nibh, rutrum sit amet efficitur et, viverra a justo. Nulla malesuada ornare orci, eget porttitor massa auctor vel. Vestibulum odio dolor, pulvinar at aliquam eu, ultrices id felis. Nunc ac magna quam.

Ut suscipit nisi eu nunc ultricies efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vitae dui porta, maximus quam et, mattis enim. Nullam ultrices enim in enim ornare lacinia hendrerit vitae risus. Fusce justo enim, pretium et ultricies sit amet, finibus eu orci. Praesent sit amet odio consectetur, rhoncus tortor quis, egestas nibh. Mauris varius, est nec laoreet tincidunt, felis neque sollicitudin risus, vel laoreet massa diam quis lorem. Aenean aliquam tincidunt ligula, sed volutpat ipsum pellentesque at. Ut venenatis molestie tristique. Fusce fermentum in leo in scelerisque. Donec risus mauris, elementum sed ultricies auctor, tincidunt ut magna. Curabitur nec metus massa. Phasellus aliquet libero eu tristique lacinia.`

for (let i=0; i < loremIpsum.length; i++ ) {
    if (loremIpsum[i] === ' ') {
        countOfWords += 1;
    }
 }

 console.log (countOfWords);
