// Iteration 1: Names and Input
let hacker1 = "Luke";
console.log("The drivers name is " + hacker1);

let hacker2 = "Mark";
console.log("The drivers name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters.
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
    spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName.trim());

// 3.2 Print all the characters of the navigator's name in reverse order.
let reverse = ""; 
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverse += hacker2[i];
}
console.log(reverse);

// 3.3 Depending on the lexicographic order of the strings, print.
if (hacker1 < hacker2) {
    console.log("The drivers name goes first")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus Time!

// Bonus 1:
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales eros ac magna vulputate accumsan. Aliquam vel consectetur libero, non ultricies est. Nunc dignissim venenatis eros id porttitor. In mattis dui elit. Nam fringilla orci in eros posuere convallis. Vestibulum fermentum nibh lacus, at pharetra orci pharetra eget. Quisque lectus ligula, porttitor sed dolor suscipit, efficitur varius libero. Aenean sed ipsum consectetur, fringilla dolor nec, cursus diam. Maecenas ac dui sit amet risus molestie tincidunt quis sed ligula. Nunc at placerat turpis. Cras sit amet metus et nisl egestas semper nec congue turpis. Donec ante nisi, rutrum non egestas in, eleifend nec dui. Aliquam cursus pellentesque enim, eget ultricies dui aliquet id. Proin vel erat sagittis, porta purus nec, maximus ligula. Ut eget turpis sed urna scelerisque finibus. Donec ornare commodo mollis. Duis consequat at sem ac accumsan. Aliquam vel justo sit amet ante finibus euismod vitae pretium tellus. Maecenas vel tortor eget odio sodales laoreet. Morbi nec sapien mauris. Phasellus ligula massa, maximus eget neque in, volutpat lacinia metus. Ut pulvinar dolor sollicitudin fermentum aliquam. Quisque sagittis vitae lectus vitae suscipit. Sed dictum vestibulum eros, a fringilla sem gravida vitae. Praesent congue sapien sed dignissim dapibus. Maecenas efficitur risus et tellus commodo semper. Sed libero ex, vestibulum eu imperdiet at, rutrum ultrices nunc. Nunc massa velit, dignissim eget enim sed, hendrerit posuere lorem. Pellentesque nec sem orci. Ut elit sem, cursus vel pharetra accumsan, varius malesuada lectus. Phasellus ut massa neque. Duis neque nisl, condimentum a tincidunt et, convallis in sapien. Quisque pharetra hendrerit ullamcorper. Nam elementum, ipsum sagittis gravida mollis, tellus magna facilisis purus, ut tincidunt risus justo ac urna. Morbi quis sollicitudin sapien. Donec sed enim et arcu eleifend hendrerit.";

let words = longText.split(" "); 
console.log("Number of words: " + words.length);

let countEt = 0;
for (let i = 0; i < words.length; i++) 
  if (words[i] === "et") {
    countEt++;
  
}
console.log("Number of times 'et' appears: " + countEt);

// Bonus 2:
for (let i = 0; i < phraseToCheck.length; i++) {
    let char = phraseToCheck[i].toLowerCase();
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      cleaned += char;
    }
  }
  
  