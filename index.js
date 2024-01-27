// Iteration 1: Names and Input
let hacker1 = "Juan";
console.log("The driver's name is " + hacker1);

let hacker2 = "Vivian";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
const lengthHacker1 = hacker1.length;
const lengthHacker2 = hacker2.length;

if (lengthHacker1 > lengthHacker2) {
  console.log(
    `The driver has the longest name, it has ${lengthHacker1} characters.`
  );
} else if (lengthHacker2 > lengthHacker1) {
  console.log(
    `It seems the navigator has the longest name, it has ${lengthHacker2} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${lengthHacker1} characters!`
  );
}

// Iteration 3: Loops
let driverName = hacker1;
//to create an empty string to store formatted name
let spacedDriverName = "";

for (let i = 0; i < driverName.length; i++) {
  //to add uppercase to the string
  spacedDriverName += driverName[i].toUpperCase();

  //add space if it is not the last character
  if (i < driverName.length - 1) {
    spacedDriverName += " ";
  }
}
console.log(spacedDriverName);

// Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let navigatorName = hacker2;
let reversedNavigatorName = "";

for (let i = navigatorName.length - 1; i >= 0; i--) {
  reversedNavigatorName += navigatorName[i];
}
console.log(reversedNavigatorName);

//arranging according to lexicographic order
let compareNames = (name1, name2) => {
  const minLength = Math.min(name1.length, name2.length);

  for (let i = 0; i < minLength; i++) {
    // Convert to lowercase for case-insensitive comparison
    const char1 = name1[i].toLowerCase();
    const char2 = name2[i].toLowerCase();

    if (char1 < char2) {
      return -1;
    } else if (char2 > char1) {
      return 1;
    }
  }
  return name1.length - name2.length;
};

const compareResult = compareNames(hacker1, hacker2);

if (compareResult < 0) {
  console.log("The driver's name goes first.");
} else if (compareResult > 0) {
  console.log("Yo, the navigator goes first, definitely");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1
let lorem = `
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id mi tincidunt, luctus justo et, faucibus libero. Suspendisse potenti. Integer maximus tempus consequat. Morbi quis tortor ipsum. Nunc ut eros mattis lorem mollis condimentum rhoncus id sapien. Sed diam turpis, aliquam eget lacus sit amet, consequat placerat nulla. Ut venenatis a ex congue fermentum. Etiam sit amet elit felis. Integer tempor sem quis dolor pharetra, pellentesque ornare odio interdum. Integer fringilla tortor lectus, in lacinia sapien egestas eget. Aliquam eget tincidunt purus. Phasellus viverra nec dolor id dapibus.

// Proin sem nisl, vulputate quis urna tempor, feugiat auctor libero. Quisque eu velit mauris. Aliquam justo orci, vulputate vel quam ut, vehicula pulvinar mi. Vestibulum vel nisl ante. Ut condimentum elit a magna placerat, a tempor lectus luctus. Sed sodales congue magna at tempus. Pellentesque tincidunt ante nec lacus blandit hendrerit. Ut vitae dignissim ante. In sit amet erat ac nisi dapibus tempor vitae bibendum ante. Aenean tristique augue ac mauris viverra, eu molestie massa volutpat. Curabitur dignissim diam eget felis malesuada mollis a id odio. In ut dui sed elit consectetur egestas. Sed pretium vel dolor non semper.

// Sed a consequat metus. In in magna sit amet neque aliquet vestibulum. Suspendisse ac libero non leo tincidunt venenatis. Phasellus tincidunt pellentesque libero in scelerisque. Duis bibendum sagittis dolor, et dictum ante condimentum sit amet. Integer vel pellentesque libero, scelerisque auctor ante. Donec aliquet risus at mattis dictum. Ut vitae faucibus risus.`;

// const longText = lorem.trim();

// const wordCount = longText.split().length;

// const etCount = longText.split(" et ").length - 1;

// console.log("Number of words:", wordCount);
// console.log("Number of occurrences of 'et':", etCount);
