// Iteration 1: Names and Input
const hacker1 = "Sven";
const hacker2 = "Ole";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has  ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let result = "";
for (let i=0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase()+" ";
}
console.log(result);

let result2 =""
for (let i=hacker2.length-1;i>=0; i--) {
    result2 += hacker2[i];
}

console.log(result2);

//int result3 = hacker1.compareTo(hacker2);

if (hacker1.localeCompare(hacker2) === -1) {console.log("The driver's name goes first.")}

else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
} else {
    console.log("Yo, the navigator goes first, definitely.")
}


// Bonus 1

const longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula augue eu massa dignissim, et aliquam tortor finibus. Donec vel consequat tortor. Vivamus faucibus tempus rutrum. Curabitur tincidunt ligula velit, eget ultrices dolor tempor quis. Quisque faucibus est eget efficitur commodo. Vivamus ac rhoncus ipsum, ac pellentesque nunc. Nullam sit amet pellentesque massa. Duis in risus vel mi varius blandit efficitur at sem. Nulla ut turpis ut tellus volutpat bibendum. Nunc ut placerat libero. Donec ullamcorper risus sit amet finibus iaculis. Suspendisse at convallis purus. Morbi bibendum dolor id libero sagittis, non luctus justo pharetra. Vestibulum pharetra maximus arcu, non venenatis elit egestas a. Ut ultricies a elit mollis ultricies.
Integer eu neque in mauris pulvinar bibendum eget lacinia nunc. Integer magna odio, efficitur id dolor id, sodales placerat felis. In commodo luctus suscipit. Sed vehicula venenatis ligula mattis vulputate. Aliquam aliquam sapien risus, nec volutpat nibh consectetur ut. Donec at cursus ligula. Maecenas nibh sapien, iaculis a porttitor in, pretium nec nisl. Morbi eu tincidunt dolor, nec elementum ligula. Maecenas iaculis, sem id consectetur commodo, tellus orci faucibus sapien, sed pulvinar justo enim in nisi. Mauris quis commodo purus, vel lacinia risus. Aenean nec augue id libero bibendum consectetur. Nulla semper diam mi, nec commodo risus ultricies non. Quisque eu ante sed dolor tincidunt viverra. Vivamus sed diam at eros malesuada lobortis pellentesque id est.
Maecenas vitae tincidunt velit, ac iaculis sapien. Sed eu pretium ipsum, ultrices condimentum neque. Mauris tristique egestas dolor, a pharetra orci vestibulum ut. Proin molestie fringilla turpis, a egestas tortor tempus quis. Maecenas dui mauris, semper ac mollis consectetur, iaculis et magna. Nulla est neque, porttitor in mattis eu, scelerisque ut enim. Proin consectetur maximus consectetur. Duis eu eleifend nunc.`


function getWordCount(str) {
    return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
}

console.log(getWordCount(longText));

let count = 0;
for (let i = 0; i < longText.length; i++) {
    const twoChars = longText[i] + longText[i + 1];
   
    if (twoChars === "et") {
      count++;
    } 
   
  }
   
  // Check your code:
  console.log(`The word et appears ${count} times in longText`);
