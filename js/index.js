// Iteration 1: Names and Input
const hacker1 = 'Robson';
console.log(`The driver name is ${hacker1}`);
const hacker2 = 'Eduardo';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters. `);
  }else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `);
  }else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names ${hacker2.length} characters. `);
  }

// Iteration 3: Loops .
let spaceDriver = " ";
let driverUpperCase = hacker1.toUpperCase();
for(i=0; driverUpperCase.length > i; i++){
  spaceDriver += driverUpperCase[i] + ' ';
}
spaceDriver = spaceDriver.trim();
console.log(spaceDriver);

let reverseNavigator = " ";
for(i = hacker2.length-1; i >= 0; i--) {
  reverseNavigator += hacker2[i];
}
console.log(reverseNavigator);

let nameOrder = hacker2.localeCompare(hacker1);
  if(nameOrder > 0){
console.log("The driver's name goes first.");
  }else if(nameOrder < 0){
console.log("Yo, the navigator goes first definitely.");
  }else{
    console.log("What?! You both have the same name?");
  }

  // bonus 1
  let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nunc tempor, tristique metus vitae, commodo leo. Pellentesque leo ex, euismod ac arcu sed, blandit venenatis nulla. Nulla felis dolor, porttitor nec lobortis eget, pulvinar eget purus. Vivamus eleifend fermentum urna ac vestibulum. Quisque volutpat gravida magna, a elementum velit rutrum at. Donec finibus tempor leo, sed sollicitudin ex dignissim sagittis. Vestibulum nulla ex, consequat eget nisi nec, suscipit euismod elit. Morbi vel ipsum cursus est viverra commodo sit amet a justo. Phasellus finibus risus est, at consectetur nunc sodales eget. Ut est tortor, pretium laoreet turpis vitae, eleifend sodales metus. Vestibulum fermentum at augue et sollicitudin. Quisque neque ipsum, pharetra eu tempus id, ullamcorper sed nunc. Pellentesque imperdiet lorem nisi, eu mollis felis aliquam et. Proin accumsan sem ac nisi eleifend ultrices. Praesent a elementum elit. Sed lobortis pulvinar ullamcorper. In urna urna, pharetra non volutpat eu, ornare eu tortor. Curabitur placerat libero dui, nec bibendum nibh imperdiet non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer ornare volutpat orci, ut cursus ante iaculis id. Nam imperdiet orci ut cursus varius. Integer vel ligula vestibulum, interdum eros vel, gravida erat. Cras vel luctus lorem. Suspendisse aliquet dictum ex eu auctor. In ut iaculis enim. Donec mollis nulla in ullamcorper ultrices. Maecenas ac nisi felis. Morbi in ante at purus ornare iaculis vel eget tortor. Donec et est blandit dolor elementum gravida in in justo. Vivamus lacinia risus at mauris consectetur, eu mattis ipsum congue."
  console.log(paragraphs.length);
  console.log(`The number of times that the word et appears is ${paragraphs.indexOf('et')}`);

  //bonus 2
  const phraseToCheck = `level`;
  function invert (phraseToCheck) {
    for(let i = 0; i < phraseToCheck.length / 2; i++) {
    if (phraseToCheck[i] != phraseToCheck[phraseToCheck.length - i - 1]) 
    return false;
    }
    return true;
  }
  
console.log(invert (phraseToCheck))