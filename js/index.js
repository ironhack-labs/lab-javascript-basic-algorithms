// Iteration 1: Names and Input
console.log("I'm ready!")

let hacker1 = "Adrien" ; 
console.log(`The driver's name is ${hacker1}`) ;

let hacker2 = "Begonia "; 
console.log(`The navigator's name is ${hacker2}`) ; 


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)}; 


// Iteration 3: Loops

let newHacker1 = "";
for (let i = 0; i < hacker1.length ; i ++) {
    newHacker1 += hacker1[i].toUpperCase() + " " ;
}
console.log(newHacker1);

let newHacker2 = "";
for (let i = hacker2.length - 1 ; i >= 0 ; i--) {
    newHacker2 += hacker2[i]; 
}
console.log(newHacker2);

if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
    console.log(`The driver's name goes first`)
}
else if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
    console.log(`Yo, the navigator goes first definitely.`)
}
else {console.log(`What?! You both have the same name?`)}

let hacker1First

let counter = 0; 

if (hacker1.length < hacker2.length) {
    counter += hacker2.length
}

let iFoundTheAnswer = false ;

for (let i = 0 ; i < hacker1.length ; i ++) {
    if (hacker1[i] < hacker2[i]) {
        console.log(`The driver's name goes first`)
        iFoundTheAnswer = true ;
        break;
    }
    else if (hacker1[i] > hacker2[i]) {
        console.log(`Yo, the navigator goes first definitely.`)
        iFoundTheAnswer = true ;
        break;
    }
    // else if (hacker1[i] === hacker2[i]) {
    //     if (i === hacker1.length - 1) {
    //         console.log(`What?! You both have the same name?`)
    //     }
}
        
if (!iFoundTheAnswer) {
 if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
} else if (hacker1.length < hacker2.length) {console.log(`The driver's name goes first`)}
else if (hacker1.length > hacker2.length) {
    console.log(`Yo, the navigator goes first definitely.`)
}
}

// Bonus 1 - Loremp Ipsum

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar dapibus lectus, ut vehicula elit luctus sed. Aliquam erat volutpat. Aenean interdum metus sit amet libero venenatis, et feugiat nunc condimentum. Vivamus a purus dictum, ultricies odio a, pulvinar felis. Quisque fringilla sodales nulla id dapibus. Vestibulum euismod porta dolor, sit amet eleifend mi sodales in. Suspendisse ullamcorper mauris ex, sit amet commodo velit efficitur cursus. Sed arcu est, fringilla a pulvinar vehicula, aliquet sed nisi. Cras a orci gravida, ultrices nunc nec, finibus elit. Praesent lacinia mauris non commodo dignissim.
Nullam et justo nec leo dapibus tempor eu sed elit. Quisque augue justo, scelerisque eu lectus id, facilisis imperdiet sem. Nam semper lorem id semper vestibulum. Etiam felis nisi, fermentum facilisis scelerisque vitae, finibus sit amet augue. Proin ac dui tellus. Integer in odio arcu. Nulla egestas semper nisi, vel facilisis leo maximus id. Vivamus suscipit, lorem nec consequat pellentesque, massa magna tincidunt nisi, vehicula tempus tortor erat in quam. Proin rutrum, mi non volutpat ultricies, erat lacus iaculis magna, in finibus lacus orci a ipsum. Ut feugiat nibh eu sem vehicula, ac vestibulum libero tincidunt. Etiam aliquet orci et fringilla posuere. Nulla venenatis et quam eget egestas. Nulla tempor dolor sit amet elit interdum varius. Phasellus commodo et dui nec imperdiet.
Vestibulum semper ornare ante, ac tincidunt velit ultrices quis. Maecenas velit dui, dignissim in viverra eget, dictum non erat. Curabitur porta, enim id consectetur pellentesque, augue tellus blandit ante, sed tempus lacus neque ac magna. Praesent egestas convallis sem, ac commodo quam. Morbi elementum odio lectus, eget porta enim ornare quis. Etiam in justo id lacus laoreet sagittis eget ac urna. Aenean a imperdiet libero. Fusce euismod nisl id nisl placerat blandit. Suspendisse malesuada varius turpis, quis rhoncus nunc iaculis sed. Duis ultrices elit vel dictum maximus. Sed vitae odio vulputate, pretium ex nec, fringilla dolor. Vestibulum volutpat eleifend sapien vel pellentesque. Etiam tincidunt lorem in turpis mattis rhoncus sed eget orci. Duis tristique ligula id ipsum consectetur pellentesque. Ut condimentum sapien et dapibus aliquam.` ;

let count = 0 ;
for (let i = 0; i < loremIpsum.length ; i ++) {
    if(loremIpsum[i] === " ") {
        count += 1;
    }
}
console.log(count) ;

let countEt = 0 ;
for ( let i = 0 ; i < loremIpsum.length ; i ++) {
    if (loremIpsum[i] === "e" && loremIpsum[i+ 1] === "t") {
        countEt += 1
    }
}
console.log(countEt)