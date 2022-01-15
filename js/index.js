// Iteration 1: Names and Input
console.log('I\'m ready!');

let hacker1 = "Júlia"
let hacker2 = "Marina"
console.log(`The driver is ${hacker1}.`);
console.log(`The navigator\'s name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  };

// Iteration 3: Loops

let driversLetters = "";
for (let i=0; i < hacker1.length; i++ ){
  driversLetters += hacker1[i] + " ";
}
console.log(driversLetters.toUpperCase())


let navigatorReverse =""
for (i= hacker2.length -1; i>=0; i--){
  navigatorReverse += hacker2[i];
}

// -1 nome 1 vem antes que o nome 2
if (hacker1.localeCompare(hacker2) === -1) {
  console.log ('The driver\'s name goes first.');
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?');
}

// Bonus 1:
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum mollis arcu nec ultrices. Ut elementum eu massa sit amet tempor. Nulla non blandit libero, eu posuere elit. Aliquam non orci mollis nisi ultricies auctor et in sapien. Suspendisse potenti. Nulla facilisi. Nunc ornare, ex maximus fringilla fermentum, turpis nisl blandit elit, ut bibendum augue turpis nec purus. Sed elit justo, gravida eget purus quis, condimentum commodo ex. Praesent egestas sem nisi, a porttitor ex interdum ut. Quisque gravida mi elit, nec fermentum ipsum semper quis. Etiam pharetra arcu sit amet pulvinar pellentesque. Aliquam ac sodales leo, ut pulvinar nulla. Cras consectetur, lacus in rutrum pellentesque, quam est facilisis diam, eu dapibus libero neque eu magna. Mauris eget ipsum at tellus sodales mollis id a ante. Cras sollicitudin egestas tellus eu feugiat. Nam mollis lacus non nisi egestas consectetur. Donec pretium tortor ac nunc porttitor porta. Nam egestas, risus at convallis aliquam, dolor sapien malesuada eros, et lobortis magna felis vitae risus. Nam ut dignissim nisl. In dignissim libero at vulputate commodo. Donec euismod, magna nec cursus porta, nisi nisi dictum massa, ac porta diam magna id ante. Quisque consectetur metus eu eros pulvinar, vitae facilisis risus faucibus. Nulla facilisi. Nam molestie nisi quis luctus volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas tincidunt purus ipsum, quis bibendum enim tristique eget. Suspendisse ultricies, leo sed sagittis faucibus, tellus augue auctor mauris, eu vehicula odio risus eu orci. Aliquam quis purus purus. Vestibulum malesuada quam vel viverra fringilla."

let countWords = 0;
for (let i=0; i< loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") {
    countWords ++;
  };
}
console.log(countWords);

let countEt = 0;
for (let i=0; i< loremIpsum.length; i++) {
  if (loremIpsum[i] === "e" && loremIpsum[i+1] === "t") {
    countEt ++;
  };
}
console.log(countEt);