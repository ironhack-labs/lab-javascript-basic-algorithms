// Iteration 1: Names and Input
const hacker1 = "Vasile"
const hacker2 = "Gheorghe"
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if ( hacker1.length > hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops
let hacker1UpperCase = '';

for (let i = 0; i < hacker1.length; i++) {
    const capitalLetter = hacker1[i].slice(0, -1) + hacker1[i].toUpperCase();
    hacker1UpperCase += capitalLetter + ' '
};

//console.log(hacker1UpperCase);


let hacker2Reverse = ''

for (let i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    hacker2Reverse += char;
}

///////////////////////////////

console.log(hacker2Reverse);

if (hacker1[0].localeCompare(hacker2[0]) === -1) {
    console.log(`The driver's name goes first.`)
} else if (hacker1[0].localeCompare(hacker2[0]) === 1){
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}


const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel sodales elit, in convallis magna. Integer vitae felis lacinia, mattis diam sit amet, scelerisque sem. Mauris dignissim tincidunt dui, ut blandit purus porta non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent mollis velit eu faucibus rhoncus. Donec sed massa erat. Etiam fermentum sapien ornare, lobortis mi non, ullamcorper lacus. Pellentesque vitae tellus fringilla, vehicula ante in, tincidunt metus. Donec non ante maximus, luctus turpis tristique, ullamcorper velit. Sed commodo interdum iaculis. Pellentesque dignissim, nibh ac mattis venenatis, nisi ante laoreet augue, eu vestibulum est mauris quis magna. Proin id suscipit dui. Duis et nulla sapien. Aenean tempus aliquam odio et maximus. Nunc interdum purus vitae odio feugiat, posuere tempus nibh pretium. Vestibulum egestas velit in libero fermentum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac auctor magna, ut finibus nibh. Duis nec posuere nibh. Donec facilisis sed dui ut fringilla. Nulla sit amet sapien at sapien pellentesque sodales. Cras nulla diam, sodales sed varius vitae, mollis ac odio. Donec aliquam arcu eget felis vestibulum, et dignissim turpis aliquet. Praesent imperdiet neque arcu, a sollicitudin risus consectetur eu. Suspendisse ut congue elit. Proin nec tincidunt ante. Nulla facilisi. Phasellus congue sed ipsum eget pretium. Cras vulputate elementum finibus. Vivamus placerat neque mattis, congue risus in, condimentum turpis. Donec porta tempus tincidunt. Nunc condimentum pulvinar ipsum, convallis vehicula quam commodo ut."

const charactersNunumbers = longText.length;
console.log(charactersNunumbers);



