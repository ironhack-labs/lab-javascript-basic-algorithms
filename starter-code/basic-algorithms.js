// Names and Input//Names & Input
//#1
var hacker1 = "Steve"
//#2
console.log("The driver's name is " + hacker1);
//#3
var hacker2 = prompt("What is the navigator's name?");
//#4

//Conditionals
console.log("The navigator's name is " + hacker2);
//#5
if(hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + "characters");
  } else if(hacker2.length > hacker1.length){
      console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  } else{
    console.log("wow, you both got equally long names, XX characters!!");
  }
//#6
var str = "";
for(var i = 0; i < hacker1.length; i++){
  str += hacker1[i] + " " ;
}
console.log(str.toUpperCase());

//#7
var str2 = "";
for(var i = hacker2.length -1 ; i >= 0; i--){
  str2 += hacker2[i];
}
console.log(str2);
  
//#8
var hacker1Lower = hacker1.toLowerCase();
var hacker2Lower = hacker2.toLowerCase();

if(hacker1Lower[0] < hacker2Lower[0]){
  console.log("The driver's name goes first");
} else if(hacker2Lower[0] < hacker1Lower[0]){
  console.log("Yo, the navigator goes first definitely");
} else{
  console.log("What?! You both got the same name?");
}

//#9
//INCLUDES SPACES IN PHRASES
var input = prompt("Enter word to check if it's a palindrome");
var backwards = "";
for(var i = input.length - 1; i >= 0; i--){
  backwards += input[i];
}
if(input === backwards){
  console.log(input + " is a palindrome");
} else{
  console.log(input + " is NOT a palindrome");
}

// Lorem ipsum generator
//#10
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, ante sit amet euismod semper, justo ante efficitur sem, nec aliquam purus risus eget nisl. Aenean elementum leo vitae mauris porttitor congue. Maecenas eget augue semper, vehicula enim ut, egestas nibh. Nullam varius ipsum nec sem tincidunt, in venenatis tortor convallis. Proin fringilla, nulla sit amet tempus egestas, odio velit blandit urna, in facilisis mauris justo ac nisl. Sed eu tincidunt risus, eget euismod nunc. Nulla pellentesque leo dui, eu lacinia diam ullamcorper non. Fusce nibh elit, iaculis quis efficitur sit amet, faucibus sit amet sapien. Praesent vel velit massa.In hac habitasse platea dictumst. Curabitur non volutpat diam, eu aliquam dolor. Proin sit amet dui porttitor, tempor libero ut, volutpat enim. Nunc aliquet bibendum metus vel scelerisque. Aenean maximus felis quis nulla cursus dictum. Pellentesque eu ante in nisl suscipit ultrices vitae eget tellus. Vivamus quis tincidunt enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent finibus nunc nec diam ultricies, ut accumsan nisl sagittis. Aliquam erat volutpat. Nullam blandit commodo eros quis congue. Vivamus at turpis vitae lacus mattis scelerisque vitae ac est. Vivamus consectetur in enim id vehicula. Nam vulputate neque vitae pellentesque placerat. Fusce in dui ullamcorper, vestibulum elit ut, semper purus. Donec vel laoreet mi.Nulla facilisi. Pellentesque sed cursus magna. Mauris ante nisi, eleifend vel nisi eget, fringilla ullamcorper arcu. Duis tempus nibh tincidunt metus hendrerit tristique. Phasellus ultrices porta laoreet. Mauris enim augue, ornare volutpat pulvinar at, lacinia eu dui. Etiam odio turpis, pretium sit amet elit eu, porttitor vulputate dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

var sum = 0;
for(i = 0; i < lorem.length; i++){
  sum ++;
}
console.log("There are " + sum + "characters in the 3 paragraphs");