// Iteration 1: Names and Input

let hacker1 = "Johnny";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Samuel";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

let hackerOne = `The driver has the longest name, it has ${hacker1.length} characters`; // hacker1
let hackerTwo = `It seems that the navigator has the longest name, it has ${hacker2.length} characters`; //hacker2
let hackerEqual = `Wow, you both have equally long names, ${hacker1.length} characters!`;

console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length > hacker2.length) {
  console.log(hackerOne);
} else if (hacker1.length < hacker2.length) {
  console.log(hackerTwo);
} else {
  console.log(hackerEqual);
}

let capitalName = "";

for (let i = 0; i < hacker1.length; i++) {
  capitalName = capitalName + hacker1[i] + " ";
}

console.log(capitalName.toUpperCase().slice(0, capitalName.length - 1));

// Iteration 3: Loops

let backwardsName = " ";
let lastIndex = hacker1.length - 1;

for (let i = lastIndex; i >= 0; i--) {
  backwardsName = backwardsName + hacker1[i];
}
console.log(backwardsName.slice(1));

let comparisonResult = hacker1.localeCompare(hacker2);
if (comparisonResult == -1) {
  console.log("The driver's name goes first");
} else if (comparisonResult == 1) {
  console.log("Yo, the navigator goes first, definitely");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit ligula ante, et eleifend velit porttitor in. Sed tempus, velit eu pulvinar venenatis, ante eros imperdiet est, in molestie est tellus suscipit tortor. Aenean nec dolor sollicitudin, auctor felis in, suscipit diam. Ut sodales neque eget felis molestie vestibulum. Donec tellus nibh, porttitor quis enim ut, pulvinar porta libero. Vivamus ut erat tellus. Mauris consectetur magna in gravida dignissim. Curabitur dignissim convallis sem id finibus. Quisque sed lacus nibh. Cras id rutrum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc hendrerit suscipit nunc non maximus. Vivamus quis purus eros. Integer ac hendrerit ex.
Maecenas aliquet, mi at lobortis dictum, nunc nulla auctor libero, ac volutpat nibh sem viverra massa. Fusce pretium convallis arcu vitae suscipit. Praesent ultrices pretium posuere. Nunc ac nisi ut lorem dapibus accumsan volutpat in diam. Suspendisse lacinia elementum rutrum. Phasellus eleifend mattis erat, sed gravida diam luctus accumsan. Etiam consequat, est sit amet aliquet tincidunt, quam neque rhoncus nibh, eget aliquam nunc odio eu purus. Pellentesque quis ante a orci vestibulum cursus et sed nisl. Vivamus interdum semper convallis. Nullam posuere metus imperdiet, pulvinar metus id, porttitor ex. Nunc sollicitudin quam eget tincidunt dignissim. Mauris sodales semper sapien, non vestibulum ligula eleifend sit amet. Vivamus vitae euismod metus, eget finibus lorem. Fusce elementum diam quis orci pharetra aliquam. Nulla sed quam lorem.
Quisque nunc lorem, ullamcorper eget arcu ut, egestas aliquet lacus. Proin aliquam odio vitae venenatis sodales. Nam volutpat vel nisi at ultrices. Mauris maximus ultricies libero a rutrum. Aliquam erat volutpat. Proin imperdiet viverra sem vitae aliquam. Sed id justo sit amet lectus vehicula pulvinar semper sit amet mauris. In risus arcu, imperdiet vel vulputate eget, consectetur egestas nunc. Integer et elementum nunc, nec eleifend elit. Fusce arcu massa, ultrices sit amet semper quis, molestie at ex.`;

function WordCount(a) {
  let totalSoFar = 0;

  for (let i = 0; i < a.length; i++)
    if (a[i] === " ") {
      totalSoFar += 1;
    }
  return totalSoFar + 1;
}

console.log(WordCount(longText));
