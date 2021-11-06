// Iteration 1: Names and Input - Initialize variables with our names

    console.log(`I'm ready!`)

    let hacker1 = "Eduardo"
    let hacker2 = "Isa"

    console.log(`The driver's name is ${hacker1}.`);
    console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals - Check which name is longer

    if ( hacker1.length > hacker2.length ) {
        console.log(`The driver has the longest name, it has ${hacker1.length} letters.`)
    } else if ( hacker1.length < hacker2.length ) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    } else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    };


// Iteration 3: Loops 

    // 1. Print all the characters of the driver's name, separated by a space and in capitals

        let lettersInName1 = hacker1.split("")

        for ( let i = 0; i < lettersInName1.length; i++ ) {
            lettersInName1[i] = lettersInName1[i].toUpperCase() + ' '
            console.log(lettersInName1[i])
        }

        console.log(lettersInName1.join(""));


    // 2. Print all the characters of the navigator's name, in reverse order

        let lettersInName2 = hacker2.split("");
        console.log(lettersInName2.reverse().join(""));


    // 3.3 Depending on the lexicographic order of the strings, print.

        let lexOrder = hacker1.localeCompare(hacker2)

        if ( lexOrder === -1 ) {
            console.log('The driver´s name goes first')
        } else if ( lexOrder === 1) {
            console.log('Yo, the navigator goes first definitely.')
        } else {
            console.log('What?! You both have the same name?')
        }

