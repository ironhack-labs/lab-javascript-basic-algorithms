// Names and Input
//1
var hacker1 = "John"
//2
console.log("The driver's name is " + hacker1)
//3
var hacker2 = prompt("What's the navigators name?")
//4
console.log("The navigator's name is " + hacker2)
//Conditionals
//5
if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters.")
}
else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.")
}
else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")
}
//6 
let arr = [] 
for (let i = 0; hacker1.length > i; i++) {
  arr.push(hacker1[i].toUpperCase())
  arr.push(" ")
}
console.log(arr.join(" "))
//7
let arr2 = [] 
for (let i = 0; hacker1.length > i; i++) {
  arr2.unshift(hacker1[i])
}
console.log(arr2.join(""))
//8
if (hacker1 < hacker2){
  console.log("The driver´s name goes first.")
}else if(hacker2 < hacker1){
  console.log("The navigator goes first definitely.")
}else{
  console.log("What?! You both got the same name?")
}
//9
var str = prompt("Give me a new string and I'll check whether it's a Palindrome or not.")
;
if (str.toLowerCase() == str.toLowerCase().split("").reverse().join("")) {
  console.log("It's a palindrome.")
}
else {
  console.log("It's NOT a palindrome.")
}
// Lorem ipsum generator
//10
var str2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ; 
"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." ;
"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32." 
var wordsString = str2.split(" ");
console.log(wordsString.length);
counter = 0;

