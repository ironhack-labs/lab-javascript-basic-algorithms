// Names and Input
var hacker1 = 'Anna';
console.log('The driver´s name is ' + hacker1);
var hacker2 = prompt('What´s your name?');
console.log('The navigator´s name is ' + hacker2);

//Conditionals
if (hacker1.length > hacker2.length){
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters.');
}else if (hacker2.length > hacker1.length){
  console.log('Yo, navigator got the logest name, it has ' + hacker2.length + ' characters.');
}else{
  console.log('WOW, you both got equally long names, ' + hacker1.length + 'characters.');
}

//Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
var hacker1Name = '';
for(var i = 0 ; i < hacker1.length ; i++){
  hacker1Name += hacker1[i] + ' ';
  hacker1Name = hacker1Name.toUpperCase();
}
console.log(hacker1Name.trimEnd());

//Print all the characters of the navigator's name, in reverse order. ie. "
var hacker2Name = '';
for (var i = hacker2.length -1 ; i >= 0 ; i--){
  hacker2Name += hacker2[i];
}
console.log(hacker2Name);

//Depending on the lexicographic order of the strings, print:
if(hacker1.localeCompare(hacker2) <= -1){
  console.log('The driver´s name goes first')
}else if(hacker1.localeCompare(hacker2) <= 1){
  console.log('Yo, the navigator goes first definitely')
}else if(hacker1.localeCompare(hacker2) === 0){
  console.log('What?! You both got the same name?')
}

//Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:
var isPalindrome = prompt('Palindrome checker. Write a word/phrase:');
var reverseIsPalindrome = '';
for(var i= isPalindrome.length -1; i >= 0 ; i--){
  reverseIsPalindrome += isPalindrome[i];
}
if(isPalindrome.localeCompare(reverseIsPalindrome) === 0){
  console.log('Is palindrome');
}else{
  console.log('Not a palindrome. Try again!');
}

// Lorem ipsum generator
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id turpis quis justo consectetur sagittis et quis nisl. Suspendisse rhoncus condimentum leo, vitae finibus dolor. Quisque dolor erat, elementum sit amet lobortis non, euismod sit amet leo. Nullam quis porta lacus, eget placerat nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce posuere leo sit amet justo commodo, vitae rutrum nisi tempor. Nulla dapibus euismod ornare. Integer efficitur quam quis mi scelerisque rutrum. Curabitur congue non urna efficitur accumsan. Etiam in metus aliquet, ornare est semper, condimentum enim. Sed ac lectus malesuada, scelerisque orci non, eleifend augue. Vestibulum vehicula eros a iaculis imperdiet. Donec porta nulla urna, pulvinar tristique tortor consequat id. Nam sit amet risus eu nisl dapibus auctor vitae vitae dolor. Nullam et elit non nisl semper vehicula sed id ligula. Praesent non odio nisi. Maecenas lobortis faucibus urna. Aliquam vulputate ante et lorem faucibus, molestie mattis mi gravida. Aliquam pulvinar est in elit tristique interdum. Fusce et ipsum suscipit, ornare dolor hendrerit, imperdiet quam. Suspendisse commodo commodo orci suscipit commodo. Morbi vulputate tristique erat vel maximus. Vestibulum imperdiet odio quis ligula malesuada congue. Curabitur tincidunt quam interdum mi pharetra, et porta mi convallis. Maecenas posuere sagittis mi. Aliquam lacus mi, molestie id dui eget, dignissim condimentum libero. Donec fringilla posuere tempor.'
var countWords = loremIpsum.split(' ');
console.log(countWords.length);
var countWordEt = [];
for(var i= 0; i < countWords.length ; i++ ){
  if(countWords[i] === 'et'){
    countWordEt.push(countWords[i]);
  }
}
console.log(countWordEt.length);