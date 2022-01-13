// Iteration 1: Names and Input
let hacker1 = 'Inés';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Jorge';
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
function largestName(name1, name2) {
    if (name1.length > name2.length) {
        return `The driver has the longest name, it has ${name1.length} characters.`
    } else if (name2.length > name1.length) {
        return `It seems that the navigator has the longest name, it has ${name2.length} characters.`
    } else {
        return `Wow, you both have equally long names, ${name1.length} characters!`
    }
}

console.log(largestName(hacker1, hacker2))

// Iteration 3: Loops
function capitalSeparated(name) {

    let capitalizedName = name.toUpperCase();
    let finalName = ""

    for (let i = 0; i < capitalizedName.length; i++) {
        finalName += capitalizedName[i];
        finalName += " ";
    }

    return finalName
}

console.log(capitalSeparated(hacker1))

// --------------

function reversedName(name) {
    let reversedName = "";

    for (let i = name.length - 1; i >= 0; i--) {
        reversedName += name[i]
    }

    return reversedName
}

console.log(reversedName(hacker2))

// ---------------

function lexOrderName(name1, name2) {

    if (name1 < name2) {
        return `Yo, the navigator goes first definitely.`
    } else if (name1 > name2) {
        return `The driver's name goes first.`
    } else {
        return `What?! You both have the same name?`
    }

}

console.log(lexOrderName("jorge", "jorge"))

// ----------------------

// BONUS 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tortor magna, iaculis quis metus quis, sodales posuere mi. Cras ornare enim vel neque scelerisque fermentum. Mauris molestie libero arcu, sit amet suscipit nulla varius ut. Vestibulum sodales tristique posuere. Donec eleifend ligula nec elit efficitur, eget imperdiet dui eleifend. Donec aliquet a risus ac sagittis. Etiam ultricies mi non risus lobortis convallis. Maecenas consequat laoreet erat, vel pharetra turpis mattis et. Integer euismod sagittis volutpat. Aliquam sit amet mauris ac nisl ornare viverra. Praesent blandit faucibus diam, a pharetra nisi placerat ac. Curabitur pulvinar maximus urna, in porttitor tellus convallis ac. Nunc lacinia justo eu varius luctus. Ut ac nulla ultrices, porta velit porttitor, tempus velit. In sit amet arcu erat. Cras maximus ultricies mi, vel tristique nunc molestie sed. Quisque commodo mauris lectus, eget euismod massa venenatis eget. Ut dignissim iaculis felis sodales mollis. Sed augue nibh, vestibulum a mollis id, dignissim id erat. Nunc blandit elementum diam sed finibus. Aenean odio metus, lobortis non dolor eu, viverra commodo orci. Nunc ut imperdiet nulla. Fusce dictum viverra lacus, sit amet sollicitudin turpis. Cras ut bibendum tortor. Sed sagittis lorem et euismod sollicitudin. Sed eleifend nunc viverra felis malesuada posuere. Nulla sit amet commodo risus, sit amet ullamcorper tellus. Aliquam erat volutpat. Mauris commodo volutpat nunc, eu facilisis nisl semper id. Maecenas fringilla sem dui, eget feugiat quam congue et. Sed in nibh et sem iaculis pretium eu lacinia urna. Curabitur vitae justo orci. Morbi vestibulum risus ac neque cursus elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut fermentum elit. Cras nisi ex, consectetur nec sem a, sollicitudin placerat mi. Nunc a orci enim. Sed tincidunt dignissim ipsum vitae molestie. Donec metus leo, auctor nec pulvinar non, molestie eget dolor."

let spaces = 0;

for (let i = 0; i < lorem.length; i++) {
    if (lorem[i] === " ") {
        spaces++;
    }
}

spaces++

console.log(spaces)

// BONUS 2
