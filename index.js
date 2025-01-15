/*/ Iteration 1: Names and Input
const hacker1 = "xxxx";
const hacker2 = "yyyy";
console.log(`The driver's name is ${hacker1} The navigator's name isnode  ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length < hacker2.length){

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length > hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);

}else {

    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
*/

// Iteration 1: Names and Input
const hacker1 = "Samuel";
const hacker2 = "Leen"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker1}`)

// Iteration 2: Conditionals
let longerName = "";
let charName = "";
let revName ="";
 if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`)
 }else if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
 }else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
 }
 for(let i = 0; i < hacker1.length; i++){
   charName += hacker1[i]+" ";
}
console.log(charName.toUpperCase()+" ")
for(let i = hacker1.length-1; i >= 0; i--){
  revName += hacker1[i]+" ";
}
console.log(revName.toUpperCase()+" ")
if(hacker1[0] < hacker2[0]){
  console.log("Samuel goes first");
}
else console.log("Leen goes first");
////////////////

// Iteration 1: Names and Input
const hacker1 = "Samuel";
const hacker2 = "Leen"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker1}`)
// Iteration 2: Conditionals

let longerName = "";
let charName = "";
let revName ="";
 if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`)
 }else if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
 }else{
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
 }
 for(let i = 0; i < hacker1.length; i++){
   charName += hacker1[i]+" ";
}
console.log(charName.toUpperCase()+" ")

for(let i = hacker1.length-1; i >= 0; i--){
  revName += hacker1[i]+" ";
}
console.log(revName.toUpperCase()+" ")

if(hacker1[0] < hacker2[0]){
  console.log("Samuel goes first");
}
else console.log("Leen goes first");

let count = 0;
let countEt = 0;
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim purus sit amet diam finibus, nec dapibus quam ornare. Integer tincidunt odio justo, laoreet fermentum massa mollis et. Nam et orci sed lectus molestie iaculis. Integer luctus posuere magna, ut suscipit enim malesuada eget. Aliquam vel accumsan felis. Curabitur scelerisque, neque quis accumsan lacinia, lorem velit posuere ex, eu tincidunt dui mi pharetra felis. Donec tincidunt lectus a sapien consectetur ultrices. In nec nulla malesuada, lacinia dolor at, interdum ipsum. Ut vehicula lacus felis, non faucibus lorem auctor id. Phasellus ut mi eu tellus tristique vestibulum ut sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ut faucibus augue. Nunc maximus sodales erat vel ultricies. Donec blandit, diam id fermentum sodales, magna tortor condimentum orci, vel fermentum ligula risus nec odio. Donec gravida, velit a aliquet ullamcorper, mi risus laoreet augue, sit amet facilisis nisi nisi at tellus. Integer lacinia ante eu leo tincidunt, ac efficitur eros sagittis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur in erat ut blandit. In eu leo ut diam maximus lobortis. Nam aliquam augue sed elit sagittis luctus vitae nec urna. Proin vel tortor enim. Mauris a odio imperdiet, fermentum enim in, auctor neque. Vestibulum tincidunt, lorem vitae tempus dictum, justo orci tristique magna, vel venenatis sem sapien varius orci. Morbi dignissim, enim vitae elementum bibendum, lectus magna cursus metus, sit amet rhoncus risus leo sit amet quam. Sed pharetra dolor turpis, sit amet tempus est scelerisque et. Curabitur vulputate ultricies nisl a lobortis.Donec id quam felis. Maecenas a urna ornare, tempus ipsum in, porttitor erat. Curabitur fringilla enim ut sem laoreet tristique. Vivamus varius rutrum justo, ac tincidunt leo pretium sed. Mauris iaculis molestie dui ut maximus. Donec nec eros nec nunc imperdiet cursus ac quis massa. Maecenas in efficitur lorem. Vivamus non turpis laoreet, iaculis sem ullamcorper, placerat quam. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel tempus nisl. Aliquam velit turpis, laoreet nec urna at, consequat venenatis felis. Vestibulum vestibulum mi eget varius suscipit."  

for(let i=0; i<longText.length; i++){
  if(longText[i]==" ")
    count++;
}
console.log(count);

for(let i=0; i<longText.length; i++){
  if(longText[i]=="e" && longText[i+1] == "t")
  countEt++;
}
console.log(countEt);

let praseToCheck = "madam"
let reversed = "";

for(let i = praseToCheck.length-1; i >= 0; i--){
  reversed += praseToCheck[i];
}
if(reversed.toUpperCase() === praseToCheck.toUpperCase()){
  console.log(`it's a Palindrome ${reversed}`)
}
  else{
    console.log(`Error ${reversed}`)
  }


