console.log("I'm ready!")
// Iteration 1: Names and Input
var hacker1= "David Torres"
console.log(hacker1
)
console.log(`The driver's name is ${hacker1}`)

var hacker2 = "Maylen Nunez"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
// switch (hacker1.length){
//   case (hacker1.length > hacker2.length):
//   console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
//   break;
//   case hacker1.length < hacker2.length:
//   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
//   break;
//   case hacker1.length = hacker2.length:
// console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
// }

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1
console.log("--- 3.1---")
function toCapitals() {
  var capArr = [];
  for(let i=0;i<hacker1.length; i++) {
        capArr.push(hacker1[i].toUpperCase())
      }
      console.log(capArr.join(" "))
  }
  toCapitals(hacker1)

console.log("--- 3.2---")
function toReverse() {
  var revArr = [];
  for(let i=0;i<hacker2.length; i++) {
        revArr.push(hacker2[i])
      }
      console.log(revArr.reverse().join(""))
  }
  toReverse(hacker2)

console.log("--- 3.3---")

var nameArr =[];
nameArr.push(hacker1, hacker2)
nameArr.sort()
if (nameArr[0] === nameArr[1]){
  console.log("What?! You both have the same name?");
} else if (nameArr[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (nameArr[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely.");
}

console.log("--- Bonus 1---")
var loremGenerator = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed tempus ligula, in imperdiet massa. Phasellus in arcu cursus, porttitor lectus eget, feugiat massa. Maecenas lorem nulla, malesuada commodo commodo non, euismod a lectus. Ut finibus iaculis egestas. Donec eleifend, nunc at sodales placerat, tellus sapien ultrices magna, et fringilla leo enim ac lorem. In sed lacus ac nunc volutpat consequat sit amet eget tellus. Duis lacus risus, accumsan eget tincidunt a, cursus sit amet dui. Proin sagittis, metus quis laoreet faucibus, nunc tortor suscipit turpis, sed tincidunt urna sapien vitae lectus.Integer elementum elit porttitor, luctus nibh eget, euismod ligula. Nunc viverra placerat nibh, eget viverra felis finibus sit amet. Nulla eget rutrum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Pellentesque eget tellus non risus dignissim lacinia eu at mauris. Fusce eget tempor tortor. Proin sed ante tincidunt, gravida velit ac, viverra massa. Nam ac felis at orci porttitor vehicula. Ut consequat, elit sed ultrices porttitor, magna nisl scelerisque justo, ac tincidunt tortor arcu et dui. Sed non purus justo. Nulla facilisi. Donec vitae massa vehicula, accumsan arcu vitae, iaculis purus. Donec volutpat finibus venenatis. Cras eget metus non felis sodales rhoncus non id ante. Aliquam sed viverra eros, ac cursus mauris. Nulla sit amet efficitur urna. Duis id mi rutrum, viverra est non, venenatis leo. Cras sed tincidunt nisi. Proin dictum suscipit facilisis."