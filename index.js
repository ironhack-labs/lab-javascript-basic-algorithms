// Iteration 1: Names and Input
let hacker1 = "Eleanor"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Marta"
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals

let driver = "Eleanor"
console.log(`The driver's name is ${driver}`)

let navigator = "Marta"
console.log(`The driver's name is ${navigator}`)

if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`)
  } else if (driver.length < navigator.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
  }

// Iteration 3.1: Loops

let driver = "Eleanor"

let driverSpaces = '';

for (let i = 0; i < driverName.length; i++) {
  driverSpaces += driverName[i].toUpperCase() + ' ';
}
console.log(driverSpaces)

// Iteration 3.2: Loops

let navigatorName = "Marta";
let navigatorNameReverseOrder = '';

for (let i = navigatorName.length-1; i>=0; i--) {
navigatorNameReverseOrder += navigatorName[i]
}

console.log(navigatorNameReverseOrder)


// Iteration 3.3: Loops

let driverName = "Eleanor";
let navigatorName = "Marta";

let minLength = Math.min(driverName.length, navigatorName.length);
let result = 0;

for (let i = 0; i < minLength; i++) {
  result = driverName[i].localeCompare(navigatorName[i]);
  }


if (result < 0) {
  console.log("The driver's name goes first.");
} else if (result > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//bonus iteration 1.1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus condimentum metus ac egestas. Integer aliquet justo quis varius finibus. Morbi cursus augue purus. Nam egestas vehicula orci. Phasellus a lectus at tellus vestibulum cursus. Praesent a est id mi scelerisque dictum eget et libero. Proin quis leo ac massa vehicula ultrices. Suspendisse lacinia, mi at luctus iaculis, tellus metus rutrum ante, efficitur vulputate mi sem in massa. Nullam dignissim est id lacinia sagittis. Suspendisse eu libero volutpat, mattis ex vel, tempus quam. Morbi gravida nibh nec felis varius hendrerit. In luctus, erat sit amet porttitor aliquet, arcu nibh gravida nibh, eget mattis est urna eu enim. Ut convallis orci felis, non convallis magna pretium ut. Suspendisse ac dui efficitur, mollis leo ut, egestas sem. Etiam lacinia rhoncus purus sit amet varius. Ut in imperdiet felis, vulputate maximus enim. Duis bibendum laoreet accumsan. Fusce facilisis eget lacus id fringilla. Mauris suscipit ac lectus in rhoncus. Quisque egestas, leo sed fringilla facilisis, odio lectus pharetra lorem, porttitor euismod lacus sem a dolor. Integer interdum, mi ac interdum dignissim, lectus nunc varius dui, in dictum sapien diam nec diam. Nulla et ultricies felis. Donec vel justo purus. Aenean pharetra venenatis odio, a porttitor arcu condimentum ornare. Maecenas auctor mauris quis mauris mollis, vitae sagittis justo ullamcorper. Nullam fermentum dictum mattis. Sed accumsan nec mi ut interdum. Nullam finibus rutrum sem vestibulum pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed porta molestie congue. Nam vel neque orci. Proin quis nunc vitae leo porttitor semper vitae eu lacus. Sed sit amet nibh at nisl porta dapibus ac in diam. Aliquam at tellus gravida mauris aliquet dapibus at et libero. Ut scelerisque molestie purus, non accumsan lorem scelerisque at. Vivamus at aliquet diam, blandit aliquam ligula. Maecenas massa odio, tincidunt sed mi quis, scelerisque luctus dui. Donec nec urna finibus, tincidunt ligula ac, convallis ante. Maecenas luctus libero sit amet porta hendrerit. Praesent ipsum dui, tempus ut mattis et, mollis sit amet lorem. Quisque hendrerit massa urna, id bibendum ex ornare a. Maecenas scelerisque aliquet elit, vitae efficitur leo porta et. Quisque vulputate, velit nec auctor dignissim, nunc ligula tincidunt leo, non maximus ante ipsum non nisl."

console.log(longText.length);

// Bonus Iteration 1.2:

let et = "et";

let numberOfEt = longText.split(et).length

console.log(numberOfEt);

// Bonus Iteration 2: