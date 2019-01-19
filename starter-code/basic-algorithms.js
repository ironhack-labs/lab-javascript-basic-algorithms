// Names and Input
let hacker1 = "Rafael";

console.log("The driver's name is ", hacker1);

let hacker2 = prompt("Write your navigator's name: ");
console.log("The navigator's name is", hacker2);


//Conditionals

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has" , hacker1.length," characters")
} else if (hacker1.length < hacker2.length){
console.log("Your, navigator got the longest name, it has", hacker2.length,  " characters")
} else{
  console.log("wow, you both got equally long names, ", hacker1.length, "characters!!" )
}


var toupper = "";
for (let i = 0; i < hacker1.length; i++){
  toupper += hacker1[i].toUpperCase() + " ";
}
console.log(toupper);

console.log(hacker1.toUpperCase().split("").join(" "))

let toreverse = ""; 
for (let j = hacker2.length - 1; j >= 0 ; j-- ){
  toreverse += hacker2[j];
}
console.log(toreverse);

// Another way
console.log(hacker2.split("").reverse().join(""));



if (hacker1[0].toLocaleLowerCase() < hacker2[0].toLocaleLowerCase()){
  console.log("The driver's name goes first");
} else if (hacker1[0].toLocaleLowerCase() > hacker2[0].toLocaleLowerCase()){
  console.log("You, the navigator goes first definitely");
}
else{
  console.log("What?! You both got the same name?")
}



// Bonus
string1 = prompt("Write your word: ");
string2 =  ""
for (var j = string1.length - 1; j >= 0 ; j-- ){
  string2 += string1[j];
}

console.log(string1.replace(/\s/g,"") , string2.replace(/\s/g,"") );
string1 = string1.replace(/\s/g,"").toLocaleLowerCase();
string2 = string2.replace(/\s/g,"").toLocaleLowerCase();
if(string1 == string2){
  console.log("It is a palindrome");  
} else{
  console.log("Sorry, your word It is not a palindrome");  
}








// Lorem ipsum generator
paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac faucibus neque, sit amet ullamcorper erat. In suscipit mauris eget mattis tempor. Mauris luctus quam nec pharetra dignissim. Aliquam eu volutpat risus, non egestas augue. Pellentesque sodales mi velit, non commodo nunc porta ut. Sed sollicitudin gravida aliquet. Nulla facilisi. Cras molestie nibh libero, non facilisis purus facilisis non. Nam quis lectus in orci consectetur sagittis nec non dolor. Sed eu convallis nibh. Donec non tellus cursus, ornare nulla nec, aliquam tellus. Mauris ornare velit sit amet magna interdum vulputate. Pellentesque vitae quam vel ex ultrices pharetra id eu quam. Nulla id ultrices diam. Duis lobortis blandit fringilla. Morbi metus orci, convallis at iaculis eget, faucibus a augue. Curabitur auctor vitae neque sit amet finibus. Cras in porttitor ligula. Vestibulum non imperdiet lacus. Praesent eget faucibus ex, vel elementum enim. Suspendisse sed nibh id arcu molestie semper eu vel diam. Aliquam rhoncus tellus sollicitudin, tincidunt sem vel, pellentesque erat. Quisque rutrum imperdiet ante, ac bibendum elit aliquet vitae. Etiam aliquet lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent ullamcorper iaculis massa. In non metus justo. Etiam nec dictum ipsum, eu tempus orci."

console.log("I have %d words", paragraph.split(" ").length)

counter = 0
list_paragraph =  paragraph.split(" ")
for(var i=0; i < list_paragraph.length ; i++){
  if(list_paragraph[i].match("^et")){
    counter++
    console.log(list_paragraph[i])
  }   
}
console.log("I have %d et words",counter)
