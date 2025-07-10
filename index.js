// Iteration 1: Names and Input
const hacker1 = "Jorge";
console.log("The driver's name is " + hacker1)
const hacker2 = "Pablo";
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
result = "";
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    result += " ";
  }
}
console.log(result);

let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed); 

let result2;
for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
  if (hacker1[i] < hacker2[i]) {
    result2 = -1; // hacker1 comes first
    break;
  } else if (hacker1[i] > hacker2[i]) {
    result2 = 1; // hacker2 comes first
    break;
  }
}
if (result2 === undefined) {
  if (hacker1.length < hacker2.length) {
    result2 = -1;
  } else if (hacker1.length > hacker2.length) {
    result2 = 1;
  } else {
    result2 = 0;
  }
}
if (result2 === -1) {
  console.log("The driver's name goes first.");
} else if (result2 === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1: Lorem Ipsum
let longText = `
Etiam eget mi non nulla faucibus luctus eget sed metus. Donec a nibh sit amet nulla ultrices vulputate non nec purus. Nam vel justo dignissim, venenatis diam vel, molestie lectus. Praesent eget lectus a mauris iaculis sodales vel eu neque. Cras efficitur consequat dui. Nullam tristique viverra dolor, eget eleifend dui viverra ut. Ut lacinia laoreet nisl eget venenatis. Pellentesque erat urna, rutrum in lobortis in, ultrices sed mauris. Curabitur et vestibulum ante. Donec a elit metus. Curabitur ornare dapibus ligula. Fusce ut nulla eu mauris condimentum luctus egestas in eros. Integer elementum pulvinar urna at varius. 
Maecenas sit amet leo quis lacus accumsan accumsan. In et eros dolor. Nulla facilisi. Quisque aliquet felis nec cursus lobortis. Nunc facilisis rhoncus ante non condimentum. Nunc commodo vestibulum felis at malesuada. Fusce tempus et quam nec varius. Vivamus at ligula faucibus, consequat sem sit amet, ullamcorper neque. Donec placerat mi non ligula porttitor, et mollis ipsum rhoncus. Suspendisse ut nibh sollicitudin, tincidunt nisl sit amet, congue nisl. Sed eleifend turpis vitae massa sollicitudin, sit amet hendrerit nunc maximus. Phasellus leo arcu, pharetra eu turpis in, vehicula luctus sem. Nulla in aliquet mauris. Nam faucibus, tellus a ullamcorper sagittis, magna quam venenatis ipsum, ac elementum purus diam vitae elit. Nulla a ullamcorper quam. 
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed efficitur diam sit amet tortor semper, vitae fermentum ligula congue. Suspendisse vestibulum neque eu semper egestas. Curabitur a felis sit amet orci porta commodo eget viverra elit. Nunc in sapien in orci pharetra varius. Donec non eleifend nisi. Donec mauris felis, consectetur tempor leo sed, ornare sollicitudin ipsum. Nulla malesuada enim pellentesque molestie ultrices. Praesent vel posuere neque, nec placerat massa. Integer commodo est vitae sem tincidunt, ac fermentum enim eleifend. Phasellus vitae diam ultrices, porttitor risus vitae, placerat nisi.
`;
console.log(longText.split(" ").length);
console.log(longText.match(/et/g).length);

// Bonus 2: Palindromes
function isPalindrome(str) {
  const cleanStr = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, Panama!"));