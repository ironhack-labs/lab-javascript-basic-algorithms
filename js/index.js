// Iteration 1: Names and Input
let hacker1 = 'Pierre';
console.log(`The driver is ${hacker1}`);
let hacker2 = 'Romain';
console.log("The navigator's name is "+ hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The longest name is ${hacker1}, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The longest name is ${hacker2}, it has ${hacker2.length} characters.`);
} else {
    console.log('it seems your both names have the same length, '+ hacker1.length + ' characters.');
}

// Iteration 3: Loops
//3.1
let hacker1UpperCase = "";
for (let i = 0; i<hacker1.length; i++) {
    hacker1UpperCase += `${hacker1[i].toUpperCase()} `;
}
console.log('capital + separation : ',hacker1UpperCase.slice(0,hacker1UpperCase.length-1));

//3.2
let hacker1Reversed = "";
for (let i = hacker1.length - 1; i >=0;i--) {
    hacker1Reversed += hacker1[i];
}
console.log(`Reverse : `,hacker1Reversed);


//3.3 Lexicographic order
if (hacker1 < hacker2) {
    console.log(hacker1 +' is the first');
}
else if (hacker2 < hacker1){
    console.log(hacker2, 'is the first');
}
else {
    console.log("You have same names !")
} 

//Bonus 1: 
const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus auctor arcu ac placerat. Nam nec turpis tristique, pulvinar ante eu, hendrerit massa. Ut vitae dictum quam. In egestas lorem non lacinia facilisis. Vivamus arcu tellus, malesuada non ipsum sed, imperdiet efficitur augue. Duis sodales ex nulla, gravida pharetra nulla ultrices in. Ut consectetur, metus in rutrum bibendum, nisi lacus ultricies nunc, eget vulputate ante orci vel lorem. Donec non tempor lacus. Proin tincidunt bibendum nibh. Mauris et massa ultrices, rhoncus libero in, sagittis tortor.

Vivamus tincidunt lectus non nisi imperdiet, ultrices congue felis efficitur. In efficitur finibus leo, eget placerat nisi facilisis eget. Sed sit amet porta nibh. Vivamus suscipit pulvinar odio eu porttitor. Fusce bibendum metus sollicitudin mi sodales, non tincidunt lacus feugiat. Nunc arcu ante, elementum et tellus in, aliquam iaculis dui. Duis ex dolor, lacinia ac aliquam ut, accumsan ut nisi.

Fusce aliquet, est a dictum facilisis, dui quam lacinia justo, ac posuere nisl massa ac mi. Sed volutpat, sapien vitae gravida accumsan, nisl est pellentesque mi, id aliquet eros ligula vitae ex. Nulla sem purus, scelerisque in pharetra non, vehicula non urna. Donec pharetra, mauris sit amet dapibus blandit, tortor tellus ornare elit, quis maximus mi ex a nunc. Curabitur at eleifend eros. Donec et neque eget elit rhoncus bibendum nec id eros. Nam sollicitudin erat id efficitur imperdiet. Sed sit amet ornare dui, a eleifend erat. Integer nec vulputate libero, eget condimentum lorem. Donec euismod viverra metus vitae molestie. Maecenas sit amet nunc tincidunt, ullamcorper massa nec, ultrices dui. Sed sit amet turpis massa. Donec scelerisque gravida odio auctor mollis. Pellentesque non tristique dolor, a luctus est. Sed porta mauris eleifend, tincidunt massa sit amet, congue erat. Nulla fringilla porttitor arcu, in consectetur est interdum ac.`

//number of words
let spaceSum =0
let lineSum = 0
for(let i=0 ; i<para.length ; i++){
    if( para[i]===' '){
        spaceSum++
    }else if( para[i]==='\n'){
        lineSum++
    }
}
console.log('words number : ',spaceSum+1+lineSum/2)

//"et" count
const etCount = para.split(' ').filter(x=> x==='et').length
console.log('etCount : ',etCount)

//palindrome
const phraseToCheck = "Was it a car or a cat I saw?"

let forth=""
let back=""
for(let i=0 ; i<phraseToCheck.length ; i++){
    const charAscii = phraseToCheck[i].toLowerCase().charCodeAt(0)
    if( charAscii>=97 && charAscii<=122 ){
        forth+=phraseToCheck[i].toLocaleLowerCase()
    }
}
for(let i=phraseToCheck.length-1 ; i>=0 ; i--){
    const charAscii = phraseToCheck[i].toLowerCase().charCodeAt(0)
    if( charAscii>=97 && charAscii<=122 ){
        back+=phraseToCheck[i].toLocaleLowerCase()
    }
}
if( forth===back ){
    console.log(phraseToCheck,'--- is a palindrome')
}else{
    console.log(phraseToCheck,'--- is NOT a palindrome')
}


// const verse = phraseToCheck.split('').filter( c => c.match(/\w/)).join('').toLowerCase()
// const reverse = phraseToCheck.split('').filter( c => c.match(/\w/)).reverse().join('').toLowerCase()
// //console.log(verse,reverse)
// if(verse===reverse){
//     console.log(phraseToCheck, 'is a palindrome')
// }else{
//     console.log(phraseToCheck, 'is not a palindrome')
// }


