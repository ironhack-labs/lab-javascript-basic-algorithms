// Iteration 1: Names and Input
const hacker1 = "Julia";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Jonny";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length}`) 

} else if (hacker2.length>hacker1.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length}`)

} else if (hacker1.length === hacker2.length) {
    console.log (`Wow, you both have equally long names, ${hacker1.length } charachters!`)
}


// Iteration 3: Loops
//3.1
let driver = ""
for(let characters of hacker1 ){

    driver = driver + ' ' + characters;

    
}
console.log(driver.toUpperCase());
//3.2

let navigator = '';
// one way
for(let characters of hacker2){

    navigator = characters + navigator;
}
console.log(navigator)

//3.3
if (hacker1 < hacker2) {
    console.log(`${hacker1} goes first`);
} else if (hacker1 > hacker2) {
    console.log(`${hacker2} goes first definetely`);
} else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
}

//bonus 1
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit nulla tincidunt purus porta malesuada. Nullam finibus scelerisque risus, a mattis magna. Curabitur metus nibh, scelerisque non ultrices sit amet, blandit sed elit. Donec vel urna posuere, consequat magna venenatis, pulvinar libero. Donec accumsan ultrices imperdiet. Quisque blandit ipsum magna, id laoreet turpis lobortis id. Vestibulum at dui sapien.
Donec quis dolor a eros vestibulum commodo. Nunc leo lacus, feugiat at elit a, laoreet luctus arcu. Vestibulum vehicula euismod nisi in accumsan. Vestibulum ac tortor mi. Sed id enim malesuada, venenatis tortor nec, posuere tortor. Maecenas blandit vehicula diam in imperdiet. Nunc tincidunt a nunc vel aliquam. Suspendisse ac ante eu nibh fermentum aliquet vitae aliquet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque euismod leo id felis semper, accumsan fermentum massa pharetra. Nam sem neque, interdum sit amet tincidunt at, bibendum nec ipsum. Etiam bibendum risus eget quam efficitur, in placerat lacus finibus. Aliquam vel massa ut elit scelerisque efficitur ut et elit. Proin nec semper neque, at consequat odio. Nam ac odio purus.
Pellentesque ac odio vehicula, ultrices ipsum eget, auctor neque. Cras sed est neque. Donec bibendum dolor libero, sit amet euismod sem congue vitae. Morbi molestie ac sapien nec lacinia. Nam ultrices, ligula et faucibus varius, sem mauris condimentum nibh, at rhoncus neque nisl nec nibh. Nulla tristique enim nunc, a congue orci imperdiet eget. Etiam mattis rhoncus diam nec sollicitudin. Etiam congue nunc quis urna vehicula, in malesuada nibh hendrerit. Pellentesque vel turpis et massa luctus cursus id quis libero. Vestibulum ornare elit vitae dolor aliquet, vel ornare purus tristique.`

let counter = 1;
 for (let characters of lorem) {
   
    if (characters === " ") {
        counter ++;
    }
} 
console.log (counter);