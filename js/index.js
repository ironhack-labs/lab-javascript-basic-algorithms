// Iteration 1: Names and Input
let hacker1 = "James";

console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Barry";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
} else if (hacker1Length < hacker2Length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

// Iteration 3: Loops
let s = " ";
for (let i = 0; i <= hacker1Length -1; i++) {
  s += hacker1[i] + " ";
}
console.log(s.toUpperCase());

let str = " ";
    for (let i = hacker2Length - 1; i >= 0; i--) {
        str += hacker2[i];
    }
    console.log(str);


let namesCompared = hacker1.localeCompare(hacker2);

if (namesCompared < 0) {
  console.log("The driver's name goes first");
} else if (namesCompared >= 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  consolg.log("What?! You both have the same name?");
}

// // Bonus 1:

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend tellus at eleifend vehicula. Vestibulum nec nulla felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eget velit turpis. Sed ut lectus accumsan, hendrerit neque eu, volutpat est. Morbi blandit laoreet orci. Mauris non rutrum felis. Praesent feugiat, massa eu egestas blandit, magna nibh semper erat, aliquam ullamcorper lacus dolor a mi. Donec luctus tristique fermentum. Suspendisse tempus lectus at ipsum tristique, eu porta dolor ultricies. Suspendisse egestas magna quis risus malesuada dapibus. Suspendisse eu ultricies est, non condimentum lorem. Praesent suscipit malesuada lacinia. Duis purus elit, egestas quis justo id, volutpat finibus turpis. Morbi elementum dapibus metus, quis tincidunt ipsum suscipit at. Fusce condimentum nibh eget nunc convallis, quis commodo dolor egestas.

Vestibulum laoreet rhoncus nulla, vitae convallis leo. Pellentesque sagittis nulla vel sodales semper. Vivamus imperdiet varius arcu quis fermentum. Sed eu eros ligula. Integer tempus vulputate lobortis. Fusce consectetur arcu ac neque mollis vehicula. Sed rutrum urna ut nisi dignissim, in tempus purus interdum. Nullam et libero massa. Nam eget lorem quis turpis elementum auctor. Etiam lacinia quam eget dui rutrum pulvinar. Curabitur nunc purus, tincidunt rhoncus ante et, ullamcorper imperdiet sem. Phasellus et eros tempus, viverra lorem eu, tempus metus. Quisque ligula purus, blandit sit amet dictum vel, consequat ac tortor. Pellentesque fringilla lobortis odio quis venenatis. Ut imperdiet volutpat libero, vitae suscipit mi vehicula ut.

In id nunc bibendum, eleifend ligula at, imperdiet felis. Phasellus vel accumsan ipsum. Etiam blandit neque purus, eu finibus ante fermentum sed. Proin at tempus ligula. Proin tempor justo quis felis pellentesque gravida. Phasellus tempus tristique justo, et volutpat urna semper sed. Vivamus aliquam egestas maximus. Duis ut odio nibh. Nulla in iaculis purus. Etiam vel ex aliquet tortor egestas molestie sed in dolor. Fusce est nisl, viverra in arcu in, ultrices dapibus nulla. Mauris scelerisque massa efficitur felis tempor, quis vestibulum risus aliquam. Quisque placerat, lorem maximus volutpat fringilla, lorem sem rutrum neque, ac facilisis ligula ligula quis sem. Suspendisse in metus ut nulla eleifend faucibus eu vitae nisi. Maecenas pretium dui eros, non bibendum ante pulvinar sed.`

// Generated 3 paragraphs, 354 words, 2458 bytes of Lorem Ipsum

function countWords(words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
   if (words.charAt(i) == " ") {
        count ++;
    }
}
return count + 1;
}
console.log(countWords(loremIpsum));

let etCount = (loremIpsum.match(/et/g) || []).length;
console.log(etCount);
