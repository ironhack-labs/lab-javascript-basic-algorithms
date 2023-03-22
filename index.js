// Iteration 1: Names and Input
let hacker1 = "Stephen"
console.log (`The driver's name is ${hacker1}`)

let hacker2 = "Alex"
console.log (`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
{
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker1.length < hacker2.length)

{
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

else

{ console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
 }
   
// Iteration 3: Loops
let driver = ""
let backward = ""

for (let i=0; i < hacker1.length; i++)
{
    driver +=hacker1[i]+" "

  }

  driver = driver.toUpperCase()

  console.log (driver)



for (let i=hacker1.length-1; i > -1; i--)
  {backward +=hacker1[i]}

  console.log (backward)


  if (hacker1[0]<hacker2[0]){
    console.log ("The driver's name goes first")
  }

  else if (hacker1[0]>hacker2[0]){
    console.log ("Yo, the navigator goes first, definitely.")
  }

  else {console.log ("What?! You both have the same name?")}

// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit, ex at porttitor hendrerit, arcu nibh molestie lorem, ut tempus nunc nibh in velit. Maecenas ipsum sem, condimentum in mollis ut, mollis ut nisi. Pellentesque dapibus elit non rutrum sollicitudin. Aliquam accumsan faucibus felis a elementum. Praesent ante est, venenatis sit amet dui nec, interdum placerat quam. Sed arcu lorem, consectetur quis rutrum at, dictum et neque. Aliquam elementum, nibh nec pellentesque ullamcorper, quam dui suscipit erat, at porta elit leo non sem. Morbi eget cursus sem, non eleifend ligula. Nunc sed vestibulum ligula. Nullam posuere purus ante. Etiam bibendum finibus sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris molestie ligula vitae odio vulputate blandit. Donec at vehicula magna. Pellentesque vitae interdum justo, non pulvinar nunc. Aliquam erat volutpat. Vivamus pretium elit elementum turpis maximus, in pretium purus rutrum. Mauris nec finibus dolor, quis hendrerit velit. Etiam auctor libero mauris, placerat sollicitudin sem egestas vitae. Donec venenatis ante sed odio tincidunt malesuada. Praesent ac porttitor neque. In mi urna, aliquam et arcu a, venenatis ultricies dui. Pellentesque eu lorem lectus. Nullam porta luctus vestibulum. Cras pretium molestie arcu sed pellentesque. Sed varius dolor quis odio malesuada suscipit. Duis at malesuada lorem. Vestibulum laoreet arcu quis tempor molestie. Nulla pharetra elit lobortis aliquet ultricies. Nam dignissim posuere turpis. Phasellus tellus tortor, pulvinar ut risus eu, maximus feugiat erat. Suspendisse sed sagittis mauris. Morbi eget feugiat augue, sed accumsan lorem. Pellentesque sed sem nulla. Aenean finibus erat sit amet aliquet tincidunt."

console.log (longText.split(" ").length)

let etCount = 0
let longTextArray = longText.split(" ")

for (let i=0; i<longTextArray.length ; i++)

{if (longTextArray[i] === "et") {etCount += 1}}

console.log (etCount)

// Bonus 2


let phraseToCheck = "A man, a plan, a canal, Panama!"
let punctuationLess = phraseToCheck.replaceAll ("," , "").replaceAll (".","").replaceAll ("!","").replaceAll(" ","").replaceAll("?","")
let lowerCase = punctuationLess.toLowerCase()
let reverse =""


for (let i=lowerCase.length-1; i > -1; i--)
  {reverse +=lowerCase[i]}

  console.log (reverse)

if (reverse === lowerCase) {console.log ("This is a palindrom")}

else {console.log ("Not a palindrom")}