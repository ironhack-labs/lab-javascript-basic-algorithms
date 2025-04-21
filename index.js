// Iteration 1: Names and Input
let hacker1 = "Eva";
let hacker2 = "Noemi";

console.log("The driver's name is" + " " + hacker1);
console.log("The navigator's name is" + " " + hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has" + hacker1.length + "characters")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}  else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}



// Iteration 3: Loops
let dName = " ";

for(let i=0; i < hacker1.length; i++) {
        dName += hacker1[i] + " ";
       
  }
  console.log(dName.toUpperCase());

let reversedName = " ";

for(let i = hacker2.length -1; i >= 0; i--) {
    reversedName += hacker2[i]
}
console.log(reversedName);


const lexicOrder = "ABCDEFGHIJKLMNOPQRSTUWXYZ"

if(lexicOrder.indexOf(hacker1[0]) < lexicOrder.indexOf(hacker2[0])) {
console.log("The driver's name goes first");
 } else if(lexicOrder.indexOf(hacker1[0]) > lexicOrder.indexOf(hacker2[0])) {
    console.log("Yo, the navigator goes first, definitely")
  } else {
    console.log("What?! You both have the same name?")
  }

//Bonus Time!
//Bonus 1

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus nibh, egestas vitae eros eu, porttitor consectetur lacus. Phasellus ut interdum ex. Phasellus sit amet libero et libero venenatis efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lacus augue, consectetur in faucibus ac, varius eget neque. Donec bibendum ex nec ante lobortis rhoncus. Sed ante felis, accumsan ut sagittis ac, tristique cursus dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae imperdiet nibh. Maecenas pulvinar facilisis tempor. Mauris aliquam dolor non velit consequat, eu dignissim dolor iaculis. Aliquam lacinia mollis magna vitae semper. Aenean aliquam pharetra pharetra. Suspendisse in egestas neque, in facilisis tellus. Nunc velit tellus, bibendum ut magna et, ullamcorper ullamcorper nibh. Morbi ut aliquet dui, vel auctor libero. Aenean consequat imperdiet magna semper viverra. Morbi rutrum tincidunt fringilla. Cras non ipsum faucibus, cursus ex at, pretium erat. Ut in orci lacus.In semper lacus lectus, sit amet facilisis tortor tempus at. Aenean nibh mauris, cursus sed elementum posuere, accumsan nec metus. Sed et libero nunc. Vestibulum sed sapien sed lacus porta bibendum eget id orci. Donec vel erat orci. Duis placerat scelerisque sapien. Etiam sodales, ipsum elementum hendrerit vulputate, tellus ante dignissim velit, feugiat tempor nunc quam eu est. Mauris sollicitudin id tortor eu suscipit. Etiam at velit vitae sapien ultricies hendrerit.'

let wordArr = longText.split(" ");


console.log(wordArr.length - 1);

//Bonus 2
