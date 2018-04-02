// Names and Input
var hacker1 = "Ryan";
var hacker2 = "Diego";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

//Conditionals
if(hacker1.length === hacker2.length){
  console.log("Wow, you've both got eually long names, " + hacker1.length + "characters!!");
}
else if(hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters.");
}
else if(hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.");
}

for(var i = 0; i < hacker1.length; i++){
  console.log(hacker1[i].toUpperCase() + " ");
}

for(var i = (hacker2.length - 1); i > -1; i--){
  console.log(hacker2[i]);
}

if(hacker1 === hacker2){
  console.log("What?! You've both got the same name?"); 
}
else if(hacker1 < hacker2){
  console.log("The driver's name goes first");
}
else if(hacker1 > hacker2){
  console.log("Yo, the navigator's name goes first definitely");  
}

var palindromeTest = "racecar";
var letters = palindromeTest.split("").reverse().join("").toUpperCase();
if(palindromeTest.toUpperCase() === letters){
  console.log(palindromeTest + " is a palindrome");
}


// Lorem ipsum generator
var paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna magna, porttitor in sapien eget, hendrerit luctus elit. Donec scelerisque hendrerit justo vitae tincidunt. Fusce viverra rutrum ipsum pulvinar porttitor. Vestibulum rhoncus commodo scelerisque. Aliquam nec leo nec ex feugiat egestas eu sit amet nisl. Quisque sed augue nec nisl porttitor tempus eu at odio. Mauris eget accumsan metus. Aenean pretium ullamcorper urna vel viverra. Aliquam erat volutpat. Phasellus semper, purus sed dignissim volutpat, massa magna aliquet enim, a vulputate orci augue at nisi. Nunc faucibus id felis ac varius. Integer enim lectus, bibendum non feugiat eget, hendrerit finibus quam. Aenean non nunc non ligula cursus bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus diam id nulla ornare, sed aliquet leo euismod. Duis tellus ex, venenatis ut tortor ut, tristique vulputate augue. Nullam nec placerat est. Duis nec dolor tellus. Integer faucibus cursus lorem id aliquet. Vivamus iaculis leo vel augue tempor rutrum. Nam molestie egestas metus, eu dictum nulla imperdiet sit amet. Etiam sit amet ante lectus. Sed eleifend ex sed diam consequat bibendum. Morbi ac elit vel elit laoreet pulvinar in in mauris. Praesent eget quam at elit fringilla efficitur. Aenean maximus odio ac lacus auctor, id maximus justo suscipit. Curabitur volutpat venenatis efficitur. Etiam diam felis, viverra vitae sapien eu, tempus fringilla lectus. Praesent tortor nisi, sagittis sit amet facilisis ac, eleifend ac lorem. Donec pulvinar diam in lorem ultricies fringilla. Ut auctor ut diam a molestie. Aenean rutrum, velit non viverra finibus, urna justo condimentum est, sit amet dictum ligula arcu ac ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer eu pretium urna, eget vehicula metus."

words = paragraphs.split(" ");
// console.log(words);
console.log(words.length);

ets = paragraphs.split(" et ");
// console.log(ets);
console.log(ets.length);