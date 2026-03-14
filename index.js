// Iteration 1: Names and Input
console.log(">>iteration 1:")

  const hacker1 = "Ali";                                                                                                                                                                     
  console.log("The driver's name is " + hacker1);                                                                                                                                              
                                                                                                                                                                                               
  const hacker2 = "Sara";                                                                                                                                                                      
  console.log("The navigator's name is " + hacker2);                                                                                                                                           
                                                                                                                                                                                               
// Iteration 2: Conditionals
console.log(">>iteration 2:")                                                                                                                                                                 
  if (hacker1.length > hacker2.length) {                                                                                                                                                       
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");                                                                                                 
  } else if (hacker2.length > hacker1.length) {                                                                                                                                                
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");                                                                                
  } else {                                                                                                                                                                                     
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");                                                                                                  
  }                                                                                                                                                                                            

// Iteration 3: Loops
console.log(">>iteration 3.1:")
let driverNameSpaced = "";
for (let i = 0; i < hacker1.length; i++) {
    driverNameSpaced = driverNameSpaced + hacker1[i].toUpperCase();
    if (i < hacker1.length - 1) {
      driverNameSpaced = driverNameSpaced + " ";
    }
}
console.log(driverNameSpaced);

// Iteration 3.2: Navigator's name in reverse 
console.log(">>iteration 3.2:")                                                                                                                                               
  let reversedName = "";                                                                                                                                                                       
                                                                                                                                                                                               
  for (let i = hacker2.length - 1; i >= 0; i--) {                                                                                                                                              
    reversedName = reversedName + hacker2[i];                                                                                                                                                  
  }                                                                                                                                                                                            
                                                                                                                                                                                               
  console.log(reversedName);                                                                                                                                                                   
                                                                                                                                                                                               
  // Iteration 3.3: Lexicographic order
  console.log(">>iteration 3.3:")                                                                                                                                                        
  if (hacker1 < hacker2) {                                                                                                                                                                     
    console.log("The driver's name goes first.");                                                                                                                                              
  } else if (hacker1 > hacker2) {                                                                                                                                                              
    console.log("Yo, the navigator goes first, definitely.");                                                                                                                                  
  } else {                                                                                                                                                                                     
    console.log("What?! You both have the same name?");                                                                                                                                        
  }  


  // Bonus 1:
  console.log(">>Bonus 1:")

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum et tortor sit amet pretium. Mauris nisl erat, porta non commodo et, lobortis suscipit libero. Suspendisse potenti. Quisque massa enim, laoreet a sapien ac, tincidunt rhoncus elit. Nam quis placerat lacus. Mauris lacinia mi sed porta fermentum. Vivamus maximus, ligula nec congue congue, nunc justo pharetra est, in tempor mi ante ac leo. Sed aliquam, ligula commodo molestie lacinia, ante odio bibendum magna, nec sagittis tortor purus ut nisi. Quisque pellentesque nec neque aliquam tempus. Donec semper elit odio, a commodo velit tristique eu.

Ut eget odio quis arcu ultricies semper at a enim. In eu congue eros. Etiam varius commodo felis, quis cursus leo sollicitudin id. Aliquam mi orci, consequat sed felis non, sagittis dapibus libero. Nulla imperdiet placerat lacus sed sodales. Morbi in nulla quis magna luctus scelerisque. Sed nisi lorem, vestibulum a mi non, tempor accumsan libero. Suspendisse potenti.

Suspendisse tincidunt tristique lectus, sed porttitor ex auctor eget. Morbi et neque massa. Nam id diam eu lorem malesuada scelerisque eu sed erat. Nam blandit leo id tincidunt efficitur. Phasellus eleifend vel ligula faucibus convallis. Cras finibus at sem facilisis fringilla. Etiam pellentesque lacus vel orci tempus, ac facilisis metus porta. Etiam posuere nisl ante, et molestie leo hendrerit ut. Nullam sed est ligula. Ut fringilla a risus ut aliquet. Praesent feugiat nec lorem at sagittis. In volutpat augue pharetra molestie eleifend. Maecenas a orci at nisl volutpat sodales sed eget felis. Etiam orci ante, sollicitudin a finibus eget, commodo in odio.`

const words = longText.trim().split(/\s+/);

let wordCount = 0;
let etCount = 0;
for (let i = 0; i < words.length; i++) {
  wordCount++;
  if (words[i] === "et" || words[i] === "et," || words[i] === "et.") {
    etCount++;
  }
}

console.log("Number of words:", wordCount);
console.log("Number of times 'et' appears:", etCount);