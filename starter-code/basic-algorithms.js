var hacker1 = "Julien";

console.log('The driver\'s name is ' + hacker1);

var hacker2 = 'Andrea'; 

console.log('The driver\'s name is' + hacker2);

var length1 = hacker1.length;
var length2 = hacker2.length;

if (length1 > length2) {
  console.log('The Driver has the longest name, it has ' + length1 + ' characters');
} 
else if (length2 > length1) {
  console.log('Yo, navigator got the longest name, it has ' + length2 + ' characters');
}
else if (length1 === length2){
  console.log('wow, you both got equally long names, ' + length1 + ' characters');
}


var letters = hacker1.split('').join(' ');

console.log(letters.toLocaleUpperCase());


function reverse (hacker) {
  var array = hacker.split("");

  array = array.reverse();
  array = array.join("");

  console.log(array);
  return array;
}

var rev = reverse(hacker2);

console.log(rev);




