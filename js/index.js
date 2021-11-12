// Iteration 1: Names and Input
let hacker1 = "Lucas";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jessica";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

let nomeEsp = ""

for (let i = 0; i < hacker1.length; i++) {
    nomeEsp += hacker1[i];
    nomeEsp += " ";
}

console.log (nomeEsp.toUpperCase())

let nomeAoCon = ""

for (let i = hacker1.length - 1; i >= 0; i--) {
    nomeAoCon += hacker1[i];
    nomeAoCon += " ";
}

console.log (nomeAoCon.toUpperCase())

let names = [hacker1,hacker2];

names.sort();

if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")

} else if (names[0] === hacker2) {
    console.log("Yo, the navigator goes first definitely.")

} else {
    console.log("The driver's name goes first.")
}

// Bonus!

let loremIpsum

loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a 
consectetur eros. Fusce maximus arcu malesuada magna semper, sit amet maximus 
lectus volutpat. Sed ultricies eu ex sagittis consequat. Sed finibus, nibh id 
tristique vestibulum, augue dui vulputate magna, eu placerat elit lectus vel elit. 
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
himenaeos. Donec tempor ligula neque, a elementum libero convallis sed. Etiam suscipit 
mauris id ligula sodales faucibus. Maecenas quis odio id felis rutrum viverra. 
Integer mattis eget orci sed dictum. Pellentesque in nisi eu tellus ornare aliquet 
sed ac ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada 
fames ac turpis egestas. Donec sagittis mauris malesuada neque eleifend scelerisque.

Nunc non diam id metus porttitor mollis at sed quam. Nullam mauris sem, tincidunt 
non dignissim sit amet, bibendum nec enim. Cras accumsan facilisis felis quis blandit. 
Nam efficitur magna quis quam dictum tincidunt. Nam in augue nunc. Vestibulum vel 
commodo lacus, a posuere elit. Maecenas ut mollis odio. Vivamus eleifend euismod quam sit amet maximus.

Curabitur pellentesque, enim eget vestibulum rutrum, eros lectus posuere nibh, 
tristique accumsan tortor ex vitae velit. In eleifend condimentum ante, ac bibendum 
mi venenatis nec. Donec dapibus pulvinar lacus, placerat efficitur risus semper eu. 
Sed ut venenatis turpis, sed maximus lectus. Maecenas rhoncus mi quis dictum maximus. 
Sed finibus sodales ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
Vestibulum eget tristique tortor. Donec at pellentesque risus, nec mollis mi. Nunc 
imperdiet orci enim, eget egestas dolor congue sit amet. Nulla sollicitudin urna neque, 
sit amet gravida leo fermentum ut. Vestibulum ornare risus tortor, sed facilisis justo 
molestie sit amet. Cras interdum sem ac lectus semper, ut tempus nibh placerat. Orci varius 
natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quis congue nunc.`

let countWords = 0

for (let i = 0; i <= loremIpsum.length; i++) {
    if ((loremIpsum[i] === " "))  {
        countWords += 1   
    }

    if ((loremIpsum[i] === ".") && (loremIpsum[i+1] != " ")) {
        countWords += 1
    }
}

console.log(loremIpsum.length)
console.log(countWords)