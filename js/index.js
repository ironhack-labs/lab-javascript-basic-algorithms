// Iteration 1: Names and Input
let hacker1 = 'Henrique';

let hacker2 = 'Fulano';

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);  

// Iteration 2: Conditionals
if(hacker1 > hacker2){
    console.log(`The driver has the longest name, it has ${hacker1.length} character`);
} else if(hacker1 > hacker2){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let nameSpaces = '';

hacker1 = hacker1.toUpperCase();


for(let i = 0; i < hacker1.length; i++){
    nameSpaces += hacker1[i];
    nameSpaces += ' '

}

console.log(nameSpaces);

let inverseName = '';

for(let j = hacker2.length - 1 ; j >= 0; j--){
    inverseName += hacker2[j]; 
}
console.log(inverseName);

if(hacker1.localeCompare(hacker2) > 0){
    console.log('Yo, the navigator goes first definitely')
} else if (hacker1.localeCompare(hacker2) < 0){
    console.log('The drivers name goes first')
}else {
    console.log('What?! You both have the same name?') 

}

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam porttitor purus, eget hendrerit leo suscipit id. Ut faucibus massa quis consectetur vulputate. Nunc sit amet feugiat nibh. In consectetur et libero eleifend venenatis. Etiam dignissim felis sed euismod bibendum. Nam interdum odio metus, eu ultrices sem bibendum vitae. Donec cursus mattis massa nec dictum. Praesent vel leo in neque efficitur elementum.

Curabitur sagittis neque sed mollis hendrerit. Sed convallis arcu ut venenatis semper. Nam consectetur mi mollis orci faucibus mollis. Sed iaculis sem sit amet porta dapibus. Vestibulum quis purus non nibh pulvinar euismod ac fringilla nunc. Mauris facilisis libero molestie mauris auctor feugiat. Aliquam dapibus massa urna, ut finibus ante hendrerit sed. Nullam id faucibus diam. In et bibendum velit.

Ut sagittis felis in lorem auctor blandit. Fusce placerat sit amet quam quis laoreet. Sed commodo justo elit, nec interdum nibh egestas ac. Fusce nec erat vitae turpis porttitor interdum. Etiam risus ligula, molestie sit amet dictum nec, faucibus vitae est. Pellentesque fermentum nibh mauris, et euismod mi ultrices eget. Integer ut est tincidunt, tincidunt libero sed, venenatis tortor. Proin ante orci, consectetur in malesuada in, finibus ac ligula. Curabitur sit amet justo at felis convallis gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nunc magna, vulputate sit amet orci vel, aliquet vulputate felis. Donec non magna tortor. Morbi vel porttitor nulla, quis finibus justo. Fusce sollicitudin, nulla vel hendrerit bibendum, metus lectus sollicitudin dolor, in iaculis turpis massa sit amet odio.`;


let wordCount = 0;

for(let k = 0; k < paragraph.length; k++){
    if(paragraph[k] === ' ' || paragraph[k] === '\n'){
        wordCount += 1;
    }
}
console.log(`This paragraph has ${wordCount} words`)

//for(let l = 0; l paragraph.length)