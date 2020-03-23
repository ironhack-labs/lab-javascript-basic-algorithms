console.log("hello");

// Iteration 1 Names and Input 

let hacker1 = "Benjamin";

console.log(`drivers name is ${hacker1}`);

let hacker2 = "Maria";

console.log(`navigators name is ${hacker2}`);

// Iteration 2 Conditionals 

if (hacker1.length > hacker2.length) {
    console.log(`the driver hast the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`the navigator hast the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names ${hacker2.length} characters!`);
}

// Iteration 3: Loops

let capitalizedHacker1 = hacker1.toUpperCase();

console.log(capitalizedHacker1);

/*
let hacker1Splitted = capitalizedHacker1.split(' ') ;

console.log(hacker1Splitted) ;
*/

let result = '';

for (i = 0; i < hacker1.length; i++) {
    result += capitalizedHacker1[i] + ' ';
}

console.log(result);

let result2 = '';

for (i = hacker2.length - 1; i > -1; i--) {
    result2 += hacker2[i];
}

console.log(result2);

var arrNames = [hacker1, hacker2];

arrNames.sort();

console.log(arrNames.indexOf(hacker2));

// console.log(arrNames) ;

if (arrNames.indexOf(hacker1) < arrNames.indexOf(hacker2)) {
    console.log("The driver's name goes first.");
} else if (arrNames.indexOf(hacker1) > arrNames.indexOf(hacker2)) {
    console.log("Yo, the navigator goes first definitely.");
} else if (arrNames[0] === arrNames[1]) {
    console.log("What?! You both have the same name?");
}

// Bonus 1

let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel hendrerit sem. Sed tempor dolor eu congue efficitur. Aenean rutrum dictum sem, vel rhoncus arcu dapibus sed. Etiam sodales auctor ex, in lobortis est pulvinar id. Morbi ut purus nec erat sollicitudin dignissim ut lobortis tellus. Aliquam eu venenatis erat. Nulla velit urna, consectetur ac rhoncus ac, molestie eu tellus. Integer quis mauris ut elit molestie malesuada in sit amet turpis. Nullam iaculis augue sed arcu consectetur tempus. Donec suscipit viverra justo, eu feugiat erat tempor at. Aenean vitae bibendum justo, a aliquam felis. Maecenas sit amet felis felis. Quisque congue, ex nec scelerisque suscipit, turpis arcu pulvinar lacus, vel dictum dui magna vehicula nisi. Fusce ut dui sagittis, tincidunt dui eget, dapibus urna. Nunc semper pharetra consectetur. Sed ornare tempor lacinia. Sed sed dolor sit am tortor viverra ullamcorper. Aliquam scelerisque felis condimentum venenatis pretium. Suspendisse tempus lectus nulla, sed viverra mauris sagittis ac.Praesent euismod purus a urna fringilla, eget egestas est bibendum. Pellentesque tempor commodo enim venenatis dignissim. Donec nec est ipsum. Sed id leo purus. Sed mauris purus, maximus fermentum placerat nec, imperdiet eu eros. Morbi quis orci ac tortor sollicitudin ultricies et nec libero. Praesent feugiat nulla quis nibh egestas, ac porttitor magna consectetur. Fusce quis elit id diam tempus lacinia a sit amet massa. Maecenas auctor eleifend dolor, et pretium purus convallis vitae. Vestibulum mauris massa, sollicitudin sed egestas vel, suscipit vitae nunc. Donec sapien orci, pretium a dolor fermentum, fermentum ullamcorper risus. Donec sollicitudin lacus nec malesuada imperdiet. Aliquam mollis in dui tempor pharetra. Aliquam et ligula erat."


let count = 0;

for (i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
        count++;
    }
}


console.log(count);

let countEt = 0;

for (i = 0; i < string.length; i++) {
    if (string[i] === 'e' && string[i + 1] === 't') {
        countEt++;
    }
}

console.log(countEt);