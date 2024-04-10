// Iteration 1: Names and Input
let hacker1 = "Nardy";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Kiowa";
console.log(`The navigator'name ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`the driver has the longest name!, it has ${hacker1.length} characters`)
}
else if(hacker1.length < hacker2.length){
    console.log(`the navigator has the longest name! it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let upperCase = ""
for (let i = 0; i < hacker1.length; i++){
    upperCase += hacker1[i].toUpperCase() + " ";
}
console.log (upperCase);
let reverse = ""
for (let i = hacker2.length - 1; i >= 0 ; i--){
    reverse += hacker2[i]
}
console.log(reverse);

let toCompare = hacker1.localeCompare(hacker2);
if (toCompare == 1){
    console.log("Yo, the navigator goes first, definitely.")
}
else if (toCompare == -1) {
    console.log("The driver's name goes first.")
}
else {
    console.log("What?! You both have the same name?")
}

const longText= `Lorem ipsum dolor sit amet, consectetur
 adipisicing elit. Numquam iusto nostrum perferendis
  repellendus quidem, laborum dicta doloribus cupiditate
   voluptate repellat quaerat laudantium placeat.
    Blanditiis fuga dolores excepturi tempora aliquam!
     Reprehenderit? Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Numquam iusto nostrum perferendis
       repellendus quidem, laborum dicta doloribus
        cupiditate voluptate repellat quaerat laudantium 
        placeat. Blanditiis fuga dolores excepturi tempora
         aliquam! Reprehenderit? Lorem ipsum dolor sit amet
         , consectetur adipisicing elit. Numquam iusto
          nostrum perferendis repellendus quidem, laborum 
          dicta doloribus cupiditate voluptate repellat
           quaerat laudantium placeat. Blanditiis fuga 
           doloreset etetexcepturi tempora aliquam! Reprehenderit?`;
let et = 0 
for (let i = 0; i < longText.length; i++){
    if (longText[i] + longText[i + 1] == "et"){
        et ++;
    }
}
console.log(et)



//const wordCount = 0
//for ( let i = 0; i < longText.length; i++){
  //  
//}
