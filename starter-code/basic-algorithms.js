var hacker1="marc";
console.log("The driver's name is "+hacker1);

hacker2 = window.prompt("Tell me the navigator's name");
console.log(hacker2);

//--------------------------------

var driver="marc";
var navegante="juanma";

if (driver.length>navegante.length) {
  console.log("The Driver has the longest name, it has "+driver.length+" characters")
}else if(navegante.length>driver.length){
  console.log("Yo, navigator got the longest name, it has "+navegante.length+" characters")
}else{
  console.log("wow, you both got equally long names, XX characters!!")
}

//--------------------------------

var char;
var name;

for (i=0; i<driver.length; i++){
  char=driver.charAt(i).toUpperCase()
  name+=char+" "
}
console.log(name)

//--------------------------------

var name2="marc";
var char2="";
var nameReversed="";

for (i=name2.length; i>=0; i--){
  char2=name2.charAt(i)
  nameReversed+=char2
}

console.log(nameReversed);

//--------------------------------

var driverCode=driver.charCodeAt(0)
var naveganteCode=navegante.charCodeAt(0)

if (driverCode>naveganteCode){
  console.log("The driver's name goes first")
}else if(naveganteCode>driverCode){
  console.log("Yo, the navigator goes first definitely")
}else{
  console.log("What?! You both got the same name?")
}

console.log(naveganteCode+" "+driverCode)

//--------------------------------

var char;
var namePalindrome="";

isPalindrome = window.prompt("Enter a word, i'll check if it's palindrome");

for (i=isPalindrome.length; i>=0; i--){
  char=isPalindrome.charAt(i)
  namePalindrome+=char
}
console.log(isPalindrome+" "+namePalindrome)
console.log(typeof isPalindrome)
console.log(typeof namePalindrome)

if (isPalindrome===namePalindrome){
  console.log("is palindrome")
}else{
  console.log("not palindrome")
}


// ----------------------------------

var paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel elit rhoncus, euismod nisi sed, elementum urna. Integer lobortis interdum ultricies. Morbi luctus commodo magna. Curabitur eu sodales ipsum. Nullam sit amet lectus at eros accumsan fermentum. Mauris ut luctus lorem, vitae tristique tortor. Donec bibendum eros at lobortis varius. Curabitur vulputate tempor lacinia. Donec ullamcorper orci nec arcu gravida molestie. Phasellus vitae arcu sodales nisl efficitur egestas.In hac habitasse platea dictumst. Maecenas quis est tristique, condimentum quam ac, rhoncus lacus. Quisque vel urna ut tortor auctor suscipit. Sed ornare sapien risus, nec tempus nisl varius nec. Nam et nisi tortor. Mauris ultricies at augue nec cursus. Donec a fringilla dolor, eget semper diam. Proin finibus libero at tortor fringilla vulputate. Duis tincidunt velit eget erat pharetra, ut pulvinar velit egestas.Donec laoreet erat nec sem vulputate gravida. Aenean id elementum nisi. Phasellus eu elementum felis. Ut hendrerit nibh et lacinia posuere. Cras consectetur tellus id placerat molestie. Aliquam mollis lacus non nisl condimentum, ut viverra leo sodales. Nunc sagittis eleifend tincidunt. Cras ultricies nisi vel pulvinar ornare. Mauris magna justo, varius tempus ante vel, vehicula volutpat urna. Aliquam ullamcorper orci lorem, ac tempus urna porta nec. Duis tellus lacus, ornare sit amet aliquet in, mollis ut massa."

console.log(paragraphOne.split(" ").length)








