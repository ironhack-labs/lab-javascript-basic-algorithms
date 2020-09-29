// Iteration 1: Names and Input
    let hacker1="Eri Evangelou"
    console.log(`The driver's name is ${hacker1}`)
    let hacker2="Carla Navia"
    console.log(`The navigator's name is ${hacker2}`)

    // Iteration 2: Conditionals
    if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has' ${hacker1.length} characters`)
    } else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
    } else  {
        console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
    }


    // Iteration 3: Loops
        let check= "";
        for (let i=0; i<hacker1.length; i++ ) {
        if (i == hacker1.length-1) {
            check += hacker1[i].toUpperCase()
        } else {
            check += hacker1[i].toUpperCase() + " "
        }
        console.log(check)
        
        
        let comoQuiera = hacker2.split("").reverse().join("")
         console.log(comoQuiera)  
        
         /* let reversed2 = [];
        let comoQuiera2 = hacker1.split("")
        console.log(comoQuiera2)
        for (let i=comoQuiera2.length-1; i>=0; i-- ) {
        reversed2.push(comoQuiera2[i])
         }
        console.log(reversed2.join(""))
        } */
  
      let resultCompare = hacker1.localeCompare(hacker2)
        console.log(hacker1.localeCompare(hacker2))
         if (resultCompare == 1) {
        console.log("Yo, the navigator goes first definitely.")
        } else if (resultCompare == -1) {
        console.log("The driver's name goes first.")
        } else if (resultCompare == 0){
        console.log("Wow! You both have the same name!")
        } else {
        console.log("You haven't introduced your name")
        }
        }