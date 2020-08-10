// Iteration 1: Names and Input
const hacker2 = "Barbara";
console.log(`The driver's name is ${hacker2}`);
const hacker1 = "Olesya";
console.log(`The driver's name is ${hacker1}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}

// Iteration 3: Loops
const compare = hacker1[0].localeCompare(hacker2[0]);
if (compare < 0) {
  console.log(hacker1);
} else {
  console.log(hacker2);
} 

//Bonus 1
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl eu arcu feugiat, id pellentesque ligula semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin nisl eros, fermentum eu nisl ut, feugiat tempor nunc. Ut fermentum mi et interdum facilisis. Suspendisse sollicitudin tincidunt aliquam. Nunc finibus enim neque. Aliquam erat volutpat.

Integer ut dui sem. In nec commodo tellus, nec elementum metus. Nullam faucibus dolor vitae est mollis venenatis. Quisque luctus sapien ut sem aliquet tristique. Ut non lectus et lorem feugiat iaculis vel at ipsum. Cras consequat, dolor ut fringilla cursus, mi nulla porttitor nisl, et dapibus purus lacus eu magna. Curabitur sed tellus vulputate, efficitur risus sed, blandit sapien. Suspendisse at nibh eu nisi volutpat dignissim.

Nam tincidunt tempus quam id porta. Morbi ut dictum. In vestibulum rutrum rutrum. Vivamus vel libero sit amet mi fringilla tincidunt eu sit amet ligula. Donec ullamcorper volutpat ligula vel aliquam. Aliquam vitae turpis pulvinar, faucibus ligula et, cursus turpis. Nunc vitae convallis eros, blandit faucibus nulla.`

console.log(`The number of words is ${text.split(' ').length}`)

const count = (text.match(/et/g) || []).length;
console.log(count);
