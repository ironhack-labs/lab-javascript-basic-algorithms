console.log("I'm ready!");
//Iteration 1: Names and Input
//1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "John"
//1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Zach";
//1.4 Print "The navigator's name is YYYY".
console.log(`The driver's name is ${hacker1}`);
//1.2 Print "The driver's name is XXXX"
console.log(`The navigator's name is ${hacker2}`);

//The driver has the longest name, it has XX characters. or
//It seems that the navigator has the longest name, it has XX characters. or
//Wow, you both have equally long names, XX characters!

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
//Iteration 3: Loops
//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let result = "";
for (let i = 0; i < hacker1.length; i++) {
    result = result + hacker1[i].toUpperCase() + " ";
}
console.log(result.trim());

//3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".
let result2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    result2 = result2 + hacker2[i];
}
console.log(result2);
//3.3 Depending on the lexicographic order of the strings, print:
let hacker1LowerCase = hacker1.toLowerCase();
let hacker2LowerCase = hacker2.toLowerCase();


if (hacker1LowerCase > hacker2LowerCase) {
    console.log("The driver's name goes first.")
}

else if (hacker1LowerCase < hacker2LowerCase) {
    console.log("Yo, the navigator goes first definitely.");
}

else {
    console.log("What?! You both have the same name");
}

//Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non tellus nisl. Mauris quis tincidunt diam, ac condimentum risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam varius, velit rhoncus faucibus fringilla, ipsum erat aliquet justo, sit amet facilisis sapien nibh ac magna. Nam iaculis et erat in lacinia. Etiam a risus eu elit porttitor aliquet. Vestibulum pellentesque nunc massa, sed tincidunt velit aliquet eget.Cras luctus ultrices quam, id vulputate nulla sodales a. Mauris sed velit metus. Cras dignissim malesuada mi, vel lacinia ligula aliquet in. Morbi auctor enim eget maximus dictum. Pellentesque quis sem massa. Mauris nec nulla condimentum, condimentum nisi sed, vulputate justo. In vel mi et mi blandit semper. Fusce vehicula tortor et quam interdum, ut finibus neque scelerisque. Integer orci quam, viverra quis mauris pretium, eleifend malesuada augue. Sed ornare justo id enim condimentum eleifend. Vivamus sit amet ligula in libero scelerisque dictum ultricies eget libero. Curabitur mollis iaculis diam, dignissim aliquam purus. Phasellus maximus dictum nibh.Nulla fermentum ligula et blandit fermentum. Vestibulum pulvinar semper iaculis. Etiam ut ex porttitor, ullamcorper ligula sit amet, sollicitudin purus. Maecenas tristique in ipsum non malesuada. Nunc efficitur nisl sed sapien commodo eleifend. Proin euismod porta tellus a congue. Phasellus feugiat lorem at est finibus, a rutrum diam feugiat. Nullam malesuada porttitor mauris, ut maximus purus interdum id. Maecenas in lacinia tellus. Nunc neque tortor, accumsan eget accumsan sit amet, dapibus a turpis. Quisque gravida rhoncus vulputate.";

let myText = longText.split('');
console.log(myText.length);

let myEt = longText.split("et");
console.log(myEt.length);
