// Iteration 1: Names and Input
let hacker1 = "Jeanette";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Claudia';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
 if (hacker1.length >= hacker2.length) {
   console.log("The driver has the longest name, it has 8 characters. ")
 } if (hacker1.length <= hacker2.length) {
   console.log("It seems that the navigator has the longest name, it has 8 characters.")
 } else if (hacker1.length === hacker2.length) 
   console.log("Wow, you both have equally long names, 8 characters!");
 


// Iteration 3: Loops

let withSpaces = hacker1.split("").join(' ').toUpperCase();
console.log (withSpaces);

let reverseName = hacker2.split("").reverse().join(' ');
console.log(reverseName);



const arr = [hacker1.toLowerCase(), hacker2.toLowerCase()];
arr.sort();

if (hacker2[0] > hacker1[0]) {
  console.log(`The driver's name goes first.\n`)
} else if (hacker2[0] === hacker1[0]) {
  console.log(`What?! You both have the same name?\n`)
} else {
  console.log(`Yo, the navigator goes first definitely.\n`)
}

/*Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan augue vel ipsum hendrerit, vel efficitur justo eleifend. Nam vel maximus nisi. Phasellus venenatis malesuada dolor, vel convallis tellus ultricies ut. Proin ut placerat dolor. Donec et nisl sed sem ultrices aliquam dictum eu orci. Sed eget massa eu ex aliquet hendrerit eget ut purus. Nulla in vestibulum massa. Cras porttitor urna id tempus pharetra. Vestibulum quis dapibus mi, ac efficitur est. Maecenas malesuada elementum mattis. Vestibulum consequat pulvinar neque ac faucibus.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vulputate ex id sem pretium, ac hendrerit ante posuere. Sed et tempor dui. Praesent at porttitor ipsum, eget convallis massa. Vivamus porta risus et sollicitudin sollicitudin. Nunc suscipit ligula eget convallis rhoncus. Mauris augue purus, faucibus in sapien vitae, condimentum fringilla orci. In commodo mi at placerat sodales. Vivamus justo mauris, iaculis ac consectetur a, eleifend vitae neque. Integer nisi dui, consectetur vitae gravida et, molestie quis dolor. Nullam sit amet fermentum nulla, ut tincidunt felis. Phasellus condimentum tincidunt dolor, a pulvinar magna lacinia eu. Fusce nec ultrices ante. Pellentesque vitae porttitor eros. Curabitur consectetur, mauris eleifend consequat mattis, ante nulla tempor mauris, id efficitur ante mauris sed mi. Vivamus ac massa viverra magna pharetra rhoncus ac quis leo.Fusce at semper risus, et lacinia libero. Vivamus sed malesuada mi, in euismod mi. In hac habitasse platea dictumst. Curabitur porttitor, diam eget molestie mollis, libero nisi consectetur metus, eget convallis quam felis vel libero. Donec eleifend, mauris vel volutpat mollis, erat ex sagittis massa, sit amet pretium nunc sapien semper metus. Nullam ut purus magna. Etiam pellentesque pellentesque arcu, non feugiat lacus interdum vitae. Proin porta velit ut purus commodo laoreet lacinia nec risus. Sed nisl urna, ultrices vel quam quis, congue porta nibh. Vivamus mattis nisi non justo ullamcorper, eu aliquet ante consectetur. Duis laoreet, nulla fringilla convallis laoreet, ante nulla dictum odio, quis euismod est risus in odio."

console.log(longText.length) //2212 - with spaces
console.log(longText.indexOf('et')) //24
console.log(longText.split(" ").length) //323 - without spaces 