// Iteration 1: Names and Input
let hacker1 = "Jane"
let hacker2 = "Tarzan"
console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

// 2.1

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
} else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

// 3.1
let spacedName = ""
for (let i = 0; i <= hacker1.length; i++){
    spacedName += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(spacedName)


// 3.2
let reversedName = ""
for (let i = hacker2.length - 1 ; i > -1; i--){
    reversedName += hacker2[i]
}
console.log(reversedName);


// 3.3
// I can't resolve this exercise using a loop, so I did it using a conditional - hope this is fine !


if (hacker1 < hacker2){
    console.log("The driver's name goes first");
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
}

// BONUS #1 //

let latinString ="Integer nibh ex, fringilla nec velit a, blandit feugiat neque. Suspendisse sit amet vestibulum turpis. Pellentesque mollis pretium varius. Sed placerat a turpis vel consectetur. Pellentesque ultricies elit non aliquam porttitor. Morbi ut dolor nunc. Nullam pharetra diam vitae ex dictum sodales. Sed lorem massa, efficitur non pulvinar ut, dictum a metus. Nunc placerat tellus mi. Maecenas suscipit ultricies dolor. Integer et erat magna. Quisque felis est, ultrices non mauris vitae, volutpat vehicula urna. Morbi euismod rhoncus porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dapibus enim in felis dapibus vulputate. Sed sit amet elit a eros tincidunt pharetra sed eget velit. Nulla ut congue mi. Nulla nec mollis leo, eu cursus leo. Nulla bibendum nibh sed sollicitudin finibus. Pellentesque aliquet efficitur urna ac pharetra. Donec eu fringilla nulla, non accumsan libero. Donec nec risus vitae purus dapibus sollicitudin ut in nisl. Suspendisse congue rhoncus massa non lobortis. Sed sem diam, ultrices volutpat ultricies in, placerat at elit. Pellentesque accumsan, diam ac vulputate suscipit, elit mi congue nisi, eget malesuada est nulla id nibh. Praesent non dapibus purus. Vivamus quis nibh sed lectus vulputate mollis. Aenean ut accumsan erat. Etiam nec sem vitae nunc laoreet feugiat vel at nunc. Donec dui neque, facilisis quis interdum quis, tincidunt a turpis. Nam eleifend sit amet elit pretium porttitor. Nunc feugiat diam enim, vitae pellentesque urna iaculis eu. Maecenas convallis aliquam quam, eu rhoncus dolor. Donec sit amet tortor quis purus bibendum lobortis non sit amet augue. Praesent interdum metus metus, at fringilla mauris cursus volutpat. Cras tincidunt nisl ex, non suscipit sem porta vitae. Pellentesque lacinia metus id ex dictum, vel sollicitudin enim mattis. Cras eget venenatis nunc. Sed eu consectetur ex. Aliquam odio orci, volutpat imperdiet ultricies ut, tempus non velit. Sed viverra tortor non sapien tempus tincidunt. Curabitur ornare porttitor interdum. Integer blandit purus enim, nec scelerisque nibh tristique vitae."

let wordsAllParagraphs = latinString.split(' ').length 

console.log(wordsAllParagraphs)

let numberOfEt = latinString.split(" et ").length - 1;

console.log(numberOfEt)

// BONUS #2 //

let phraseToCheck = " "

for (let i = hacker2.length - 1 ; i > -1; i--){
    reversedName += hacker2[i]
}
console.log(reversedName);