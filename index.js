//Iteration 1

const hacker1 = "Carlos"

console.log(`The driver´s is name is ${hacker1}`)

const hacker2 = "Isabella"

console.log(`The navigator´s is name is ${hacker2}`)

//Iteration 2

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the loggest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`)
}

//Iteration 3

let name = "";

for (let i = 0; i < hacker1.length; i++) {

    name += hacker1[i].toUpperCase() + " ";
}

console.log(name);


for (let i = hacker1.length - 1; i >= 0; i--) {


    name += hacker1[i];
}

console.log(name);


if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.")

} else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}


//Bonus Time


const longText = "Lorem Ipsum is et simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only et five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

let counter = longText.split(' ').length

console.log("La cadena consta de " + counter + " palabras.")

counter = longText.split(' ')



let counter2 = 0


for (i = 0; i < counter.length; i++) {

    if (counter[i] === "et") {
        counter2++
    }

}
console.log(counter2)

//Bonus2

const phraseToCheck = "carlos"

const len = phraseToCheck.length;

// loop through half of the string
for (let i = 0; i < len / 2; i++) {



    // check if first and last string are same
    if (phraseToCheck[i] !== phraseToCheck[len - 1 - i]) {
        console.log("YES");
    } else {
        console.log("NO LO ES");
    }
}
    //




//console.log(palindrome)












