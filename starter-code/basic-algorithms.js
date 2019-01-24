var hacker1 = "Mickael";

console.log("The driver's name is "+hacker1);

var hacker2 = "nana"//prompt("What's the navigator position ?");

console.log("The navigator's name is "+hacker2);

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`);
}

// Ex 6
var name = "john";
var word = "";
for (var i = 0; i < name.length; i++) {
  word += name[i].toUpperCase() + " ";
}
console.log(word)

// Other solution
console.log("john".toUpperCase().split('').join(' '))


// Ex 7
name = "john";
word = "";
for (var i = name.length - 1; i >= 0; i--) {
  word += name[i];
}
console.log(word)

// Other solution
console.log("john".split('').reverse().join(''))


// Ex 8
hacker1 = "abba"
hacker2 = "abba"
for (var i = 0; i < hacker1.length && i < hacker2.length; i++) {
  if (hacker1 === hacker2) {
    console.log("What?! You both got the same name?")
    break;
  }
  if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first`);
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log(`The navigator's name goes first`);
    break;
  }
}

//Ex 9
//word = prompt("Try a pallindrome :")
console.log(word.split('').reverse().join('') === word)


// Last one !!
var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

console.log(lorem.split(' ').length)
console.log(lorem.split(' ').filter(word => word === "of").length)

var count= 0
for ( var i = 0 ; i < lorem.length ;  i++) {
  if (lorem[i] === " ") {
    count++
  }
}

for ( var i = 0 ; i < lorem.length-1 ;  i++) {
  if (lorem[i] === "e" && lorem[i+1] === "t") {
    count++
  }
}
