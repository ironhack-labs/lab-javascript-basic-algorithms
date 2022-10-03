// Iteration 1: Names and Input

let hacker1 = "Diana";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Hugo";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let driverName = "";
for(let driver of hacker1) {

  
  driverName = driverName + driver.toUpperCase() + " ";
  
}

let driverUpperCase =driverName.substring(0, driverName.length - 1);
console.log(driverUpperCase);

let navigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorName = navigatorName + hacker2[i];
}
console.log(navigatorName);

/*
let phraseOne = "The driver's name goes first.";
let phraseTwo = "Yo, the navigator goes first definately.";
let phraseThree = "What?! You both have the same name?";

 if (phraseOne > phraseTwo && phraseOne > phraseThree && phraseTwo > phraseThree) {
    console.log(phraseOne);
    console.log(phraseTwo);
    console.log(phraseThree);
} */

/*let result1vs2 = phraseOne.localeCompare(phraseTwo);
let result1vs3 = phraseOne.localeCompare(phraseThree);
let result2vs3 = phraseTwo.localeCompare(phraseThree);

if(result1vs2 === -1 && result1vs3 === -1 && result2vs3 === -1) {
    console.log(phraseOne);
    console.log(phraseTwo);
    console.log(phraseThree);

} else if(result1vs2 === -1 && result1vs3 === -1 && result2vs3 === 1) {
    console.log(phraseOne);
    console.log(phraseThree);
    console.log(phraseTwo);
} else if (result1vs2 === 1 && result2vs3 === -1 && result1vs3 === -1) {
    console.log(phraseTwo);
    console.log(phraseOne);
    console.log(phraseThree);
} else if (result1vs2 === 1 && result2vs3 === -1 && result1vs3 === 1) {
    console.log(phraseTwo);
    console.log(phraseThree);
    console.log(phraseOne);
} else if (result1vs3 === 1 && result2vs3 === 1 && result1vs2 === -1) {
    console.log(phraseThree);
    console.log(phraseOne);
    console.log(phraseTwo);
} else {
    console.log(phraseThree);
    console.log(phraseTwo);
    console.log(phraseOne);
}
*/
if (hacker1.localeCompare(hacker2) === -1)  {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definately.");
} else {
    console.log("What?! You both have the same name?");
}


// bonus 1

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere fringilla finibus. Aliquam pretium nulla ac lacus fringilla, eget blandit lectus laoreet. Quisque mollis consequat dui, non vestibulum dui facilisis pharetra. Nunc eu bibendum lorem. Vestibulum ornare augue non lacinia tristique. Vestibulum vitae libero sit amet urna tempus faucibus sed in risus. Mauris suscipit dictum purus, in dignissim ipsum tempor eu. Cras nec orci massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nibh sodales, eleifend massa eget, pellentesque nunc."
"Curabitur fermentum mattis sem molestie malesuada. Nulla facilisi. Fusce interdum tempor posuere. Fusce nisl nunc, pellentesque sit amet ullamcorper eget, ultricies at turpis. Fusce pretium eleifend turpis, id tincidunt diam pellentesque eget. Ut quis metus molestie, condimentum sem non, fermentum justo. Cras ante sem, eleifend id leo ut, ullamcorper dictum augue."
"Ut ut lacus iaculis, feugiat felis nec, cursus diam. Quisque augue magna, feugiat fermentum dignissim vel, feugiat vitae tortor. Etiam quis magna non nunc ultrices dictum. Proin rutrum urna ipsum. Praesent nec eros blandit, suscipit lectus ut, scelerisque ante. Donec interdum felis ut sapien rhoncus dapibus in in orci. Vestibulum nec erat tellus. Suspendisse quis risus rutrum, rhoncus ligula in, facilisis metus. Morbi elit felis, malesuada eget tristique id, malesuada vitae nisl. Integer imperdiet ipsum ut luctus porttitor. Integer gravida varius sodales. Ut tincidunt felis est, non cursus libero semper ac. Etiam commodo augue vitae sollicitudin volutpat. Pellentesque eget mauris id tellus lacinia fermentum suscipit et leo.";

let count = 0;
for(let i = 0; i < text.length; i++) {
    if(text[i] === " "){
    count = count + 1;
}
count = count + 1;
}
console.log(count);


let countNewWord = (text.match(/et/g) || []).length;
console.log(countNewWord);

//bonus 2

let phraseToCheck = "step on no pets";
let phraseToCheckLength = phraseToCheck.length - 1;
let check = true;
for(let i = 0; i < phraseToCheck.length; i++){

    if(phraseToCheck[i] !== phraseToCheck[phraseToCheckLength - i]) {
        check === false;
        break;
    } else {
        check === true;
    }
}
console.log(check);
