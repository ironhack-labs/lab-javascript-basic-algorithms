// Iteration 1: Names and Input
const hacker1 = "José Luis";
const hacker2 = "Raquel";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function getLongestName(name1, name2) {
  if (name1.length > name2.length) {
    return `The driver has the longest name, it has ${hacker1.length} characters.`;
  } else if (name2.length > name1.length) {
    return `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
  } else {
    return `Wow, you both have equally long names, ${hacker2.length} characters!`;
  }
}

// Iteration 3: Loops

//3.1
function changeName(name1) {
  let newName = "";
  for (let i = 0; i < hacker1.length; i++) {
    newName = newName + hacker1[i];
  }
  return newName.toUpperCase().split("").join(" ");
}

//3.2

const hacker2 = "Raquel";

function getReserve(name) {
  let reverseName = "";
  for (let i = 0; i < name.length; i++) {
    reverseName = name[i] + reverseName;
  }
  return reverseName;
}

//3.3
function hackersOrder(name1, name2) {
  let number = name1.localeCompare(name2);

  if (number === -1) {
    return `The driver's name goes first.`;
  } else if (number === 1) {
    return `Yo, the navigator goes first definitely.`;
  } else if (number === 0) {
    return `What?! You both have the same name?`;
  }
}

//Bonus 1

const loreIpsum3 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat congue sem, scelerisque vehicula augue ullamcorper ac. Nunc ex leo, tristique vel enim sit amet, mattis eleifend diam. Mauris consectetur felis mi, eget egestas est blandit et. Proin at leo augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus rutrum lacinia ipsum in finibus. Integer interdum lacus ut ipsum varius, quis tincidunt orci bibendum. Maecenas dignissim mi est, sit amet pellentesque purus aliquam id. Vestibulum convallis vel neque ut aliquam.Cras dapibus augue eget turpis commodo dapibus. Mauris nec nulla mattis nulla laoreet laoreet ut tempor orci. Pellentesque sed ante maximus turpis condimentum posuere et a velit. Etiam molestie, libero eu porttitor pretium, magna diam rhoncus sem, at porta diam lorem pretium ante. Vestibulum finibus varius neque, nec pulvinar sem. Nam aliquam blandit diam non viverra. Quisque gravida condimentum tempor. Nunc at bibendum dolor. Curabitur dignissim ex in erat semper tristique. Donec ut metus pellentesque, blandit mauris sed, cursus turpis. Phasellus accumsan ligula sit amet porta dapibus. Fusce commodo sapien et dui consectetur mattis.Duis iaculis mauris vel neque vulputate rutrum. Mauris at imperdiet quam. Fusce iaculis interdum lacinia. Proin sit amet venenatis arcu. Praesent at lacus eu enim lacinia egestas in at dolor. Integer nec risus ligula. Aenean ut dictum sapien, ac tempus nunc.";
