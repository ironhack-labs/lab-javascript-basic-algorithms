// Iteration 1: Names and Input
// 
let hacker1 = "Marcos";
console.log("The driver name is " + hacker1);

let hacker2 = "Rasul";
console.log("The navigator name is " + hacker1);

// Iteration 2: Conditionals
let length1 = hacker1.length;
let length2 = hacker2.length;


let larger = length1 > length2 ? hacker1 : hacker2;

if (length1 == length2) { larger = "equal" }


let result;

if (length1 > length2) { chosen = hacker1 }
else { chosen = hacker2 }

switch (larger) {
    case hacker1:
        result = "The driver has the longest name, it has " + larger.length + " characters"
        // code to be executed if n = 1;

        break;
    case hacker2:
        result = "It seems that the navigator has the longest name, it has " + larger.length + "characters."

        break;
    case "equal":
        result = "Wow, you both have equally long names, " + length1 + " characters!"
        break;

    default: // code to be executed if n doesn't match any cases
}


// Iteration 3: Loops
let hacker1UpperCase = hacker1.toUpperCase();



console.log(hacker1.split("").join(" "));

console.log(hacker2.split("").reverse().join(""))




let result2;
let comparation = hacker1.localeCompare(hacker2);
console.log(comparation)

if (comparation < 0) { result2 = "The driver's name goes first." }
else if (comparation == 0) { result2 = "What?! You both have the same name?" }
else { result2 = "Yo, the navigator goes first definitely." }

console.log(result2);


//BONUS

let parr1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus enim at fermentum pharetra. Proin sit amet tellus sapien. Cras vel augue congue, tempor eros ac, aliquam sem. Nunc massa nisi, sagittis ac dui id, consequat vestibulum justo. Nulla quis orci vel elit fermentum convallis ut sit amet elit. In maximus ex vitae risus feugiat, in facilisis urna vehicula. Pellentesque nisl urna, fermentum a dui et, rutrum rutrum justo. Suspendisse gravida nunc erat, et gravida justo eleifend in. Vivamus quis sem non elit molestie ullamcorper eu eu arcu. Nunc ut ligula et purus finibus iaculis ac sit amet nibh. Vivamus erat orci, placerat eget convallis id, dapibus ac nulla. Duis commodo nisl eu vehicula egestas. Nulla efficitur ante sed elit pretium porta. Aenean at vehicula enim. Nunc nec aliquam sapien."

let parr2 = "Aliquam vitae lacinia nunc. Ut semper mi arcu, sit amet bibendum nisi sagittis quis. Maecenas posuere est nunc. Quisque ac scelerisque lectus. Suspendisse porta finibus nulla, et imperdiet est vehicula sed. Etiam faucibus consectetur arcu. Nullam lobortis lacus in laoreet dignissim. Ut nec diam dapibus, placerat leo interdum, facilisis ex. Aliquam efficitur quis dolor et consectetur."

let parr3 = "Integer erat libero, viverra sed nisl a, pellentesque rutrum felis. Donec accumsan, metus ac placerat dapibus, neque risus hendrerit augue, nec dictum massa justo et nulla. Aenean tempus scelerisque nisi, eget laoreet sapien posuere sed. Duis aliquet nunc ut metus pulvinar tincidunt. Vestibulum placerat, sapien vitae tincidunt luctus, enim lacus interdum dolor, a porta orci urna nec purus. Vivamus ligula metus, efficitur sed metus sed, accumsan porttitor elit. Sed a euismod nulla. Nunc rutrum dapibus nunc, eu pretium arcu ultrices eu. Morbi quis magna malesuada, posuere justo ac, rutrum arcu. Duis porttitor ultricies tellus, a eleifend dui varius et. Duis mi risus, pharetra id gravida ac, placerat vitae metus. Sed dignissim vel augue et gravida."











let parrtotal = parr1 + parr2 + parr3;

parrtotal = parrtotal.replaceAll(".", "");
parrtotal = parrtotal.replaceAll(",", "");
parrtotal = parrtotal.replaceAll(";", "");
parrtotal = parrtotal.replaceAll(":", "");


console.log(parrtotal);



parrtotalword = parrtotal.split(" ");
console.log(parrtotalword.length);


//BONUS2

