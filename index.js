// Iteration 1: Names and Input

let hacker1 = "Julio";
console.log("The driver's name is " + hacker1);

let hacker2 = "Christian";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
  } else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
  }
console.log(hacker1.toUpperCase().split('').join(' '));

// Iteration 3.2
console.log(hacker2.split('').reverse().join(''));

// Iteration 3.3
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
//Bonus 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis massa, mattis sed ipsum nec, finibus tincidunt orci. Morbi ornare arcu lacinia condimentum mollis. Mauris tristique ornare elit eget varius. Donec facilisis dictum lacus quis varius. Maecenas vel fringilla magna. Praesent augue eros, semper vitae tellus facilisis, pulvinar ornare augue. Nunc hendrerit efficitur mollis. Duis interdum auctor magna, vel porta massa efficitur tempus. Quisque eget lectus ut mi porttitor pretium eu in lorem. Nulla luctus fringilla mauris sed commodo. Nulla facilisi. Sed sit amet massa ac ligula dignissim suscipit at vitae nulla. Mauris ut finibus purus, eget faucibus arcu.

Etiam lobortis porttitor justo vitae tincidunt. Nulla ornare, elit non placerat sodales, dui elit feugiat dolor, ut venenatis dui diam sit amet orci. In tristique justo non laoreet sollicitudin. Donec fermentum lobortis gravida. Mauris posuere, risus quis placerat fringilla, lectus tellus tristique tellus, non egestas magna lectus nec metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque mollis lectus nibh, eget ultricies nulla imperdiet eu. Nulla nisi nulla, venenatis sit amet lobortis fermentum, sagittis at nibh. Nulla suscipit tortor ut volutpat bibendum. Morbi ullamcorper erat ac mauris molestie semper. Sed iaculis pretium ipsum ut porta.

Proin ultricies risus mauris, ac faucibus tellus luctus sed. Nam ornare elit id justo tempus eleifend. Aliquam vitae mi lobortis, vestibulum purus in, luctus mauris. Nullam tempus vestibulum tortor, at pharetra justo laoreet eget. Donec eget augue nisi. Nullam ac placerat massa, et aliquet metus. Morbi non scelerisque justo. Mauris sit amet augue consectetur, faucibus odio sed, laoreet odio. Donec fermentum fermentum nibh ut suscipit. Nullam justo lacus, cursus a ornare sed, maximus a eros. Donec non turpis et felis ullamcorper accumsan. Suspendisse in odio arcu. Duis vel maximus dui, nec consectetur justo.`

let wordCount = 0;

const words = longText.split(" ");

for (let i = 0; i < words.length; i++) {
  const word = words[i].trim();
  
  if (word !== "") {
    wordCount++;
  }
}

console.log("Número de palabras", wordCount);


