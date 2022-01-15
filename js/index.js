// Iteration 1: Names and Input
let hacker1 = "Joao";
console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Andre";
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let mai = ''
for (let i = 0; i < hacker1.length; i++){
    if (i === hacker1.length - 1) {
        mai += hacker1[i].toUpperCase()
    } else {
    mai += `${hacker1[i].toUpperCase()} ` 
    }
}
console.log (mai)


let invertida = ''
for ( let i = hacker1.length -1; i >= 0; i--) {
    invertida += hacker1[i]
}
console.log (invertida)



  
// para comparar duas strings em ordem alfabética
    if (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase) === -1){
        console.log (`The driver's name goes first.`)
    } else if (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) === 1) {
        console.log (`Yo, the navigator goes first definitely.`)
    } else {
        console.log (`What?! You both have the same name?`)
    }


//Bônus 01
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a purus urna. Aenean et vehicula enim. Aenean aliquam lobortis lobortis. Nunc non congue purus, quis tincidunt eros. Mauris consequat arcu dui. Duis placerat tellus quis suscipit viverra. Praesent vitae ligula odio. Vivamus rhoncus sem felis, non tristique elit semper vitae. Vestibulum dignissim porttitor justo quis varius. Fusce tristique dictum nibh, nec dignissim nisl aliquet sed. In dapibus finibus velit, sed vehicula neque ornare at. Aliquam erat volutpat. Morbi sagittis, nulla ut faucibus aliquam, tortor ante gravida libero, ullamcorper mollis tortor nibh at metus. Vestibulum euismod eu velit nec tempus. Aliquam in nunc fermentum, pretium neque non, posuere elit. In quis nulla a lacus sagittis faucibus. Suspendisse quis erat sollicitudin, placerat arcu in, ultrices mauris. Pellentesque interdum faucibus neque, eget viverra elit. Proin et mi vel ex venenatis congue eget accumsan metus. Morbi neque lacus, fringilla nec blandit sollicitudin, faucibus at orci. Pellentesque vel tempor nisi. Vivamus imperdiet quis odio vitae porttitor. Nam mollis gravida ex, vitae condimentum nisl accumsan id. Mauris ut mauris auctor, gravida nunc nec, viverra neque. Pellentesque fermentum, purus in consequat aliquet, mi nibh ullamcorper tellus, maximus placerat neque justo non sapien. Integer non semper turpis, et fringilla tellus. Ut sodales vulputate sapien. Suspendisse ut diam in leo commodo imperdiet. Suspendisse elementum justo eget ante pharetra, at hendrerit purus porttitor. Proin sodales lectus sed pretium gravida. In cursus interdum dolor sit amet pretium. Quisque quis orci quis sem semper consequat. In sollicitudin mi vehicula urna viverra, ac dignissim felis molestie. Nunc id purus ac felis pretium convallis. Nam sed cursus massa. Nulla vehicula iaculis augue, eget placerat leo porttitor quis."

console.log (text.split(` `).length)

let quantEt = 0
for (let i = 0; i <text.split(` `).length; i++){
    if (text.split(` `)[i] === "et"){
    quantEt++
    }
}
console.log (quantEt)


//Bônus 2 - TA ERRADO! VER!
let phraseToCheck = "A man, a plan, a canal, Panama!"

const withoutPonctuation = phraseToCheck.toLowerCase().replace(/[^A-Za-z]/g, '')
console.log (withoutPonctuation)
let metade = withoutPonctuation.length-1-[i]
for (let i = 0; i < withoutPonctuation/2; i++) {
    if(withoutPonctuation[i] !== withoutPonctuation[metade]){
    console.log('Não é palíndroma')
    else {
        console.log ('É palíndroma')
    }
    }
}
console.log()