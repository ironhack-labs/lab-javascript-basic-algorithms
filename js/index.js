// Iteration 1: Names and Input
let hacker1 = "Yordan";
let hacker2 = "André";
let string1 = ``;
let string2 = ``;

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops

for (var i = 0; i <= hacker1.length - 1; i++) {
  string1 += `${hacker1[i]} `;
}

console.log(`${string1.toUpperCase()}`);


for (var prog = hacker2.length-1; prog >=0; prog--) {
  string2 += `${hacker2[prog]}`;
}
console.log(`${string2}`);


if ((hacker1.localeCompare(hacker2) === 1)) {
  console.log(`The driver's name goes first.`);
}else if ((hacker1.localeCompare(hacker2) === -1)) {
  console.log(`Yo, the navigator goes first definitely.`);
}else{
  console.log(`What?! You both have the same name?`);
}

// BONUS 1

let lorem;

lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum sapien at nisl porta, nec volutpat urna mattis. In dignissim condimentum enim, eu dapibus ligula facilisis id. Cras et nulla nec justo commodo tempus. Vestibulum quis egestas felis, ut blandit mi. Nullam id libero varius nisl tincidunt tincidunt. Donec vel lacus elit. Sed sagittis congue sapien, sit amet sodales ante. Nullam eget odio venenatis, feugiat lacus eget, eleifend orci. Morbi nec est a leo egestas posuere. Duis interdum enim vel ex lacinia ullamcorper. Sed ac ultrices dui. Suspendisse potenti. Praesent pellentesque eget dolor et dignissim. Proin viverra nunc sit amet ante porta, dignissim pellentesque sem auctor. Sed ut malesuada dui, eget lobortis erat.Phasellus ut lectus ac massa consectetur hendrerit. Curabitur varius erat id enim placerat sollicitudin. Aenean in augue non massa cursus tempor. Sed in metus orci. Aliquam ultricies justo elementum orci molestie, ac bibendum ligula pretium. Nullam sodales dolor ut consectetur semper. Etiam sollicitudin lacus sed nisi venenatis, posuere semper tortor sollicitudin. In sit amet luctus mauris. Quisque ac gravida massa, non vehicula ante. Vivamus non hendrerit neque. Ut tellus purus, consequat eget euismod a, ultrices et dui. Duis sit amet nisl erat. Sed tellus nulla, pellentesque nec hendrerit a, sagittis suscipit lacus. Mauris molestie consectetur neque, vitae congue enim elementum ac. Aliquam at dui ut dolor ultrices vestibulum. Phasellus ac tellus tincidunt, facilisis metus nec, laoreet sapien.Proin imperdiet nisi sit amet ullamcorper mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris a augue vulputate, semper elit at, vulputate nunc. Fusce accumsan nisi quis arcu scelerisque imperdiet. Vestibulum accumsan leo sit amet libero iaculis aliquet. Fusce varius ipsum sed convallis pulvinar. Ut ultricies erat sed lacus ultrices, posuere rutrum eros viverra. Fusce sed vulputate risus. Aliquam condimentum tellus dolor, ac sodales mauris ornare quis. Integer sagittis, magna eu tincidunt mollis, urna mauris ultrices arcu, id accumsan augue diam eu augue. Integer vitae mi id ante rutrum auctor. Donec ullamcorper, nunc sed vestibulum posuere, libero ex placerat metus, id rhoncus quam orci suscipit nibh. Maecenas posuere tortor tincidunt magna convallis, at vulputate nisi placerat. Duis sodales nibh eu sem ullamcorper, mollis pharetra ante vehicula. Maecenas sit amet quam eget neque interdum finibus.";

let numWord;
numWord = lorem.split(" ").length;
console.log(numWord);


let etCount;
etCount = lorem.split("et").length;
console.log(etCount);



// BONUS 2    desonrramos noss clan T_T

let = thePharase;
let = phraseToCheck;
let = phraseToCheckReverse;

phraseToCheckReverse = thePhraseToCheck.split(" ").reverse();


if (phraseToCheck === phraseToCheckReverse){
  console.log("its a palindrome");
}else{
  console.log("its not a palindrome");
}
