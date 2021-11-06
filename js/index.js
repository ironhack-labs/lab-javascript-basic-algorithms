// Iteration 1: Names and Input
let hacker1 = "Arturo"

console.log(`"The driver's name is ${hacker1}"`)

let hacker2 = "Alejandro"

console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`)
    }
    
    else if  (hacker1.length < hacker2.length) {
    
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`)
    
    }
    
    else {
    
    
      console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`)
    }
    

// Iteration 3: Loops


let newDriversName = "";

for (let i=0; i < hacker1.length; i++) {

newDriversName += hacker1[i].toUpperCase() + " ";

}

console.log(newDriversName)


let newNavigatorsName = "";

for (i = hacker2.length - 1; i >= 0; i--) {

newNavigatorsName += hacker2[i];


}  


console.log(newNavigatorsName)

if (hacker1.localeCompare(hacker2) === - 1) {

  console.log(`"The driver's name goes first"`)

}

else if (hacker1.localeCompare(hacker2) === 1) {

console.log(`"Yo, the navigator goes first definetly"`)

}

else {

console.log(`"What?! You both have the same name?"`)

}


// Bonus 1.


const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla lectus id arcu accumsan mollis. Fusce vel facilisis nisi. Phasellus congue enim orci, eget dictum felis accumsan at. Nullam lectus est, vulputate ac suscipit at, fermentum id ipsum. Vestibulum mi nunc, hendrerit vel congue non, rutrum ac elit. Curabitur ut arcu placerat, venenatis sapien at, tincidunt nunc. Maecenas in tristique augue, vel viverra mi. Aenean a enim nunc. Vestibulum sit amet sollicitudin est, sit amet fringilla felis. Quisque eu velit tortor. Sed eu mi nec lacus dictum ultricies. Sed est nunc, ullamcorper quis iaculis at, imperdiet sed purus. Quisque commodo magna nunc, sit amet scelerisque tortor tristique sit amet.

Cras ultrices ornare urna non iaculis. Morbi ac aliquet est. Ut neque elit, consequat vel aliquet eget, vestibulum mollis enim. Suspendisse tempor nibh in condimentum convallis. In eu nisi sit amet erat commodo pharetra. Cras consequat nibh sit amet ornare fermentum. Nulla pellentesque neque id nulla sollicitudin, a hendrerit augue dictum. Sed tempor sagittis enim, eget elementum velit vestibulum eu.

Nulla a dolor pharetra, laoreet odio ut, ullamcorper massa. Nullam tristique ligula nulla. Aliquam luctus suscipit nisi in volutpat. Praesent a felis consequat, ornare magna id, dictum lorem. Donec facilisis turpis ut ligula dapibus, at lacinia libero euismod. Sed vitae nibh mi. Nunc in arcu metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada maximus diam, ultrices faucibus magna pellentesque vitae. Fusce fermentum blandit quam quis viverra. In nisl arcu, tempus nec sollicitudin vel, vulputate sed ante.` 





let words = 0;
let etCount = 0;


let splittedParagraph = paragraph.split(' ');


for (let i = 0; i< splittedParagraph.length; i++) {

  if(splittedParagraph[i].includes('\n')) {
    words++
  }
  
  if(splittedParagraph[i] === "et") {
etCount++;



  }



 words++; 
}

console.log('words counter =', words);
console.log('et counter =', etCount);