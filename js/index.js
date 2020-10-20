// Iteration 1: Names and Input
const hacker1 = "jesus";
console.log(`the driver name is ${hacker1}`);
const hacker2 = "david";
console.log(`the navigator name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name it has ${hacker1.length} characters`);
  }else if (hacker1.lenght < hacker2.length) {
    console.log(`The navigator has the longest name it has ${hacker2.length} characters`);
  }else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`)
  }

// Iteration 3: Loops
let name= "";
for (let i = 0;i<hacker1.length;i++){
  name +=hacker1[i].toUpperCase();
  name += " ";
}console.log(name);

let inverseName = '';
for(let i = 1; i <= hacker1.length; i++) {
  inverseName += hacker1[hacker1.length - i];
}
console.log(inverseName);

const comparation = hacker1.localeCompare(hacker2)
switch(comparation) {
  case -1:
  console.log(`${hacker1} goes first`)
  break;
  case 1:
  console.log(`Yo, ${hacker2} goes first definitely`)
  break;
  case 0:
  console.log('What?! You both have the same name')
}
//bonus
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam feugiat posuere. Maecenas sit amet dui eu ante pharetra consequat. Nam aliquet quis purus vitae imperdiet. Nullam tristique risus urna. Sed scelerisque lacus eget nulla elementum, nec iaculis ex varius. Aliquam venenatis nulla vel urna cursus, ac pharetra ex aliquam. Praesent venenatis fringilla orci. Mauris sed risus ante. In hac habitasse platea dictumst. Vivamus nec dui sed lectus rhoncus ultricies in vitae velit. Proin eu consequat velit. Quisque eu risus faucibus, accumsan quam blandit, commodo magna. Morbi mollis felis sed ultricies eleifend. Nullam varius sollicitudin semper. Mauris sollicitudin sed felis ac molestie. Pellentesque sit amet augue sed diam viverra ullamcorper a at ipsum. Vestibulum venenatis auctor purus a bibendum. Quisque blandit dapibus tristique. Praesent eget ipsum dictum, tincidunt nisl nec, malesuada orci. Mauris sit amet tincidunt massa, et faucibus tortor. Nullam sit amet laoreet lectus. Pellentesque sed augue gravida, laoreet ligula id, iaculis nibh. Nam leo tellus, consequat sit amet sollicitudin vel, vulputate nec felis. Fusce justo diam, pellentesque eu suscipit ut, fermentum ullamcorper eros. Integer feugiat, dolor in condimentum ornare, ipsum erat efficitur mi, sit amet aliquet lacus velit quis quam. Donec pharetra fringilla metus, a cursus est egestas a. Nulla facilisi. Pellentesque iaculis, nulla et commodo feugiat, est magna iaculis enim, ut consequat nisl quam eget sapien. Aenean pharetra porta feugiat. Sed tempus ac augue eget efficitur. Nunc eleifend porta neque, convallis mollis mauris pretium eget. Fusce lacinia, enim vel sagittis auctor, felis mi convallis est, eget interdum magna leo et nulla. Etiam turpis tortor, tristique non commodo in, molestie sed ante';
let textSpaces = 0;
for (let word of text) {
  if(word === ' ') {
    textSpaces += 1
  }
}
const textLength = textSpaces + 1;
console.log(textLength);