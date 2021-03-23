// Iteration 1: Names and Input
let hacker1 = "Peter";

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Jason";

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops
let accumulator = ""

let newHacker1 = hacker1.toUpperCase()
for (let i= 0; i < newHacker1.length; i++){
    accumulator = accumulator += `${newHacker1[i]}`
 console.log(accumulator)
}


console.log(`${hacker1[0].toUpperCase} ${hacker1[1].toUpperCase}`)

for (let i= hacker2.length-1; i >= 0; i--){
  console.log(hacker2[i])
}

for (let i= 0; i >= 0; i){
  if(hacker1[i] > hacker2[i]){
    console.log("The driver's name goes first")
    break;
    
  }else if (hacker1[i] < hacker2[i]){
    console.log("Yo, the navigator goes first definitely")
    break;
    
  } else if (i < hacker1.length || i < hacker2.length){
    i++
    console.log("What!? You both have the same name?")
  
  }
}

let bonus1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed libero justo. Etiam vehicula aliquet sem, in dignissim nunc dapibus sit amet. Etiam tempor eget turpis a dignissim. Aenean imperdiet nisi eu lectus cursus posuere. Mauris luctus ligula est, id interdum risus blandit lacinia. Morbi laoreet fringilla laoreet. Cras a metus nec neque blandit ultrices condimentum et enim. Phasellus tincidunt ipsum non erat molestie, ut aliquet urna pellentesque. Sed varius ipsum et lectus elementum auctor. Curabitur et libero pharetra, venenatis diam eu, eleifend dolor. Proin eu urna blandit, mollis erat quis, porta ex. Etiam fringilla finibus lacus, a pulvinar ex semper eget. Nulla turpis ligula, vehicula a accumsan quis, mattis at purus.Maecenas eleifend nec urna ac tincidunt. Vivamus efficitur, diam ut pretium vulputate, lectus lorem consequat nunc, vitae porta eros odio ut justo. Pellentesque id nunc ac nulla pellentesque scelerisque non et erat. Curabitur vel nisl ornare, vehicula urna consequat, ornare metus. Aenean et lorem porttitor, semper sem eu, congue lectus. Pellentesque auctor pretium elit, quis mollis magna tempus quis. Nulla at justo commodo, semper eros id, fringilla ante. Nulla ultrices, tortor vel vestibulum sagittis, ex orci molestie elit, id aliquet nibh lorem in elit. Nullam felis ante, egestas non interdum in, gravida ac quam. Etiam vulputate est at lectus egestas vestibulum. Mauris sed quam purus.Pellentesque consequat, nulla rutrum vehicula tempus, augue sem cursus odio, ut lacinia mi nulla nec augue. Phasellus pharetra risus sed risus elementum faucibus. Pellentesque habitant morbi tristique senectus et ntus et malesuada fames ac turpis egestas. Donec aliquam accumsan nulla nec efficitur. Sed nisl neque, gravida id sagittis id, mollis et lectus. Proin ante ipsum, dapibus vitae est et convallis finibus risus. Duis aliquet fermentum nisl, in molestie mauris convallis id. Integer id mauris dolor. Pellentesque eget accumsan est. Aliquam erat volutpat."

let count = 0


for (let i = 0; i < bonus1.length; i++){
  if(bonus1[i] === " "){
    count ++;
  }
}
console.log(`The number of words is ${count+1}`)

let counter = 0

for (let i = 0; i < bonus1.length; i++){
  if  (bonus1[i] + bonus1[i+1] === "et" && bonus1[i-1] === " " && bonus1[i+2] === " "){
    counter++;
  }

}
console.log(`Et appears ${counter} times`)


let phraseToCheck = "raceeecar"


for (let i= Math.ceil(phraseToCheck.length/2); i-1 >= 0; i--){ 
  if (phraseToCheck[i-1] === phraseToCheck[i+1]){
    if( phraseToCheck [i-1] === undefined){
      break;
    }   
    else if (phraseToCheck[i-1] === 0){
      console.log("Congrats, your word is a palindrome.")
    }
  } else {
    
    console.log("Your word doesnt look like a palindrome")
  }
  
  
}
  

