// Iteration 1: Names and Input

let hacker1 = "Leti";

console.log("The drivers name is " + hacker1);

let hacker2 = "Diego";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
};


// Iteration 3: Loops 3.1

let driver = '';

for (let i=0; i < hacker1.length; i++) {
   driver += hacker1[i].toUpperCase() + " ";  
}

console.log(driver);

// Iteration 3: Loops 3.2

let reverseNav = '';

for (let i=hacker2.length - 1; i >= 0; i--) {
    reverseNav += hacker2[i];
}

console.log(reverseNav);

// Iteration 3: Loops 3.3

// para saber qué nombre es más largo y así poder continuar comparando si los primeros carácteres
// son iguales y uno de ellos es más largo o nombre compuesto ie. Ana o Ana María.

let longName = 0;
if (hacker1.length >= hacker2.length) {
    longName = hacker1.length;
} else {
    longName = hacker2.length;
}

// si los nombres son completamente iguales estonces salta este if, si son diferentes los compara.

if (hacker1 != hacker2) {
    for (let i=0; i < longName; i++) {
        if (hacker1[i] > hacker2[i]) {
            console.log("Yo, the navigator goes first definitely.");
            break;
        } else if (hacker1[i] < hacker2[i]) {
            console.log("The driver's name goes first.")
            break;
        }
        if (hacker1[i] == null) {
            console.log("The driver's name goes first.")
            break;
        } else if (hacker2[i] == null) {
            console.log("Yo, the navigator goes first definitely.")
            break;
        } 
    }
} else {
    console.log("What?! You both have the same name?");
}

// BONUS 1

let text =   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui tellus, blandit quis metus non, dapibus tincidunt tortor. Aliquam at purus risus. Cras interdum luctus orci, eget eleifend urna efficitur vitae. In non lectus quam. Etiam sed consectetur risus. Mauris a odio ut lorem pharetra placerat. Praesent ullamcorper ex a purus viverra molestie eu quis metus. Aliquam euismod porta felis non suscipit. Duis pulvinar aliquet malesuada. Nullam dictum enim fermentum dui vulputate, eu auctor libero elementum. Morbi suscipit id risus vitae cursus. Cras viverra ornare tincidunt. Donec commodo quam a nulla vehicula, a iaculis purus vulputate. In et metus vitae massa viverra dignissim. Sed non viverra massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin nec tellus quis velit aliquam scelerisque et vitae odio. Maecenas ut augue sit amet ipsum efficitur ornare elementum eget diam. Curabitur posuere lorem ex, et rhoncus elit porta ac. Proin quam enim, posuere quis condimentum id, cursus faucibus est. Nam auctor metus id commodo feugiat. Nunc vitae suscipit velit. Quisque tempor nisi in libero vestibulum pharetra. Morbi faucibus, felis ut facilisis sollicitudin, leo mi hendrerit lectus, ut imperdiet ligula arcu at nunc. Mauris aliquet, dui ut tincidunt fermentum, ante lectus commodo est, non ornare libero nisi in velit. Quisque ut fringilla nisl. Duis porta urna eros, sed ullamcorper eros fringilla varius. Cras ut sollicitudin est. Vestibulum interdum justo sit amet felis eleifend iaculis. Vivamus tempus consequat enim, ac euismod lacus aliquet vel. Morbi varius luctus enim, a blandit nisi auctor vel. Curabitur vitae risus gravida, consectetur mauris et, lacinia tellus. Vivamus quis lacus mi. Pellentesque rhoncus laoreet dapibus. Duis ultrices lacus turpis, nec consectetur ex lobortis et. Vestibulum sem sapien, sodales et sodales non, efficitur nec sapien. Sed ipsum metus, dapibus a scelerisque quis, vulputate in magna. Quisque viverra augue quis sem aliquam, a venenatis enim eleifend. Donec et urna et odio aliquet pulvinar. Donec dignissim ullamcorper neque at vestibulum. Vestibulum maximus molestie tempor. Nam in rhoncus lacus.";

let splitText = text.split(" ");
let wordsNumber = splitText.length;
console.log(wordsNumber);

let wordEt = 0;

for (let i=0; i <= splitText.length; i++){
  if (splitText[i] === "et"){
    wordEt++;
  }
}
console.log(wordEt);
