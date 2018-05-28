// Names and Input


//Conditionals


// Lorem ipsum generator

var hacker1= "Jana";
var hacker2= prompt("what is the navigator's name?");
hacker2 = hacker2.toLowerCase();
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
}
else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
}
else if (hacker1.length === hacker2.length) {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters");
}

var str="";
for (var i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase());
  str += hacker1[i].toUpperCase() + " ";
}
console.log(str);

console.log(hacker2.split('').reverse().join(''));

if(hacker1.toLowerCase().split('').sort() < hacker2.split('').sort()){
  console.log("driver's name goes first");
}
else if(hacker1.toLowerCase().split('').sort() > hacker2.split('').sort()){
  console.log("Yo, the navigator goes first definitely");
}
else {
  console.log('What?! You both got the same name?');
}

var palindrome = prompt("is this word a palindrome");
// console.log(palindrome.split(''));
// console.log(palindrome.split('').reverse());
// if (palindrome.split('') === palindrome.split('').reverse()) {
//   console.log("this is a palindrome!");
// }
// else {
//   console.log("this is NOT a palindrome!");
// }
var myvar = "";
for (var i = palindrome.length - 1; i >= 0 ;i--){
  console.log(palindrome[i]);
  myvar += palindrome[i];
}

if (myvar===palindrome) {

  console.log("this IS a palindrome");
}
console.log(palindrome);
console.log(myvar);

var paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu pulvinar ex, sit amet fermentum magna. Mauris facilisis, risus eget rutrum porttitor, quam ipsum rutrum nulla, vitae ultricies odio elit a tellus. Nunc in ex id nunc lacinia pellentesque. Praesent varius ultricies dapibus. Sed eu ante dignissim, vehicula tellus eget, blandit lectus. Vestibulum id libero pulvinar, ullamcorper est ut, tempus metus. Proin finibus nulla pulvinar nisi efficitur, id vulputate velit imperdiet. Quisque a magna suscipit, ornare nulla a, pellentesque nunc. Maecenas efficitur, odio nec laoreet elementum, leo est venenatis dui, sit amet convallis leo nisi vel nulla. Praesent eget lorem id orci consequat aliquet aliquet in ipsum. Sed egestas, erat eget rhoncus ullamcorper, ligula felis maximus nunc, id venenatis nulla nisi pharetra sem. Donec vehicula euismod tellus, quis faucibus erat vestibulum id. Donec vitae elit vel orci facilisis imperdiet aliquet ac urna. Nam orci ligula, euismod eu erat id, tincidunt imperdiet lacus. Praesent dolor quam, aliquet vel urna vitae, varius feugiat erat. Cras rutrum mollis laoreet. Vestibulum euismod purus metus, non lacinia turpis tristique eget. Fusce efficitur sapien eu sagittis luctus. Proin eros ligula, pulvinar eu varius nec, iaculis vel felis. Nulla gravida aliquet enim, at faucibus diam tristique nec. Proin mauris massa, luctus bibendum faucibus ac, porttitor non elit. Nulla dignissim nunc nec egestas luctus. Donec varius nibh quam, vitae vulputate magna mollis eget. Morbi consequat leo sit amet mi semper, quis sollicitudin tellus viverra. Aenean justo tortor, vestibulum quis rutrum egestas, volutpat at felis. Vivamus hendrerit mollis tellus. Pellentesque sagittis, quam ac hendrerit dapibus, ipsum augue eleifend est, ut efficitur leo arcu ut velit. Ut pulvinar, neque sed dignissim venenatis, risus libero sollicitudin libero, et sollicitudin libero est sed orci. Donec hendrerit diam nec turpis aliquam, ac venenatis mauris laoreet."

console.log(paragraphs.split(' ').length);
console.log(paragraphs.indexOf('et'));