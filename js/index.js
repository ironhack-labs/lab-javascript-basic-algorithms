// Iteration 1: Names and Input
const hacker1 = "Marcella"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Mahmut";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;
if(driverNameLength>navigatorNameLength) {
  console.log( `The driver has the longest name, it has ${hacker1.length} characters`)
} else if (navigatorNameLength > driverNameLength) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverName = "";
for(let i=0;i<hacker1.length;i++){
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorName = "";
for (let i = hacker2.length-1 ; i>=0; i--) {
  navigatorName += hacker2[i];
}
console.log(navigatorName);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?


if (hacker1.localeCompare(hacker2)) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker2.localeCompare(hacker1)) {
  console.log("The driver's name goes first.")
} else {
  console.log("What?! You both have the same name?");
}


//Bonus 1

//Generate 3 paragraphs.Store the text in a variable type of string.

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at est sit amet lorem tempor viverra quis sit amet elit. Ut efficitur consequat odio, eget egestas est cursus quis. Nullam egestas, nisi sed sodales bibendum, sapien massa placerat elit, et euismod lectus leo at felis. Etiam tempus diam est, imperdiet laoreet diam venenatis a. In hac habitasse platea dictumst. Sed hendrerit enim vulputate sollicitudin scelerisque. Nam auctor id sem vitae placerat. Nullam congue mollis mi, et porttitor odio efficitur vel. Ut vehicula ante non massa rutrum hendrerit. Donec imperdiet vel mi at posuere.Fusce vulputate tempor justo, ut pulvinar ipsum dapibus at. Quisque mauris augue, lacinia a arcu sit amet, cursus porttitor turpis. Integer eget diam in neque cursus dignissim a in nibh. Vestibulum faucibus enim finibus, finibus nulla eget, auctor nibh. Aenean nec risus varius, elementum orci et, rutrum tellus. Fusce nisl felis, consequat ut tortor non, venenatis dictum leo. Sed iaculis dolor at dictum maximus. Donec mollis tristique laoreet. Quisque vel imperdiet urna, id accumsan ante. Donec eu facilisis tortor. Curabitur hendrerit mauris urna. Praesent gravida augue in iaculis convallis. Integer cursus dolor lacus.Fusce consectetur sagittis risus in cursus. Aliquam at vehicula dolor. Integer non convallis mauris. Sed efficitur imperdiet neque, non maximus nulla pulvinar id. Ut semper, ligula at interdum congue, neque orci lobortis ligula, vitae hendrerit felis erat eget enim. Quisque consequat turpis orci, et rutrum purus ornare ac. Duis quis varius velit. In commodo nunc tellus, a blandit urna interdum a. Mauris vulputate tempus sapien eu laoreet. Aliquam erat volutpat. Ut eleifend sem nulla, pharetra semper magna blandit et. Mauris condimentum mi ac erat varius malesuada. Sed a suscipit odio, id suscipit ligula. Cras in eros ultrices, euismod est id, molestie tortor. Nulla blandit ligula eu nisi placerat, vel commodo urna iaculis.";

//Make your program count the number of words in the string.

let arrayWords = text.split(" ")
// console.log(arrayWords) To know if it's working correct the arrayWords
console.log(arrayWords.length);

//Make your program count the number of times the Latin word et appears.

let count = 0
for (i = 0; i < arrayWords.length; i++) {
    if (arrayWords[i].includes("et")) {
        count++;
    }

}
console.log(count);