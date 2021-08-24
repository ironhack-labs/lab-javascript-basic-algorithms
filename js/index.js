// Iteration 1: Names and Input
console.log("I'm ready!");
let hacker1="Max"
let hacker2="Sam"
let driver=`The driver´s name is: ${hacker1}`
let navigator=`The navigator´s name is ${hacker2}`
console.log(driver)
console.log(navigator)
console.log(`${hacker1} ${hacker1.length}`)
console.log(`${hacker2} ${hacker2.length}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
{ console.log(`The driver has the longest name, it has ${hacker1.lenght} characters`) } 
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length}characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}
// Iteration 3: Loops
let resultado= hacker1.toUpperCase()
console.log(resultado.split('',3));

function reverseString(str) {
     let splitString = str.split("");
     let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join(""); 
    
    return joinArray; 
}
console.log(reverseString(hacker1))


console.log(hacker1.localeCompare(hacker2));

/**
 * Funcion para comparar dos cadenas,si string1 es igual a string2 regresa 0
 * si string1 va primero que string2 , regresa 1
 * si string1 va despues de string2, regresa -1
 * @param {*} string1 
 * @param {*} string2 
 * @returns 
 */
function  compararCadena (string1,string2){
    if(string1===string2){
       return 0;
    }
    if(string1>string2){
    return 1;
    }
    return -1;
}


const comparacion=compararCadena(hacker1,hacker2)

if(comparacion===1){
    console.log(`The driver's name goes first.`)
}else if (comparacion===-1){
    console.log(`Yo, the navigator goes first definitely.`)
}else if(comparacion===0){
    console.log(`What?! You both have the same name?`)
}

//Bonus 1:
let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in magna eu magna rhoncus ullamcorper vitae at mi. Maecenas tincidunt ac mi at auctor. Integer ac condimentum nibh. Etiam ultricies fermentum libero ac eleifend. Vestibulum pharetra massa id pulvinar consectetur. Nam ultrices tincidunt ipsum sed varius. Phasellus euismod convallis bibendum. Sed id risus nunc. Donec vitae nisl risus.Donec in suscipit risus, in vestibulum ligula. Sed tempus maximus sem eu ultricies. Suspendisse massa magna, bibendum sed feugiat vel, volutpat sit amet augue. Sed in ex in dui feugiat ultrices in a dui. Nam hendrerit porta vehicula. Etiam pretium mauris nunc, quis auctor est elementum sed. Suspendisse vitae dictum nisi, sed vestibulum purus. In consectetur tristique nunc. Fusce et consequat ligula.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam dignissim orci et porta placerat. Nunc in arcu in turpis semper lacinia vel vel lectus. Mauris justo metus, cursus ut ornare eget, hendrerit nec odio. Curabitur mollis aliquam turpis nec rhoncus. Donec maximus eros dapibus leo tempus, a fermentum ipsum eleifend. Proin ex ligula, venenatis id justo vitae, efficitur malesuada orci. Ut ut viverra felis, sed tempor diam. Fusce risus ante, ultricies sit amet tellus at, sollicitudin gravida odio."
let splitString = text.split(" ");
console.log(splitString.length);
let contador=0
//itera el array para poder encontrar la palabra "et"
for (let i= 0; i < splitString.length; i++) {
    //splitString en la posicion i 
    if(splitString[i]==="et"){
        contador++
        console.log("Found it ");
    }
}
console.log(`Encontre ${contador} veces la palabra et`)

let phraseToCheck=""