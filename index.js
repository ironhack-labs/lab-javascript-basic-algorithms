// Iteration 1: Names and Input
let hacker1 = "Kiki";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Gabriel";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else{
    console.log(`Wow, you both have equally long names, ${hacker2.length}  characters!`);
}

// Iteration 3: Loops

// 1. Print the characters of the driver's name, separated by space, and in caps 
let driverName = " ";
for (i = 0; i < hacker1.length; i++){
    driverName = driverName + hacker1[i].toUpperCase() + " ";
}

console.log(driverName);

// 2. Print all the characters of the navigator's name in reverse order
let navigatorName = " ";
for (let i = hacker2.length - 1; i >= 0; i--){
    navigatorName = navigatorName + hacker2[i];
}

console.log(navigatorName);

// 3. Lexicographic order
for(let i = 0; i < hacker1.length; i++){
    if(hacker1[i] < hacker2[i]){
        console.log("The driver's name goes first");
        break;
    } else if (hacker1[i] > hacker2[i]){
        console.log("Yo, the navigator goes first definetly");
        break;
    } else if (hacker1[i] === hacker2[i]){
        console.log("What?! You both have the same name?");
        break; 
    }  
}


// BONUS 1:
const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin lacus nisl, sit amet sollicitudin felis tincidunt convallis. Cras sollicitudin diam non fermentum vulputate. Sed accumsan arcu et nisl scelerisque, a molestie dui elementum. Suspendisse fringilla ligula et ex ultrices pretium. Fusce ac accumsan ligula, at venenatis ante. Proin accumsan quis tellus tristique viverra. Quisque et erat sit amet risus bibendum aliquet quis nec eros. Vivamus vulputate risus vel efficitur eleifend. In hac habitasse platea dictumst. Integer ut sem eget est ultricies rutrum. Nullam eget pretium ante, malesuada gravida nunc. Mauris pellentesque, eros ut maximus volutpat, ex augue tincidunt sapien, nec scelerisque diam orci ullamcorper ligula. Curabitur finibus nulla ac blandit tristique. Sed elit orci, cursus sed risus ut, pellentesque convallis turpis. Aliquam erat volutpat. Aenean nec dolor eu sapien posuere feugiat sed eu eros. Sed vestibulum libero nec pharetra porttitor. Proin ac lacus id dui elementum imperdiet eget sit amet ante. Nunc posuere mi a purus lacinia, pellentesque aliquam est ultricies. Cras tincidunt quis leo non porttitor. Fusce pharetra nulla vitae purus facilisis, nec interdum risus commodo. Fusce dictum fermentum ante. Ut volutpat neque vitae justo fermentum, sit amet pharetra justo lobortis. Suspendisse et tortor in orci viverra viverra volutpat nec sem. Aliquam vel lectus non justo egestas fringilla ac vitae est. In ut nunc vel neque eleifend finibus vel sed augue. Nulla in sem non est consectetur cursus eu sit amet nibh. Quisque pulvinar cursus est, sit amet porta libero efficitur nec. Nam finibus est vitae nulla consectetur, ut finibus urna dictum. Nullam tincidunt dolor tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta felis eget ipsum bibendum, eu mattis lectus commodo. Donec interdum imperdiet tellus ut maximus. Aenean malesuada enim vel ultrices gravida. Sed dapibus, lorem viverra dictum ultrices, justo massa tristique nulla, sed commodo felis elit sed turpis.'
console.log(longText.length);

// I didn't do this part: Make your program count the number of times the Latin word et appears.