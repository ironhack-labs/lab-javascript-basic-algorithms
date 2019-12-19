//https://repl.it/@ThibaultDelfaud/LAB-or-JS-Basic-Algorithms


// Iteration 1: Names and Input
let hacker1="thibault", hacker2="pauline", differencia =0;
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// WHICH NAME IS THE LONGEST
differencia = hacker1.length - hacker2.length; //easier to find which is longer depending on if the difference is positive or negative
if (differencia >0) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (differencia < 0) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
//HACKER1 IN CAPITAL LETTERS
function driverCapital(name) {
    for(i=0;i <= name.length;i++) {
       letter = name.substring(i,i+1);    //look for each letter in the string depending on its index
       console.log(letter.toUpperCase());   //uppercase the letter at the "i" index
    }
  }
  driverCapital(hacker1);
  
  
  //HACKER2 IN REVERSE
  function navigatorReverse(name) {
    for(i= name.length;i >=0 ;i--) {    //start from the index of the last caracter and decrease "i"
       console.log(name.substring(i,i+1));
    }
  }
  navigatorReverse(hacker2);


  //ALPHABETICAL ORDER
function lexicoOrder(name1, name2) { //use of the localeCompare function, returns 1 if name2 is before name1
    if (hacker1.localeCompare(hacker2)>0) {
      console.log("Yo, the navigator goes first definitely.");
    } else if(hacker1.localeCompare(hacker2)<0) {
      console.log("The driver's name goes first.")
    } else {
      console.log("What?! You both have the same name?")
    }  
  }
  lexicoOrder(hacker1, hacker2);


//BONUS1

let bonus1= ("Lorem Ipsum is simply dummy text of the printing and typesetting et et et industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")


// NUMBER OF WORDS
function countWords(string) {
  test = [];
  test = string.split(" "); //create one array element everytime there's a space
  console.log(`BONUS1: the paragraph contains ${test.length} words`); //count number of elements in array = number of words
}

countWords(bonus1);