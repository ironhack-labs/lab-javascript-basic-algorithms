// Iteration 1: Names and Input

let hacker1="monique";
console.log(`the driver's name is ${hacker1}` );
let hacker2="alex";
console.log(`the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length===hacker2.length){
  console.log("woow you both have equally long names,"+ hacker1.length + " charachters!")
} else if (hacker1.length>hacker2.length){
  console.log("the driver's has the longest name, it has:" + hacker1.length + " characters")
} else {console.log("it seems that the navigator has the longest name, it has" + hacker2.length + " characters")};

// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++){
  console.log(hacker1.toUpperCase()[i]);
}
for (let i = hacker1.length-1; i >= 0; i--) {
  console.log(hacker1[i]);
}
if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first")
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?")
} else {
  console.log("Yo, the navigator's goes first definitity!")
}
//Bonus Time:
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a orci auctor, sagittis nibh at, vulputate nulla. Nam sollicitudin rhoncus lectus quis ornare. Fusce dictum gravida ante, tincidunt dictum nisi fringilla non. Etiam euismod lorem sit amet auctor mollis. Integer eleifend rutrum faucibus. Praesent maximus gravida varius. Etiam elementum varius velit id faucibus. Quisque fermentum sodales dignissim. Aenean sit amet tellus eget quam volutpat efficitur. Cras purus ipsum, commodo in maximus vehicula, ultricies ut tortor. Proin blandit magna tellus, ut ultricies velit varius ac. Aliquam rhoncus tincidunt mi, vitae pellentesque enim malesuada vitae. Aenean scelerisque pharetra urna, vel efficitur neque varius a. Proin ullamcorper tristique consequat. Suspendisse quis malesuada massa. Nam consectetur sapien ac nibh malesuada sodales. Pellentesque ultrices tempus lorem, ut semper urna porttitor ut. Nam ornare semper dui, quis pretium odio blandit eget. Vestibulum sagittis sem rhoncus tellus sodales pharetra. Pellentesque cursus felis ut est tincidunt consectetur. Etiam finibus odio nec eleifend vestibulum. Aenean finibus erat eu feugiat vehicula. Etiam leo lacus, porttitor non imperdiet vel, pretium id orci. Integer maximus purus vitae enim mollis, varius tempus arcu tincidunt. Aenean dictum tempor purus, nec porta nisi fringilla ut. Praesent condimentum faucibus lobortis. Praesent dictum augue arcu, et lacinia dolor congue vitae. Sed porta tellus id purus bibendum, sit amet sodales lacus interdum. Ut vitae metus aliquam, lobortis felis sed, fringilla nunc. Praesent cursus maximus eros, a mollis ipsum dictum id. In eu fringilla quam, nec sodales dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque quam urna, iaculis vitae rhoncus in, sollicitudin ut libero. Maecenas convallis nec est eu tristique. Pellentesque lobortis et nunc at semper. Fusce dictum ante metus, at luctus nulla scelerisque ac. Aenean risus dolor, ultricies vitae fermentum a, vulputate vitae ligula. Praesent vel tristique arcu. Sed placerat ut nulla at bibendum."
