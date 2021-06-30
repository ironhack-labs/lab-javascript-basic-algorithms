// Iteration 1: Names and Input
let hacker1 = "Houssame";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Zerouali";
console.log(`The navigator's name is ${hacker2}`);

console.log('-------------------------------------------------------------------')

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console,console.log(`The driver has the longest name,it has ${hacker1.length} characters`);
}else if (hacker1.length < hacker2.length) {
    console,console.log(`The navigator has the longest name,it has ${hacker2.length} characters`);
}else {
    console,console.log(`Wow you have the equally long names, ${hacker2.length} characters !`);
}

console.log('-------------------------------------------------------------------')

// Iteration 3: Loops
for (letter in hacker1) {
    
    console.log(`${hacker1[letter].toUpperCase()}`)
}

console.log('-------------------------------------------------------------------')

for (let i = hacker1.length-1; i >= 0; i--) {
    console.log(hacker1[i])
    
}

console.log('-------------------------------------------------------------------')

if (hacker1<hacker2) {
    console.log("The driver's name goes first.")
}else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first definitely.")
}else {
    console.log("What ?! You both have the same name ?")
}

console.log('-------------------------------------------------------------------')


//Bonus 1 

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum cursus tempus. Nulla tellus ex, rhoncus quis malesuada laoreet, volutpat ut nulla. In blandit, nisi sit amet volutpat suscipit, lorem libero euismod nunc, gravida ultricies quam ex sagittis lacus. Aenean diam risus, cursus ut velit ut, porttitor ultricies massa. Suspendisse cursus leo augue, vitae hendrerit diam dictum in. In at imperdiet magna. Ut consectetur placerat urna, eu eleifend odio cursus id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras auctor massa ullamcorper, mollis est at, interdum nisl. Curabitur vitae elit lacus. Maecenas auctor, nisl ac congue volutpat, urna risus pretium lorem, in luctus nisl erat nec ligula. Quisque viverra leo pulvinar egestas lacinia. Nulla non orci arcu. Phasellus fermentum dui eget orci luctus blandit. Nullam tellus lectus, mollis id pharetra a, sodales ac dui. Aliquam in posuere felis, vitae molestie sapien. In non sagittis mauris, non eleifend est. Curabitur tincidunt diam felis, et ultrices felis sodales quis. Nulla dapibus non massa ut sodales. Pellentesque nec enim quam. Donec volutpat dignissim velit nec elementum. Mauris non accumsan urna, quis congue sapien. Maecenas faucibus erat a velit dapibus congue. Curabitur tristique blandit velit eu vehicula. Donec volutpat, neque efficitur egestas facilisis, enim tellus molestie nulla, accumsan gravida purus odio quis quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra, arcu in lobortis ornare, tortor ipsum ultricies augue, iaculis euismod est augue eu nibh."
let testPhrase = "This is a sentence containing exactly 14 words, not one more, not one less."
let nbWords = 1;
for (let i = 0; i < lorem.length; i++) {
    if (lorem[i] == ' ') {
        console.log(`This is iteration ${i}`)
        nbWords=nbWords + 1;

        console.log(nbWords)
    }
    
}



