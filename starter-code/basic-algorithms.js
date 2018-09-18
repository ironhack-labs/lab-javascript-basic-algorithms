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

//Loops

var space1="";

for (var i = 0; i<hacker1.length; i++) {
    space1 += hacker1[i].toUpperCase() + " ";

        console.log(space1);

var space2="";
    for (var i = hacker2.length-1; i>=0; i--){
        space2 += hacker2[i];
    }
    console.log(space2)

var hacker1Length = 0;

for (var i=0; i<hacker1.length; i++) {
    if (hacker1[i] === hacker2[i]);
    hacker1.length++;
    if (hacker1Length==hacker1.length); {
        console.log('What?! You both got the same name?')
    }
        } elseif (hacker1[i] < hacker2[i]); {
            console.log('The drivers name goes first')

        } elseif (hacker1[i] > hacker2[i]); {
            console.log('Yo, the navigator goes first definitely')
        }

    }
// Lorem ipsum generator

var newString = prompt('Insert a string here')

for (var i = newString.lenght-1; i>=0; i--){
    console.log(newString)
}