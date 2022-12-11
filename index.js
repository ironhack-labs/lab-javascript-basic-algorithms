
// Iteration 1.1 & 1.2
    
let hacker1 = `Mario` 
console.log(`The driver's name is ${hacker1}`)

// Iteration 1.3 & 1.4

let hacker2 = `Alessandro`
console.log(`The navigator's name is ${hacker2}`)





// Iteration 2 

if (hacker1.length > hacker2.length) 
  {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
  }
else if (hacker1.length < hacker2.length) {
  console.log(`The navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
    
  }
else
  {
    console.log(`Wow, you both have equally long names ` + hacker1.length + ` characters!`) 
  } 




// Iteration 3.1 

let boldtext = ""

 for ( n of hacker1)
   {
     boldtext += n + " "
   }

  console.log(boldtext.toUpperCase())

 
//--> 3.1.2 = console.log(`${hacker1.split(``).join(` `).toUpperCase()}`)



// Iteration 3.2

let backwords = ``

    for ( let i = hacker2.length-1;  i >= 0 ; i--)
        
        {
            backwords += hacker2[i]
        }
    
    console.log(backwords)


//--> 3.2.2 let backwords = str.split('').reverse().join('');


let nameArray = []
let count = nameArray.push(hacker1, hacker2)
    console.log(nameArray.sort())


// BONUS

    let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.`

     
     let wordCount = longText.split(" ").length
     console.log(wordCount)



