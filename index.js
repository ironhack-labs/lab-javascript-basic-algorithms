// Iteration 1: Names and Input

let hacker1 = "Marcelo"
console.log(`"The driver's name is ${hacker1}"`)

let hacker2 = "Bryan"
console.log(`"The navigator's name is ${hacker2}"`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  }
  else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops

let iteration1 = ""

for (i = 0; i < hacker1.length; i++){
    iteration1 += hacker1[i] + " "
}
console.log(iteration1.toUpperCase());

//

let reverse = ""

for(let i = hacker2.length -1; i >= 0; i--){
  reverse += hacker2[i]
}
console.log(reverse)

//

let getValue = hacker1.localeCompare(hacker2)

if(getValue === 1){
    console.log('Yo, the navigator goes first, definitely.')
}
else if(getValue === 0){
    console.log("What?! You both have the same name?")
}
else if(getValue === -1){
    console.log("The driver's name goes first.")
}

//#### Bonus 1:

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id mauris facilisis, eleifend nulla vitae, iaculis elit. Praesent gravida neque vitae dapibus accumsan. Duis ultrices auctor nulla ac laoreet. Ut condimentum bibendum dui, sed maximus nibh tristique nec. Duis ac lobortis diam, at dapibus odio. Pellentesque id turpis eget est interdum sodales. Sed quis nisl tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec sapien et massa convallis vulputate quis id leo. Nulla vel aliquet nulla, vitae sodales nulla.

Morbi pharetra egestas egestas. Quisque ac dapibus felis, ac ullamcorper purus. Pellentesque facilisis lectus nec cursus porttitor. Suspendisse bibendum ipsum et mauris mollis feugiat. Morbi blandit quis lacus tempor placerat. Nam sollicitudin et ex et eleifend. Curabitur feugiat ullamcorper eros a tempor. Morbi luctus orci vel orci commodo imperdiet. Aenean rhoncus id tortor nec tincidunt. Suspendisse suscipit justo eu lacus egestas lacinia. Fusce sit amet tempus quam, sed feugiat orci. In posuere neque a neque auctor gravida. Vivamus scelerisque dui tellus, eu feugiat lectus congue et. Curabitur tellus orci, tempor non ornare eget, mattis ac est. Morbi egestas quis tellus et ultricies.

Sed finibus tempor mattis. Vivamus scelerisque ac arcu quis gravida. Praesent dictum varius ornare. Praesent eu commodo purus. Vivamus consequat urna dui, in ultrices tellus porttitor vel. Duis quis eros vehicula, mollis sem vel, elementum nulla. In sodales convallis imperdiet. Curabitur id semper erat.`;

console.log(longText.split(' ').length)

// => Bonus 1 different solution: Please provide feedback, thanks

let words = longText.split(' ')
let chars = 0

for (let i = 0; i < words.length; i++){
  chars++
}
 console.log(chars)

 //

let etCount = 0;

for(let i = 0; i <= longText.length; i++){
  
  const chars = longText[i] + longText[i + 1];

  if(chars === "et"){
    etCount++
  }
  
}
console.log(etCount)

// Pending Bonus #2 ...


// i will work on this one later i need to test my pull request again


