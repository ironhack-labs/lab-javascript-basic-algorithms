// Iteration 1: Names and Input
const hacker1 = "Matt";
console.log(`The navigator´s name is ${hacker1}`)

const hacker2 = "Frederique";
console.log(`The navigator´s name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }

    else if(hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }

    else{
    console.log(`Wow, you both have equally long names, XX characters!`);
    }



// Iteration 3: Loops

//part1
let newDriver = "";

for (let i=0; i<hacker1.length; i++) {

    if(i<(hacker1.length-1)){
        newDriver += (hacker1[i]).toUpperCase()+ " ";
    }
    else {
        newDriver += (hacker1[i]).toUpperCase()
    }

}

console.log(newDriver);

//part2


let reverseName = "";

for(let i=hacker2.length-1; i >= 0; i-- ){
    reverseName += hacker2[i];
}

console.log(reverseName);


//part3

if (hacker1[0].toUpperCase() < hacker2[0].toUpperCase()) {
    console.log("The driver's name goes first.")
    }

    else if (hacker1[0].toUpperCase() > hacker2[0].toUpperCase()) {
    console.log("Yo, the navigator goes first definitely.")
    }

    else {
    console.log("What?! You both have the same name?")
    }
