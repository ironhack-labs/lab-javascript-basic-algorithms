// Names and Input
const hacker1 = "Allison";
console.log(`The Driver's name is ${hacker1}` )
const hacker2=prompt("What is the hackers name?");
console.log(`The navigator's name is ${hacker2}`)

var nameLength1=hacker1.length;
var nameLength2=hacker2.length;

if (nameLength1>nameLength2) console.log(`The driver has the longest name it has ${nameLength1} characters.`)
else if (nameLength2>nameLength1) console.log(`Yo, navigator got the longest name, it has ${nameLength2} characters`)
else console.log(`wow, you both got equally long names, ${nameLength1} characters`)

var tempArray1 = [];


for (let i = 0; i < hacker1.length; i++) {

tempArray1.push(hacker1[i]+ " ")

}
console.log(tempArray1.join("").toUpperCase())

var tempArray2 = [];
for (let i = 0; i < hacker2.length; i++) {
tempArray2.push(hacker2[i])
}
console.log(tempArray2.reverse().join(""));

if (hacker1.charAt(0) < hacker2.charAt(0)) {
  console.log("The driver goes first!")
}
else if(hacker2.charAt(0) < hacker1.charAt(0)) {

  console.log("The navigator goes first, definitely!")
}
else console.log("What? You have the same name?")

//Palindrome

var pal=prompt


const test1 = "A man, a plan, a canal, Panama!"
const test2 = "not a palindrome"
const test3 = "racecar"

const palindromeTest = str => {
  // let newStr = str.split("").reverse().join("").toLowerCase()
//   do {
//     newStr = newStr.replace(" ", "").replace(",","").replace("!","")
//   } while (newStr.includes(" ") || newStr.includes(",") || newStr.includes("!",""))
//   if (newStr===str.split("").toLowerCase
// }
do {
  str = str.toLowerCase().replace(" ", "").replace(",","").replace("!","") 
} while (str.includes(" ") || str.includes(",") || str.includes("!",""))
if(str===str.split("").reverse().join("")) {
  return "palindrome"
}
else{
  return "not a palindrome"
}
}


console.log(palindromeTest(test1))


// Lorem ipsum generator

const loremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu sit amet ante fermentum tristique eget id neque. Integer scelerisque est vitae odio vestibulum ullamcorper. Proin malesuada diam eros, vel malesuada lectus maximus eget. Fusce scelerisque purus quis lobortis malesuada. Nunc sit amet tortor mattis, aliquet dui vitae, pellentesque lectus. Aenean convallis diam in turpis eleifend, sit amet feugiat justo molestie. Duis leo mauris, eleifend tristique neque sit amet, aliquam bibendum magna. Nunc sed mauris dui. Ut mollis sapien a felis sodales lobortis. In hac habitasse platea dictumst. Integer luctus convallis blandit. Maecenas urna ante, bibendum consequat risus et, pharetra gravida neque. Nam eu rhoncus sapien. Quisque eros nunc, ullamcorper ac est sit amet, egestas lobortis risus. Vestibulum urna tortor, elementum non lacus et, vehicula sagittis urna. Integer eleifend metus ligula, vitae cursus velit porta ut. Donec id nulla sed lacus varius sagittis sodales eget eros. Donec ac felis sit amet lectus sollicitudin imperdiet. Pellentesque neque mi, elementum at ullamcorper eget, tempus ac mi. Aliquam a metus mauris. Sed sed iaculis dolor. Nullam erat eros, egestas ultrices ante a, volutpat feugiat felis. Vivamus mollis blandit libero, sit amet gravida urna vulputate nec. Etiam et risus eu erat tempor elementum. Donec gravida id sapien at vestibulum. Vivamus imperdiet, libero non viverra volutpat, velit erat commodo mi, finibus aliquet massa augue eget nisl. Donec tempor, augue ac vestibulum commodo, quam diam facilisis magna, cursus semper ante sapien at purus. Nam ac metus luctus, maximus enim sit amet, viverra diam. Nunc lorem lectus, lacinia ac dui sit amet, tempus ornare nisl. Aenean rutrum gravida rutrum. Phasellus quis lectus erat. Etiam ut magna eget leo ullamcorper pulvinar eu sed mauris. Aliquam porttitor bibendum commodo. Nulla facilisi. Vivamus iaculis lorem nec ligula consequat tempor. In eu fermentum nisl. Nam auctor mi ac purus lobortis, quis vehicula urna faucibus. Duis dignissim quam ut dui imperdiet porta. Nullam laoreet non turpis quis hendrerit. Aenean varius, purus quis auctor pulvinar, metus felis varius erat, at maximus eros velit et nunc. Donec quis neque ex. Etiam eget dui at mauris dictum tristique fermentum nec tortor. Morbi in ex augue. Donec sit amet nisi a libero venenatis laoreet. Phasellus ultrices velit in auctor sollicitudin. Pellentesque placerat aliquam ipsum, vitae pharetra tellus. Sed molestie dui nisl, vitae viverra purus tempus id. Suspendisse auctor ultricies sapien, volutpat mattis nulla porttitor quis. Nam et ex non ligula semper egestas vel non risus. Nullam lobortis ultricies velit, in accumsan odio venenatis ac. Integer dolor justo, vestibulum in lobortis tempor, pellentesque non felis. Nam nec euismod nulla, sed mollis eros. Nulla libero purus, molestie ac tortor at, pellentesque lacinia diam. Fusce orci libero, iaculis non lobortis quis, tempor sit amet magna. Aenean quis fermentum nisi. Sed pretium lacus magna, sit amet luctus est feugiat sit amet."

const latinText = str => str.split(" ").length
  
const latinText2 = str => {
  return str.split(" ").filter(word => {
    return word === "et," || word === "et"
  }).length
}


console.log(latinText(loremIpsum))

console.log(latinText2(loremIpsum))









// let arraytest = "hello world whatever"

// const whatever = str => {
//   return str.split(" ").filter(word => {
//     return word.includes("hello")
//   })
// }

// console.log(whatever(arraytest))












