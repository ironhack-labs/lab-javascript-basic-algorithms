// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Manel";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
let driverCapital = '';
for (i=0; i<hacker1.length; i++) {
  driverCapital += hacker1[i].toUpperCase()+ " ";
}
console.log(driverCapital);

function reverse(hacker2){
    return hacker2.split("").reverse().join("");
}
console.log (reverse(hacker2));


let lexicographicalOrder = (hacker1.localeCompare(hacker2));
if (lexicographicalOrder === 0) {
  console.log("What?! You both have the same name?")
} else if (lexicographicalOrder < 0) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("The driver's name goes first.")
}
// Bonus 1
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit tellus, pulvinar at ultricies non, rhoncus sed diam. Praesent rutrum rhoncus erat, vitae volutpat quam. Donec sit amet dapibus eros, at posuere neque. Maecenas pellentesque risus a turpis tristique, bibendum efficitur odio mollis. Sed lorem eros, placerat eget sapien et, vestibulum semper diam. In pharetra mauris diam, interdum finibus nisl pretium sit amet. Nam dictum mauris nec ante pellentesque auctor. Quisque at dolor velit. Sed scelerisque pellentesque arcu, eget mattis erat mollis facilisis. Praesent sollicitudin, turpis eu accumsan posuere, risus eros consequat lectus, nec placerat lacus massa nec quam. Quisque pellentesque ultricies fringilla. Sed aliquet aliquam metus, lobortis viverra erat tempus a. Quisque dapibus tempus posuere. Nunc quam nunc, tempor vel metus eu, efficitur volutpat diam. Proin luctus, est vitae consectetur lacinia, velit libero porttitor quam, vitae luctus augue ipsum non urna. Aenean ligula diam, bibendum sit amet tellus non, volutpat pretium nulla. Suspendisse rutrum nulla massa, at blandit metus feugiat eget. Quisque tincidunt mi quam, sit amet maximus dui placerat ut. Duis scelerisque mi odio, at bibendum leo consectetur a. Phasellus interdum, felis ut pretium commodo, urna felis congue neque, sed sagittis lorem magna a magna. Mauris in metus efficitur, faucibus mauris sed, dictum lacus. Vivamus ultricies enim eu massa laoreet rhoncus. Suspendisse convallis leo finibus, suscipit metus non, lobortis lacus. Quisque semper justo et dignissim porta. Nulla at sem ac quam consequat pharetra ut a nibh. Aenean bibendum rhoncus tortor, et finibus massa ullamcorper quis. Suspendisse mattis ex nulla, sed posuere nibh pretium eget. Donec tempor posuere dui, non tincidunt risus pellentesque a. In dapibus dignissim magna, non porta est luctus sed. Nam eleifend porta mollis. Pellentesque erat nisl, rutrum vitae cursus quis, pulvinar a mauris. Phasellus convallis libero ut arcu dapibus pulvinar. Aliquam id tortor a ligula molestie elementum. Praesent congue odio id viverra porta. Praesent aliquet magna est, quis vehicula enim volutpat id. Etiam at urna odio. Proin id libero ultrices, lacinia nibh vitae, elementum erat. Proin et sem in dolor placerat viverra. Pellentesque in dolor pharetra, ultricies lorem id, aliquet lacus.";

// Make your program count the number of words in the string
let wordsArray = loremIpsum.split(" ");
console.log(wordsArray.length);

// Make your program count the number of times the latin word et appears
let counter = 0
for (i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i] === "et") {
    counter++;
  }
} console.log(counter);
