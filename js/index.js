// Iteration 1: Names and Input
const hacker1 = "Marta";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Diogo";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`)
}


// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i]);
}

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
}

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}


// Bonus 1
const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed rutrum nibh. Nullam porttitor consectetur convallis. Vivamus luctus sodales eros vel accumsan. Duis porttitor dolor at est varius, euismod iaculis felis posuere. Praesent quis dictum sem, nec fringilla quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras aliquet turpis eu erat dignissim, at malesuada nunc luctus. Maecenas id risus a nisi pretium elementum. Sed a consequat augue. Proin nisi nibh, commodo vel ipsum a, rutrum molestie odio. Suspendisse nisl magna, rutrum vitae mi non, ultrices consectetur dui. Curabitur vulputate posuere faucibus. Sed condimentum nisi sed elit pellentesque, non imperdiet velit iaculis. Sed facilisis non felis quis tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut blandit euismod nisl luctus aliquam. Nunc rutrum, nibh sed tempus fringilla, massa risus mattis ex, ac tempor elit nisl sed urna. Vestibulum imperdiet purus ut dolor fringilla, et vehicula erat vehicula. Praesent euismod maximus elementum. In cursus accumsan justo eu lobortis. Aliquam a vulputate lectus, id vestibulum sem. Etiam semper, ex vitae efficitur vestibulum, urna metus vehicula nisl, sit amet cursus tortor quam nec tortor. Phasellus tellus augue, condimentum ac neque vitae, lacinia porta quam. Donec sit amet augue eu tellus dignissim placerat. Sed sollicitudin semper tortor sollicitudin faucibus. Vestibulum ultricies ex sed mi volutpat maximus ac et nibh. Phasellus aliquet, quam eget ultricies rhoncus, dui neque egestas orci, quis mollis erat turpis id quam. Suspendisse maximus molestie odio molestie pharetra. Mauris congue metus quis sem faucibus, a sollicitudin elit consequat. Curabitur id turpis eget nibh rutrum efficitur eu non ipsum. Aliquam semper vel velit sed egestas. Etiam placerat ex in commodo tristique. Integer quis porttitor neque. Nulla sed condimentum odio. Phasellus vestibulum massa nec nulla interdum euismod. Nullam ut lacus vitae massa pellentesque pretium. Maecenas auctor, quam eget blandit aliquam, ante tellus commodo dui, id egestas sapien arcu in orci."

function countWords(string) {
    const totalOfWords = string.split(' ');
  
    return totalOfWords.filter(word => word !== '').length;
  }

countWords(loremIpsum);

console.log(countWords(loremIpsum));


//Bonus 1.3
let loremIpsumArray = loremIpsum.split(" ");
console.log(loremIpsumArray);

let etCount = 0;

for (let i = 0; i < loremIpsumArray.length; i++) {
    if (loremIpsumArray[i] === "et") {
        etCount++;
    }
}

console.log(etCount);