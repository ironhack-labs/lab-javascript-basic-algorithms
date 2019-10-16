// Iteration 1: Names and Input

var hacker1 = "Parina";
console.log(`The driver's name is ` + hacker1);

var hacker2 = "Dorota";
console.log(`The navigator's name is ` + hacker2);


// Iteration 2: Conditionals

function theLongestName(name) {
    if (hacker1.length > hacker2.length) {
        return "The Driver has the longest name, it has " + hacker1.length + " characters"
    } else if (hacker1.length < hacker2.length) {
        return "Yo, navigator got the longest name, it has " + hacker2.length + " characters"
    } else {
        return "Wow, you both got equally long names " + hacker2.length + " characters!"
    }
}

console.log(theLongestName());


// Iteration 3: Loops

function printToUppercase(str) {
    var strUpperCase = '';
    for (var i = 0; i < str.length; i++) {
        strUpperCase += str[i].toUpperCase() + " ";
    }
    return strUpperCase;
}
console.log(printToUppercase(hacker1));



function reverseString(str) {
    let upperCasedFirstLetter = hacker2.slice(0, 1).toUpperCase();
    console.log(upperCasedFirstLetter)

    let upperCasedFirstName = upperCasedFirstLetter + hacker2.slice(1);
    console.log(upperCasedFirstName)

    return str.split("").reverse().join("");
}
console.log(reverseString(hacker2));



array1 = [hacker1, hacker2]

function sortName(string) {
    var alphaName = array1.sort();
    if (hacker1.slice(0, 1) < hacker2.slice(0, 1)) {
        return "The driver's name goes first."
    } else if (hacker1.slice(0, 1) > hacker2.slice(0, 1)) {
        return "Yo, the navigator goes first definitely."
    } else {
        return "What?! You both got the same name?"
    }
}

console.log(sortName());




var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et orci sit amet massa sagittis egestas eu nec magna. Suspendisse nec tincidunt urna. Cras non pretium arcu. Maecenas ut lorem nunc. Morbi vehicula ipsum diam, eget accumsan metus tincidunt suscipit. Donec nec nisl purus. Nunc vel nisl scelerisque, congue sapien eu, faucibus erat. Suspendisse leo tellus, ultrices eget congue ac, molestie at arcu. Morbi vel varius lectus. Vestibulum in mollis dui. Sed ac lectus et ligula fermentum lacinia. Phasellus luctus dui id justo venenatis auctor ut vel ex.
Donec hendrerit imperdiet ligula, ac tristique eros.Vestibulum eu turpis sed sapien cursus placerat.Etiam sit amet tristique odio.Donec dapibus sed velit non sagittis.Nam velit nunc, pharetra sed arcu sed, dignissim tincidunt metus.Praesent molestie et tortor vitae consequat.Praesent cursus ultricies risus eu tincidunt.Aenean non eleifend massa.Vestibulum in dapibus felis, a vestibulum diam.Morbi at magna eu velit sagittis rutrum.Donec sit amet orci sed elit bibendum vulputate.
Donec egestas malesuada lacus ut tincidunt.
';

console.log(str + ' ' + str.length);