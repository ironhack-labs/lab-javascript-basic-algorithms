
// Iteration 1: Names and Input
var hacker1 = "Menhaj";
console.log("The driver name is " + hacker1);
var hacker2 = "Axel";
console.log("The navigote\'s name is " + hacker2);
// Iteration 2: Conditionals
var hacker1Length = hacker1.length;
var hacker2Length = hacker2.length; 
if (hacker1Length > hacker2Length){
  console.log("The driver has the longest name, it has " + hacker1Length + " characters.");

} else if (hacker1Length < hacker2Length) {
  console.log("It seems that the navigator has the longest name, it has" + hacker2Length + " characters.");
} else {
  console.log("Wow, you both have equally long names," + hacker1Length + "characters!.")
}
// Iteration 3: Loops
var name = ""
for (var i = 0; i < hacker1.length; i++){
   name += hacker1[i].toUpperCase() + " " ;
}

console.log(name);

var name2 = ""
for (var i = hacker2.length - 1 ; i >= 0 ; i--){
   name2 += hacker2[i];
}
console.log(name2);


if (hacker1Length > hacker2Length) {
  console.log("The driver's name goes first");
} else if (hacker1Length < hacker2Length) {
  console.log("Yo, the navigator goes first definitely");
} else if (hacker1Length === hacker2Length) {
  console.log("What?! You both have the same name");
}

let palindrome = prompt("Please type a palindrome:");
function palindromeFunction(str){
  
  let reg = 0;
  let withoutAlphanumeric = str.replace(reg, "");
  let reverseWord = withoutAlphanumeric.split("").reverse().join("");
  if (reverseWord === withoutAlphanumeric) return true;
  return false;
}
console.log(palindromeFunction(palindrome));

let threeParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique nisl in iaculis mollis. Sed facilisis varius lectus id convallis. Sed et tempus dolor. Praesent in massa ut nunc fringilla vulputate. Suspendisse nec nibh at elit lacinia luctus quis ac turpis. Pellentesque convallis fermentum est auctor dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc posuere sit amet risus nec hendrerit. Quisque vel nisl iaculis, luctus enim vel, tristique magna. Cras interdum purus vestibulum iaculis tempus. Duis ultrices, nibh vitae mattis dignissim, dolor augue lobortis massa, ut hendrerit mauris nisl et lorem. Cras porttitor nec tellus et tempus. Sed maximus lorem ac dui rutrum, bibendum efficitur elit feugiat. \nDonec interdum tristique consequat. Fusce sed vehicula purus. Morbi sodales tincidunt urna, ac ullamcorper augue lacinia quis. Nam nisl dui, congue a risus sed, ultrices maximus erat. Maecenas auctor nisi ut lectus cursus rhoncus. Cras eu sodales magna, non tempor turpis. Duis luctus massa at tincidunt aliquam. Sed eu fringilla sem, sit amet fermentum diam. Donec at mauris ex.\nProin nec efficitur odio. Quisque sit amet nisl at leo tincidunt condimentum. In eu magna est. Aliquam dictum ornare dui, eget molestie ante iaculis vitae. Sed aliquam commodo congue. Nunc eu nisi at augue accumsan dignissim eget eget elit. Quisque sit amet leo at libero pulvinar sodales in vitae nulla. Praesent fringilla odio tincidunt est condimentum, vel accumsan sem dignissim. Proin ac libero iaculis, feugiat nibh vitae, tincidunt felis. In condimentum fringilla odio et efficitur. Fusce accumsan aliquet dapibus. Suspendisse semper semper arcu, in faucibus ex suscipit nec.";


console.log(threeParagraphs);

function WordCount(str) { 
  return str.split(" ").length;
}
console.log(WordCount(threeParagraphs));

function timesEt(str){
 return (str.split("et").length-1);
}
console.log(timesEt(threeParagraphs));
