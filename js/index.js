// git status
//git addEventListenergit commit -m "lab ongoing"
//git push origin master
// Iteration 1: Names and Input
let hacker1 = 'Davi';
let hacker2 = 'Henrique';

console.log(`The driver's name is ${hacker1} `);
console.log(`The navigator's name is ${hacker2} `);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length<hacker2.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
}

// Iteration 3: Loops
let HACKER1 = hacker1.toUpperCase();
let HACKER2 = hacker2.toUpperCase();
let index=0;
let separatedName='';
let reverseName;

while (index < HACKER1.length) {
    separatedName = separatedName+HACKER1[index]+' '
    index++;
}
console.log(separatedName)

console.log(hacker2.split('').reverse().join(''));

let compare = hacker1.localeCompare(hacker2);
switch (compare) {
    case 0:
        console.log('What?! You both have the same name?')
        break;
    case -1:
        console.log('The drivers name goes first.')
        break;
    case 1:
        console.log('Yo, the navigator goes first definitely')
        break;
}




// BONUS 1 palavra et ou caracteres et no meio de uma palaavra contam? ex 'amet'
let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium orci id sollicitudin feugiat. Nunc et nunc eu dolor dictum porta eget sit amet lectus. In non odio sed nunc tincidunt rutrum quis quis turpis. Cras malesuada arcu at dui tempor bibendum. Duis porta pulvinar turpis, eu congue lorem sagittis at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum purus ligula, porta gravida risus nec, suscipit ornare turpis. Vivamus et commodo est. Aliquam erat volutpat. Donec vel urna eget risus suscipit aliquet. Donec a facilisis nisl. Cras nisi lorem, vulputate vel ante id, consequat tempus ipsum. Donec id varius sem. Aliquam sit amet neque eu arcu ultricies malesuada et ac enim. Maecenas sodales aliquet mi. Phasellus sollicitudin, lorem nec pharetra viverra, augue nibh suscipit lacus, vel laoreet arcu eros vitae justo. Nunc tempor magna leo, ut finibus nisl dapibus venenatis. Proin accumsan massa id elit imperdiet imperdiet. Cras id sem ut purus imperdiet ultricies. Sed sagittis laoreet suscipit. Quisque condimentum scelerisque vulputate. Praesent ac velit massa. Pellentesque volutpat, justo in tempor suscipit, urna mi dignissim turpis, eu commodo ipsum sem id enim. Nulla facilisi. Pellentesque nibh tortor, laoreet quis enim id, feugiat consectetur risus. Quisque commodo porta sodales. Sed a nisl a lectus bibendum finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque venenatis id purus quis malesuada. Nulla sed enim turpis.'
let count1 = sentence.split(' ').length;
console.log(`Number of words in the String: ${count1}`);

let count2 = sentence.match(/et/g).length;
console.log(`Number of 'et' appearance in the String: ${count2}`);

//BONUS 2
let phrasetoCheck = 'A man, a plan, a canal, Panama!';
let letterstoCheck = phrasetoCheck.replace(/[^a-zA-Z]/g,'').toLowerCase();

if (letterstoCheck.split('').reverse().join('') == letterstoCheck) {
    console.log(`The Expression '${phrasetoCheck}' is a Palindrome!`)
}
else {console.log('No Palindrone :(')}
