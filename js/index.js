// Iteration 1: Names and Input

let hacker1 = "Marc";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Wil";
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if (hacker2.length > hacker1.length) {
    console.log(`It seems, that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }
    else {
        console.log(`Wow, you both have equally long names`);
    };

// Iteration 3.1: Loops

let capital = hacker1.toUpperCase();
console.log(`Convert to uppercase: ${capital.split().join(' ')}`);

// Iteration 3.2: Loops
// via https://stackabuse.com/how-to-reverse-a-string-in-javascript/
// One possibility
console.log('Reversed string 1: ' +[...hacker1].reverse().join(''));
// Another possibility
let reversed = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
    reversed += hacker1[i];
  }
console.log('Reversed string 2: ' + reversed);

// Iteration 3.3: Loops
if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1

const paragraph = "Phasellus luctus orci vitae tristique blandit. Maecenas euismod lectus at feugiat sagittis. Donec at arcu odio. Suspendisse lacus orci, blandit quis auctor ac, eleifend quis mauris. Curabitur dignissim malesuada lorem nec viverra. Cras sodales ligula id porta facilisis. Ut a enim facilisis, ullamcorper ligula id, tincidunt libero. Maecenas ac leo tellus. Vestibulum sagittis nunc ut dignissim feugiat. Donec tincidunt odio nec justo scelerisque vestibulum. Quisque in gravida quam. Duis sagittis est vel diam tristique, at finibus justo tincidunt. Proin id pellentesque nibh. Vivamus lobortis, arcu nec ultricies tempor, mauris nulla volutpat augue, ac cursus quam metus id leo. Aenean eu nisi in sapien ornare eleifend eu non metus. Nunc ac enim lectus. Maecenas tincidunt sodales diam et tristique. Proin finibus dapibus sagittis. Maecenas posuere molestie volutpat. Vestibulum in purus molestie, interdum purus quis, dignissim nisi. Aenean tincidunt mollis dui, non euismod risus laoreet sit amet. Nam et augue et ipsum tristique porta. Vestibulum eu gravida lectus. Fusce accumsan dolor at eros tincidunt, ac dictum ex auctor. Nullam suscipit neque vel imperdiet lobortis. Integer imperdiet turpis purus. Proin malesuada sed dolor a convallis. Suspendisse blandit lobortis magna quis blandit. Quisque ex nulla, tristique sit amet augue eget, accumsan egestas nibh. Aenean nec purus eget dui vehicula congue. Vivamus faucibus, orci et rhoncus porta, nibh tellus mollis nisl, ut ultrices massa nunc nec nunc. In vitae rhoncus augue. In sagittis gravida mauris, sit amet viverra magna gravida vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

function NumberOfWords(paragraph) {
    return paragraph.split(" ").length;
  }
  console.log(`Number of words in the string: ${NumberOfWords(paragraph)}`);
  
  console.log(`Number of times the Latin word "et" appears in the paragraph: ${paragraph.split("et").length - 1}`);
