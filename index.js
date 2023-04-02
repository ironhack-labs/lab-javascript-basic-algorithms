
// Iteration 1: Names and Input
let hacker1 = "Steven";
console.log("The driver's name is " + hacker1);
//console.log("The driver's name is ${hacker1}");

let hacker2 = "Aidan";
console.log("The navigator's name is " + hacker2);
//console.log("The navigator's name is ${hacker1}");



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let spacedName = ''
for(let i = 0; i < hacker1.length; i+1){
  let capital = hacker[i].toUpperCase()
  spacedName += capital+ ''
}
console.log('iteration 3', spacedName);

//Bonus 1:
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor nisl arcu, sit amet finibus diam tempor a. Nullam nec auctor leo, ut consequat ex. Phasellus eget ultrices lacus. Nulla facilisi. Donec aliquam purus ut nulla sagittis sagittis eget bibendum nibh. Pellentesque metus lectus, aliquam sit amet nibh sit amet, consectetur iaculis enim. Phasellus ullamcorper sagittis erat congue porta. Nulla erat arcu, maximus quis dapibus non, luctus id urna. Nulla eget justo id turpis dapibus fringilla. Cras ultricies convallis tristique."

"Morbi vitae nulla maximus, lacinia elit ut, auctor nisl. Mauris non rhoncus leo. Aliquam mattis massa metus, in ultricies est sollicitudin vulputate. Phasellus ac odio in purus varius aliquam quis id erat. Ut vel leo blandit, interdum lacus id, auctor felis. Duis ultrices lorem posuere urna eleifend, malesuada vestibulum justo dignissim. Nunc pharetra dui risus, sed consequat lectus rutrum ac. Aenean tincidunt, ex sed blandit feugiat, justo lectus pretium arcu, ut tincidunt neque ipsum eu augue. Mauris eu nibh sollicitudin, pretium sapien at, porta purus. Sed efficitur at eros auctor rhoncus. Curabitur egestas metus purus. Morbi ac est eros. Phasellus a commodo quam. Morbi vitae euismod ex. Integer non erat quis nisl efficitur tempus."

"Mauris in eleifend urna, id tempor lectus. Donec viverra tortor nisl, ut rhoncus augue iaculis eget. Sed et elit mollis turpis auctor ornare nec sit amet eros. Sed facilisis, nunc nec maximus euismod, velit nisi rhoncus est, et ultricies lacus nisi eget leo. Aliquam sit amet leo justo. Etiam id porttitor urna, quis vestibulum enim. Nulla at quam magna."

let count =0
let newArray = LongText.split('')
console.log(newArray.length);

let etCount = 0
for(let i=0; i < newArray.length; i++){
  if(newArray[i] === 'et'){
    etCount ++;
  }
}
console,log('There are ${etCount} ets in the variable');
