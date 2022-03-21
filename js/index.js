// Iteration I

let hacker1 = "Mariana";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Marco";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration II

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`);
}


// Iteration 3

let hacker1Uppercase = "";

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i+1]) {
  hacker1Uppercase += hacker1[i].toUpperCase() + " ";
  } else {
    hacker1Uppercase += hacker1[i].toUpperCase();
  }
  
}
console.log(hacker1Uppercase);


let hacker2Reverse = "";

for (let i = hacker2.length -1 ; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);



let compareStringsLexicographic = hacker1.localeCompare(hacker2);
if (compareStringsLexicographic < 0) {
  console.log("The driver's name goes first.");
} else if (compareStringsLexicographic > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// Bonus I

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor leo in eros consectetur finibus. Integer neque tortor, eleifend eu auctor et, placerat ac libero. Pellentesque commodo accumsan eros sed interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam orci tortor, luctus in lobortis nec, mattis eget lacus. Sed luctus lacinia est et dictum. Donec scelerisque ac ex sed cursus. Nam tempus dignissim nulla, a placerat purus commodo ac. Curabitur vestibulum mauris in hendrerit ullamcorper. In vel libero nisi. Etiam vehicula luctus quam, quis eleifend magna placerat ullamcorper. Praesent vestibulum dictum scelerisque. Quisque aliquam elementum ligula sit amet gravida. Praesent justo nisl, feugiat eget mauris rutrum, porta efficitur urna. Integer aliquet eleifend augue sed hendrerit. Vivamus sed turpis dapibus quam interdum varius et non leo. Proin facilisis turpis vel tellus elementum, sit amet volutpat odio tincidunt. Nulla lacinia ac augue sit amet maximus. Morbi eleifend nec mauris ac sodales. Cras vitae odio leo. Sed ex tellus, molestie blandit velit sed, feugiat dapibus justo. Morbi quam velit, euismod in efficitur ultrices, rutrum ut dolor.Cras mattis mauris ut facilisis dignissim. Sed enim nulla, tincidunt quis tincidunt eu, fringilla eu tellus. In ac elit nec nisi posuere faucibus et eu lorem. Phasellus lacinia nec sapien id finibus. Etiam volutpat interdum lectus. Sed egestas consequat magna, eget facilisis neque interdum eu. Nam tincidunt facilisis erat eu lobortis. Nunc porta, ipsum id dapibus posuere, lorem justo lobortis nisi, efficitur aliquet risus nulla vel diam. Mauris nulla ex, euismod in ante mollis, ultricies tincidunt sapien. Nulla eget nunc et sem laoreet porta vel eget risus. In ut nibh condimentum, interdum leo ac, ultricies lorem. Duis euismod, ex ut eleifend pretium, nulla orci posuere nulla, sit amet aliquet sem turpis eget ex. Cras diam tortor, euismod eget orci ut, accumsan iaculis nisi. Nam id enim id dui feugiat lacinia in id magna. Aenean ut ex ullamcorper, feugiat orci quis, mollis enim. Phasellus et ornare nisi, efficitur blandit diam."

  let countWords = 0;

for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i+1]) {
    if (loremIpsum[i] === " " && !(loremIpsum[i+1] === " ")) {
      countWords++;
    }
  }
}

console.log(countWords);


let countEt = 0;

for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i+2]) {
    if ((loremIpsum[i] + loremIpsum[i+1] + loremIpsum[i+2]) === " et") {
      countEt++;
    }
  }
}

console.log(countEt);


// Bonus II

let phraseToCheck = "TeeT";

let phraseToCheckLowerCase = phraseToCheck.toLowerCase();

let phraseIsEven = (phraseToCheckLowerCase.length % 2 === 0)

let phraseMiddle = phraseToCheckLowerCase.length / 2 - 1;

let phraseFirstPart = phraseToCheckLowerCase.slice(0,phraseMiddle + 1);

let phraseSecondPart = phraseToCheckLowerCase.slice(phraseMiddle + 1, phraseToCheckLowerCase.length);

let phraseSecondPartReverse = "";
for (let i = phraseSecondPart.length - 1; i >= 0; i--) {
  phraseSecondPartReverse += phraseSecondPart[i];
}
console.log(phraseSecondPartReverse);

if (phraseFirstPart === phraseSecondPartReverse) {
  console.log("Yeah! You got a palindrome!");
}