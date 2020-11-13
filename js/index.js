// Iteration 1: Names and Input
let hacker1 = "Nico";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Luis";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
//3.1
let hacker1Mayusculas = hacker1.toUpperCase()
let hacker1Vacia = "";

for (let i = 0;  i < hacker1Mayusculas.length; i++) {
  if (i!=hacker1Mayusculas.lenght-1) {
    hacker1Vacia = hacker1Vacia + hacker1Mayusculas[i]+" ";  }else {
      hacker1Vacia = hacker1Vacia + hacker1Mayusculas[i];
    }
}

console.log(hacker1Vacia)

// 3.2

let str = 'Luis'
let newStr = str.split('');
console.log(newStr.reverse().join(' '))


// 3.3 

if (hacker1[0] < hacker2[0]) {
  console.log(`The driver's name goes first.`)
}
else if (hacker1[0] > hacker2[0])
{
  console.log(`Yo, the navigator goes first definitely.`)
}
else {
  console.log(`What?! You both have the same name?`)
}

// Bonus 1
let parrafo1 = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan consectetur sapien, pellentesque tempus erat pharetra condimentum. Maecenas id quam eget elit suscipit scelerisque non sed mi. Etiam id mauris interdum, suscipit libero non, vehicula libero. Fusce at dictum ante. Maecenas convallis leo sed urna sagittis tincidunt. Cras venenatis massa id nulla fermentum, sit amet tempus nisi placerat. Nam vulputate mattis massa, nec congue dui ornare aliquam. Aliquam porttitor lectus ut nulla semper, ut mollis leo elementum. Donec nec ante sed sapien convallis fringilla et id justo. Curabitur id ultrices est. Curabitur ac magna orci. In hac habitasse platea dictumst.Nam tellus elit, tempor vel ex vel, auctor bibendum sapien. Vestibulum ut pharetra libero. Sed gravida nibh tristique augue elementum, quis rutrum nulla dignissim. Donec sit amet lectus eros. Phasellus condimentum, velit a convallis facilisis, est lacus egestas tortor, quis aliquam leo sapien quis sem. Vivamus pretium est nec pharetra suscipit. Nullam vitae libero posuere, ullamcorper dolor nec, sodales neque. Nulla laoreet est sit amet est ullamcorper, ac tincidunt neque posuere. Fusce sed massa vitae magna vehicula ultricies. Maecenas efficitur massa ut mauris eleifend, a sagittis lacus cursus. Cras porttitor nec ipsum a cursus. Pellentesque et tellus nibh. Aliquam nisl dui, aliquam ut odio non, egestas pharetra odio. Morbi elementum nisl sit amet turpis eleifend egestas. Curabitur suscipit urna diam, eu rutrum risus rhoncus ut.Suspendisse mattis dui non eleifend fermentum. Aliquam rutrum, turpis sed mollis congue, tellus massa rhoncus mauris, sit amet auctor odio metus eget mi. Duis nisi nisl, gravida accumsan imperdiet sit amet, congue vestibulum ante. Etiam placerat ut eros a vulputate. Sed tristique, arcu nec consequat tristique, mauris lectus elementum risus, eu suscipit metus enim id mauris. Nulla vulputate felis eu porta ultrices. Sed quis turpis risus. Morbi vestibulum ac velit ut semper. Vestibulum condimentum elementum sapien, et scelerisque nibh egestas sit amet. Donec in arcu consequat, gravida erat eget, pulvinar enim. Duis tempor mi porttitor, egestas purus sed, cursus ipsum. Quisque suscipit est quis metus ullamcorper, sit amet volutpat risus vehicula. Nullam nisl sapien, euismod non metus ac, hendrerit ultricies nibh. Vestibulum elit nunc, dapibus at maximus et, accumsan sodales sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; '

console.log(parrafo1.split(' ').length)
console.log(parrafo1.split(' et').length)


// bonus 2


let phraseToCheck = "No 'x' in Nixon"
let caracteres = /[\W]/g
let minuscula = phraseToCheck.toLowerCase().replace(caracteres, "")

//console.log(`${minuscula}`);
let i = 0
let palindromo = true
let j = minuscula.length - 1
//console.log(minuscula.length)
for (i = 0; i < minuscula.length && palindromo; i++) {
    //    console.log(phraseToCheck[i])
    //         console.log(phraseToCheck[j])
    if (minuscula[i] !== minuscula[j]) {
        //        console.log(minuscula[i])
        //       console.log(minuscula[j])

        palindromo = false
    }
    j--

}
//console.log(palindromo)
if (palindromo) {
    console.log(`${phraseToCheck} es palindromo`)
} else {
    console.log(`${phraseToCheck} no es palindromo`)
}


