// Iteration 1: Names and Input
console.log("I'm ready!");
const hacker1 = "Shaul";
console.log(hacker1);
const hacker2 = "Akua";
console.log(hacker2);
if (hacker1.length > hacker2.length) {
  console.log(hacker1);
} else {
  console.log(hacker2);
}

// Iteration 2: Conditionals
let samePage = "";
for (i = 0; i < hacker2.length; i++) {
  samePage += hacker2[i].toUpperCase() + " ";
}
console.log(samePage);
let reverseNavigator = "";
for (i = hacker1.length - 1; i >= 0; i--) {
  reverseNavigator += hacker1[i];
}

console.log(reverseNavigator);

// Iteration 3: Loops
if (hacker1 < hacker2) {
  console.log(`${hacker1}'s name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else console.log(`What?! You both have the same name?`);

const loremPara =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut lectus ullamcorper, tincidunt neque eget, placerat augue. Etiam faucibus massa a libero malesuada, vitae pulvinar nulla sollicitudin. Fusce eu elit et risus iaculis ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In scelerisque nisl non dui porta volutpat. Suspendisse potenti. Ut mi metus, elementum nec elit et, efficitur ultrices nisi. Proin at egestas nibh, et dapibus magna. Mauris iaculis ullamcorper metus at facilisis. Integer tincidunt mi purus, et euismod leo imperdiet non. Aenean placerat viverra felis, quis rhoncus leo aliquam in. Aenean imperdiet sollicitudin lacus, sed mollis nulla consequat in. Praesent condimentum rhoncus erat. Fusce dignissim ante dui, id faucibus libero lacinia non. Cras quis consequat lorem. Donec placerat efficitur metus porttitor interdum. Nulla a nibh enim. Morbi rutrum varius semper. Nam dictum bibendum nunc, in congue neque dictum sed. Aliquam erat volutpat. Vestibulum et tristique diam, iaculis faucibus enim. Phasellus vehicula ornare libero quis lobortis. Morbi non volutpat arcu. Donec dignissim malesuada commodo. Curabitur sodales est vitae purus tempus, cursus interdum dui pretium. Vivamus sagittis, risus ut rutrum efficitur, mi ipsum lobortis metus, sagittis sodales ante velit et nibh. Nulla et cursus ligula, quis congue orci. Maecenas quis ultricies lorem. Sed dictum ipsum ante. Cras at neque enim. Ut semper tempor posuere. Nam volutpat eget risus eu luctus. Aenean euismod metus in facilisis tristique. Vestibulum vitae efficitur dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mollis augue vel fringilla cursus. Ut sed enim arcu.";
const numberOfWords = loremPara.split(" ").length + 1;
console.log(numberOfWords);
const numberOfEt = loremPara.split("et").length;
console.log(numberOfEt);
