// Names and Input

//1. Create a variable hacker1 with the driver's name:
var hacker1 = 'Clara';


//2. Print "The driver's name is XXXX":
console.log('The driver\'s name is ' + hacker1);


//3. Create a variable hacker2 and ask the user for the navigator's name:
var hacker2 = prompt('Whats the navigator name?');


//4. Print "The navigator's name is YYYY":
console.log('The navigator\'s name is ' + hacker2);


//Conditionals

//5. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker1.length < hacker2.length) {
  console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
} else {
  console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!')
}


//6. Print all the characters of the driver's name, separated by a space and in capitals:
//7. Print all the characters of the navigator's name, in reverse order:
var capitalName = '';

for (var i = 0; i < hacker1.length; i++) {
  capitalName += hacker1[i].toUpperCase() + " ";
}
console.log ("Driver in capital letter: " + capitalName);

console.log("Navigator in reverse: " + hacker2.split("").reverse().join(""));



//8. Depending on the lexicographic order of the strings, print:
var index = hacker1.localeCompare(hacker2);

switch (index) {
  case -1:
    console.log("The driver's name goes first");
    break;
  case 1:
     console.log("Yo, the navigator goes first definitely");
     break;

  case 0:
    console.log("What?! You both got the same name");
     break;
}


//9. Ask the user for a new string and check if it's a Palindrome:
var sentence = prompt("Please, input your sentence");

var palindrome = [];

for (var i = 0; i < sentence.length; i++) {
  switch (sentence[i]) {
    case ' ':
    case ',':
    case '.':
    case '¡':
    case '!':
    case '¿':
    case '?':
    palindrome.push('');
    break;
    default:
    palindrome.push(sentence[i].toLowerCase());
  }
}

if (palindrome.join('') == palindrome.reverse(0).join('')) {
  console.log('Es palindromo');
} else {
  console.log('No es palindromo');
}


// Lorem ipsum generator

//10. Go to lorem ipsum generator and Generate 3 parragraphs. Store the text in a String:
var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt, dui at dictum dictum, lectus nisl pulvinar nisl, in efficitur erat enim vitae est. Etiam venenatis purus ut metus molestie, vitae facilisis felis malesuada. Maecenas imperdiet tellus sit amet felis molestie mattis. Morbi faucibus urna metus, sed pharetra ex dignissim in. Vestibulum erat nibh, tempor sed ornare sodales, sodales in ex. Aenean sollicitudin erat a lorem finibus dignissim. Nunc rhoncus interdum dolor, eu lobortis est placerat at. Morbi fermentum libero quis risus blandit vehicula. Proin a nulla ligula. Nulla vel venenatis sapien. Cras tempus maximus turpis sit amet semper. Duis sodales velit a ante elementum, vitae mollis tortor malesuada. Vestibulum at viverra nunc. Nulla eros arcu, condimentum quis rhoncus ac, varius in nunc. Sed dignissim quam nec venenatis ullamcorper. \
Vivamus vehicula facilisis magna vel porta. Aenean at tellus lorem. Sed eget elit at risus luctus commodo nec in urna. Nullam sem ex, lobortis sed massa non, sodales suscipit diam. Duis eu elit ullamcorper, venenatis elit sit amet, congue justo. Maecenas fringilla eleifend eros, nec congue neque euismod in. Vestibulum sed mi ut sem ultrices imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed diam metus, ultrices scelerisque porttitor tempor, bibendum in massa. Integer porttitor sodales hendrerit. Nullam rhoncus ligula nec pellentesque dignissim. Vestibulum nec nulla turpis. Etiam sed dolor non mi tincidunt semper fringilla a libero.\n\
Maecenas quis feugiat dui. Nunc sit amet placerat turpis, quis vestibulum lectus. Quisque mi massa, consequat a ipsum et, mattis auctor tortor. Proin metus quam, euismod a nisi sed, consequat faucibus erat. Quisque interdum tellus ut sagittis vestibulum. Ut felis quam, accumsan et varius a, aliquet congue orci. Nulla ac ante dapibus, varius tortor vitae, venenatis mi. Vestibulum et tempus arcu. Phasellus eu luctus lorem. Donec fringilla libero ut ullamcorper dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sodales est nulla, ut porta nulla finibus sit amet. In nec leo ac felis tincidunt ullamcorper. Vestibulum mattis bibendum tortor, ut accumsan lorem porta porta. Nunc id metus scelerisque, aliquam ante eget, pellentesque nulla. Morbi laoreet mauris odio.'

//Make your program count the number of words in the string:
var textArray = text.split(' ');

console.log(textArray.length);

//Make your program count the number of times the latin word etappears:
var count = 0;

for (var i = 0; i < textArray.length; i++) {
  if (textArray[i] === 'et' ) {
    count++;
  }
}
console.log(count);