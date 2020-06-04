// Iteration 1: Names and Input


const hacker1 = 'Elena'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Eva'
console.log(`The navigator name is ${hacker2}` )


// Iteration 2: Conditionals


if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  }
  else if (hacker1.length==hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
  
  else (console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`))


// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '))


console.log(hacker2.split('').reverse().join())




/*for (let i=0; i<hacker1.length; i++){
    let loop1 = hacker1[i].toUpperCase()
    console.log(loop1)
  }


for (let i=hacker2.length-1; i>=0; i--){
    console.log(hacker2[i])
    }*/


    if (hacker1.localeCompare(hacker2)==1){
        console.log(`The driver's name goes first.`)
      }
      else if (hacker1.localeCompare(hacker2)==-1){
        console.log(`Yo, the navigator goes first definitely.`)
      }
      else {console.log('What?! You both have the same name?')}

//MISMO LOOP CON WHILE
/*let i=hacker2.length-1
while (i>=0){
      console.log(hacker2[i])
      i--
    }*/
    