// Iteration 1: Names and Input
let hacker1 = "Alejandro";
console.log(hacker1);
let hacker2 = "Laura";
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }

// Iteration 3.1: Loops
let driverUpper = "";

for (let i = 0; i < hacker1.length; i++) {
  if (i !== hacker1.length - 1) {
    driverUpper += hacker1[i].toUpperCase() + ' ';
  } else {
    driverUpper += hacker1[i].toUpperCase();
  }
}
console.log(driverUpper);

// Iteration 3.2: Loops
let navigatorReverse = "";

for (let i = hacker2.length - 1; i >= 0 ; i--) {
  navigatorReverse += hacker2[i];
}
console.log(navigatorReverse);

// Iteration 3.3
if (hacker1.localeCompare(hacker2) < 0 ) {
    console.log("The driver's name goes first");
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }

  //Bonus 1 (words)
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit sit amet nulla congue rhoncus. Cras tempor nisl at est gravida cursus. Donec malesuada dolor in diam efficitur pretium ut id lectus. Sed in urna suscipit, maximus mauris quis, ultrices nisl. Vestibulum efficitur placerat lectus, at dignissim nunc commodo at. Quisque tempus dictum pretium. Morbi vehicula aliquet venenatis.Praesent dapibus ante in sem hendrerit, iaculis faucibus ligula feugiat. Phasellus semper sodales eros quis iaculis. Curabitur id massa bibendum, lacinia erat non, facilisis tortor. Fusce eu quam molestie, luctus enim ac, suscipit magna. Maecenas luctus elit et velit porta varius. Sed enim erat, maximus vitae scelerisque nec, tincidunt vitae neque. Proin nec tellus sit amet orci fringilla semper. Maecenas sapien mi, lobortis ac eleifend quis, condimentum et nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel pretium erat, a iaculis risus. Praesent quis massa sodales, dignissim dolor nec, tincidunt enim. Aenean sollicitudin ex et ex sagittis laoreet. Suspendisse in tortor non leo maximus vestibulum. Vestibulum varius ultricies egestas.Curabitur vehicula lacus sem, viverra consectetur libero ultrices quis. Sed at dictum eros, at lobortis odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed facilisis, urna id aliquam bibendum, ex magna ultrices nisi, eu pellentesque metus justo eget tortor. Nam euismod vitae magna at lacinia. Integer et massa sit amet sapien ultrices mollis vel vel neque. Aenean tristique luctus molestie. Vestibulum porttitor eros erat, vel cursus ligula mollis id. In vel sapien ullamcorper enim congue porta rhoncus sit amet nibh. Duis velit ipsum, sollicitudin eu nunc laoreet, tempus eleifend nunc. Nullam a diam faucibus turpis faucibus eleifend non ut orci. Nullam non massa tellus. Mauris bibendum tincidunt tellus a viverra. Duis dapibus dui felis. Quisque a pellentesque purus."

function countWords(text) {
  return lorem.split(" ").length;
}
console.log(countWords(lorem));

// Bonus 1(et)
let counter = 0;

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === "e") {
    if (lorem[i + 1] === "t") {
      counter++
    }
  }
}
console.log(counter);