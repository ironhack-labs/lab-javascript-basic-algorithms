
let hacker1 = 'Eva'
console.log(`The drivers name is ${hacker1}`)
let hacker2 = 'Carol'
console.log(`The navigators name is ${hacker2}`)
if((hacker1.length)>(hacker2.length)){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if ((hacker1.length)<(hacker2.length)) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log( `Wow, you both have equally long names, ${hacker1.length} characters!.` )
}
let allup1 = hacker1.toUpperCase();
console.log()
let newString = ``
for (i = 0; i < allup1.length; i++ ){
    newString += `${allup1[i]} `
}
console.log (newString)
let reverse1 = " "
for (i=hacker1.length-1 ; i >= 0 ; i-- ){
reverse1 += `${hacker1[i]}`
}
console.log(reverse1)
switch(hacker1.localeCompare(hacker2)){
    case 1:
        type= `The driver's name goes first. `
        break;
    case 0:
        type = 'Yo, the navigator goes first, definitely.'
        break;
    case 1:
        type = 'What?! You both have the same name?'
        break;
}
console.log(type)
/* console.log(hacker1.localeCompare(hacker2)) */