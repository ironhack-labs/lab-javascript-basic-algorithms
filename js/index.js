// Iteration 1: Names and Input
let hacker1 = 'Cristopher'

console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Debora and Renan'

console.log(`the navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
function mostLongName(hacker1, hacker2){
    if(hacker1.length > hacker2.length){
        return console.log(`The driver has the longest name, it has ${hacker1.length } characters`)
    }else if(hacker1.length < hacker2.length){
        return console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }else{
        return console.log(`Wow, you both have equally long names, ${hacker2.length } characters!`)
    }
}
mostLongName(hacker1, hacker2)

// Iteration 3: Loops
//3.1
function nameLetters(name){
    let maiusculo = name.toUpperCase();
    let finalResult = '';
    for(let i = 0; i < maiusculo.length; i += 1){
       finalResult += maiusculo[i] + ' ';
    }
    return console.log(finalResult);
}

nameLetters(hacker1);
//3.2
function nameReverse (name){
    let reverseName = name.split('').reverse();
    let finalResult = reverseName.join('')
    return console.log(finalResult)
}
nameReverse(hacker2)
//3.3
function lexicographicOrder(driver,navigators){
    if(driver < navigators){
        return console.log(`The driver's ${driver} goes first.`)
    }else if(driver > navigators){
        return console.log(`Yo, the navigator ${navigators} goes first definitely.`)
    }else{
        return console.log(`What?! You both have the same name?`)
    }
}
lexicographicOrder(hacker1, hacker2)