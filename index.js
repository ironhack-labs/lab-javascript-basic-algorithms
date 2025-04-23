// Iteration 1: Names and Input
const hacker1 = "Zaellexxx"
const hacker2 = "Ztanael"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length}  characters!`)
}


// Iteration 3: Loops
    let result = ""
for (let i = 0; i < hacker1.length; i++){
    result +=  hacker1[i].toUpperCase() +" "    
}
console.log(result)


let result2 = ""
for (let i = hacker2.length -1; i >= 0; i--){
    result2 +=  hacker2[i] +" "    
}
console.log(result2)


if (hacker1[0] < hacker2[0]){
    console.log(`The driver's name goes first.`)
} else if (hacker2[0] < hacker1[0]) {
    console.log(`Yo, the navigator goes first, definitely.`)
} else if (hacker1[0] === hacker2[0]) {
    console.log("What?! You both have the same name?")
}


// BONUS 

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor neque non urna scelerisque, in pharetra mauris ultricies. Vestibulum at massa lacinia nibh dictum elementum non ac lectus. Integer ante tortor, congue ac tempus ut, egestas in velit. Curabitur sit amet lectus erat. Mauris sagittis dui ut ante posuere ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla convallis, risus vel tempus faucibus, sapien nisl rhoncus magna, et imperdiet ex ligula tincidunt turpis. Pellentesque viverra placerat metus non faucibus. Proin hendrerit nunc eu metus suscipit, sit amet porta turpis viverra. Vivamus nec nunc leo. Curabitur sagittis tincidunt diam, et aliquet eros pretium ac. Morbi imperdiet ipsum lacus. Mauris eu imperdiet eros. Vestibulum placerat rutrum massa faucibus molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."

let count = 1; 

for (let i = 0; i < longText.length; i++) {
if (longText[i] === " ") {
count++;
}
}

console.log(count);


