// Names and Input


var hacker1 = "Georgina";

console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What is your name");

console.log("The navigator's name is " + hacker2);


//Conditionals


//5. Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
  } else if (hacker1.length < hacker2.length) {
      console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
  } else {
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
  }
  
  //6. Loop
  var hacker1Formatted = "";
  function formatHacker1() {
    for (var i = 0; i < hacker1.length; i++) {
    hacker1Formatted = hacker1Formatted + hacker1.charAt(i).toUpperCase() + " ";
    
  } 
  hacker1Formatted = hacker1Formatted.slice(0,-1);
  console.log(hacker1Formatted);
  return hacker1Formatted;
  }
  formatHacker1();
  
  //7. Loop
  var nameReversed = "";
    function reverseName(name) {
      for (var i = name.length; i >= 0; i--) {
      nameReversed = nameReversed + name.charAt(i);
      
    } 
    
    console.log(nameReversed);
    return nameReversed;
  }
  reverseName(hacker2);
  
  
  
  //8. Loop
    function nameMatchCheckerEasy() {
      if (hacker1 < hacker2) {
        console.log("The driver's name goes first");
      } else if (hacker1 > hacker2) {
        console.log("Yo, the navigator goes first definitely");
      } else {
        console.log("What?! You both got the same name?");
      }
  
  }
  nameMatchCheckerEasy();
  
  var hacker2Formatted = "";
    function nameMatchChecker() {
      var namesLength;
      if (hacker1.length <= hacker2.length) {
        namesLength = hacker1.length;
      } else {
        namesLength = hacker2.length;
      }
      for (var i = 0; i < namesLength; i++) {
        
      
      } 
    return hacker2Formatted;
  }
  //nameMatchChecker();
  
  
  
  //9. Palindrome
  //todo: remove spaces or commas from words first
  var userPalindrome = prompt("Type a palindrome");
  var reverseWord = reverseName(userPalindrome);
  if (userPalindrome === reverseWord) {
    console.log(userPalindrome + " is a palindrome!");
  } else {
    console.log(userPalindrome + " is not a palindrome");
  }
  


// Lorem ipsum generator
//10. loerm ipsum
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget molestie urna. Duis lobortis in tellus in eleifend. Integer ornare elit vitae pulvinar aliquam. Praesent lectus nulla, hendrerit vel dignissim et, tincidunt sit amet massa. Fusce a scelerisque eros, vitae dignissim mauris. Quisque cursus ultricies nisl sit amet lobortis. Sed eget felis sed odio sodales malesuada mattis a mauris. Pellentesque sollicitudin augue tortor, quis laoreet lacus cursus nec. Nulla sed sapien ut dui bibendum ornare. Vestibulum venenatis pulvinar velit sit amet placerat. Aliquam erat volutpat. Nam viverra, enim et euismod ornare, lacus augue accumsan odio, eget vehicula felis ex quis nulla. Sed eros urna, vulputate fringilla pellentesque et, luctus sed eros. Suspendisse in nibh mattis, sagittis odio eget, molestie enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis rhoncus massa. Maecenas vel euismod est. Praesent sodales posuere elit sed dictum. Ut augue tortor, volutpat id velit in, placerat volutpat sapien. Vestibulum libero mi, faucibus id sodales mollis, laoreet vitae mi. Praesent quis pharetra erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut placerat metus lacus, in varius risus ullamcorper sed. Praesent vestibulum pellentesque felis sit amet hendrerit. Pellentesque tincidunt, mauris at molestie fringilla, enim nisi facilisis dui, id auctor risus tellus eget nisi. Etiam metus magna, consequat ac tincidunt ac, molestie et lacus. Donec mi augue, porta eget sollicitudin dapibus, tincidunt id magna. Donec ac tristique turpis. Ut in finibus ex. Sed nec vehicula massa, ut porta tortor. Cras enim nunc, viverra eget diam a, luctus venenatis turpis. Nulla vel mauris vel neque tempor efficitur. Nulla facilisi. Maecenas imperdiet risus nunc, nec iaculis nulla vulputate a. Proin pharetra tempus nisi, at ornare ex porttitor sit amet. Aenean auctor velit eu blandit finibus. Duis et vehicula ex, iaculis malesuada ipsum. Ut et eros suscipit, tincidunt leo sit amet, laoreet turpis. Nam dui ante, viverra varius tellus eget, vulputate commodo nibh.";

function countWords(str) {
  console.log(str.split(" ").length);
}
countWords(loremIpsum);

function countSpecificWord(str) {
  console.log(str.split(" et ").length-1);
}
countSpecificWord(loremIpsum);
