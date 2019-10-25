// Iteration 1: Names and Input

let hacker1 = "Veronica";
let hacker2 = "Michel";

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) console.log(`The driver's name goes first`) 
else if (hacker2.length > hacker1.length) console.log(`Yo, the navigator goes first definitely`);
else console.log(`What you got the same name?`)

// Bonus Time!

let pharagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at luctus enim, et rutrum augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus nisl eros, fermentum eget magna vel, auctor iaculis urna. Integer nec feugiat velit, nec placerat augue. Fusce finibus mauris ac semper elementum. Nullam dignissim orci quis leo cursus malesuada. Aenean euismod, justo sit amet venenatis iaculis, orci odio imperdiet sem, eget lacinia dolor leo vel sapien. Ut in aliquam mauris. Integer est purus, euismod ac mattis in, volutpat eget nisi. Vivamus rhoncus sagittis lobortis.

Morbi placerat egestas tortor at euismod. In libero magna, volutpat a convallis vel, commodo sed justo. Duis nisl sapien, ornare vel felis et, blandit consequat elit. Aenean ex ligula, aliquam ac ex quis, imperdiet sollicitudin arcu. Etiam et eros leo. Maecenas non pharetra turpis. Aliquam erat volutpat. Fusce quis elit purus.

Nunc sed hendrerit diam. Duis auctor est ac erat tempor, at varius enim lobortis. Nam tincidunt consectetur lobortis. Proin sit amet neque interdum, fringilla enim ut, hendrerit tellus. Duis suscipit eros in lorem rhoncus tempus. Nunc feugiat massa faucibus pellentesque faucibus. Donec ac eros scelerisque, porttitor neque id, rutrum elit. Pellentesque in ante augue. Etiam quis nibh facilisis, scelerisque diam et, malesuada est. Sed enim est, accumsan in libero vel, mollis aliquet risus. Etiam a bibendum nunc. Quisque metus nisi, elementum tincidunt nunc sit amet, convallis convallis est. Vestibulum aliquam vestibulum est lobortis eleifend.`

// Solution words count

console.log(pharagraphs.split(' ').length)  //235

// First Intent

let count = 0;
for (let i = 0; i < pharagraphs.length; i++) {
  if(pharagraphs.includes("et")) {
    count++;
  }
}
console.log(count) // 1594

// Second Intent

console.log(pharagraphs.toLowerCase().split(' et').length) //9


// Third Intent

console.log(pharagraphs.toLowerCase().split(' et ').length) //4

// Third Intent

let numberOfEt = 0;
let newLetters = pharagraphs.toLowerCase().split(' ')
// console.log(newLetters)
for (let i = 0; i < newLetters.length; i++) {
  if (newLetters[i] == "et") {
    numberOfEt++;
  }
}
console.log(numberOfEt) //3

// Final Result

let spacedEt = pharagraphs.toLowerCase().split(' et ').length;
let commaEt = pharagraphs.toLowerCase().split(' et,').length;
let result = spacedEt + commaEt
console.log(result) //7