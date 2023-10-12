// Iteration 1: Names and Input
let hacker1= 'Lucía'
let hacker2= 'Cesaria'
console.log('the drivers name is ',hacker1)
console.log('the navigators name is',hacker2)

// Iteration 2: Conditionals
let hacker1= 'Lucía'
let hacker2= 'Cesaria'

if (hacker1.length>hacker2.length){
  console.log('The driver has the longest name, it has', hacker1.length, ' characters')
}
else if (hacker1.length<hacker2.length){
  console.log('It seems that the navigator has the longest name, it has', hacker2.length, 'characters!')
}
else{
  console.log('Wow, you both have equally long names, ',hacker2.length,  ' characters!')
}

// Iteration 3: Loops

for (let i=0; i<hacker1.length; i++){
    console.log(hacker1[i].toUpperCase())
  }

  for (let i=hacker2.length-1; i>=0; i--){
    console.log(hacker2[i])
  }
  