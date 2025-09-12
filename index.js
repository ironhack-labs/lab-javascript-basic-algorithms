// Iteration 1: Names and Input
let hacker1 = "Nidhin";
console.log("The Driver's name is " + hacker1);

let hacker2 = "Stalin";
console.log("The Navigator's name is " + hacker2);

// Iteration 2: Conditionals
function compareNames(driver, navigator) {
  if (driver.length > navigator.length) {
    return driver;
  } else if (driver.length < navigator.length) {
    return navigator;
  } else {
    return driver + " " + navigator;
  }
}

console.log(compareNames("seth", "rollins"));

// Iteration 3: Loops

function printName(driver) {
  let result = "";

  for (let i = 0; i < driver.length; i++) {
    result = result + driver[i].toUpperCase();
    if (i < driver.length) {
      result = result + " ";
    }
  }

  return result;
}
console.log(printName("nidhin"));

function reverseName(lame) {
  let revName = lame.split("").reverse().join("");
  return revName;
}
let lame = "jackie";
console.log(reverseName(lame));

let name1 = "Zayn";
let name2 = "Zayn";

if (name1 < name2) {
  console.log(name1 + " comes first in lexicographic order");
} else if (name1 > name2) {
  console.log(name2 + " comes first in lexicographic order");
} else {
  console.log("Both names are equal");
}
function conNum() {
  let longText =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus id ipsum interdum, quis scelerisque nisi auctor. Donec condimentum urna id hendrerit vehicula. Morbi eget velit arcu. Vestibulum vitae lobortis ex. Donec quis augue vel quam lacinia fringilla eu ut ligula. Integer sagittis finibus facilisis. In in rhoncus magna. Maecenas semper tellus est, ac ullamcorper ex congue ornare. Nunc lacinia pretium nunc, id aliquam est luctus quis. Ut et massa sagittis, feugiat leo non, feugiat dolor. Duis urna odio, varius nec rutrum eget, aliquet sit amet dui. Vivamus aliquam vitae diam vel lacinia. In tempus lacus ac lectus sagittis, nec maximus nisl lacinia. Phasellus sed massa non massa rhoncus condimentum eu sit amet elit. Donec sit amet ullamcorper odio.Donec vestibulum scelerisque neque at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur a dapibus dui. Curabitur tellus dui, eleifend non facilisis vel, condimentum nec est. Aliquam blandit mi ut dolor efficitur, eget tristique lectus porta. Donec vulputate erat libero, eu tristique nunc consectetur ornare. Etiam vel mattis quam. Etiam facilisis tortor eu tellus posuere, at varius lectus consequat. Sed sed ligula venenatis, aliquam eros a, euismod dui. Vestibulum ultricies ante sit amet orci vestibulum consectetur. Maecenas non dolor a odio mollis mollis in et erat. Duis vitae feugiat ligula, in sollicitudin lacus.Ut in arcu congue, malesuada tortor sagittis, rhoncus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lacinia nulla ut mi dapibus commodo. Vivamus sed felis imperdiet, rutrum lorem ut, cursus lectus. Aenean sed venenatis erat, pulvinar venenatis neque. Fusce efficitur neque ante, varius iaculis arcu volutpat nec. Sed eu ligula eu odio consectetur euismod. Duis id tortor tortor. Nam egestas lorem congue magna maximus, luctus pharetra ipsum mattis. Ut varius purus est, vel molestie lacus elementum ut. Donec tristique enim nec est laoreet, vel venenatis elit cursus. Vivamus eget eros justo. Sed luctus rhoncus tortor, quis aliquam arcu euismod eget. Etiam mattis pharetra pulvinar. Maecenas sodales nunc at ligula lacinia, at porttitor eros varius. Etiam a mauris vel massa bibendum semper. ";

  let count = 1;
  for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
      count = count + 1;
    }
  }
  return count;
}

function conEt() {
  let longText =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus id ipsum interdum, quis scelerisque nisi auctor. Donec condimentum urna id hendrerit vehicula. Morbi eget velit arcu. Vestibulum vitae lobortis ex. Donec quis augue vel quam lacinia fringilla eu ut ligula. Integer sagittis finibus facilisis. In in rhoncus magna. Maecenas semper tellus est, ac ullamcorper ex congue ornare. Nunc lacinia pretium nunc, id aliquam est luctus quis. Ut et massa sagittis, feugiat leo non, feugiat dolor. Duis urna odio, varius nec rutrum eget, aliquet sit amet dui. Vivamus aliquam vitae diam vel lacinia. In tempus lacus ac lectus sagittis, nec maximus nisl lacinia. Phasellus sed massa non massa rhoncus condimentum eu sit amet elit. Donec sit amet ullamcorper odio.Donec vestibulum scelerisque neque at elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur a dapibus dui. Curabitur tellus dui, eleifend non facilisis vel, condimentum nec est. Aliquam blandit mi ut dolor efficitur, eget tristique lectus porta. Donec vulputate erat libero, eu tristique nunc consectetur ornare. Etiam vel mattis quam. Etiam facilisis tortor eu tellus posuere, at varius lectus consequat. Sed sed ligula venenatis, aliquam eros a, euismod dui. Vestibulum ultricies ante sit amet orci vestibulum consectetur. Maecenas non dolor a odio mollis mollis in et erat. Duis vitae feugiat ligula, in sollicitudin lacus.Ut in arcu congue, malesuada tortor sagittis, rhoncus leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lacinia nulla ut mi dapibus commodo. Vivamus sed felis imperdiet, rutrum lorem ut, cursus lectus. Aenean sed venenatis erat, pulvinar venenatis neque. Fusce efficitur neque ante, varius iaculis arcu volutpat nec. Sed eu ligula eu odio consectetur euismod. Duis id tortor tortor. Nam egestas lorem congue magna maximus, luctus pharetra ipsum mattis. Ut varius purus est, vel molestie lacus elementum ut. Donec tristique enim nec est laoreet, vel venenatis elit cursus. Vivamus eget eros justo. Sed luctus rhoncus tortor, quis aliquam arcu euismod eget. Etiam mattis pharetra pulvinar. Maecenas sodales nunc at ligula lacinia, at porttitor eros varius. Etiam a mauris vel massa bibendum semper. ";

  let words = longText.split(" ");
  let wordCount = words.length;

  let etCount = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (word === "et") {
      etCount++;
    }
  }

  return (
    "Total words: " + wordCount + ", Number of times 'et' appears: " + etCount
  );
}

console.log(conNum());
console.log(conEt());
