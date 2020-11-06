// Iteration 1: Names and Input

let hacker1 = 'Hercules'; //Driver
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = 'Gabi'; // Navigator
console.log(`"The navigator's name is ${hacker2}"`);




// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops

let driverUpperCase = hacker1.split('').join(" ").toUpperCase();
console.log(driverUpperCase);

let navigatorReverseCase = hacker2.split('').reverse().join("");
console.log(navigatorReverseCase);

let lexicographicOrder = hacker1.localeCompare(hacker2);
if (lexicographicOrder === 1) {
    console.log(`The driver's name goes first.`);
}
else if (lexicographicOrder === -1) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}


// BONUS 1
let parag1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.In sit amet erat enim.Cras risus nunc, sollicitudin nec varius a, semper quis velit.Curabitur consequat tempor diam in condimentum.Sed eget aliquam ante.Praesent dolor urna, tincidunt at luctus id, facilisis nec tortor.Ut faucibus, ipsum sed elementum convallis, nibh sem porttitor orci, nec placerat quam ante sit amet arcu.Mauris ut viverra nisi.Proin suscipit eget odio tempor vulputate.Duis imperdiet libero ante, nec porttitor quam posuere non.Nunc tempor diam ut elit scelerisque iaculis.Maecenas laoreet turpis ipsum, a sollicitudin tortor faucibus ac.Quisque quis eros ante.Aliquam augue neque, viverra eu laoreet non, porttitor ullamcorper lorem.Duis auctor ex sed augue tincidunt, ac congue urna consectetur.';
let parag2 = 'Morbi eu nisi nec purus feugiat gravida at ac libero.Donec ultricies nunc in nisi molestie, in mollis eros vestibulum.Nunc non sollicitudin urna, a consequat erat.Praesent facilisis sem non ex auctor, eget volutpat lacus egestas.Vestibulum dignissim sem eu lobortis pretium.Proin id volutpat ex, eu eleifend metus.Morbi ut mollis arcu, sit amet porttitor erat.Nullam eros velit, vulputate et tristique mollis, efficitur eget ligula.Aliquam eros lorem, mollis et nunc eget, varius fringilla nibh.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vulputate, ante at venenatis pretium, nulla arcu facilisis sapien, quis dapibus mauris felis eget ante.Aenean id suscipit neque.Ut orci sapien, cursus vel lectus quis, tempor egestas felis.Aliquam non erat tortor.Curabitur dignissim dolor vitae fermentum laoreet.Maecenas dapibus odio non nisl iaculis lacinia.';
let parag3 = 'Aenean finibus arcu nec est dictum, quis commodo lectus ultricies.Cras in magna nunc.Maecenas quis neque aliquam, fringilla erat vitae, suscipit lacus.Fusce commodo tellus leo, at facilisis ante facilisis vel.Sed lorem dolor, sodales posuere dictum nec, sagittis non turpis.Fusce tincidunt arcu metus, nec viverra erat eleifend vitae.Nulla feugiat orci ac lectus rhoncus, at volutpat velit aliquam.Sed eleifend lorem arcu, bibendum tristique libero interdum sit amet.Aliquam ut velit quis dolor ornare dignissim id ullamcorper nulla.Vivamus molestie, nulla consequat molestie consequat, eros lorem rhoncus eros, faucibus accumsan justo ligula et augue.Cras a facilisis est.Curabitur luctus ligula ut dui mollis, a consectetur lacus bibendum.Mauris rhoncus libero eget velit luctus tincidunt.Nam ante elit, interdum id eleifend eget, tempus vel velit.';

function countWords(str) {
    return str.split(" ").length;
};

function countLatinEl(str) {
    return str.split("el").length - 1;
}

countWords(parag1);
countWords(parag2);
countWords(parag3);

countLatinEl(parag1);
countLatinEl(parag2);
countLatinEl(parag3);

// BONUS 2
