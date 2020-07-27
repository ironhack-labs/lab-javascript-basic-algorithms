// Iteration 1: Names and Input
let hacker1 = "Alex";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Malcolm";
console.log(`The navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " " +  "characters.");
} else if (hacker2.length > hacker1.length){
    console.log("It seems that the navigator has a longer name with " + hacker2.length + " " + "characters.");
} else{
    console.log("WoW, they both have equal names with " + hacker1.length + " " + "characters.");
}

// Iteration 3: Loops

let  result = "";
for(i = 0 ; i< hacker1.length ; i++){
    result += `${hacker1[i]} `
}
console.log(result.toUpperCase());

let nameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReversed += hacker2[i];
}
console.log(nameReversed);


//googled "javascript lexicographic compare" , solution copied from Stackoverflow.
if (hacker1.localeCompare(hacker2) === -1) { 
  console.log(' The drivers name goes first.'); 
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

//Bonus 1

let lorem = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id leo quis arcu fermentum ornare. Proin tristique, purus vel rhoncus interdum, dui odio egestas ipsum, scelerisque elementum augue leo vitae diam. Curabitur pharetra iaculis ex, ut luctus enim euismod eu. In rhoncus sem non dictum pharetra. Aenean a eros vitae sem luctus hendrerit. Integer at urna vitae dolor sollicitudin tincidunt a a enim. Nam hendrerit dignissim diam at elementum. Quisque feugiat tincidunt ultrices. Suspendisse vitae rhoncus tortor. Mauris dignissim commodo pellentesque. Quisque in nunc quam. Sed non dapibus est. Phasellus nulla mi, auctor at sollicitudin eu, egestas vel neque. Nullam dignissim ex arcu, non laoreet nisi pharetra non."
console.log(lorem.split(' ').length);

//Bonus 1 B
let occurence = "et";
console.log(occurence.split("et").length - 1);