//By: Jorge Aguilar & Carla Oñate
//Day 1 LAB


//Iteration 1: Names and Inputs
const hacker1 = "Carla"
const hacker2 = "Jorge"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals
const hacker1Length = hacker1.length
const hacker2Length = hacker2.length



if (hacker1Length > hacker2Length){
  console.log(`The driver has the longest name, it has ${hacker1Length} characters.`)
} else if (hacker1Length < hacker2Length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters.`)
}
const hacker1Capitals=hacker1.toUpperCase()
let hacker1Extended=""
for(let i=0;i<hacker1Length;i++){
  hacker1Extended+=(hacker1Capitals[i] + " ")
}
console.log(hacker1Extended)

//Iteration 3: Loops

let hacker2Reverse=""
for(let j=hacker2.length-1;j>=0;j--){
hacker2Reverse+=hacker2[j]
}
console.log(hacker2Reverse)
const hackerArray = [hacker1, hacker2]
const hackerOrder = hackerArray.sort()
if(hacker1 === hacker2){
  console.log("What?! You both have the same name?")
} else if (hackerOrder[0] === hacker2){
  console.log("Yo, the navigator goes first definitely")
} else {
  console.log("The driver's name goes first.")
}


//BONUS TIME

//Bonus 1
const loremText2="gato"

const loremText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque nibh purus, non maximus purus mattis quis. Maecenas consectetur, libero faucibus finibus pretium, velit leo rhoncus nunc, in vulputate eros ante quis urna. Cras volutpat ultricies lectus ut dapibus. Cras interdum leo sed massa fringilla rutrum. Vestibulum sed consequat diam, in venenatis mi. Praesent et magna vitae orci efficitur fringilla at nec augue. Proin commodo tempor nulla id luctus. Phasellus consequat, magna vitae semper lacinia, felis purus interdum nunc, sit amet semper arcu elit ut sem. Donec leo velit, posuere at nunc sollicitudin, eleifend volutpat augue. Pellentesque diam purus, viverra in risus vel, posuere gravida nunc. Sed vel sem ut orci auctor lobortis in sit amet massa. Proin ex nisi, venenatis in vestibulum eget, tempor ac diam. Fusce dignissim ac tellus vitae finibus. Pellentesque magna magna, convallis nec suscipit vel, semper sit amet lorem. Mauris et augue risus. Nunc efficitur augue sed quam commodo, vitae commodo tortor convallis."
+
"In vitae elit elit. Fusce dignissim est neque, eu ultricies sapien porta at. Phasellus rhoncus varius ipsum quis sollicitudin. Mauris hendrerit varius enim, id elementum est varius sit amet. Nam semper eu eros ac dignissim. Cras id nibh vel metus suscipit fermentum. Aliquam est ex, suscipit vel iaculis ac, scelerisque in tortor. Curabitur dolor tellus, viverra eget maximus sed, rhoncus nec odio."
+
"In consequat purus odio, eu vehicula mi porttitor non. Duis id urna vel odio tincidunt sagittis. Duis turpis enim, luctus nec scelerisque sit amet, blandit a quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed nibh dui, viverra et suscipit quis, vestibulum sit amet neque. Fusce quis arcu ultrices, sodales est pellentesque, malesuada dolor. Vestibulum gravida eros sit amet augue imperdiet, eu malesuada turpis auctor. Integer dapibus nec ligula eget egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."

" et "

// TEST 1 FAIL :,(
  /*
let wordCounter=1;
let etCount = 0;
let etWord=0
for(let k=0;k<loremText.length;k++){
if(loremText[k]===" "){
wordCounter++;
if(etWord==3){
etCount++;
}else{
  etWord++;
}
}
if(loremText[k]==="e"&&etWord===1){
etWord++;
}
if(loremText[k]==="t"&&etWord===2){
etWord++;
}
}
console.log(wordCounter)
console.log(etCount)
*/

//TEST 2 OK :D
let wordCounter=1
let etCount = 0
let etWord=""
for(let k=0;k<loremText.length;k++){
if(loremText[k]===" "){
  wordCounter++;
  etWord=""
  for(let l=k; l<k+4; l++)
  {
    etWord += loremText[l]
  
  }

  if (etWord === " et "){
    etCount++
  }
}
}
console.log(wordCounter)
console.log(etCount)