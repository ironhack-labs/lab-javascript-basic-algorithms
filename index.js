// Iteration 1: Names and Input
const hacker1 = "John";
const hacker2 = "Emil";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, is has ${hacker2.length} characters`)
}if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let driverUpper = "";

for (let i = 0; i < hacker1.length; i++){
    if (i !== hacker1.length -1){
        driverUpper += hacker1[i].toUpperCase() + "";
    } else {
        driverUpper += hacker1[i].toUpperCase();
    }
};
console.log(driverUpper);


let driverReverse = "";

for (let i = hacker1.length-1; i >= 0; i--){
    driverReverse += hacker1[i];
};


console.log(driverReverse);


let hackers = [hacker1, hacker2];
console.log(hackers);
hackers.sort();
console.log(hackers);


if(hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
} else if (hackers[0] === hacker1) {
    console.log("The driver’s name goes first.");
} else if (hackers[0] === hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
};




// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie purus mi, quis convallis risus efficitur suscipit. Donec dictum dictum dapibus. Aenean non urna nec nibh pulvinar facilisis. Nam non leo nec nisi dictum cursus. Vestibulum ultricies mauris in porttitor placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a sodales tellus, ac dictum ex. Nam vel justo egestas, ultrices ipsum vitae, malesuada nulla. Cras eleifend odio bibendum, tempor lacus sit amet, blandit ante. Nam magna eros, faucibus vitae euismod vestibulum, euismod vel risus. Vestibulum fermentum odio maximus, fringilla erat non, rhoncus arcu. Nullam rutrum pretium fringilla. In ligula nisl, rutrum in fermentum ut, egestas eget leo. Maecenas orci sapien, lacinia id blandit eu, aliquam et felis. Aenean nec leo malesuada, aliquam nisi in, fermentum nisl. Nulla odio risus, tristique sed maximus eget, viverra nec eros. Etiam et ipsum augue. Cras lacus mauris, fringilla eget sagittis a, sollicitudin vitae est. Sed tincidunt egestas pharetra. Nullam dictum turpis sed volutpat feugiat. Etiam mattis, erat sagittis consectetur rhoncus, quam massa egestas lorem, non placerat nunc dui eget ante. Donec ultricies metus neque, non blandit ligula aliquet quis. Fusce et viverra lacus. Aenean sit amet convallis tortor, vel commodo erat. Mauris vulputate feugiat risus, sed viverra tellus auctor quis. Nunc hendrerit ante leo, eu dapibus massa posuere non. Curabitur vel augue lacus. Donec mattis velit non dignissim posuere. Phasellus placerat nisl in dolor eleifend, a fringilla erat convallis. In et volutpat ipsum. Vivamus et ornare libero. Suspendisse dictum ex odio, et ac finibus lorem hendrerit at. Vivamus at fringilla nisi, ut placerat augue. Praesent commodo nibh ut suscipit lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut suscipit pharetra dui, eget cursus nibh iaculis sed. Nullam finibus nunc vitae suscipit iaculis. Aenean tincidunt odio lorem, nec rhoncus et dui semper nec."

let counter = 1;
for (let i = 0; i < longText.length; i++ ){

if (longText[i] === " " ){
    counter++
}

};
console.log(counter);

let etCounter = 0;

for (let i = 0; i < longText.length; i++){

    if(longText.slice(i, i+4) === " et "){

        i += 3;
        etCounter++ ;
    }
};
console.log(etCounter);



// Bonus 3

let phraseToCheck = "Amor, Roma"
let phraseReverse = "";

function check(phrase){
  
  
  
  for (let i = phrase.length -1; i >= 0; i--){
    phraseReverse += phrase[i]
    
  }
  return phraseReverse.toLowerCase()
};

let result = check(phraseToCheck);

console.log(result)






