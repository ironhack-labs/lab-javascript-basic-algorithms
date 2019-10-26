//===Iteration 1: NAMES AND INPUT=== 

let hacker1 = prompt("What is your name");
console.log(`The drivers names is ${hacker1}`);

 let hacker2 = prompt("What is your name");
 console.log(`The navigator names is ${hacker2}`);


 //===Iteration 2:CONDITIONALS===

if(hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name it has ${hacker1.length} characters `);
  } else if (hacker2.length > hacker1.length){
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
  } else if (hacker1.length===hacker2.length){
      console.log(`Wow, you both got equally long names, ${hacker1.length} characters`)
    }


//====Iteration 3: LOOPS====
let upName = "";
for(let i = 0;i<hacker1.length;i++){
  let character = hacker1[i].toUpperCase();
  upName += `${character} `;
} 
console.log(upName)


let revName = ""; 
for(let i = hacker1.length-1; i>=0;i--){
 revName = revName += hacker1[i]
 }
 console.log(revName) 


//====LEXICOGRAPHIC ORDER===
 // 2 variables
let h1Vsh2 = hacker1.localeCompare(hacker2)
let h2Vsh1 = hacker2.localeCompare(hacker1)

if (h1Vsh2 === -1){
  console.log("The driver's name goes first");
} else if(h2Vsh1 === -1){
  console.log("Yo, the navigator goes first definitely");
} else { if (h1Vsh2===h2Vsh1);{
     console.log("What?! You both got the same name?");
   }
}
   
//or

 //1 variable
let h1Loc = hacker1.localeCompare(hacker2)

if (h1Loc === -1){
  console.log("The driver's name goes first");
} else if(h1Loc === 1){
  console.log("Yo, the navigator goes first definitely");
} else { (h1Loc===0);{
     console.log("What?! You both got the same name?");
   }
} 


//====BONUS===

//Lorem ipsum generator

//2.Make your program count the number of words in the string


//3.Make your program count the number of times the latin word etappears


//====BONUS===

//Lorem ipsum generator

//2.Make your program count the number of words in the string


//3.Make your program count the number of times the latin word etappears



let para1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat ornare blandit. Duis molestie dui tellus, in luctus eros bibendum vel. Maecenas in feugiat nibh. Nam sit amet ipsum sit amet augue ultrices porta sed quis augue. Aenean vulputate lectus et ultricies pulvinar. Mauris malesuada gravida purus in vehicula. Donec sollicitudin a magna id vestibulum. Praesent aliquam quam risus, a placerat tellus laoreet eget. Maecenas condimentum tristique est nec gravida. Aenean elementum quis lacus sit amet lobortis."
 

// let i = 0
//  for(para1.charAt(i); i <=para1.length; i++){
//   if(para1.charAt(i)===" "){
//     console.log(i) 
//   }   
// }
 // this tells me where all the spaces are vertically thinking if i count the space plus 1, meaning the last word woukd be the word count 
// but thats not enough...



  let i = 0
  let words = ""
 for(para1.charAt(i); i <=para1.length; i++){
  if(para1.charAt(i)===" "){
   words = words += para1.charAt(i).length
  }     
}
 console.log(words.length+1)



  let para2 = "Quisque nisl lorem, posuere in ante dictum, vulputate malesuada mauris. Etiam tempus dictum ex, nec pretium turpis elementum ac. Donec urna dolor, vestibulum vitae ex sit amet, dapibus pellentesque magna. Donec aliquam, ligula ac hendrerit gravida, ipsum nisl rutrum risus, a fringilla leo diam eu nibh. Nulla facilisi. Nullam in blandit nulla, et dignissim mi. Praesent at auctor felis, ac gravida metus. Vestibulum pulvinar varius lobortis. Aenean non pulvinar est. Praesent tincidunt elit ac libero dignissim, at auctor justo ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Ut a consectetur nisl. Maecenas at tortor congue, vehicula nisi quis, tincidunt nisi. Ut a consectetur magna, eu rhoncus sem."
 
 for(para2.charAt(i); i <=para2.length; i++){
  if(para2.charAt(i)===" "){
   words = words += para2.charAt(i).length
  }     
}
 console.log(words.length+1)

 let para3 = "Proin tincidunt semper ipsum, vitae blandit leo auctor vitae. Donec commodo eros nec lectus dignissim vulputate id feugiat ante. Sed placerat nulla felis, hendrerit scelerisque ex imperdiet ultricies. Nunc ultricies feugiat feugiat. Duis sem purus, aliquet nec suscipit sed, rhoncus congue odio. Pellentesque sit amet fermentum eros, efficitur tempor turpis. Maecenas facilisis, arcu et iaculis finibus, lorem turpis rutrum erat, quis fermentum mi massa sed quam. Pellentesque vehicula scelerisque magna at ultrices. Praesent in ullamcorper augue, sed convallis felis. Donec lacinia felis porta lobortis euismod. Quisque ut ante eu elit dapibus mattis at quis purus. Sed eget magna ut metus aliquet dignissim molestie in lacus. Donec bibendum enim nec suscipit vehicula. Pellentesque suscipit, magna a congue auctor, metus est tincidunt mi, vel porta nisl purus at sapien."
 
 for(para3.charAt(i); i <=para3.length; i++){
  if(para3.charAt(i)===" "){
   words = words += para3.charAt(i).length
  }     
}
 console.log(words.length+1)

 