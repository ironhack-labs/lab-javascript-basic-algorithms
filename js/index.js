// Iteration 1: Names and Input

const hacker1D = "Alejandro"
const hacker2N = "Fernando"

console.log(hacker1D)
console.log(hacker2N)

// Iteration 2: Conditionals
if(hacker1D.length > hacker2N.length){
  console.log(`El Driver ${hacker1D} tiene más caracteres y tiene:  ${hacker1D.length}`)
} else if(hacker2N.length > hacker1D.length){
  console.log(`El navigator ${hacker2N} tiene más caracteres y tiene ${hacker2N.length}`)
}
else {
  console.log(`Wow, los dos tienen : ${hacker1D.length} caracteres`)
}

// 3.1 Print all the characters of the driver's name, separated by a space 
let i = 0
while (i < hacker1D.length) {
  console.log(hacker1D.charAt(i))
  i++
}

// 3.2 Print all the characters of the navigator's name, in reverse order.
let j = hacker2N.length
while (j <= hacker2N.length && j>=0){
  console.log(hacker2N.charAt(j))
  j--
}

//3.3  Depending on the lexicographic order of the strings, print:
if(hacker1D.charAt(0) < hacker2N.charAt(0)){
  console.log(`El conductor va primero porque empieza con ${hacker1D.charAt(0)}`)
} else if(hacker2N.charAt(0) < hacker1D.charAt(0)){
  console.log(`El navegador va primero porque empieza con ${hacker2N.charAt(0)}`)
} else {
  console.log('Wow, los dos empiezan con la misma letra')
}

// Bonus 1:
const parrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nisl at augue convallis pellentesque. Etiam facilisis mauris et leo pharetra lobortis. Nullam sollicitudin tempor mattis. Praesent laoreet dolor ut augue maximus, sit amet hendrerit augue mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sed urna aliquet, dictum lectus semper, tristique velit. Ut eget lorem sagittis, aliquam lacus quis, viverra odio. Mauris semper egestas interdum. Vestibulum rutrum odio sit amet dolor hendrerit ultrices. Nam rhoncus ante non vehicula condimentum. Sed nunc lacus, finibus nec rutrum eu, condimentum ut ante. Aliquam ultrices nisi est, sit amet luctus metus imperdiet quis. In at dui vel et turpis scelerisque lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Donec eget est quis elit sollicitudin facilisis. Nulla varius erat non quam congue, id commodo nisi ultrices. Mauris nec quam ut eros malesuada consectetur sit amet eu lorem. Integer ut est ac tortor semper mollis vel in eros. In ac sagittis lacus, vitae ultricies risus. Proin pellentesque orci quis pharetra posuere. Nullam porttitor leo elit, nec imperdiet nulla sollicitudin vel. Integer rhoncus, justo id suscipit pretium, purus ipsum mattis magna, non pulvinar magna dolor eu orci. Cras sollicitudin ornare porta. Donec a lacus venenatis sem interdum egestas. Vivamus non ornare neque. Ut ultricies ex eu justo tincidunt ullamcorper. Curabitur molestie porta arcu, nec suscipit turpis semper quis.Nulla at nibh vitae mauris commodo tempus. Integer euismod nisi vulputate metus bibendum rhoncus. Mauris et sagittis nulla. Cras at bibendum ipsum. Duis ut sapien eget ante ultricies semper eget a purus. Sed cursus id nibh aliquet interdum. Suspendisse potenti. Sed cursus erat ligula, sit amet semper velit gravida non. Vivamus et urna eu justo interdum suscipit. Quisque ullamcorper metus eget dui vestibulum ullamcorper. Donec convallis nibh egestas, sodales est eget, dapibus neque."
let suma = 0
let conjunto = []

for (let i=0; i < parrafo.length; i++){

  if(parrafo.charAt(i) === " "){
    continue
  } else{
      conjunto.push(1)
  }
}


let sumatotal = conjunto.reduce((a,b)=>{ return a + b},0)
console.log(sumatotal)



// aqui va el otro 

let i2= 0
let conjunto2 = []

