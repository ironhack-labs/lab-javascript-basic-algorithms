//EXERCISE ONE JAVASCRIPT

//1.Create a variable hacker1 with the driver's name

var hacker1 = 'Javier';

//2.Print "The driver's name is XXXX"

console.log("The driver's name is " + hacker1 + '\n' );

//3.Create a variable hacker2 and ask the user for the navigator's name

var hacker2 = prompt('Write the hackers name!');

//4.Print "The navigator's name is YYYY"

console.log("The navigator's name is " + hacker2 + '\n');

/* 
5. Depending on which name is longer, print:
 - The Driver has the longest name, it has XX characters or
 - Yo, navigator got the longest name, it has XX characters or
 - wow, you both got equally long names, XX characters!!
*/

if ( hacker1.length > hacker2.length){
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters' + '\n')
} else if (hacker2.length > hacker1.length){
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters' + '\n')
} else {
  console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!' + '\n')
};

//6.Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"

var spaceName = '';

for (var i = 0; i < hacker1.length ; i++){ 
  if (i === hacker1.length-1 ){
    spaceName += hacker1[i].toUpperCase();
  } else {
spaceName += hacker1[i].toUpperCase() + ' ';
  }
}
console.log(spaceName + '\n')

//7.Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"

var nameReverse = [];
for ( var i = hacker2.length-1; i >= 0; i--){
  nameReverse.push(hacker2[i]);
}

console.log(nameReverse.join('') + '\n');


/* 8.Depending on the lexicographic order of the strings, print:
  - The driver's name goes first
  - Yo, the navigator goes first definitely
  - What?! You both got the same name? 
*/

var lexicOrder = [];
lexicOrder.push(hacker1.toLowerCase());
lexicOrder.push(hacker2.toLowerCase());
lexicOrder.sort();

console.log(lexicOrder + '\n');

if (lexicOrder[0] === lexicOrder[1]){
    console.log('What?! You both got the same name?' + '\n');
  } else if (lexicOrder[0] == hacker1.toLowerCase()){
    console.log("The driver's name goes first"+ '\n');
  } else if (lexicOrder[0] == hacker2.toLowerCase()){
    console.log('Yo, the navigator goes first definitely'+ '\n');
 }

//9.Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

 var isPalindrome = prompt("Let's write a palindrome, we will check it!");
 var arrayPalindrome = [];
 
 for (var i = 0; i <= isPalindrome.length -1; i++ ){
   switch(isPalindrome[i]){
   case" ":case".":case",":case"!":case"¡":case"*":case"'":case'"':case"@":
   case"#":case"%":case"&":case"(":case")":case"¿":case"?":case":":case"$":
   case"ª":case"º":case"-":case"_":case";":case"·":case"/":case"=":
    arrayPalindrome.push('');
    break;
    default:
    arrayPalindrome.push(isPalindrome[i].toLowerCase());
     }
 }

 if (arrayPalindrome.join('') == arrayPalindrome.reverse(0).join('')){
   console.log('The sentence you wrote, is a palindrome!' + '\n')
 } else {
   console.log('Sorry its not a palindrome!' + '\n')
 }

 /*
 10.Go to lorem ipsum generator and:
  - Generate 3 parragraphs. Store the text in a String
  - Make your program count the number of words in the string
  - Make your program count the number of times the latin word et appears
*/

 //CASE1: Parragraphs from .html --
 //Generate 3 parragraphs. Store the text in a String

console.log('CASE 1');

var parragraphString = document.getElementById("parragraph1").innerHTML + document.getElementById("parragraph2").innerHTML + document.getElementById("parragraph3").innerHTML;

//Make your program count the number of words in the string:

var wordsArray = parragraphString.split(' ');

console.log('The number of words in the parragraphs from .html is: ' + wordsArray.length );

//Make your program count the number of times the latin word et appears

var numberOfEt = 0;
for ( var i = 0; i <= wordsArray.length -1; i++){
  if (wordsArray[i] === 'et'){
    numberOfEt ++;
  }
}

console.log ('The number of "et" in the parragraphs from .html is: ' + numberOfEt + '\n');


//CASE2: Parragraphs inside .js
// Generate 3 parragraphs. Store the text in a String

console.log('CASE 2');

text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt, dui at dictum dictum, lectus nisl pulvinar nisl, in efficitur erat enim vitae est. Etiam venenatis purus ut metus molestie, vitae facilisis felis malesuada. Maecenas imperdiet tellus sit amet felis molestie mattis. Morbi faucibus urna metus, sed pharetra ex dignissim in. Vestibulum erat nibh, tempor sed ornare sodales, sodales in ex. Aenean sollicitudin erat a lorem finibus dignissim. Nunc rhoncus interdum dolor, eu lobortis est placerat at. Morbi fermentum libero quis risus blandit vehicula. Proin a nulla ligula. Nulla vel venenatis sapien. Cras tempus maximus turpis sit amet semper. Duis sodales velit a ante elementum, vitae mollis tortor malesuada. Vestibulum at viverra nunc. Nulla eros arcu, condimentum quis rhoncus ac, varius in nunc. Sed dignissim quam nec venenatis ullamcorper. \
Vivamus vehicula facilisis magna vel porta. Aenean at tellus lorem. Sed eget elit at risus luctus commodo nec in urna. Nullam sem ex, lobortis sed massa non, sodales suscipit diam. Duis eu elit ullamcorper, venenatis elit sit amet, congue justo. Maecenas fringilla eleifend eros, nec congue neque euismod in. Vestibulum sed mi ut sem ultrices imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed diam metus, ultrices scelerisque porttitor tempor, bibendum in massa. Integer porttitor sodales hendrerit. Nullam rhoncus ligula nec pellentesque dignissim. Vestibulum nec nulla turpis. Etiam sed dolor non mi tincidunt semper fringilla a libero.\n\
Maecenas quis feugiat dui. Nunc sit amet placerat turpis, quis vestibulum lectus. Quisque mi massa, consequat a ipsum et, mattis auctor tortor. Proin metus quam, euismod a nisi sed, consequat faucibus erat. Quisque interdum tellus ut sagittis vestibulum. Ut felis quam, accumsan et varius a, aliquet congue orci. Nulla ac ante dapibus, varius tortor vitae, venenatis mi. Vestibulum et tempus arcu. Phasellus eu luctus lorem. Donec fringilla libero ut ullamcorper dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sodales est nulla, ut porta nulla finibus sit amet. In nec leo ac felis tincidunt ullamcorper. Vestibulum mattis bibendum tortor, ut accumsan lorem porta porta. Nunc id metus scelerisque, aliquam ante eget, pellentesque nulla. Morbi laoreet mauris odio.'

//Make your program count the number of words in the string:

var textArray = text.split(' ');

console.log('The number of words in the parragraphs from .js is: ' + textArray.length);

//Make your program count the number of times the latin word et appears

var numberOfEt = 0;
for ( var i = 0; i <= textArray.length -1; i++){
  if (textArray[i] === 'et'){
    numberOfEt ++;
  }
}

console.log('The number of "et" in the parragraphs from .js is: ' + numberOfEt);

