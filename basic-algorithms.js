// Names and Input
let hacker1 = "Cristina";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = prompt("Which is the navigator's name?");
console.log(`The navigator's name is ${hacker2}`);

//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver ${hacker1} has the longest name, it has ${
      hacker1.length
    } characters`
  );
} else if (hacker2.lenght > hacker1.length) {
  console.log(
    `Yo, navigator ${hacker2} got the longest name, it has ${
      hacker2.length
    } characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `wow, you both ${hacker1} and ${hacker2} got equally long names, ${
      hacker1.length
    } characters!!`
  );
}

// Lorem ipsum generator
let driver = hacker1;
let navigator = hacker2;

for (i = 0; i < driver.length; i++) {
  console.log(driver[i].toUpperCase());
  i += " ";
}

for (j = navigator.length -1; j >= 0; j--){
  console.log(navigator[j]);
  j += " ";
}

if(driver.localeCompare(navigator) < 0){
  console.log(`The driver's name ${driver} goes first`);
}else if (driver.localeCompare(navigator) > 0){
  console.log(`Yo, the navigator ${navigator} goes first definitely`);
}else if (driver.localeCompare(navigator) = 0){
  console.log(`What?! You both got the same name?`);
}

//if it's palindrome

let testPalindrome = prompt("Type a word");
while(testPalindrome[0] === testPalindromee[testPalindrome.length -1]){
  console.log(`Your word ${testPalindrome} is a palindrome!`);
}

//BONUS

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis elementum nunc id hendrerit. Fusce id suscipit ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dui lorem, cursus sagittis mauris nec, mollis ullamcorper purus. Morbi ultricies lorem eu sodales luctus. Nullam a mi et magna gravida congue. Vivamus ac odio nec sem vulputate sagittis a eu mauris. Duis in fringilla lectus. Pellentesque non dui ex. Sed convallis, arcu non commodo semper, nunc neque mollis leo, eu aliquet justo est nec sapien. Curabitur cursus et magna at rhoncus. Donec luctus tortor urna, non pellentesque eros laoreet id. Quisque pretium ultricies ante vel scelerisque. Suspendisse dolor elit, interdum non pretium ut, auctor sit amet metus. Nunc in ante interdum, dictum velit quis, vestibulum mi. \n Cras bibendum nulla a augue elementum, in lacinia odio eleifend. In mattis magna in pretium rhoncus. Quisque dictum quam mauris, a rhoncus mi euismod in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sit amet consequat massa. Aliquam auctor quis orci a tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque laoreet nec nisl pretium mollis. Aenean felis quam, porta vel vestibulum quis, cursus vel risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In pretium luctus augue. \n Curabitur finibus vitae lacus eget cursus. Nulla blandit est eget eros rutrum bibendum. Duis odio elit, pharetra at accumsan ac, ultricies at nisl. Suspendisse tristique blandit pharetra. Duis sit amet erat sit amet leo interdum aliquam. Mauris faucibus ipsum a aliquam tristique. Etiam venenatis ligula eget feugiat pretium. Vivamus at ante ac turpis finibus egestas. Morbi non bibendum arcu, quis dictum mauris. Phasellus sit amet hendrerit purus, sit amet lacinia lectus. Fusce consectetur ligula vitae venenatis dictum. Pellentesque risus diam, malesuada vitae lorem ac, mollis aliquam mi. Curabitur vehicula odio quis feugiat tristique."

let counter =0;
let words = loremIpsum.split(' ');

for(l=0; l<words.length; l++){
  if(words[l] === "et"){
    counter++;
  }
}

console.log(`The Lorem Ipsum generator has ${words.length} words. We found "et" ${counter} times`);