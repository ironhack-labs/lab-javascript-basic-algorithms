
let driversName = 'hacker1';
console.log(`"The driver's name is ${driversName}"`);

let navigatorsName = 'hacker2';
console.log(`"The navigator's name is ${navigatorsName}"`);

if(driversName.length > navigatorsName.length){
  console.log(`"The driver has the longest name, it has ${driversName.length} characters"`);
} else if (driversName.length < navigatorsName.length){
  console.log(`"It seems that the navigator has the longest name, it has ${navigatorsName.length} characters"`);
} else{
 console.log( `"Wow, you both have equally long names, ${driversName.length} characters!"`);
}


for (let i = 0; i < driversName.length; i++) {
  alert(driversName.charAt(i));
}

if (driversName < navigatorsName){
  console.log("The driver's name goes first.")
}else if (navigatorsName < driversName){
  console.log("Yo, the navigator goes first definitely.")
}else {
   console.log("What?! You both have the same name?")
}

//bonus 1
let ipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

let wordCount = ipsum.match(/(\w+)/g).length;
alert(wordCount);

let charAppear =(ipsum.match(/is/g) || []).length;

//bonus 2

let phraseToCheck = "ufo tofu";

    let length = phraseToCheck.length;
    let mid = Math.floor(length/2);

    for ( let i = 0; i < mid; i++) {
        if (phraseToCheck[i] === phraseToCheck[length - 1 - i]) {
            console.log("it's a Palindrome.")
        }
    }
    