// Iteration 1: Names and Input
//1.1
let hacker1 = "Anonymous";
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
let hacker2 = "Guacamaya";
//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length}characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, XX characters!`);
}

// Iteration 3: Loops
//3.1
let result = "";
for (const value of hacker1) {
  result = result + " " + value.toUpperCase();
}
console.log(result);

//3.2
for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log(hacker2[i]);
}

//3.3

//bonus 1

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui diam, sagittis sit amet tortor quis, porttitor vulputate augue. Nulla laoreet ligula in quam dapibus, vitae posuere erat commodo. Cras suscipit vulputate metus a sollicitudin. Nunc massa lacus, dictum eget ultrices a, molestie sit amet augue. Maecenas a auctor enim, ut dignissim magna. Aliquam maximus, lectus dapibus sollicitudin varius, massa lectus finibus risus, vitae elementum ligula enim id purus. Ut pharetra ante ac velit egestas vehicula. Etiam sem sapien, elementum sed tempus sed, imperdiet at felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras facilisis lobortis massa, ut pretium diam facilisis non. Fusce vehicula aliquet arcu, non imperdiet quam. Pellentesque eu lorem quam. Cras dui massa, volutpat ac fringilla eu, aliquet placerat tellus. Praesent facilisis tortor velit, at laoreet mi condimentum eu.
Praesent vel scelerisque urna, a maximus erat. Aenean non augue dui. Praesent tempor est semper diam placerat vestibulum. Nulla quis sem imperdiet, rhoncus nisl id, consectetur lectus. Praesent ac dolor id nisl sodales fringilla. Sed lacinia purus mi, quis egestas odio malesuada in. Mauris aliquet tortor sit amet lacus tincidunt, eu semper tellus aliquam. Nam et varius quam, et accumsan elit.
Donec varius tincidunt libero et rutrum. Morbi lorem lectus, efficitur nec quam et, pharetra placerat enim. Nunc consectetur metus quis enim pretium pulvinar. Sed non mauris in odio auctor feugiat sit amet ac ipsum. In bibendum, nibh ac consequat ornare, sapien nibh dictum neque, vel consectetur sem leo id tellus. Nam finibus, tortor non venenatis ultrices, enim augue hendrerit nulla, nec mattis mauris metus id odio. Etiam ac ipsum sed libero viverra iaculis. Maecenas eleifend felis id augue euismod sagittis. Suspendisse sit amet feugiat magna. Aliquam sapien quam, posuere nec finibus quis, luctus vitae diam. Suspendisse magna urna, mollis vel ullamcorper ut, tincidunt sit amet lectus. Sed eget tristique massa. Mauris et eleifend orci, eget dignissim sem. Sed id est consectetur, ultricies justo at, aliquet ligula. Nunc posuere luctus tincidunt.`;

//count number of words
let paragraphArr = paragraph.split(" ");
console.log(`El string tiene ${paragraphArr.length} palabras`);

//count number of et
let etCount = 0;
for (let i = 0; i < paragraphArr.length; i++) {
  if (paragraphArr[i] === "et") {
    etCount += 1;
  }
}

console.log(`Aparece ${etCount} veces la palabra et en el string`);

//Check Palindrome

/* let isPalindrom = "Amor, Roma";
let sideA = [];
let sideB = [];

for (let j = 0; j <= isPalindrom.length; j++) {
  if (isPalindrom[j] === " " || isPalindrom[j] === ",") {
    continue;
  } else {
    sideA.push(isPalindrom[j]);
  }
}

for (let i = isPalindrom.length - 1; i >= 0; i--) {
  if (isPalindrom[i] === " " || isPalindrom[i] === ",") {
    continue;
  } else {
    sideB.push(isPalindrom[i]);
  }
}

sideA = sideA.join("").toUpperCase();
sideB = sideB.join("").toUpperCase();

if (sideA === sideB) {
  console.log("son palindromos", sideA, sideB);
} else {
  console.log("no son palindromos", sideA, sideB);
} */

//con una funcion

function checkPalindrome(string) {
  let sideA = [];
  let sideB = [];

  for (let j = 0; j <= string.length; j++) {
    if (string[j] === " " || string[j] === ",") {
      continue;
    } else {
      sideA.push(string[j]);
    }
  }

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === " " || string[i] === ",") {
      continue;
    } else {
      sideB.push(string[i]);
    }
  }

  sideA = sideA.join("").toUpperCase();
  sideB = sideB.join("").toUpperCase();


  if (sideA === sideB) {
    console.log("son palindromos",sideA, sideB);
  } else {
    console.log("no son palindromos",sideA, sideB);
  }
}

checkPalindrome("race car");
checkPalindrome("jose Luis");
checkPalindrome("Amor, Roma");
