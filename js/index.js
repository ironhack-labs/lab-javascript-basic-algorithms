console.log("I'm ready!");

let hacker1, hacker2, lngdriver, lngnavigator;

hacker1 = 'aaa';
hacker2 = 'aaa';
lngdriver = hacker1.length;
lngnavigator = hacker2.length;


console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (lngdriver > lngnavigator) {

    console.log(`The driver has the longest name, it has ${lngdriver} characters.`);

} else if (lngdriver < lngnavigator) {

    console.log(`It seems that the navigator has the longest name, it has ${lngnavigator} characters`)

} else { // longitud igual

    console.log(`Wow, you both have equally long names, ${lngnavigator} characters!`)

}

console.log("------------ LOOPS -----------")
    /*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
     */
let hacktemp = '';
for (let hack1 of hacker1) {
    hacktemp += hack1.toUpperCase() + ' '
}
console.log(hacktemp)
    //console.log(hacker1.toUpperCase().split('').join(' '));
console.log("-------- 3.2 --------")

/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/
let navtem = '';
let navigatorArray = hacker2.split("").reverse()
for (let nav of navigatorArray) {
    navtem += nav
}
console.log(navtem)

//console.log(hacker2.split('').reverse().join(''))
console.log("-------- 3.3 --------")

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare  */

let result = hacker1.localeCompare(hacker2);
if (result === -1) {
    console.log("The driver's name goes first")
} else if (result === 1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name");
}


console.log("----------- BONUS ---------------")
    // BONUS

let parrafos = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32`


console.log(parrafos.split(' ').length);
let contador = 0;
for (let palabra of parrafos.split(' ')) {
    if (palabra === 'et') {
        contador += 1
    }
}

console.log(contador)

console.log("----------- BONUS 2---------------");


let phraseToCheck = "put itup"

const newStr = phraseToCheck.replace(/[\W_]/g, "").toLowerCase()
const strReversed = newStr.split("").reverse().join("")

console.log(phraseToCheck, strReversed)



/*let counter = 0;

// opcion con un ciclo for
for (let j = 0; j < newStr.length; j++) {
    console.log(strReversed[j], newStr[j])
    if (strReversed[j] == newStr[j]) {
        counter += 1
    }
}
console.log(newStr.length , counter)
*/

if (newStr === strReversed) {
    console.log("palindrome")
} else {
    console.log("no palindrome")

}