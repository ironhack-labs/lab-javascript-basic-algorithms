let names = ["John"];

let hacker1 = "Avrahm";
console.log(`The drvier's name is ${hacker1}`);

let hacker2 = 'Cameron';
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name. It has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
    console.log(`The Navigator has the longer name. It has ${hacker2.length} characters`)
} else {
    console.log(`They both have ${hacker1.length} characters`);
}

let driver = "";

for (let i=0; i < hacker1.length; i+=1){
    driver += hacker1.toUpperCase()[i] + " ";
}

console.log(driver);

let navigator = "";

for (let i = hacker2.length - 1 ; i > -1 ; i--){
    navigator += hacker2[i];
}

console.log(navigator);

names.push(hacker1);
names.push(hacker2);

console.log(names.sort());

if(names[0] === hacker1) {
    console.log(`The driver's name goes first! It begins with the letter '${hacker1.charAt(0)}'`);
} else if (names[0] === hacker2) {
    console.log(`The navigator's name goes first! It begins with the letter '${hacker2.charAt(0)}'`);
} else {
    console.log("You both have the same name!");
}

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis erat quis elit tincidunt lobortis. Pellentesque feugiat, enim non condimentum consectetur, magna lacus gravida orci, at aliquet arcu est vitae lorem. Fusce lobortis dolor nisi, in facilisis sapien vulputate porttitor. Donec ultrices in elit quis molestie. Donec in mattis ante. Sed odio velit, convallis at vestibulum ut, laoreet vel neque. Cras non malesuada lectus. Morbi non fringilla libero. Nam rutrum risus sem, at porttitor nibh dapibus quis. Sed maximus at orci vulputate congue. Quisque eu eros tincidunt, sagittis tortor nec, iaculis enim. Nulla vel semper neque. Fusce lorem sem, pellentesque id dolor non, fringilla malesuada nisi. Nullam non elit in quam pharetra finibus ut eget ligula. Aenean a tempor risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nisl leo, pharetra dignissim dignissim eu, elementum eget dolor. In vulputate eros a nisl blandit, eu fermentum augue venenatis. Fusce volutpat eget risus et laoreet. Curabitur tempor tincidunt urna, quis tincidunt erat auctor eu. Nulla dictum sit amet elit vitae posuere. Morbi mollis orci vitae vestibulum ultrices. Sed pulvinar, arcu sed lobortis ornare, ipsum ipsum rutrum sem, tristique auctor lectus nulla eget est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis libero magna, tempus eget leo in, condimentum vehicula est. Quisque elit nulla, accumsan eu varius sagittis, elementum eget enim. Aliquam eu elit auctor, fringilla risus vel, placerat nulla. In nunc est, varius vel pellentesque ut, semper nec augue. Suspendisse quis semper tortor, sit amet maximus quam. Quisque mattis feugiat libero efficitur commodo. Praesent leo mi, cursus sed lacus at, dignissim ultrices est. Donec cursus facilisis augue vel congue. Donec vel sapien elementum, vehicula dolor vel, hendrerit sem. Sed tempus commodo ornare. Nullam massa urna, pellentesque sit amet quam ut, congue auctor ex. Proin congue rhoncus molestie.";

let word = "et";

var countWord = text.split(word);
console.log(`The word '${word}' is repeated ${countWord.length} times.`);

var numOfWords = text.split(" ");
console.log(`There are ${numOfWords.length} words in the text.`);