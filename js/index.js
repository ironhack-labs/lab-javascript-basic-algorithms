// Iteration 1: Names and Input

let hacker1 = "Martins"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Martins"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

/*2.1. Depending on which name is longer, print:
  - The driver has the longest name, it has XX characters. or
  - It seems that the navigator has the longest name, it has XX characters. or
  - Wow, you both have equally long names, XX characters!.*/

  if(hacker1.length > hacker2.length) {
      console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    let acc = "";

    for (let i = 0; i < hacker1.length; i++) {
    acc += hacker1[i].toUpperCase() + " ";
    }

    console.log(acc);

    //3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
    reverseAcc = "";

    for (let i = hacker2.length - 1; i >= 0; i--) {
        reverseAcc += hacker2[i];
    }

    console.log(reverseAcc);

    /*3.3 Depending on the lexicographic order of the strings, print:
        - The driver's name goes first.
        - Yo, the navigator goes first definitely.
        - What?! You both have the same name? */

        if(hacker1.localeCompare(hacker2) === -1) {
            console.log("The driver's name goes first.")
        } else if (hacker1.localeCompare(hacker2) === 1) {
            console.log("Yo, the navigator goes first definitely.")
        } else {
            console.log("What?! You both have the same name?");
        }

    // Bonus Time!

    //Bonus 1:
    //Go to lorem ipsum generator and:
        //Generate 3 paragraphs. Store the text in a variable type of string.
            let paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

        //Make your program count the number of words in the string.
            console.log(paragraph.split(" ").length);
            
        //Make your program count the number of times the Latin word et appears.*/
    
    //Bonus 2:

    
