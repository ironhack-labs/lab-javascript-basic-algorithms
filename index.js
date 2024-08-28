// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`"The driver's name is ${hacker1}"`)
const hacker2 = "Oliver";
console.log(`"The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
function checkTheNames() {
  console.log(hacker1.length);
  if (hacker1.length > hacker2.length) {
    console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker2.length} characters!`
    );
  }
}
checkTheNames();

// Iteration 3: Loops

function lexicalOrder(firstName, secondName) {
  const temp = firstName.localeCompare(secondName);
  if (temp > 0) {
    console.log(`The driver's name goes first.`);
  } else if (temp < 0) {
    console.log(`Yo, the navigator goes first, definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }
}

// #### Bonus 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ornare lectus. Ut magna est, scelerisque nec lacinia et, mollis sit amet augue. Cras vitae facilisis erat, vitae maximus leo. Donec nibh arcu, luctus eget felis quis, tempor hendrerit leo. Donec aliquam justo quis diam efficitur, in elementum est placerat. Pellentesque ultrices, metus eu rutrum porttitor, dolor nibh tincidunt nunc, et rhoncus arcu metus at risus. Sed gravida varius urna at sagittis.Etiam faucibus eu felis et pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae eros porttitor ante posuere placerat in ac mi. Quisque et consectetur turpis, in volutpat sem. Integer id nulla id metus consequat ornare. Phasellus ut ullamcorper ligula. Morbi rutrum dolor sed malesuada vulputate. Quisque ac ipsum a sapien malesuada pharetra. Vestibulum efficitur facilisis lacus vitae imperdiet. Maecenas vestibulum non magna in mattis. Suspendisse sed aliquam nulla. Mauris purus nibh, vulputate non placerat et, fermentum ut eros. Donec in nisl quis sapien accumsan porttitor ut eu orci. Suspendisse vel malesuada velit. Cras posuere tellus non mi volutpat lacinia. In nibh lectus, viverra nec libero sed, ullamcorper auctor justo. Nunc enim leo, gravida in aliquam sed, aliquam nec justo. Curabitur et aliquet tellus. Donec auctor vehicula diam, eget dictum ante. Donec ac sodales magna. Suspendisse dapibus leo tortor, sed ultricies risus tristique a. Maecenas sagittis dignissim orci, sed rutrum orci dapibus id. Vivamus eleifend tincidunt cursus. Phasellus sed lectus nisi. Nullam finibus mi ut elementum congue.`;
function counter (str) {
  const checkedString = str.toLowerCase();
  let count = 0;
  let latinWord = 0;
  let insideTheWord = false;

  for(let i = 0; i < str.length; i++){

    if(str[i] !== ' ' && !insideTheWord) {
      count++;
      insideTheWord = true;
    } else if (str[i] === ' '){
      insideTheWord = false;
    }
    if(str[i - 1] === ' ' && str[i] === 'e' && str[i + 1] === 't'){
      latinWord++;
    }
  }
  return {
    count: count,
    latinWord: latinWord,
  };
}

console.log(counter(longText))

// #### Bonus 2:

let phraseToCheck = "Was it a car or a cat I saw?";

function polindrome(str) {
  let checkedString = "";
  let reverseStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "." || str[i] === "?" || str[i] === "," || str[i] === "!") {
      continue;
    }
    checkedString += str[i];
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "." || str[i] === "?" || str[i] === "," || str[i] === "!") {
      continue;
    }
    reverseStr += str[i];
  }
  return checkedString.replaceAll(' ', "").toLocaleLowerCase() ===
    reverseStr.replaceAll(' ', "").toLocaleLowerCase()
  ;
}
console.log(polindrome(phraseToCheck));
