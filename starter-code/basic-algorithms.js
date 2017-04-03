// Names and Input


var driver1 = "John";
var hacker2 = prompt();

console.log("Driver's name is "+driver1);
console.log("Navigator name is "+hacker2);

if(driver1.length > hacker2.length) {
  console.log("Driver has a longer name with "+ driver1.length + " characters");
} else if( driver1.length < hacker2.length) {
  console.log("Navigator has a longer name with "+ hacker2.length + " characters");
} else {
  console.log("Both names are equal length of "+hacker2.length+ " characters")
}

var upperName = "";
for(var i=0; i<driver1.length; i++) {
  upperName += driver1[i].toUpperCase() + " ";
}
console.log(upperName);

var backWards = "";
for (var i = hacker2.length - 1; i >= 0; i--){
  backWards += hacker2[i];
}
console.log(backWards);



//Conditionals
var palindrome = prompt("Type new string");

palindrome = palindrome.replace(/[\s\,]/g, '');


var checkPal ="";
for (var i = palindrome.length - 1; i >=0; i--){
  checkPal += palindrome[i];
}

if (palindrome === checkPal){
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}


// Lorem ipsum generator
var string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac bibendum elit, et blandit erat. Nam vitae quam vel dolor lacinia vestibulum a ut ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur luctus ultricies mi a tempus. Duis ut ipsum suscipit, tincidunt eros vel, sollicitudin dui. Praesent porttitor neque ornare arcu pellentesque, eget tincidunt dolor tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur a mollis urna.\
\
Aenean sollicitudin, orci sit amet interdum rhoncus, ligula augue pharetra lacus, sed consectetur lectus lacus vitae mi. Mauris a quam vehicula, elementum risus eu, vehicula sem. Donec ut ipsum dictum, viverra sapien nec, ultrices nulla. Phasellus lorem massa, blandit at hendrerit nec, posuere quis sem. Nam convallis nisl id ex semper varius. Praesent suscipit faucibus nisl vel commodo. Quisque lacinia, nisi quis luctus tincidunt, lacus nibh dictum orci, ac auctor ligula tortor in ipsum. Proin volutpat aliquet neque eget pretium. In volutpat, libero et tincidunt ullamcorper, mauris tellus lobortis metus, vitae convallis ipsum velit eu nisl.\
\
Maecenas vitae velit pretium, blandit odio a, aliquam nunc. Aliquam pretium, turpis ac finibus malesuada, eros massa tincidunt diam, non efficitur sem dui ut quam. Nunc at tincidunt magna, non tempus diam. Nullam accumsan suscipit ipsum, in dignissim nibh bibendum vel. Nulla viverra sodales neque, vitae fermentum nisi. Etiam lobortis pretium magna, vitae porta metus condimentum nec. Sed hendrerit venenatis ornare. Donec commodo vulputate nisi, in pulvinar felis lobortis dignissim. Etiam ac sodales mi, vel mollis turpis. Proin hendrerit odio non purus porttitor vestibulum. Duis accumsan quam ut urna viverra, a ultrices turpis consequat. Fusce pharetra sagittis turpis ut vestibulum. Aliquam in ligula laoreet nisi commodo venenatis. Sed et pellentesque eros, vitae sollicitudin mauris. Sed et ultricies nibh. Nunc auctor ante ac vestibulum egestas.";


var words = string.split(' ');
console.log(words);
var split = words.length;
console.log("There are " + split + "words");

var etCount = 0;
for(var i = 0; i<words.length; i++ ) {
  if(words[i] === "et") {
    etCount++;
  }
}

console.log("Et appears "+etCount+" times");
