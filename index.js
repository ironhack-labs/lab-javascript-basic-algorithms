const hacker1 = "asdasd"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "asdsadx"
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name with ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name with ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

let newDriversName = "";
for(let i=0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName.trim());

let reversedName = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  const charac = hacker2[i]
  reversedName += charac
}
console.log(reversedName)


// BONUS 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis posuere nisl. Cras vitae dolor quis diam blandit faucibus. Mauris dapibus commodo augue, suscipit faucibus sapien laoreet eget. Mauris eget vulputate ligula, vel ornare purus. Nam ex leo, tincidunt a sapien at, feugiat pretium erat. Aliquam vitae vehicula leo. Cras et finibus erat. Donec molestie, tellus in tristique ultrices, ligula lorem lobortis justo, vel venenatis sapien eros a felis. Quisque bibendum blandit fringilla. Sed lacinia nulla lectus. Proin volutpat dictum ultrices. Mauris hendrerit purus mauris, non sollicitudin nulla eleifend eu. Fusce auctor erat aliquam purus semper, quis vulputate leo auctor. Aliquam tristique neque sit amet accumsan porttitor. Aenean ut ullamcorper elit. Phasellus sollicitudin ornare condimentum.Nunc ligula neque, gravida eu cursus ac, rutrum in justo. Nam sed nisi neque. Aenean laoreet vulputate nisl, non mollis ante pharetra eget. Suspendisse potenti. Sed ullamcorper metus dolor, vel sollicitudin enim maximus vel. Proin lobortis nisl non fermentum blandit. Duis ac tincidunt nisl.Donec mauris leo, fringilla ut nisl sit amet, tristique aliquet nisl. Nam euismod mi ultrices dolor scelerisque, vitae elementum justo pharetra. Ut porta mauris sed blandit elementum. Suspendisse massa erat, finibus sed mollis non, lobortis ac nulla. Nulla felis nunc, ullamcorper in risus et, vehicula ullamcorper felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus bibendum metus id turpis commodo euismod. Ut vel ante ac augue pretium sodales ac a diam. Morbi interdum pulvinar tellus sit amet laoreet. Pellentesque non blandit nisl. Vestibulum non porta velit, sed dictum dui. Ut malesuada imperdiet tellus, vel blandit quam. Phasellus at lacus eu libero ornare molestie a nec orci. Donec sed accumsan neque. Sed condimentum tempor felis at pretium. Quisque sollicitudin lobortis nulla, id vestibulum enim aliquet vitae."

const allWords = longText.length
let count = 0 

for (let i = 0; i < longText.length; i++) {
  const twoChars = longText[i] + longText[i + 1];
  
  if ( twoChars === "et" ) {
    count++;
  }
}
console.log(count)

// BONUS 2

// Hay que usar function o  join(), reverse()