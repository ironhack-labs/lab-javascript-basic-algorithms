// Iteration 1: Names and Input
const hacker1 = "Amir";
const hackerOneName = `The driver's name is ${hacker1}`;
//console.log(hackerOneName);

const hacker2 = "Roberto";
const hackerTwoName = `The navigator's name is ${hacker2}`;
//console.log(hackerTwoName);
// Iteration 2: Conditionals
/*console.log(hacker1.length);
console.log(hacker2.length);*/
/*if (hacker1.length > hacker2.length){
   console.log(`The driver hast the longest name, it has ${hacker1.length} characters.`); 
}
else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {console.log(`Wow, you both have equally long names, XX characters!`);}*/


// Iteration 3: Loops//



/*const hacker1Capital = hacker1.toUpperCase();
let Name = "";

for (let i=0; i<hacker1Capital.length; i++){
   console.log (hacker1Capital[i] + " "); 
   Name += hacker1Capital[i] + " ";
}
console.log(Name); 
let reversedName = "";

for (let i=hacker2.length -1; i>=0; i--){
    console.log(hacker2[i]);
    reversedName += hacker2[i];
}
console.log(reversedName);

const compareNames = hacker1.localeCompare(hacker2);
if (compareNames < 0) {
    console.log(`The driver's name goes first.`);
}
else if (compareNames > 0) {
    console.log(`Yo, the navigator goes first, definitely.`);
}
else {
    console.log(`What?! You both have the same name?`);
}*/


// Bonus 1


const longText= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, libero eu varius faucibus, ex lacus commodo justo, eu pulvinar nunc magna nec neque. Nam vehicula dictum ligula sit amet facilisis. Cras a metus at lorem faucibus sodales at vel tortor. In ut imperdiet dui. Quisque ligula erat, venenatis eu purus ac, placerat tempor tellus. Pellentesque aliquet sit amet dui feugiat egestas. Sed quis eros dui. Fusce quis facilisis ipsum. Nulla dignissim turpis arcu, non lacinia elit suscipit et. Nulla at gravida enim, quis faucibus mauris. Sed malesuada sapien arcu, vel volutpat justo convallis facilisis. Integer vulputate sagittis ultricies. Morbi eu nibh non mi luctus finibus.

Integer vel elementum ipsum, ac venenatis dui. Curabitur sit amet finibus metus. Praesent sollicitudin enim ut vestibulum placerat. Aliquam pulvinar nec tortor at tempus. Sed ultrices tincidunt ipsum, ac accumsan diam iaculis vitae. Fusce malesuada lectus vitae mi iaculis, non convallis mauris tincidunt. Vivamus vel rhoncus arcu. Nulla lectus risus, tempus eu justo eu, sollicitudin ultricies mi. Aenean lacinia eros sit amet turpis pellentesque, sed congue odio pellentesque. Curabitur convallis non lacus vel mollis. Quisque pharetra lobortis sagittis. Praesent in leo et neque bibendum pharetra nec sed nisi. Fusce diam nulla, dignissim at finibus et, viverra ac turpis. Morbi sodales iaculis ipsum et imperdiet.

Nam sit amet diam ipsum. Curabitur accumsan dolor id molestie porttitor. Nulla facilisi. Donec lectus lorem, egestas in volutpat ut, condimentum at urna. Aliquam tincidunt id ligula facilisis lacinia. Phasellus auctor magna nulla, et feugiat dui commodo vel. Donec quam purus, sollicitudin in lobortis ut, tristique non quam. Pellentesque eleifend tortor sed elit ullamcorper tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam interdum lectus a gravida luctus. Integer vitae cursus augue. Morbi porttitor elementum arcu fringilla eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique augue justo, sit amet dignissim est pellentesque a.`
let wordNum = "" + 1;

for (let i=0; i < longText.length; i++){
    const char = longText[i];
    if (char === " ") {
        wordNum++;
    }
}
     console.log(wordNum);

/*let count = 0;

for (let i=0; i < longText.length; i++){
   const twoChars =longText[i-1] + longText[i] + longText[i+1] + longText[i+2];   
   if (twoChars ===" et "){
    count++;
   }
    }
console.log(count);*/