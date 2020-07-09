console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Danny';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Rodrigo';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let newHacker = '';
for (let i = 0; i < hacker1.length; i++) {
    newHacker += hacker1[i] + ' ';
    newHacker = newHacker.toUpperCase();
}
console.log(newHacker)

let newNav = '';
for (let i = hacker2.length -1; i >= 0; i--) {
    newNav += hacker2[i];
}
console.log(newNav);

/*if (hacker1.localeCompare(hacker2) = ) {
    console.log(`The driver's name goes first.`)
} else if (hacker2.localeCompare(hacker1)) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
} */

switch(hacker1.localeCompare(hacker2)) {
    case -1:
        console.log(`The driver's name goes first.`);
        break;
    case 0:
        console.log(`What?! You both have the same name?`);
        break;
    case 1:
        console.log(`Yo, the navigator goes first definitely.`);
        break;
}

let loremImpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla fringilla vestibulum. Nulla sollicitudin pretium nibh, ut dapibus nulla placerat vel. Cras tincidunt feugiat augue, et tempor nisl suscipit sed. Maecenas ornare vel quam id placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla id massa lacinia, fermentum arcu a, ultrices dolor. Aenean a laoreet eros. Praesent est magna, vestibulum a condimentum at, tristique id tellus. In luctus metus arcu. Aliquam erat volutpat. Duis ultricies eget purus ac porttitor. Morbi tempor scelerisque orci, eget suscipit odio blandit et. Donec eu velit mauris. Nulla volutpat sapien vitae nibh lacinia, vitae tristique orci dignissim. Nulla eleifend lacinia volutpat.

Phasellus tempus interdum sollicitudin. Aliquam rhoncus mollis ultricies. Vestibulum orci tellus, accumsan et condimentum at, aliquam sed urna. Suspendisse fermentum auctor turpis. Vivamus ac felis sed metus dignissim finibus non nec massa. Pellentesque gravida mi ut lacus dictum, vitae eleifend orci consequat. Sed venenatis malesuada gravida. Integer pellentesque diam dolor. Cras sed nisi sed urna maximus scelerisque sit amet sed risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur pulvinar sagittis nisi, a ornare mauris tempus quis. Curabitur accumsan et nisl sed gravida. Nam non eros in diam efficitur suscipit. Nam sed ex imperdiet, porta nisl eget, mollis odio.

Mauris tristique convallis purus. Nulla facilisi. Curabitur et dignissim erat. Etiam vitae feugiat massa, id eleifend eros. Suspendisse finibus diam magna, et ullamcorper enim efficitur in. Maecenas a ex scelerisque, interdum nisi at, pharetra dui. Nulla varius purus in turpis tempor hendrerit. Fusce lectus velit, commodo a ornare in, blandit ut sapien. Praesent et dui vestibulum lorem fringilla posuere in sit amet nisi. Maecenas sed velit metus. Donec ultrices, urna nec vehicula tempor, est nibh dapibus lorem, ac efficitur felis lorem ac purus.`;
let counter = 0;
let et_counter = 0;
for (let j = 0; j < loremImpsum.length; j++) {
    if (loremImpsum[j] === ' ') {
        counter++;
    }
    if (j === loremImpsum.length -1) {
        counter++;
    }
}
console.log(counter);