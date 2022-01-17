// Names and inputs

console.log("I'm ready!")

let hacker1 = 'Pedro';
console.log(`The drivers name is ${hacker1}`);

let hacker2 = 'Hollie';
console.log(`The navigators name is ${hacker2}`)

// Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
  console.log(`Wow, you both have equally long names,${hacker1.length} characters!`);
}

// Loops 3.1

let printHacker = '';

for (i = 0; i < hacker1.length; i++) {
  printHacker += hacker1.charAt(i) + ' ';
}

console.log(printHacker.toUpperCase());


// Loops 3.2

let printHackerBackwards = '';

for (i = hacker1.length; i > -1; i--) {
  printHackerBackwards += hacker1.charAt(i);
}

console.log(printHackerBackwards);

// Loops 3.3

if ((hacker1.localeCompare(hacker2)) == -1) {
  console.log("The driver's name goes first.")
} else if ((hacker1.localeCompare(hacker2)) == 1 ) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius, eros at auctor tempor, mi orci accumsan tellus, vitae laoreet erat nibh quis orci. Vestibulum porta aliquet dignissim. Vivamus quis magna scelerisque, auctor ipsum finibus, porta magna. Donec euismod in est ac accumsan. Donec interdum diam ac nulla vehicula auctor. Vestibulum eget mi facilisis, auctor tellus sed, facilisis risus. Pellentesque scelerisque tortor libero, non pharetra nisl hendrerit vitae. Donec quis ipsum erat. Sed feugiat, nunc ullamcorper dignissim commodo, ex justo convallis leo, at aliquam sem metus sed justo. Fusce at lobortis purus. Aliquam fringilla placerat hendrerit. Aliquam erat volutpat. Donec tempor nisl nec dapibus pretium. Suspendisse at nunc turpis. Donec quam odio, pulvinar ut neque quis, tincidunt bibendum ante. Suspendisse rutrum, dolor sed iaculis hendrerit, quam elit efficitur ipsum, vitae scelerisque mauris turpis vitae magna. Mauris urna ex, accumsan eu varius eget, suscipit sit amet lacus. Aenean maximus laoreet augue, et varius lacus tempus eget. Ut vestibulum arcu nulla, vitae lacinia turpis venenatis at. Sed ut convallis enim. Nam vestibulum tellus at arcu dignissim vulputate. Sed in mi iaculis, pulvinar quam quis, gravida nulla. Fusce orci nibh, faucibus eget congue ac, ultricies ac sem. Sed id dolor lectus. Aliquam ut quam sem. Sed tincidunt diam non tortor scelerisque, vehicula volutpat nulla auctor. In volutpat hendrerit imperdiet. Mauris dictum semper egestas. Nunc eu ullamcorper sem, a volutpat quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas convallis mattis condimentum. Nam in sapien ornare, gravida dolor posuere, euismod mauris. Nullam suscipit suscipit tortor non sollicitudin.'

console.log(loremIpsum.length);

// Count et

let checkEt = ' et ';

let etCount = loremIpsum.split(checkEt).length - 1;
console.log(etCount);

// Bonus 2 - Still to do.