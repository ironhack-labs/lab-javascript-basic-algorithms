// Iteration 1: Names and Input
let hacker1;

hacker1 = prompt("Driver's Name?");

console.log(`The driver's name is ${hacker1}`);

let hacker2;

hacker2 = prompt("Navigator's Name?");

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
driverLength = hacker1.length;
navigatorLength = hacker2.length;

if ( driverLength > navigatorLength ){
  console.log(`The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength ){
  console.log(`The navigator has the longest name, it has ${navigatorLength} characters.`); 
}else{
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}

// Iteration 3: Loops
driversName = hacker1.toUpperCase();
let allCapsName = "";

for(letters of driversName ){
    allCapsName += letters + " ";
}

let backwardsName = "";
for (lettersInNav of hacker2) {
  backwardsName = lettersInNav + backwardsName;
}

console.log(backwardsName);

let comparisonValue = hacker2.localeCompare(hacker1);

if( comparisonValue > 0){
  console.log("The driver's name goes first.");
}else if( comparisonValue < 0){
  console.log("Yo, the navigator goes first definitely");
}else if ( comparisonValue === 0) {
    console.log('What?! You both have the same name?');
}

//bonus 1:

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis rutrum posuere. Quisque eu mauris in massa feugiat varius. Donec mi erat, placerat at malesuada tempor, tempus et quam. Nunc non eros nec nisl pulvinar accumsan. Quisque hendrerit et mi quis bibendum. Ut sit amet elementum nisi. Nullam eu fermentum nulla. Quisque fermentum nulla justo, at gravida leo egestas id. Fusce et vulputate neque. Integer et vehicula nibh. Nunc mollis eleifend porta. Aliquam vitae molestie magna. Vivamus et lacus magna.

Pellentesque felis leo, feugiat vitae suscipit eget, tempus nec ex. Vivamus non est bibendum tellus venenatis tincidunt ut sed augue. Praesent condimentum nunc vitae dapibus pharetra. Aliquam ut lorem aliquet, cursus justo sed, pellentesque lectus. Sed vel orci id nisi feugiat pellentesque a sed nisi. Vestibulum vel neque pretium, tempus nisi tincidunt, rutrum risus. Praesent viverra velit id ultricies euismod. Donec rhoncus risus odio, in suscipit nisl lacinia placerat. Quisque viverra luctus leo sit amet ultricies. Suspendisse et scelerisque orci. Donec vel magna sit amet massa condimentum bibendum ut eget lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tortor mauris, vestibulum ut arcu et, porttitor hendrerit sapien. Donec id euismod sem, eu volutpat velit.

Aenean eleifend vitae felis vitae condimentum. Sed venenatis ligula vel ante ornare, vitae feugiat lacus tristique. Proin luctus eros vitae nisl rhoncus molestie. Nunc a orci sit amet quam ornare feugiat. Duis et varius sem, vel maximus odio. Fusce ultricies risus eget mi mollis, ut pharetra tortor ullamcorper. Maecenas non nibh ac mauris ultricies efficitur. Maecenas lobortis pretium dolor. Curabitur eu malesuada neque. Sed feugiat sodales enim, eget dapibus sem blandit quis. Nulla iaculis semper velit fermentum venenatis. Duis id ultrices arcu.`;

//Count words, first by getting the blank spaces
console.log((loremIpsum.split(" ").length));
//now, check for new-lines (weren't getting counted as gap between words)
console.log(((loremIpsum.split("\n\n").length)-1));
// console.log((loremIpsum.split(" ").length+loremIpsum.split("\n\n")-1));
//280  

//Count the number of 'et' - we're splitting by it so we have to subtract one to ditch the last chunk
console.log((loremIpsum.split(" et ").length-1));
// 8

//bonus 2
// Un-comment to test a few phrases
// handles spaces and case-sensitivtiy 
// can not handle punctuation, unfortunately :()

let phraseToCheck = "A man a plan a canal Panama"; //palindrome
// let phraseToCheck = "Amor Roma"; //palindrome
// let phraseToCheck = "Dont step on pets"; //not a palindrome
// let phraseToCheck = "step on no pets"; //palindrome
// let phraseToCheck = "Lorem ipsum dolor sit amet consectetur"; //not a palindrome
// let phraseToCheck = "put it up";  //palindrome

let allUpperPhrase = phraseToCheck.toUpperCase();

let findSpace;
do{
  findSpace = allUpperPhrase.indexOf(" ");
  allUpperPhrase = allUpperPhrase.slice(0,findSpace) + allUpperPhrase.slice(findSpace+1,allUpperPhrase.length);
}while(allUpperPhrase.indexOf(" ") > 0);

console.log(allUpperPhrase);

let halfLength = Math.ceil((allUpperPhrase.length/2));
let fullLength = allUpperPhrase.length - 1;

for(let z = 0; z < halfLength; z++){
    let firstLetter = allUpperPhrase[z];
    let endLetter = allUpperPhrase[fullLength-z];
      if ( firstLetter !== endLetter ){
          console.log("Not a palindrome");
          break;
      }else{
        if ( z === (halfLength-1) ){
            console.log("Palindrome found!");
        }
      }
}
