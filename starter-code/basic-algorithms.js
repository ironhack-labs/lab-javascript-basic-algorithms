// Names and Input
let hacker1 = "Daniel"
console.log(hacker1)
let hacker2 = prompt('Ingrese el nombre del navegador')
console.log(hacker2)

//Conditionals
let smallerName
if(hacker1.length > hacker2.length){
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
    smallerName = hacker1
} else if(hacker2.length > hacker1.length){
    console.log(`Yo, Navigator got the longest name, it has ${hacker2.length} characters`)
    smallerName = hacker2
} else if(hacker2.length === hacker1.length){
    console.log(`wow, you both got equally long names, ${hacker1.length} characters`)
    smallerName = hacker1
}


// Loops

hacker1 = hacker1.toUpperCase()
hacker2 = hacker2.toUpperCase()
let iteration = ''
let iteration2 = ''
for(let i=0; i<hacker1.length; i++){
    iteration += hacker1[i] + ' '
}
for(let i=0; i<hacker2.length; i++){
    iteration2 += hacker2[i] + ' '
}
console.log(iteration, iteration2)

console.log(hacker1.split('').reverse().join(''))


if(hacker1 === hacker2){
    console.log('What?! you both got the same name?')
  } else {
    for(let i = 0; i < smallerName.length; i++){
        if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i)){
            console.log('The driver\'s name goes first')
            break
        } else if(hacker2.charCodeAt(i) < hacker1.charCodeAt(i)){
            console.log('Yo, the navigator goes first definitely')
            break
        }
    }
    
  }


//Bonus Time!
let palindrome = prompt('Escribe una frase').toLowerCase()
palindrome = palindrome.match(/[a-z]/g).join('')
let reverse = palindrome.split('').reverse().join('')
if (palindrome === reverse) {
    console.log('Es un palindromo')
} else {
    console.log('no es un palindromo')
}

// Lorem ipsum generator

const ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ex vel diam eleifend, sed laoreet diam laoreet. Nulla facilisi. Nam imperdiet diam elit, eu pharetra tellus congue vel. Donec metus risus, semper eget commodo quis, blandit at nulla. Phasellus elit eros, vulputate sed vestibulum in, porttitor nec dui. Etiam at sem eu orci condimentum fringilla. Donec quis mauris eget lacus ultrices interdum. Nunc accumsan ac leo vitae vulputate. Fusce erat dolor, iaculis id congue quis, maximus id ex. Nulla auctor tincidunt sollicitudin. Phasellus posuere eros a eros auctor consequat. Quisque ornare neque ultricies justo eleifend eleifend. Etiam tincidunt lacus eget accumsan fringilla. Donec magna lacus, sollicitudin vitae tempus ut, feugiat et tortor. Ut blandit nisl sed eleifend tempor. Nunc ut mollis lectus. Nullam consequat lectus sed metus aliquam pharetra. Maecenas sagittis urna vel volutpat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tellus ac leo fermentum vehicula. Pellentesque eu massa euismod, placerat ipsum vel, varius massa. Ut at risus dui. Etiam dictum et tortor non pellentesque. Phasellus a augue eget lorem dignissim luctus. Sed congue dui eget consequat venenatis. Donec viverra ipsum imperdiet arcu tempus sollicitudin. Curabitur augue purus, sollicitudin a turpis eu, mollis posuere orci. Suspendisse ac turpis aliquam, finibus nulla nec, vehicula tortor. Ut efficitur mauris magna, a varius ante cursus rutrum. Aenean tempus tellus quis arcu tristique, bibendum efficitur velit rhoncus.`

console.log(ipsum.split(' ').length)
let count = ipsum.match(/ et /g).length
console.log(count)