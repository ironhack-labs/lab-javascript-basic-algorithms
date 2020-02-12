// Iteration 1: Names and Input
let hacker1 = 'Wilson';
console.log(hacker1);

let hacker2 = 'Diogo';
console.log(hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, is has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

    // 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    let a= '';
    for (let i = 0; i < hacker1.length; i++) {
        a += hacker1[i].toUpperCase() + ' ';
    }
    console.log(a);
    
    // 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
    let b= '';
    for (let i = hacker2.length; i >= 0; i--) {
        b += hacker2[i]+' ';
    }
    console.log(b);

    // 3.3 
    if (hacker1>hacker2) {
        console.log(`The driver's name goes first.`)
    }else if (hacker1<hacker2){
      console.log('Yo, the navigator goes first definitely.')
    }else {
        console.log('What?! You both have the same name?')
    }

// Bonus 1 !!
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum eros sit amet purus consequat, a egestas mauris maximus. Duis imperdiet, ante vel vulputate ornare, ante ante fringilla odio, eget iaculis mi turpis ac tortor. Curabitur quis commodo nisl. Aliquam rutrum neque gravida odio malesuada sagittis. Proin magna lorem, laoreet ut auctor non, lacinia vel lorem. Ut nec interdum quam, in dictum tortor. Proin aliquet, est at vehicula pharetra, orci leo pellentesque libero, a fermentum metus nisl nec diam. Nullam feugiat lacinia metus quis mollis.
Aliquam tellus elit, convallis quis purus ut, malesuada placerat augue. Vivamus eleifend cursus leo eget ornare. Suspendisse ac placerat nunc. Pellentesque porta maximus velit. Quisque hendrerit metus non erat accumsan, a consequat nisi vulputate. Vivamus ullamcorper fermentum dui quis porttitor. Morbi condimentum mauris sed aliquet euismod. Quisque ut ex porta, ultricies lacus vulputate, volutpat ligula. In posuere sapien vel sodales feugiat.
Praesent egestas erat et eros vestibulum, imperdiet sagittis est euismod. Phasellus egestas, dolor sed pharetra faucibus, justo ligula ullamcorper nibh, ac semper odio turpis id erat. Donec suscipit vehicula iaculis. Maecenas sagittis risus a pharetra posuere. Vivamus sapien justo, laoreet vel pretium ac, dapibus commodo nisl. In hac habitasse platea dictumst. Maecenas id tortor at orci placerat euismod.`

// add to seacrh for this
// found the .split property https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

let loremSplit = lorem.split(' ');
console.log(loremSplit.length);

let countEt = 0;
for (let i = 0; i < loremSplit.length; i++) {
    if (loremSplit[i]=== 'et') {
        countEt++
    }
}
console.log(countEt)

// Bonus 2 Palindrome
// let phraseToCheck = 'put it up'

// let counterA= ''
// for (let i = 0; i < phraseToCheck.length; i++) {
    
    
// }

// got stuck thinking about this one