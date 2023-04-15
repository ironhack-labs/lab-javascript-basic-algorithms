// Iteration 1: Names and Input
const hacker1 =  'Oscar'
console.log(`The driver's name is ${hacker1}`)
const hacker2 =  'Manuel'
console.log(`The navigator's names is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops


function drivCapital (name){
    return name.toUpperCase()
}

console.log(drivCapital(hacker1))


function drivReverse (name){
    return name.split('').reverse().join('')
}

console.log(drivReverse(hacker2))

function lexico (name1, name2){
    if(name1 > name2){
        return "The driver's name goes first.";
    }
    else if(name2>name1){
        return "Yo, the navigator goes first, definitely."
    }
    else{
        return "What?! You both have the same name?"
    }
}

console.log(lexico(hacker1,hacker2))


const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dolor odio, eu lacinia sapien scelerisque ac. Vestibulum malesuada tristique fermentum. Sed consequat, elit a pulvinar pellentesque, dui ligula tincidunt metus, id ullamcorper ex mauris a libero. Nam auctor, felis et scelerisque hendrerit, nulla nisi facilisis turpis, vel finibus est urna id tellus.
Phasellus consectetur urna eu risus vestibulum, et viverra libero varius. Integer sodales, dui eu aliquam fringilla, ligula enim bibendum urna, eu fringilla sapien magna in sem. Fusce sit amet ullamcorper odio. Proin vehicula, nisl ut lacinia feugiat, odio risus consectetur ex, nec bibendum est turpis ut libero. Fusce id ex non velit congue ultricies et et urna. Nam tincidunt quam id massa malesuada, ut fermentum turpis lacinia. Donec volutpat urna ut nunc venenatis rhoncus.
Mauris lacinia pellentesque tortor, nec gravida velit ullamcorper vitae. Suspendisse eu vulputate velit, id congue augue. Fusce vitae gravida tortor. Etiam volutpat augue ac lectus consectetur, vel interdum elit laoreet. Etiam vitae sem et lacus vestibulum ultrices a vel ipsum. Suspendisse eleifend aliquam augue ut venenatis. Fusce eleifend aliquam lectus nec fringilla. Pellentesque malesuada lectus eget ipsum blandit, id tincidunt enim consequat.
`;

const words = longText.split(" ");
const wordCount = words.length;
console.log(wordCount);

let etCount = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i] === "et") {
        etCount++;
    }
}

console.log("Count of Latin word 'et':", etCount);
