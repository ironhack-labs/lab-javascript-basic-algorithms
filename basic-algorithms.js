//Names and input

var hacker1= "Mac";
console.log("The driver's name is " + hacker1);
var hacker2=prompt("What's your navigator's name?");
console.log("The navigator's name is " + hacker2);

//Conditionals
var largeWord=hacker2.length;
if(hacker1.length === hacker2.length){
console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}
else if(hacker1.length>hacker2.length){
console.log("The Driver has the longest name,it has "+hacker1.length + " characters");
largeWord=hacker1.length;
}
else {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters!!");
}

//Loops
var word="";
for(var i=0;i<hacker1.length;i++){
  word=word + hacker1[i].toUpperCase()+ " ";
}
console.log(word);

var word="";
for (var i=hacker1.length-1;i>=0;i--){
  word=word + hacker1[i];
}
console.log(word);


if(hacker1<hacker2){
  console.log("The driver's name goes first");
}
else if(hacker1>hacker2){
  console.log("Yo, the navigator goes first definately");
}
else{
 console.log("What?! You both got the same name?");
}

var palindrome=prompt("Say something");
palindrome=palindrome.toUpperCase();

var x="";
for (var i=palindrome.length-1;i>=0;i--){
  x+=palindrome[i];
}
if(palindrome===x){
  console.log("It's palindrome");
}
else{
  console.log("It's not palindrome");
}

var p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae libero tristique, convallis nulla sit amet, volutpat neque. Sed in erat tempor, maximus neque dignissim, laoreet augue. Mauris est mi, sagittis eu nisl eu, finibus porttitor lectus. Mauris leo diam, posuere eu cursus vel, tincidunt vitae leo. Mauris eu iaculis turpis. Nulla interdum est sed felis cursus, vitae mattis felis tempus. Duis risus velit, molestie in massa ultricies, eleifend vehicula nulla. Aenean molestie diam sit amet orci suscipit bibendum. Aliquam sit amet lectus vitae ipsum eleifend sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec fringilla porttitor nisi nec fermentum. In accumsan quam eget ullamcorper dictum. Cras luctus ante sem. Nullam aliquet urna quam, at fringilla mi ultrices ac. Nam laoreet sodales viverra. Nam bibendum leo massa, vitae molestie dui cursus eget. Aenean commodo viverra sem a dictum. In a est condimentum, auctor metus et, suscipit neque. Suspendisse et commodo est. Duis et posuere risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eu porta ex. Curabitur eget nulla orci. Pellentesque dictum lacus eu vestibulum semper. Sed finibus massa eu finibus pharetra. Suspendisse tristique a ante eget finibus. Proin pulvinar semper auctor. Ut purus ligula, commodo vitae velit ac, posuere consectetur tortor. In pharetra blandit elementum."

var count=1; //La primera palabra no cuenta el espacio;
var countet=0;
for (var i=0;i<p.length;i++){
  if(p[i]===" "){
    count++;
  }
  if(p[i]=="e" && p[i+1]=="t" && p[i+2]==" "){
    countet++;
  }
}
console.log("Number of words: " + count);
console.log("Number of ets: " + countet);

