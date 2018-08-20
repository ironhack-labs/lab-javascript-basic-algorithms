// Names and Input

var hacker1 = 'smith';
console.log('The driver\'s name is '+hacker1);

var hacker2 = prompt('What is the navigator?');
console.log('The navigator\'s name is '+hacker2);

//Conditionals

if (hacker1.length > hacker2.length){
  console.log('The Driver has the longest name, it has '+hacker1.length+' characters');
} else if (hacker2.length > hacker1.length){
  console.log('Yo, navigator got the longest name, it has '+hacker2.length+' characters');
} else{
  console.log('wow, you both got equally long names, '+hacker1.length+' characters!!');
}

// Lorem ipsum generator
for (var i = 0; i < hacker1.length-1; i++){
  console.log(hacker1[i].toUpperCase());
}
for (var i = hacker2.length-1; i >= 0; i--){
  console.log(hacker2[i]);
}


if (hacker1 === hacker2){
  console.log('What?! You both got the same name?');
}else {
  var order=[hacker1.toLowerCase(), hacker2.toLocaleLowerCase()];
  if (order[0] === hacker1){
    console.log('The driver\'s name goes first');
  }else if (order[0] === hacker2){
    console.log('Yo, the navigator goes first definitely');
  }
}

// Bonus 

var checkPalindrome = prompt('write a new string');

var reversString = checkPalindrome.split('').reverse().join('');

if (checkPalindrome === reversString){
  console.log ('It is a Palindrome');
} else {
  console.log('It is not a Palandrome');
}



var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique id metus ac congue. Nunc eget erat sed nisl ullamcorper bibendum in non ipsum. Aenean ornare, eros eu tincidunt pretium, justo quam maximus nunc, vitae tincidunt lectus tortor a lorem. Maecenas finibus dolor metus, id ultrices orci sodales sit amet. Vestibulum lacinia ipsum in neque consectetur, eu bibendum lacus viverra. Quisque tincidunt interdum purus, commodo mollis ex ultrices eget. Vestibulum ullamcorper libero non risus commodo luctus. Aenean quis velit vitae nisi rutrum luctus et ut libero. Vivamus hendrerit iaculis tellus vel dapibus. Curabitur sed leo quis purus facilisis vehicula sit amet ut mi. Aliquam imperdiet elementum lacinia. Vivamus et maximus quam. Aliquam erat volutpat.tiam pretium sed sem suscipit fermentum. Donec in libero diam. Phasellus nec tempus diam. Fusce id facilisis leo. In non sodales ante. Vivamus condimentum sem a quam tristique, sed pulvinar lacus lobortis. Aenean vel consequat metus. Integer et ultricies sem. Integer non leo lacus. Phasellus ac erat vel mi porttitor ultricies at in risus. Ut ultrices sit amet massa vitae vulputate. Morbi molestie lacus suscipit risus egestas euismod.';


var wordsFirst = paragraph.split(' ').length;

console.log(wordsFirst);

var numMatches = paragraph.match(/et/g).length;

console.log(numMatches);