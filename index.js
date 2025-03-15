// Iteration 1: Names and Input

let hacker1 = "Andy";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bill";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function nameLengths(name1, name2) {
  let lenghtOfName = "";

  if (hacker1.length > hacker2.length) {
    let lenghtOfName = console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else if (hacker2.length > hacker1.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
  } else if (hacker1.length == hacker2.length) {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  }
  return lenghtOfName;
}
console.log(nameLengths(hacker1, hacker2));

// Iteration 3: Loops
function spellOut(name) {
  let driverSpelled = "";

  for (i = 0; i < hacker1.length; i++) {
    driverSpelled += hacker1[i].toUpperCase() + " ";
  }
  return driverSpelled;
}

let namedDriver = spellOut(hacker1);
console.log(namedDriver);

function nameReverse(name) {
  let navigatorReversed = "";

  for (j = hacker2.length - 1; j >= 0; j--) {
    navigatorReversed += hacker2[j];
  }

  return navigatorReversed;
}

let backwardNavigator = nameReverse(hacker2);
console.log(backwardNavigator);

function nameCheck(name1, name2) {
  let checkedName = "";

  if (namedDriver < backwardNavigator) {
    let checkedName = console.log("The driver's name goes first.");
  } else if (backwardNavigator < namedDriver) {
    let checkedName = console.log("Yo, the navigator goes first, definitely.");
  } else if (namedDriver === backwardNavigator) {
    let checkedName = console.log("What?! You both have the same name?");
  }

  return checkedName;
}

console.log(nameCheck(namedDriver, backwardNavigator));

//Bonus 1

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet elit nunc. Ut vel sollicitudin leo. Donec suscipit porta odio, eu sodales quam vulputate sed. Nam congue, ante sit amet faucibus egestas, justo massa euismod mauris, eget egestas lorem mauris vitae odio. Aliquam in iaculis libero. Morbi iaculis, eros nec bibendum rhoncus, libero mi tincidunt nunc, nec gravida mauris dolor eu magna. Morbi interdum enim sit amet est scelerisque, sit amet ullamcorper nisi porttitor. Phasellus felis ante, dapibus quis semper nec, mollis non nulla. Quisque quis elit tellus. Cras quam dui, malesuada et tortor non, convallis ornare nisl. Fusce fermentum egestas interdum. Suspendisse enim augue, faucibus at sapien nec, vulputate tempor mi. Pellentesque maximus condimentum nunc nec feugiat. Pellentesque cursus sapien a eleifend congue. Vestibulum dictum mattis nibh. Aliquam erat volutpat. Ut aliquet sagittis mi, vel consequat velit varius non. Nulla in dictum orci, vitae aliquam quam. Nam sit amet aliquet mi. Suspendisse eu massa lacinia, elementum magna sit amet, tristique ante. Praesent aliquam tristique lorem non cursus. Nulla faucibus finibus egestas.Mauris suscipit tempus ligula eget hendrerit. Vivamus egestas dictum justo. Sed enim eros, laoreet eget massa ac, ultricies maximus ligula. Duis placerat ornare enim vel aliquam. Nam fringilla nisl in nulla rhoncus pellentesque. Sed imperdiet bibendum felis, ut hendrerit elit cursus non. Nam ut ante felis. Quisque placerat consectetur magna, id consequat enim imperdiet sit amet. Sed sit amet ipsum eros. Sed maximus condimentum risus quis mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla justo libero, ullamcorper non pharetra porttitor, hendrerit sed eros. Pellentesque vel sapien ut tortor dignissim volutpat ut non sapien.";

function numberCount(wordsToCount) {
  let count = 0;

  for (let i = 0; i < wordsToCount.length; i++) {
    if (wordsToCount.charAt(i) === " ") count += 1;
  }
  return count;
}

console.log(numberCount(longText));
