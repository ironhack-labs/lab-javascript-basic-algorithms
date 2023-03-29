// Iteration 1: Names and Input
const hacker1 = "Scott";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Panthari";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1Lenght = hacker1.length;
let hacker2Lenght = hacker2.length;

if(hacker1.length > hacker2Lenght){
  console.log(`The driver has the longest name, it has ${hacker1Lenght} characters.`);
} else if(hacker1.length < hacker2Lenght) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Lenght} characters.`);
} else if(hacker1.length === hacker2Lenght){
  console.log(`Wow, you both have equally long names, ${hacker1Lenght} characters!`);
} else {
  console.log('ERROR');
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let driver = hacker1;
let driverName = "";
for(let i=0; i< driver.length; i++){
  driverName += `${driver[i]} `;
}

console.log(driverName.toUpperCase());


// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ"
let navigator = hacker2;
let navigatorName = "";

for(let j=navigator.length-1; j>=0 ; j--){
  navigatorName += navigator[j];
}

console.log(navigatorName)

// 3.3 Depending on the lexicographic order of the strings, print: 

let compareName = driver.localeCompare(navigator);

if(compareName === -1){
    console.log("The driver's name goes first.");
  } else if(compareName === 1){
    console.log("Yo, the navigator goes first, definitely.");
  }else {
    console.log("What?! You both have the same name?");
  }


//   Bonus Time!

// Bonus 1:
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum diam porttitor magna iaculis efficitur. Pellentesque euismod imperdiet urna vel eleifend. Suspendisse potenti. Quisque viverra eros in metus commodo, non volutpat tortor sodales. Suspendisse quis urna vel nulla ultricies tempus auctor quis orci. Nam auctor laoreet tempor. Etiam ipsum orci, tincidunt eget pharetra ac, porttitor nec nibh. Nam mauris ex, convallis eget dui vel, lacinia lobortis magna.

Aenean aliquam lorem ac sem dapibus consequat. Donec sagittis ut elit eget pulvinar. Nulla lobortis, tellus eleifend pellentesque gravida, nibh libero egestas lacus, eu laoreet nisi ex eu lacus. Nullam tempor, mauris mollis luctus luctus, diam tortor pellentesque dolor, quis porttitor magna eros et ex. Vestibulum ipsum nisi, sodales eu nibh in, lobortis efficitur urna. Suspendisse pharetra finibus tortor, a viverra elit faucibus in. In hac habitasse platea dictumst. Sed accumsan varius ante, rutrum aliquet sapien viverra ut. Nunc a nulla eu enim finibus congue. Integer molestie, tortor eget viverra viverra, nisl sem pretium eros, nec ultrices ipsum ligula a tellus. Nunc vitae elementum lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis mollis vestibulum feugiat. Etiam at varius leo. Suspendisse purus erat, lobortis sed elit quis, imperdiet consequat lacus. Suspendisse id justo libero.

Donec pellentesque quis massa id tincidunt. Aenean gravida, turpis vitae vehicula bibendum, lorem orci finibus dolor, ut porta metus eros ac justo. Aliquam porttitor velit quis nunc molestie congue. Curabitur ullamcorper finibus magna, vel aliquam urna vestibulum vel. Nulla in consequat massa. Aliquam erat volutpat. Nunc et venenatis massa. Vivamus ut tincidunt felis. Aenean vel pulvinar enim. Etiam vitae justo orci. Donec nec efficitur turpis. Vestibulum lobortis est sed nulla sollicitudin pulvinar. Pellentesque quis placerat ipsum. Nulla quis eros sed magna laoreet consectetur ac ac lorem. Maecenas mattis massa nec felis tincidunt, in ullamcorper diam eleifend. Vestibulum et finibus massa.`


// Make your program count the number of words in the string.
const words = longText.split(' ');
const countText = words.length;
console.log(countText);

// Make your program count the number of times the Latin word et appears.
let countEt = 0;

for(let t=0 ; t<words.length; t++){
    if(words[t] === "et"){
        countEt++;
    }
}

console.log(countEt);





