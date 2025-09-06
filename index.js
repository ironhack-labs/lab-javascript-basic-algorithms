// Iteration 1: Names and Input
const hacker1 = "Keanu Riechel";
//hacker 1 longer name //const hacker1 = "Keanu De Pringales";
const hacker2 = "Glen La Grange";
//Equal names//const hacker2 = "Glen Kriechel"
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const char1 = hacker1.length;
const char2 = hacker2.length;
const ifEqual = (char1 + char2) / 2;

if (char1 > char2) {
  console.log(`The driver has the longest name, it has ${char1} characters.`);
} else if (char1 < char2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${char2} characters.`
  );
} else if (char1 === char2) {
  console.log(`Wow, you both have equally long names, ${ifEqual} characters!`);
} else {
  console.log("There is a name missing!");
}

// Iteration 3: Loops
let charHacker1 = "";
for (let i = 0; i <= hacker1.length - 1; i++) {
  const char = hacker1[i];
  charHacker1 += char + " ";
}

console.log(charHacker1.toUpperCase());

let charHacker2 = "";
for ( let i = hacker2.length - 1; i >= 0; i--) {
  const char = hacker2[i];
  charHacker2 += char;
}

console.log(charHacker2);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Undefined");
}

//Bonus 1:
// word count not done
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor sit amet leo sit amet aliquet. Maecenas ac rhoncus massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam arcu tellus, maximus ut placerat eget, accumsan sed ipsum. Phasellus vulputate urna cursus, vulputate lectus in, egestas erat. Duis et neque lorem. Duis in nulla ut justo condimentum venenatis. Maecenas pretium lorem augue, a molestie augue blandit id. Morbi tempus sodales quam ut auctor. Mauris non ligula nec felis pretium sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ultrices elit accumsan condimentum condimentum. Nulla ut sem purus. Vivamus fermentum mi sapien, vel consectetur diam lobortis sed. Maecenas ac tristique sem. Cras quam metus, auctor et molestie scelerisque, convallis quis erat. Donec consectetur in velit at dapibus. Morbi sed hendrerit risus, non euismod lectus. Nulla facilisi. Donec rutrum augue sed dapibus volutpat. Nunc non dui sit amet est sollicitudin ullamcorper blandit eget nibh. Aenean sapien lorem, tristique sed orci non, egestas ornare turpis. Aliquam eget velit lorem. Vivamus faucibus orci erat, sed posuere libero suscipit ac. Nulla vitae odio nec sapien tempor tincidunt. Suspendisse sit amet rutrum mi. Quisque in felis eget mi porttitor accumsan. Nunc vel elementum justo, facilisis bibendum arcu. Donec quis blandit ligula. Pellentesque laoreet tellus mi, at placerat metus ultricies finibus. Pellentesque sodales sodales consequat. Fusce accumsan dui ut libero finibus, ut finibus eros varius. Nulla ultrices iaculis fringilla. Sed iaculis volutpat pharetra. Ut vehicula odio vitae orci dictum malesuada. Morbi tristique ex id diam suscipit volutpat. Aliquam et eros eu est efficitur sollicitudin eu eu ipsum. Vestibulum sodales, eros euismod dapibus tincidunt, augue lorem rhoncus erat, id aliquet urna quam in eros. Suspendisse pharetra ultrices neque eget dictum. Sed volutpat aliquet mi eget luctus. Aenean egestas tellus vitae mauris blandit laoreet.`;


//"et" string count
let word = 0;

for(let i=0; i<longText.length; i++) {
    const char= longText[i] + longText [i+1];

    if (char === "et"){
        word++;
    }
}

console.log(word);
