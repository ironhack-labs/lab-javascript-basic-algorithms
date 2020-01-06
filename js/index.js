// Iteration 1: Names and Input
 const hacker1 = "America"
console.log("The drivers name is " + hacker1)

const hacker2 = "Carlos"
console.log("The navigators name is " + hacker2)



// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters." )
} else if (hacker2.length > hacker1.length) {
console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters")
} 

// Iteration 3: Loops
let driver = ''
for(let i=0; i < hacker1.length; i++){
  driver += hacker1[i] + ' '
}
console.log(driver.toUpperCase())

let navigator = hacker2.split('').reverse().join('')
console.log(navigator)



if( hacker1[0].valueOf() < hacker2[0].valueOf()){
  console.log('The drivers name goes first.')
}else if( hacker1[0].valueOf() > hacker2[0].valueOf() ){
  console.log('Yo, the navigator goes first definitely.')
}else {
  console.log('What?! You both have the same name?')
}

//Bonus 1:
const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam augue nunc, pulvinar in faucibus in, elementum id tellus. Integer sodales pharetra placerat. Pellentesque ullamcorper dolor ac dapibus interdum. Sed dictum tincidunt lorem ac pulvinar. Integer dictum molestie metus non faucibus. Sed non nunc est. Vivamus cursus metus sed erat fringilla, varius cursus tellus sagittis. Suspendisse potenti. Sed non mauris at enim convallis efficitur vel quis risus. Donec in dictum purus, in ultrices ipsum. Cras condimentum auctor mauris eget faucibus. Mauris tincidunt, tellus nec venenatis accumsan, ex magna aliquam massa, a varius libero nisl vitae erat. Sed vitae felis at leo bibendum ultrices. Nunc id elit aliquam eros hendrerit fringilla et et elit. Proin fringilla vitae felis vel finibus. Fusce interdum eleifend nunc. Nulla hendrerit libero mauris, sed mollis quam gravida nec. Fusce eu libero nisl. Cras at ipsum non nisl porttitor tempus quis eu ligula. Pellentesque et odio sit amet purus dapibus accumsan vel porta nibh. Sed ullamcorper arcu nec enim sagittis ultrices. Cras turpis turpis, tincidunt sit amet tortor quis, rhoncus feugiat mi. Suspendisse vitae gravida augue. Quisque eros massa, ornare et eleifend ut, ultricies at est. Phasellus consequat elit sed vulputate semper. Proin lectus ex, elementum nec congue non, egestas sollicitudin lacus. Proin nisl ligula, fermentum sed lorem at, tincidunt ornare eros. Sed ornare sit amet mi id molestie. Nullam risus dui, pellentesque dapibus massa et, faucibus vehicula lectus. Pellentesque ac sapien id nibh hendrerit tincidunt. Proin vel erat neque. Maecenas gravida hendrerit elit ac finibus. Mauris arcu odio, auctor et lacus id, vehicula tempor magna. Vivamus tincidunt, diam eu varius suscipit, sapien tellus commodo risus, sit amet molestie mi neque ut est."

console.log(str.split(" ").length)

let timesInArr = 0
for ( let i = 0; i < str.split(" ").length; i++){
  if(str.split(/ |, /g)[i] === 'et'){
 timesInArr++
  }

}
console.log(timesInArr)

//Bonus 2:
function pallindrome (phraseToCheck) {
  const expReg = / |,|!|\?|'/g

  phraseToCheck = phraseToCheck.toLowerCase()
const phraseReverse = phraseToCheck.split('').reverse().join('').toLowerCase()



if(phraseToCheck.replace(expReg,'') === phraseReverse.replace(expReg,'')){
 console.log("They are the same")
}
else {
  console.log("ño")
}
}

pallindrome("No 'x' in Nixon")

