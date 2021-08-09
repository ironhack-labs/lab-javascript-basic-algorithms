// Iteration 1: Names and Input
//1.1
const hacker1 = 'Hoonsung';
console.log(`"The driver's name is ${hacker1}"`);

const hacker2 = 'Kiran';
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`"The driver has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`"The navigator has ${hacker2.length} characters.`);
} else {
    console.log(`" ${hacker1.length} characters!!`);
}

// Iteration 3: Loops
//3. 1 print all characters in drivers name
let hacker1Up = hacker1.toUpperCase();
let driverArr = hacker1Up.split("")
const driverName = driverArr.join(" ")
console.log(driverName);


//3.2
const hacker2First = hacker2.slice(0, 1);
const hacker2FirstUp = hacker2First.toUpperCase();
let hacker2Name = `${hacker2FirstUp}` + hacker2.slice(1);
const navigatorArr = hacker2Name.split("");
let navigatorArrRev = navigatorArr.reverse();
const navigatorName = navigatorArrRev.join("");
console.log(navigatorName);


//3.3 lexographic order
if (hacker1[0].toLowerCase() < hacker2[0].toLowerCase()) {
    console.log("The driver's name goes first.")
} else if (hacker1[0].toLowerCase() > hacker2[0].toLowerCase()) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}



//bonus 
const loremTimes3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque orci quam, pharetra eget risus at, condimentum iaculis lectus. Ut eget elementum ante, nec feugiat erat. Curabitur finibus sagittis quam, ut interdum mi placerat eu. Duis ultricies pretium metus sed consectetur. Maecenas neque sapien, tristique non eros eu, pharetra rhoncus est. Aenean viverra hendrerit lacus, in congue nulla mollis maximus. Donec eget risus est. Praesent vitae sapien non lacus semper lacinia. Nam ultricies nec felis eu iaculis. Ut tempus leo a varius lobortis. Nullam nec egestas est. Pellentesque id quam non purus dapibus pretium. Phasellus pharetra purus ipsum, ut ornare odio vehicula vitae. Mauris venenatis sagittis dui. Etiam at lectus tempus, imperdiet erat eu, maximus sapien. Etiam eleifend iaculis tortor, vitae elementum turpis. Cras ac urna elementum, interdum velit nec, suscipit tortor. In finibus hendrerit metus, ac sagittis sem auctor et. Proin sagittis neque at tortor imperdiet, eget semper eros fermentum. Proin commodo, mi tristique laoreet vestibulum, dui neque commodo purus, in ultrices justo dui id lectus. Donec suscipit libero nec metus ornare ornare. Sed ipsum ante, condimentum sit amet interdum nec, placerat vel est. Fusce sit amet libero malesuada, cursus nulla sed, ultrices nulla.Fusce tincidunt gravida nulla, sed lacinia erat ornare quis. Vestibulum et interdum urna. Donec molestie gravida accumsan. Aliquam erat volutpat. Nullam tincidunt rutrum auctor. Curabitur scelerisque, purus sed efficitur vehicula, odio turpis iaculis mi, ac egestas leo magna eu massa. Ut ante enim, vulputate a facilisis ac, rhoncus quis nisi. Vestibulum vitae tincidunt augue. Ut diam arcu, rutrum sit amet dui ut, dictum consequat neque. Mauris mattis varius magna, et dictum ante mollis ac. Cras in libero in felis suscipit pretium. Sed feugiat eros id eros pellentesque elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel ante nibh. Nulla urna quam, dignissim sit amet consectetur sit amet, aliquet id metus. Pellentesque vel diam at diam tempor commodo nec a lorem."

//count number of words
function loremIpsumCounter(str) {

    let splitLorem = str.split(" ")

    return splitLorem.length;

};

//count number of et's
function EtCounter(str) {

    let splitLorem = str.split(" ")
    let EtNumber = 0;

    for (let i = 0; i < splitLorem.length; i++) {

        if (splitLorem[i] === 'et') {

            EtNumber++
        }
    }

    return EtNumber;
};



console.log(EtCounter(loremTimes3));
console.log(loremIpsumCounter(loremTimes3));



//check for Palindrome
function isAPalindrome(str) {


    const strToLower = str.toLowerCase();
    const letters = strToLower.split("");
    const revLetters = letters.slice().reverse();
    const joinedLetters = letters.join("");
    const joinedReverseLetters = revLetters.join("");


    if (joinedLetters === joinedReverseLetters) {
        return true;
    } else {
        return false;
    }


};

console.log(isAPalindrome('Helloworld'));
console.log(isAPalindrome('AmorRoma'));
console.log(isAPalindrome("racecar"));
console.log(isAPalindrome("stackcats"));