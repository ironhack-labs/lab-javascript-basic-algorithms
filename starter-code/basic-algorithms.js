// Names and Input

var hacker1 = 'Mireia'

var hacker2 = prompt('What is the Navigators name?')

    console.log('The drivers name is ' + hacker1)

    console.log('The navigators name is ' + hacker2)


//Conditionals

if (hacker1.length > hacker2.length)  {
    console.log('The driver has the longest name, it has ' + hacker1.length + ' characters');

} else if (hacker2.length > hacker1.length) {
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters')

} else {
    console.log('wow you both equally long names ' + hacker1.length + ' characters')
}

// Lorem ipsum generator

for (var i = 0; i < hacker1.length; i++) {
    console.log(hacker1.toUpperCase[i] +  " ")

}