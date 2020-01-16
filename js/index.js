// Iteration 1: Names and Input

let hacker1 = "carlos"

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Carl"

console.log(`The navigator's name is ${hacker2}`)




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if (hacker1.length == hacker2.length){
    console.log(`Wow, you have equally long names, ${hacker1.length} character!`)
  } else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
  




// Iteration 3: Loops


// 3.1


hacker1 = hacker1.toUpperCase()    // COMMENT OUT FOR THE REST OF THE SCRIPT TO WORK
let newSpacedHacker1 = ""

for (let i = 0; i < hacker1.length; i++){
  newSpacedHacker1 += hacker1[i]+' '
}

console.log(newSpacedHacker1)

// 3.2

let reverseHacker1 = ""

for (let i = hacker1.length-1; i >=0 ; i--){
  reverseHacker1 += hacker1[i]
}

console.log(reverseHacker1)





//==========3.3==================

hacker1LowerCase = hacker1.toLowerCase()

hacker2LowerCase = hacker2.toLowerCase()
if(hacker1LowerCase != hacker2LowerCase){
  // Comprueba si son el mismo nombre
  if (hacker1LowerCase.length >= hacker2LowerCase.length){
    // Comprueba si la longitud de h1 es mayor o igual para ajustar el numero de iteraciones del for
    for (let i = 0; i < hacker1LowerCase.length; i++){
      if(hacker1LowerCase[i] < hacker2LowerCase[i]){
        console.log(`The driver's name goes first`)
        break;
      }else if (hacker2LowerCase[i] < hacker1LowerCase[i]){
        console.log(`The navigator's name goes first`)
        break;
      }else if (typeof hacker2LowerCase[i]=== 'undefined'){
        console.log(`The navigator's name goes first`)
        break 
      }    
    }
  }else{
    for (let i = 0; i < hacker2LowerCase.length; i++){
      if(hacker2LowerCase[i] < hacker1LowerCase[i]){
        console.log(`The navigator's name goes first`)  

        break;
      }else if (hacker1LowerCase[i] < hacker2LowerCase[i]){
        console.log(`The driver's name goes first`)
       break;
      }else if (typeof hacker1LowerCase[i]=== 'undefined'){
        console.log(`The driver's name goes first`)
        break
      }    
    }
  }
}else{
  console.log("the names are the same")
}
