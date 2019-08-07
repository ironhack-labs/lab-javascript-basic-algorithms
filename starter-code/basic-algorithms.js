// Names and Input
 let hacker1 = "Julie";
 console.log("The driver's name is Julie");

 let hacker2 = window.prompt("Enter navigator name");
 console.log("The navigator's name is Hacker2");


//Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has XX characters" + hacker1);

}
else if (hacker1.length < hacker2.length) {
    console.log("Yo, navigator got the longest name, it has XX characters" + hacker2);
}
else {
    console.log("wow, you both got equally long names, XX characters!!");
}

// Lorem ipsum generator

//Loops
let driver = "";

//console.log(hacker1.toUpperCase());
for(let i = 0; i < hacker1.length; i++) {
    //console.log(hacker1[i]);
    driver = driver + hacker1[i].toUpperCase() + " "
}
console.log(driver);

let navigator = "";

for(let i = hacker2.length - 1; i >= 0; i--) {
    
     navigator += hacker2[i];
}
console.log(navigator);


if (hacker1 > hacker2) {
    console.log("The driver's name goes first");

}
else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely");
}
else {
    console.log("What?! You both got the same name?");
}

let word = window.prompt("Enter a string");
let reverse = "";

for(let i = word.length - 1; i >= 0; i--) {
    
     reverse += word[i];
}
console.log(word);

if (word === reverse) {
    console.log("It's a palindrome");
}
else {
    console.log("It's not a palindrome");
}

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan vulputate sapien sit amet pellentesque. Vestibulum ullamcorper urna eget turpis venenatis, non aliquam quam rutrum. Proin tincidunt, libero vitae interdum tincidunt, nisl augue sodales eros, quis fermentum libero ligula rutrum nulla. Mauris vitae ligula tempor, commodo augue at, condimentum sapien. Nam nec eros fermentum, elementum ligula vel, mollis elit. Duis fermentum, ligula vel bibendum commodo, quam urna ullamcorper enim, ut varius justo neque eget elit. Ut gravida metus velit, sit amet imperdiet mi dapibus non. Maecenas tincidunt aliquet felis vel condimentum. Curabitur sit amet sagittis ex. Maecenas luctus sagittis dui, at euismod augue consectetur sit amet. Sed id placerat ipsum, ut rutrum mi. Ut scelerisque augue et iaculis facilisis. Praesent ligula erat, malesuada ornare condimentum vitae, feugiat quis metus. Vestibulum urna diam, vulputate non orci sed, sagittis dignissim diam. Nam nec lacinia nisi, at accumsan lacus. Vestibulum varius sagittis augue, id volutpat risus malesuada at. Praesent elementum eget nibh ac ultrices. Proin scelerisque dui lacinia, malesuada sem ut, efficitur magna. Nulla odio purus, dignissim non vehicula et, suscipit et nibh. Phasellus id dapibus augue. Vestibulum scelerisque volutpat semper. Curabitur vel odio at est dictum finibus id et enim. Duis a rhoncus sapien, at consequat erat. Donec interdum consectetur arcu, eget posuere enim viverra eu. Duis suscipit mauris vitae rhoncus finibus. Nulla vehicula, lorem eu scelerisque tincidunt, neque dui ultricies enim, quis ornare tortor felis ut sapien.";
 
let count = 1;
for(let i= 0; i < lorem.length; i++) {
    if(lorem[i] === " ") {
        count = count + 1;
    }
}
console.log(count);