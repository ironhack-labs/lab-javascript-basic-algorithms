var hacker1 = "Bob"; 

console.log("The driver's name is " + hacker1);

var hacker2 = window.prompt("What's your name, Friendly neighbor?"); 



console.log("The navigator's name is " + hacker2); 

  if (hacker1.length > hacker2.length) {
   
    console.log("The Driver has the longest name, it has "  + (hacker1.lenght) + "characters");
    
  } else if (hacker1.length < hacker2.length) {
    
    console.log("Yo, navigator got the longest name, it has "  + (hacker2.length) + " characters");
    
    
  } else {
    console.log("wow, you both got equally long names, " + (hacker1.length) + " characters!!");
      
    }
    

    
      var hacker1UpperSeparated = hacker1.toUpperCase().split('').join(' ');
    
    
      console.log(hacker1UpperSeparated); 


    
      var reverseHacker2 = hacker2.split('').reverse().join('');
      
      console.log(reverseHacker2);
      
      
 
    if (hacker1>hacker2) {
      
        console.log("The driver's name goes first"); 
        
    } else if (hacker2>hacker1) {
       console.log("Yo, the navigator goes first definitely"); 

    } else  {
      console.log("what?! You both got the same name?");
    }
    
    
    var isItPalindrome = prompt("Try to write a palindrome, brah").toLowerCase().replace(/\s/g, '').replace(/[',.'"?]/g, "");
    
    var reverseIsItPalindrome = isItPalindrome.split('').reverse().join('');
    
    
  /*console.log(isItPalindrome);  
  console.log(reverseIsItPalindrome);*/
  
  
  //Punto 9//
  
    
      if (isItPalindrome === reverseIsItPalindrome) {
        
        console.log("It's a Palindrome!"); 
        
      } else {
        console.log("Mmm, not a Palindrome")
      }
      
    
      
      
  //Punto 10//
  
  
var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, massa ac tristique rutrum, ex erat dictum libero, pretium euismod purus nisi eu odio. In finibus purus nunc, ut commodo est convallis sit amet. Aliquam id bibendum ipsum. Aliquam eu facilisis felis. Phasellus lacinia, felis nec rhoncus tincidunt, sapien magna imperdiet velit, eu placerat urna erat vel justo. Curabitur tempus ullamcorper risus, id convallis erat vulputate et. Aliquam sollicitudin lectus id felis euismod, ac laoreet mauris laoreet. Aenean pharetra mauris at arcu porta tempus. Nullam a consequat nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper at turpis ac congue. Proin facilisis placerat ante, eget pharetra lacus rutrum et. Integer eu commodo neque. Suspendisse vel volutpat quam. Pellentesque quis finibus nulla, ac aliquet dolor. Mauris id nibh turpis. Pellentesque posuere auctor ante ut suscipit. Phasellus condimentum risus purus, nec ornare neque ultricies porttitor.Aenean non dui nec sem condimentum condimentum. Morbi iaculis velit cursus euismod fermentum. Integer feugiat ex nec arcu ultricies, id pellentesque augue luctus. Pellentesque blandit, libero et pretium lacinia, urna nibh interdum quam, nec laoreet velit lorem vitae leo. Nulla semper, lectus interdum dapibus venenatis, neque nunc efficitur diam, ac blandit orci ipsum quis ipsum. Cras molestie eleifend pretium. Sed ultricies accumsan sapien eget tincidunt. Maecenas placerat ante et dignissim placerat. Proin finibus felis sed enim fermentum molestie."



console.log(loremIpsum.split(" ").length); 

var count =  loremIpsum.match(/\bet\b/g); 

count = count? count.length : 0;  //checking if there are matches or not.

console.log(count);
// Names and Input


//Conditionals


// Lorem ipsum generator
