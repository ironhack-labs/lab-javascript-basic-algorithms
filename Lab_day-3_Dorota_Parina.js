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


var nullWord = null;
var emptyWord = "";
var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec venenatis arcu, ut pellentesque velit. Praesent ante urna, ultrices in accumsan in, consequat nec metus. Donec tempor ligula viverra venenatis mollis. Sed euismod, mauris non euismod tristique, sem neque elementum est, vel porttitor lorem tellus id lacus. Fusce massa lorem, faucibus at tincidunt eu, cursus sed purus. In ut venenatis libero, et scelerisque dolor. Phasellus non est dapibus, hendrerit nisl vitae, molestie ipsum. In posuere sed mi a pretium. Integer lectus velit, tempus et mattis vel, porttitor ac enim. Curabitur interdum ante ut sapien iaculis, quis finibus ipsum hendrerit. Morbi at sem nisi. Mauris sodales eros posuere magna eleifend facilisis. Duis in enim scelerisque, tincidunt nibh nec, rutrum elit.";
paragraph += " Fusce cursus mauris enim, sit amet maximus velit vestibulum vitae.Sed condimentum ipsum eget viverra volutpat.Donec risus massa, malesuada ut eros vel, rhoncus pulvinar metus.Maecenas cursus enim tellus, sed eleifend tortor posuere ut.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Morbi suscipit sem eget tellus efficitur, et blandit magna molestie.Sed in vestibulum risus.";
paragraph += " Praesent urna ante, consequat sit amet nisi eu, interdum egestas arcu.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Quisque felis dolor, sollicitudin et condimentum ac, euismod at nulla.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Cras eleifend rutrum sapien, id suscipit ex varius ut.Phasellus et quam varius, porta erat in , porttitor sem.Vivamus convallis imperdiet ligula nec commodo.Aenean fringilla ex sit amet scelerisque dignissim.Aenean euismod, tellus in maximus fermentum, quam odio consequat nibh, vehicula consequat tellus elit ac quam.Nunc non massa eu lorem tempus aliquet quis ac lectus.";

function countWords(input) {
    if (input == null || input.length == 0) {
        return 0;
    }
    var words = input.split(" ");
    return words.length;
}
console.log(countWords(paragraph));