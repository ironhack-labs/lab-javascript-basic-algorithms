// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "Jacinto";
console.log("The driver's name is " + hacker1);
let hacker2 = "Alex";
console.log("The navigator's name is " + hacker2);
//let hacker2=prompt('your name please'); Con esto podríamos pedirlo al usuario.


// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    let longer=hacker1.length;
    "The driver has the longest name, it has "+ longer + " characters.";
  } else if(hacker1.length===hacker2.length){
    let longer=hacker1.length;
    "Wow, you both have equally long names, "+longer+ " characters!";
  } else{
    let longer=hacker2.length;
    "It seems that the navigator has the longest name, it has " + longer + " characters.";
  }

// Iteration 3: Loops
let sizeHacker1=hacker1.length
let x=0
while(x<sizeHacker1){
  console.log(hacker1[x].toUpperCase())
  x=x+1
}

let sizeHacker2=hacker2.length
while(sizeHacker2>=0){
  console.log(hacker2[sizeHacker2])
  sizeHacker2=sizeHacker2-1
}

console.log("Lexicographic order of the strings")
let order = hacker1.localeCompare(hacker2);
console.log(order)
if(order===-1){
  console.log("The driver's name goes first.");
} else if (order==0){
  console.log("What?! You both have the same name?");
} else{
  console.log("Yo, the navigator goes first definitely.")
}

let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

let wordsCounter = 0
let y=0
while (lorem.length>y){
  //console.log(lorem[y])
  if(lorem[y]===" " || lorem[y]==="."){
    wordsCounter= wordsCounter+1
  }
  y=y+1
}
console.log("The total number of words are "+wordsCounter)

let counterETs = 0
let z=0
while (lorem.length>z){
  if(lorem[z]==="e" && lorem[z+1]==="t"){
    counterETs= counterETs+1
  }
  z=z+1
}
console.log("The total number of ETs are "+counterETs)