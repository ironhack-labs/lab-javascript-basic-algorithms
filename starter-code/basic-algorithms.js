//Names and Input
var hacker1 = "Tomas";

console.log('The driver\'s name is', hacker1);

var hacker2 = prompt('What\'s the navigator\'s name?');

console.log('The navigator\'s name is', hacker2);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has', hacker1.length, 'characters');
} else if (hacker1.length < hacker2.length) {
  console.log('Yo, navigator got the longest name, it has', hacker2.length, 'characters');
} else {
  console.log('wow, you both got equally long names,', hacker1.length, 'characters!!');
}
//Loops
var s = "";
for (var i = 0; i < hacker1.length; i++) {
  s += hacker1[i] + " ";
}
console.log(s.toUpperCase());

var z = "";
for (var v = hacker2.length-1; v <= hacker2.length && v >= 0; v--) {
  z += hacker2[v] + " ";
}
console.log(z);

// Lorem ipsum generator

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales pulvinar efficitur. Maecenas tempus in ipsum vestibulum porttitor. Sed aliquam vehicula faucibus. Nullam elementum euismod malesuada. Mauris dignissim purus eu tortor cursus mattis. Etiam id nisi malesuada nisi vehicula mattis. Vivamus facilisis viverra augue, at dignissim metus gravida sit amet. Duis consectetur, sapien id fringilla posuere, turpis sapien tincidunt metus, ut placerat ex est in enim. Nullam luctus facilisis felis vel volutpat. Donec hendrerit viverra sem, eget condimentum ipsum ullamcorper ac. Curabitur interdum aliquet magna, eget tincidunt nunc bibendum eu. Ut pretium justo sem, vel vehicula augue pulvinar eget. Quisque dictum fermentum tortor, in tempus dui maximus vel. Duis nunc enim, vestibulum nec lacinia scelerisque, faucibus eu risus. Aliquam scelerisque consequat ultrices. In non metus eu ipsum dictum consequat eget tincidunt sapien. Curabitur in arcu lectus. Vivamus at consequat orci, non laoreet metus. Vivamus erat urna, commodo et mauris quis, venenatis viverra risus. Morbi nec mollis lorem. Curabitur fermentum ipsum ut porta ullamcorper. Suspendisse facilisis nunc sed lacus vestibulum pharetra. In ut luctus felis. Phasellus vestibulum, odio vitae placerat pulvinar, augue eros auctor orci, et aliquam purus elit quis libero. Nunc aliquam mauris eget arcu ullamcorper, nec accumsan nunc dignissim. Ut dictum accumsan egestas. Integer non pretium mauris, et aliquam mi. Nullam varius lorem eu sodales vestibulum. Nunc dapibus dui ac elit congue semper."

var words = 1;
var et = 0;

for (var wordCounter = 0; wordCounter < loremIpsum.length; wordCounter++) {
  if (loremIpsum[wordCounter] === " ") {
    words++;
  }
}
console.log('The amount of words in loremIpsum is', words);

for (var etCounter = 0; etCounter < loremIpsum.length; etCounter++) {
  if (loremIpsum[etCounter] === "e" && loremIpsum[etCounter+1] === "t" && loremIpsum[etCounter+2 && etCounter-1] === " ") {
    et++;
  }
}
console.log('The amount of "et" in loremIpsum is', et);
