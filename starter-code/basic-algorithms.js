// Names and Input
var hacker1 = "Carlo", hacker2 = prompt("What's the navigator name?");

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);


//Conditionals
if(hacker1.length > hacker2.length) console.log("The driver has the longest name, it has " + hacker1.length + " characters");
else if (hacker1.length < hacker2.length) console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
else console.log("wow, you both got equally long names " + hacker1.length + " characters");


hacker1 = hacker1.toUpperCase();
var text = "";

for( var i = 0; i < hacker1.length; i++){
  text += hacker1[i] + " ";
}
//trims out the last whitespace
console.log(text.trim());

var reversed = "";

for(var i = hacker2.length - 1; i > -1; i--){
  reversed += hacker2[i];
}
console.log(reversed);

var answer = "", short = hacker1.length > hacker2.length ? hacker2 : hacker1;
hacker2 = hacker2.toUpperCase();

for(var i = 0; i < short.length; i++){
  if(hacker1.charCodeAt(i) > hacker2.charCodeAt(i))
      answer = "The driver's name goes first";
  else if (hacker1.charCodeAt(i) < hacker2.charCodeAt(i))
      answer = "Yo, the navigator goes first, definetly";
  if (answer) break;
}

console.log(answer || "What?! You both got the same name?");


var palindrome = prompt("Type a word").toLowerCase(), backwards = "";
palindrome = palindrome.replace(" ", "");

for(var i = palindrome.length - 1; i > -1; i--){
  backwards += palindrome[i];
}

console.log((palindrome === backwards) ? "Hey, this is a palindrome" : "Just a normal word");

// Lorem ipsum generator
var loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare nulla sit amet metus condimentum ornare. Nunc sed ligula id magna imperdiet consequat nec eget quam. Nam ac ante ac leo interdum dapibus. Donec non quam dolor. In quis purus diam. Duis ac sapien tempor, gravida orci quis, tincidunt dolor. In viverra convallis metus, quis placerat purus vehicula at. Aliquam sodales non nulla non iaculis. Morbi condimentum, eros efficitur commodo porttitor, felis felis sagittis arcu, viverra tempus sem justo non ipsum. Aliquam vitae mi varius, consectetur nisi ut, tristique justo. Etiam ac lorem lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus aliquam sagittis dolor, in malesuada neque iaculis a. Quisque lobortis nisl ut interdum lobortis. Donec eget mi quis diam efficitur elementum. Mauris vel dui ornare, dignissim eros sed, pulvinar tortor.\n Nam blandit malesuada bibendum. In hac habitasse platea dictumst. Sed rhoncus turpis dictum laoreet posuere. Donec sed sapien at est pellentesque auctor vel vel felis. Fusce nisi orci, semper sed cursus ut, consectetur a arcu. Integer velit lorem, varius at vehicula eu, placerat non augue. Vestibulum et dolor pulvinar, varius mauris eu, sollicitudin elit. Pellentesque eu risus aliquet, suscipit velit vitae, fermentum nisi. Vivamus sit amet suscipit dolor, vel feugiat turpis. Curabitur rhoncus ex at semper tristique. Quisque aliquam ut ligula sit amet ultrices. Suspendisse vehicula felis a mauris maximus, vitae suscipit dui elementum. Donec lectus velit, lacinia in ultrices in, volutpat sit amet mauris.\n Sed eget lacus sit amet nisl dignissim blandit. Phasellus at sagittis ex. Ut vitae feugiat diam. Sed erat dolor, maximus vel suscipit ac, posuere in dolor. Etiam at ex ut risus placerat dignissim eget nec erat. Sed iaculis ex lorem, et volutpat nunc volutpat sit amet. Quisque id sapien id quam consequat molestie eget vitae nunc. Nam sed metus a justo posuere sagittis ac maximus orci. Ut nisi ipsum, dictum nec cursus quis, convallis at velit. Etiam laoreet tempor scelerisque. Maecenas et lorem mollis, venenatis tortor eu, dapibus urna.";

console.log(loremipsum.split(" ").length);
console.log(loremipsum.split(" et ").length - 1);
