// Iteration 1: Names and Input

const hacker1 = "Fred";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Ted";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

console.log(
  hacker1.length > hacker2.length
    ? `The driver has the longest name, it has ${hacker1.length} characters`
    : hacker1.length === hacker2.length
    ? `Wow, you both have equally long names, ${hacker1.length} characters`
    : `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
);

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
}

for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie elementum ligula, eget pharetra nibh convallis et. Pellentesque tristique scelerisque lectus ac porttitor. Sed dapibus tellus varius, maximus urna id, sagittis nulla. Quisque hendrerit lacus a neque sollicitudin, id porta nisl dictum. Donec efficitur ac neque vel condimentum. Duis in lacus ligula. Fusce semper erat ac urna blandit, id blandit tortor maximus. Integer tempor nisl ut faucibus maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed efficitur lorem vitae ipsum lobortis, ut tincidunt justo ornare. Maecenas posuere felis nec est maximus, a egestas tellus convallis. Nam pharetra faucibus nunc, id hendrerit enim blandit cursus. Proin ac enim vel purus consequat accumsan vitae non nisi. Nam ut mi vitae massa laoreet laoreet. Aenean id magna venenatis, euismod quam eget, tempus mi. Etiam vel augue facilisis, tempus dolor in, condimentum metus.

Aenean vitae mauris suscipit, varius risus sit amet, pharetra nisi. Cras sed pulvinar urna, sit amet vehicula orci. Suspendisse dictum dignissim aliquet. Nullam posuere sed eros sit amet tincidunt. Suspendisse potenti. Vivamus ut diam quis magna molestie aliquet. Vestibulum volutpat lorem vel varius pharetra. Nam molestie, odio eleifend lobortis consequat, ligula dui fermentum sapien, faucibus ornare lacus nulla ut ipsum. Integer dignissim, velit at blandit interdum, mauris erat finibus sem, sed elementum nibh nulla eu sapien. Maecenas dignissim hendrerit pellentesque.

Phasellus quam orci, scelerisque quis ornare a, euismod at ex. Mauris sapien nisi, mollis in elementum vitae, porta nec libero. Fusce dapibus tincidunt turpis, in varius lacus posuere ut. Aliquam accumsan nec arcu sed ultricies. Pellentesque feugiat, risus quis luctus commodo, ligula justo volutpat enim, vitae vehicula nibh tortor nec nibh. Duis sit amet sapien dui. Vestibulum at eleifend nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ut facilisis erat. Nunc quam turpis, ullamcorper sodales tempus a, vehicula id velit. Suspendisse ac cursus purus, in imperdiet quam. Sed elementum felis et feugiat sodales. Fusce ac suscipit quam. Phasellus pellentesque ante vel sagittis placerat. In purus leo, viverra quis odio in, volutpat pellentesque diam.`;

console.log(longText.split(" ").length);

console.log(longText.split("et").length - 1);

// Bonus 2

const phraseToCheck = "tene";

const phraseChecker = (phrase) => {
  for (let i = 0; i < Math.floor(phrase.length / 2); i++) {
    if (phrase[i] !== phrase[phrase.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(phraseChecker(phraseToCheck));
