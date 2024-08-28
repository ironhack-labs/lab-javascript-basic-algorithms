
//### Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name. <br>
//1.2 Print `"The driver's name is XXXX"`.<br>
// 1.3 Create a variable `hacker2` with the navigator's name.<br>
//1.4 Print `"The navigator's name is YYYY"`.

//### Iteration 2: Conditionals

//2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
//<br>
//  - `The driver has the longest name, it has XX characters.` or <br>
//  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
//// - `Wow, you both have equally long names, XX characters!`.

// Iteration 1: Names and Input

const hacker1 = 'Kevin ' 
const hacker2 = 'Alexandro'

console.log(`The driver's name: ${hacker1}`)
console.log(`The navigator's name: ${hacker2}`)

// Iteration 2: Conditionals

const hackerLength1 = hacker1.length 
const hackerLength2 = hacker2.length

if(hackerLength1 > hackerLength2 ) {
    console.log(`The driver has the longest name, it has ${hackerLength1} characters.`)
}
if(hackerLength1 < hackerLength2 ) {
    console.log(`The navigator has the longest name, it has ${hackerLength2} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, with ${hackerLength1} characters.` )
}





for (let i < 0; i < hackerLength1-1;i++) {
  if(hacker1 > hacker2 ) {
    console.log(`The driver's name goes first.`)
}
if(hacker1 < hacker2 ) {
    console.log(`Yo, the navigator goes first, definitely.`)
}
else {
    console.log(`What?! You both have the same name?` )
}
}


let formattedName = ""
let reverseName = ""
for (let i=0; i < hackerLength1; i++) {
    formattedName += hacker1[i].toUpperCase();
  if (i < hackerLength1 - 1) {
    formattedName += ' ';
  }
}
console.log(formattedName)

for (let i = hackerLength1; i > 0; i--) {
    reverseName += hacker1[i - 1]
}
console.log(reverseName)



for(let i = 0; i < 1; i++){
    if (hacker1 < hacker2){
        console.log("The driver's name goes first.")

    } else if (hacker1 > hacker2){
        console.log("Yo, the navigator goes first, definitely.")
    } else {
        console.log("What?! You both have the same name?")
    }
    }



  const longText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur molestie velit sollicitudin sollicitudin. Nunc convallis lectus vitae purus iaculis, ac dapibus ante egestas. Mauris euismod metus neque, ac venenatis turpis consequat nec. Ut quis aliquam justo, posuere tempor lorem. Praesent eget consequat urna. Duis eleifend nisl cursus velit venenatis auctor. Etiam non porttitor felis. Sed faucibus diam sed augue tristique, id volutpat tortor porta. Etiam at ex non urna dictum cursus. Quisque porttitor efficitur augue eget cursus. Aliquam sit amet ante eu lectus elementum placerat. In sit amet risus fringilla, dapibus odio eget, sollicitudin lectus. Donec lorem lectus, volutpat sed ipsum in, ultricies mollis risus. Sed fringilla ultricies sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pellentesque varius urna, sit amet malesuada dui sollicitudin id. Aenean malesuada mollis tempor. Vivamus congue aliquet ligula id pretium. Mauris placerat convallis purus id dignissim. Phasellus sed odio laoreet, bibendum felis bibendum, ullamcorper elit. Proin lobortis vulputate porta. Donec eu molestie tortor, vel eleifend libero. Mauris cursus fermentum ex pulvinar volutpat. Suspendisse orci risus, interdum nec lacinia et, imperdiet a nibh. Pellentesque libero nisl, cursus non maximus id, varius eu ex. In ut lacus mattis massa sodales congue. Etiam suscipit quam vel dolor gravida ultricies. Proin tellus orci, consequat a nulla id, viverra convallis erat. Donec erat elit, convallis ut ornare ac, pellentesque vel leo. Cras a imperdiet erat. Proin lacinia nibh id erat elementum, et cursus odio convallis. Aliquam in nisl et turpis consectetur imperdiet. Vestibulum eget aliquam tellus, eget interdum nunc. Praesent vitae tempus diam. Curabitur interdum ullamcorper mi, non imperdiet elit tincidunt eget.";

  let numberOfWords= 0;
  
  for (i =0; i< longText.length-1; i++) {
  if(longText[i] === " " ) { 
      numberOfWords += 1} }
  console.log(numberOfWords + 1)
  
   

  
  let countEt= 0;
  for (i =0; i< longText.length; i++) {
  if(longText[i]+longText[i+1]+longText[i+2] == " et" ) { 
      countEt += 1} }
  console.log(countEt)


  //#### Bonus 2:
  let reverse = "";
  let phraseCheck = "A man a plan a canal Panama"
  phraseCheck = phraseCheck.toLowerCase().replace(/\s+/g, '');
  for ( let i = phraseCheck.length - 1; i >= 0; i--){
    reverse += phraseCheck[i];
  }
  console.log(reverse === phraseCheck)





