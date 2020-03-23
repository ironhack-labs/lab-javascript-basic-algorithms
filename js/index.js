// Iteration 1: Names and Input

let hacker1 = "Tim";
console.log("The driver's name is " + hacker1)

let hacker2 = "Agustina";
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length  + " characters.")
  } else if(hacker2.length > hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters")
  };
  

// Iteration 3: Loops

// 3.1

let upperCaseDriverName = "";

for (let i = 0; i < hacker1.length; i++) {
  upperCaseDriverName = upperCaseDriverName + " " + hacker1[i].toUpperCase()
}
console.log(upperCaseDriverName);

// 3.2

let reversedNavigatorName = "";
for (let i = hacker2.length - 1; i >=0; i--){
  reversedNavigatorName += hacker2[i];
}
console.log(reversedNavigatorName)

// 3.3

if (hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique magna at leo placerat convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis quam condimentum neque semper ultricies. Nam sit amet diam laoreet, condimentum mauris et , congue ligula. Vivamus velit felis, convallis porttitor feugiat a, bibendum eu nibh. Fusce hendrerit nisi vitae turpis blandit, vel porttitor diam sollicitudin. Phasellus vel sem a tellus auctor faucibus vel sit amet quam. Proin id orci vel nulla tempor porttitor. Nunc ut libero urna. Donec ut pulvinar sem. Phasellus lacus libero, consequat et rhoncus ac, euismod eu mi. Mauris et eros sagittis, efficitur est dapibus, fringilla sapien. Nulla accumsan eu enim ut volutpat. Pellentesque elit nisi, vestibulum id malesuada in, mollis nec orci. Cras quis pretium magna. Duis fringilla odio fringilla lorem aliquam, sagittis lobortis lacus tempor. Vivamus sed pharetra metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu magna et libero mattis mattis non ut urna. Sed condimentum ex in cursus aliquam. Phasellus condimentum leo quis eros maximus, non porta tortor aliquet. Quisque eu efficitur velit. Pellentesque dignissim enim pulvinar, tincidunt arcu nec, bibendum ex. Phasellus eget neque eu massa condimentum rutrum a eget elit. Donec ligula eros, tempus id tellus vel, faucibus viverra velit. Cras tincidunt, ex vestibulum porta consectetur, enim sem pulvinar lectus, a finibus tellus massa vel libero. Ut orci lorem, semper eu fermentum vel, ornare vel ligula. Morbi eu leo magna. Aliquam eu dignissim sapien, sed tincidunt mauris. Nunc ac leo felis. Suspendisse at scelerisque odio, in malesuada quam. Duis in vehicula tellus, id bibendum ante. Phasellus eleifend turpis ex, eget tempus diam imperdiet eget. Proin luctus aliquam mi, ut volutpat nibh volutpat sit amet.";

let words = loremIpsum.split(' ');
console.log(words.length);

let wordEt = 0;

for (let i = 0; i < words.length; i++){
    if (words[i] == 'et' || words[i] == 'et,' || words[i] == 'et.'){
      wordEt = wordEt + 1;
    }
  }
  
  console.log(wordEt);