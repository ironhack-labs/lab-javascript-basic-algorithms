//varibales
var hacker1 = "mafe";
console.log("The driver's name is ", hacker1);
var hacker2 = prompt ("What is your name?");
console.log("The navigator's name is  ", hacker2);

//conditionals
if (hacker1.length>hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.lenght + " characters");
  }else if (hacker2.lenght<hacker1.lenght){
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  }else {
    console.log ("Wow, you both got equally long names, " + hacker1.lenght + "characters");
  }

  //6 loops
var hackerCapital = hacker1.toUpperCase();
console.log(hackerCapital.split("").join(" "));

//7loops
console.log(hacker2.split("").reverse().join(""));
 
//8loops
if (hacker1<hacker2){
  console.log("The driver's name goes first");
}else if (hacker2<hacker){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

//9 Bonus
var palindrome = prompt("Give me a sentence").replace(/ /g, "");
var revPalindrome = palindrome.split("").reverse().join("");
if (palindrome===revPalindrome){
  console.log ("It is a palindrome!");
}else {
  console.log("It is not!");
}

//10 paragraph
var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus sagittis dolor et consequat. Vestibulum non lorem justo. Donec sit amet eros quis turpis ultricies tristique. Quisque dapibus urna ac dignissim maximus. Donec vestibulum justo sit amet magna gravida accumsan. Aenean placerat ligula urna, blandit suscipit neque rhoncus eu. Etiam pretium molestie justo, eu semper magna consequat vitae. Curabitur consequat porttitor eros, ut ullamcorper ipsum vulputate ut. Sed sit amet augue orci. Nunc at urna eget leo pharetra hendrerit sit amet vitae urna. In consectetur nisi quis mi aliquet, at pellentesque nisl dictum. Nullam est metus, pellentesque a lacus vitae, imperdiet vestibulum neque. Ut at ex vehicula, convallis tellus in, sollicitudin leo. Etiam maximus placerat ex ac laoreet. In libero leo, congue nec ipsum varius, placerat condimentum purus. Maecenas quis erat vitae sapien convallis ultricies. Duis vel commodo diam. Ut elementum tempor scelerisque. Suspendisse nulla dui, efficitur vitae condimentum vel, malesuada nec ex. Maecenas sit amet mauris scelerisque purus semper tristique. Etiam nunc enim, dictum nec eros quis, fermentum feugiat turpis. Aliquam at orci aliquet, rhoncus magna pretium, tincidunt ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi quam enim, tristique viverra turpis quis, convallis viverra sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
console.log(paragraph.split(" ").length);
sss