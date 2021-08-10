//Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "João"
//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`)
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Paulo"
//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals

if (hacker1.length === hacker2.length){
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
} else if(hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has "+ hacker1.length +"characters")
} else {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length +" characters.")
}

//Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1Sep = "";
for (let i = 0; i < hacker1.length; i++)
{
    hacker1Sep = hacker1Sep + " ";
    hacker1Sep = hacker1Sep + hacker1[i];
}
console.log(hacker1Sep.toUpperCase())
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let hacker2Invert = "";
for (let i = hacker2.length -1 ; i >= 0;i--){
  hacker2Invert = hacker2Invert + hacker2[i]
}
console.log(hacker2Invert)  
//3.3 Depending on the lexicographic order of the strings
let arrayLex = [hacker1,hacker2]
arrayLex.sort()
if (hacker1 === hacker2){
console.log ("What?! You both have the same name?")
}else if(arrayLex[0]===hacker1){
  console.log("The driver's name goes first.")
}else {
  console.log("Yo, the navigator goes first definitely.")
}

//Bonus 1:
let loremStr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at rutrum eros. Integer ac leo est. Phasellus egestas lacus sed condimentum dignissim. Cras a augue risus. Nullam lobortis, urna in sodales varius, felis nulla ullamcorper metus, eu sagittis tellus nisl eget massa. Fusce gravida imperdiet fermentum. Proin eleifend sollicitudin pretium. Proin non ultricies velit. Vestibulum velit tortor, laoreet sed faucibus sit amet, suscipit eget tortor. Aliquam erat volutpat. Phasellus ultricies odio ligula, a vulputate felis vulputate vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eu erat vel dui dictum vestibulum.

Suspendisse potenti. Aliquam orci nibh, tristique eu hendrerit eu, bibendum vel lorem. Maecenas blandit suscipit arcu, ut scelerisque nisi suscipit feugiat. Praesent id sem vel ligula gravida ultricies at vitae sapien. Pellentesque auctor ultrices mauris, in commodo magna luctus vitae. Vivamus ut erat libero. Nullam mattis velit nec ultrices varius. Sed gravida ornare tellus eu tempus. Curabitur lacinia venenatis aliquet. Nulla facilisi. Maecenas nisl tortor, feugiat consequat porttitor quis, ornare ut sapien. Maecenas a magna ut nisl commodo aliquam. Maecenas a turpis sit amet erat euismod ornare at vel diam.

Donec efficitur eros viverra risus blandit condimentum. Aliquam mi massa, dictum nec vulputate nec, dignissim in arcu. Vestibulum quis mi id est rutrum pellentesque. Duis finibus lacus nec viverra consequat. Curabitur ac fermentum purus. Vivamus mattis dapibus orci, a auctor purus euismod eget. Nunc vestibulum urna risus, a aliquet turpis malesuada vel. Phasellus eget tellus sit amet mauris feugiat egestas eu at augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

console.log("Number of Words: "+loremStr.split(" ").length)
console.log(`Number of "et": `+(loremStr.split(" et ").length -1))

//Bonus 2:
let phraseToCheck = "A man, a plan, a canal, Panama!"