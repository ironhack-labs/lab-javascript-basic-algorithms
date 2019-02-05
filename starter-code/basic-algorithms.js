// Names and Input
const hacker1 = 'Marc';
console.log('The driver\'s name is ' + hacker1);
const hacker2 = 'Llorenç';
console.log('The navigator\'s name is ' + hacker2);
const hacker3 = 'Francesc';
console.log('The navigator\'s name is ' + hacker3);

//Conditionals
if ( hacker1.length == hacker2.length){
  console.log('Wow! you both got equally long names, ' + hacker1.length + ' characters');
} else if (hacker1.length > hacker2.length){
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else{
  console.log('Yo, navigator got the longest name, ' + hacker2.length + ' characters');
}


//Loops
var nameCapital='';
for(let i=0; i < hacker3.length; i++){
    nameCapital += hacker3[i].toUpperCase() + ' ';
}
  console.log("Name in Capitals :");
  console.log(nameCapital);

var nameReverse='';
  for(let i=hacker3.length-1; i >=  0; i--){
      nameReverse += hacker3[i];
  }
  console.log("Name Reverse: ");
  console.log(nameReverse);

var arrayNames = [hacker1, hacker2, hacker3];
arrayNames.sort();
console.log("Lexicographic order: ")
console.log(arrayNames);

//Bonus Time - Lorem ipsum
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales tristique nunc, eu luctus diam viverra id. Ut mattis ante at ipsum molestie ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at convallis felis. Nulla bibendum congue nisl at ornare. Cras felis libero, accumsan et laoreet vel, venenatis eu risus. Vestibulum et neque id enim sagittis ultrices. Sed vel elit lobortis, luctus ipsum eget, facilisis lorem. Sed dignissim fringilla libero, fringilla ullamcorper orci luctus sit amet. Cras dignissim, felis ut dignissim vestibulum, nisi enim ultrices felis, sit amet ornare odio nunc et erat. Donec eu aliquet augue. Proin blandit justo id nibh congue varius. Nullam pellentesque nisi a finibus consequat. Nullam eget purus id ante volutpat rutrum a vitae nisl. Fusce porta lectus ligula, a efficitur enim rutrum vel. Donec turpis metus, viverra quis vestibulum vitae, rutrum in augue. Nullam et lorem eget ipsum euismod gravida scelerisque in nibh. Suspendisse potenti. Morbi porta semper neque eu convallis. Etiam auctor eget nisi eget laoreet. In quis ex mollis, pretium sem id, aliquam erat. Quisque dignissim pellentesque mauris, id lacinia neque finibus vel. Cras malesuada mi neque, et varius odio ultricies id. Proin vel facilisis lacus, vel dignissim justo. Duis ut augue viverra, dapibus nunc vel, mattis metus. Ut ut nunc aliquam, ultricies erat non, mollis sapien. Suspendisse tincidunt est a semper iaculis. Donec ut massa lobortis, interdum elit eu, dignissim nulla. Duis pretium fermentum ligula, eget sagittis justo tristique sed.";

console.log((text.split(' ')).length);

console.log((text.split('et')).length);


var palindrome = prompt("palindrome");
palindrome.replace(/\s/g, '');
palindrome = palindrome.replace(",", '');
console.log(palindrome);
var error = false;

for (let i = 0; i <= palindrome.length; i++) {
  if (palindrome[i] == palindrome[palindrome.length - i - 1]) { //asddsa
    //
  } else {
    error = true;
  }
}

if (error) {
  console.log("Palindrome incorrecto");
} else {
  console.log("palindrome correcto");
}