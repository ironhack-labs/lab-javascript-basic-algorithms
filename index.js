// Iteration 1: Names and Input
const hacker1 = 'Ismael';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Sophie';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength) {
  console.log(
    `The navigator has the longest name, it has ${navigatorLength} characters.`);
} else {
  console.log(
    `You both have equally long names, with ${driverLength} characters.`);
}

// Iteration 3: Loops

let driverSpace=[];
for (let i=0; i < driverLength; i++){
  driverSpace += hacker1[i].toUpperCase() + " "
}
console.log(driverSpace)

let reverseNavigator=[];
for (let i=navigatorLength-1; i>=0; i--){
  reverseNavigator += hacker2[i]
}
console.log(reverseNavigator)


const order = hacker1.localeCompare(hacker2);
switch (order){
  case -1 : 
    console.log("The drivers name goes first.")
    break;
  case 0 :
    console.log("That means thats we have the same name.")
    break;
  case 1 :
    console.log("Yo, the navigator goes first definitely.")
    break;
}

//BONUS FEATURES
//PART 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt vel ipsum vitae vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod mi eget leo efficitur placerat. Suspendisse accumsan nisl ac quam bibendum condimentum. In mattis dolor eu venenatis mollis. Nunc porttitor, enim nec viverra viverra, dui quam maximus lacus, a gravida nibh justo sed augue. Etiam consequat, tellus quis cursus faucibus, magna dui semper nibh, at sodales erat nisl bibendum tortor. Nullam ullamcorper aliquam leo, sit amet accumsan elit mattis eget.

Suspendisse et elit venenatis, porttitor tortor nec, rhoncus velit. Ut id nisl interdum, tempus lacus eu, euismod tellus. Duis non congue quam, quis commodo ex. Praesent sollicitudin gravida tellus eget sagittis. Fusce tincidunt neque et dolor aliquet hendrerit. Aenean non mauris vitae est congue consectetur sit amet at lorem. Duis tempus justo eget viverra ultricies. Vestibulum et ligula ut nunc venenatis tincidunt. Proin nisi ex, eleifend quis aliquet pretium, pretium vel neque. Vivamus quis enim ullamcorper, rhoncus leo viverra, semper elit. Donec mauris leo, molestie quis elit ac, malesuada laoreet nulla. Fusce facilisis, turpis sit amet dignissim commodo, neque est vehicula nibh, vitae egestas neque elit condimentum dolor. Cras convallis nunc in lectus porttitor ultricies.

Nullam ullamcorper condimentum mi id eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam at magna sodales lorem vestibulum tempus euismod in orci. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus nec auctor lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ac tincidunt elit. Curabitur commodo ante a ligula auctor accumsan.`;


let counterSpace = 0;
let counterEt = 0;

let countText = longText.slice(0);
let position = 0;

while (position !== -1) {
  position = countText.indexOf(' ');
  countText = countText.slice(position + 1);
  counterSpace++;
}

position = 0;
countText = longText.slice(0);

while (position !== -1) {
  position = countText.indexOf(' et ');
  countText = countText.slice(position + 3);
  if (position !== -1) {
    counterEt++;
  }
}

console.log(counterSpace);
console.log(counterEt);

  