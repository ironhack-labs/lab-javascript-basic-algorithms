console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = 'Frank';
console.log(`the driver's name is ${hacker1}`);
let hacker2 = 'Alpaca';
console.log(`the navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;
if (driverLength > navigatorLength){
  console.log(`The driver has the longest name, it has ${driverLength} characters`);
}
else if (driverLength < navigatorLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters`);
}
else{
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
};
// Iteration 3: Loops
let driverUpperCased = hacker1.toUpperCase();
let driverUpperCasedSeparated = "";
for (let i = 0;i < driverUpperCased.length; i++){
    driverUpperCasedSeparated += driverUpperCased[i] + " ";
 }
 console.log(driverUpperCasedSeparated);

 

 let navigatorInreverse = "";
 for (let i = hacker2.length - 1; i >= 0; i--){
     navigatorInreverse += hacker2[i];
 }

/* Tried to do it whit the unshift method because strings are arrays
it worked but it displayed different in the console.
*/
//  let navigatorInreverse2 = [];
//  for (let i = 0; i < hacker2.length; i++){
//     navigatorInreverse2.unshift(hacker2[i]);
//  }
//  console.log(navigatorInreverse2)



 if (hacker1 === hacker2){
  console.log("What?! You both have the same name?")
}   
else if (hacker1 < hacker2){
  console.log("The driver's name goes first.")
}
else {
  console.log("Yo, the navigator goes first definitely.")
}



// Another way to do it using loops (deffective)

 let whichIsLonger = "";
 for (let i = 0; i < hacker1.length; i++){
    if (hacker1 === hacker2){
      whichIsLonger = "What?! You both have the same name?"
    }   
    else if (hacker1[i] < hacker2[i]){
      whichIsLonger = "The driver's name goes first."
      break;
    }
    else if (hacker1[i] > hacker2[i]){
      whichIsLonger =  "Yo, the navigator goes first definitely."
      break;
    }

    }

    console.log(whichIsLonger)


// Bonus 1:

const parrafoAContar = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit nibh ultrices, mattis sapien ac, porta dui. Etiam rutrum vel est nec consectetur. Vivamus sed dui erat. Praesent libero ante, sodales ac diam at, semper scelerisque est. Aenean vitae blandit nibh, ut congue sem. Fusce aliquet massa arcu, et facilisis neque tempor ac. Phasellus dolor velit, malesuada at convallis eu, ullamcorper quis enim. Cras sodales iaculis nibh, quis aliquam odio auctor eget. In orci ipsum, euismod sit amet varius sed, cursus viverra sem. Sed turpis nulla, sodales a lorem quis, ultricies scelerisque arcu.Vivamus pellentesque erat nec massa dignissim maximus. Aliquam consequat nunc quis nisl lacinia, eu venenatis eros tempor. Pellentesque cursus porta semper. Suspendisse lobortis auctor tempor. Nullam lorem velit, lacinia sit amet magna sit amet, tempus laoreet risus. Mauris nec ligula vel eros ullamcorper sagittis non sit amet nisi. In id lorem fermentum, eleifend nisi sit amet, porttitor odio. Maecenas nisl felis, venenatis in massa quis, volutpat fermentum neque. Mauris a sagittis erat, ac commodo justo. Ut posuere sem a nibh pellentesque, at sagittis nibh vulputate. Nunc quis consectetur tortor, vitae dictum magna. Nulla sed massa faucibus mauris fringilla malesuada nec in lorem. Fusce leo tortor, volutpat a leo ac, accumsan aliquet eros. Donec semper augue nec tincidunt volutpat. Suspendisse porttitor, erat vitae ultricies feugiat, nunc tortor aliquet arcu, a aliquet sapien dolor non tellus."

let counter = 0;
for (i = 0; i < parrafoAContar.length; i++){
    if (parrafoAContar[i] === " "){
      counter += 1; 
    }
  }
  console.log(counter)

// Bonus 2:
//Since strings are immutable we have to create another string in order to delete the spaces.
let phraseToCheck = "race car"
let modified = ""
for (i = 0; i < phraseToCheck.length; i++){
  if (phraseToCheck[i] !== " "){
     modified += phraseToCheck[i];
  }
}

let modifiedInReverse = "";
 for (let i = modified.length - 1; i >= 0; i--){
     modifiedInReverse += modified[i];
 }

if (modified === modifiedInReverse){
  console.log("It's a Palindrome")
}
else{
  console.log("It's not a Palindrome")
}




         


