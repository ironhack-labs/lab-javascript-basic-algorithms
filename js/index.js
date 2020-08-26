
// Iteration 1: Names and Input

var hacker1 = `Jorell`;
console.log (`The driver's name is ${hacker1}`)

var hacker2 = `François`;
console.log (`The navigator's name is ${hacker2}`)
 
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops

//uppercase with space
var array = []
for (let i=0; i<hacker1.length; i++) {
    const driver = hacker1.toUpperCase();
    array.push(driver[i]);
}
console.log(array.join(' '))

// reverse name
var array = []
for (let i=0; i<hacker1.length; i++) {
    array.push(hacker1[i]);
}
console.log(array.reverse().join(""))



// Iteration 3bis: Loops

//console.log(hacker1.toUpperCase().split("").join(" "))
//console.log(hacker1.split("").reverse().join(""))

// check first letter

let comparedVal = hacker1.localeCompare(hacker2);

switch (comparedVal) {
    case -1:
        console.log(`The driver's name goes first.`)
        break;
    case 1: 
        console.log(`Yo, the navigator goes first definitely.`)
        break;
    default:
        console.log(`What?! You both have the same name?`)
        break;
}

// BONUS 1

let lorem1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin, enim et pretium dapibus, turpis tortor fermentum metus, non ornare diam est a diam. In pulvinar elementum rhoncus. Mauris a mattis erat. Integer et pulvinar urna. Aliquam dictum pretium scelerisque. In condimentum molestie ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse pellentesque varius neque eget pulvinar. Curabitur auctor enim augue, at consequat lectus sollicitudin et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque id viverra dolor. Donec vehicula lacinia fermentum. 
Nam eu eleifend ligula, a tristique orci. Ut eu ultrices enim. Morbi neque mauris, gravida eget arcu sit amet, congue vulputate est. Mauris sodales orci quis augue tincidunt vulputate. In pharetra velit risus, id blandit odio eleifend vitae. Curabitur ut imperdiet metus. Sed faucibus mi ac augue consectetur ornare. Mauris lectus ligula, ultricies tempus odio ac, dictum venenatis ex. Aliquam erat volutpat. In hac habitasse platea dictumst. Maecenas eget finibus nulla. Donec vestibulum eget elit in dapibus. Etiam sodales fringilla nulla, in tincidunt nulla imperdiet et. Sed eros eros, consectetur id metus eu, porta hendrerit lacus. Nam tincidunt erat sit amet sapien dapibus, quis convallis erat ultricies. Integer et quam ut diam molestie suscipit id sed magna. 
Sed convallis tellus enim, et elementum velit ultricies ac. Morbi massa tellus, malesuada eget suscipit et, pretium at erat. Mauris lacus erat, luctus eu nunc at, efficitur sollicitudin tortor. Nulla egestas scelerisque lacus, eu porta dolor venenatis ut. Nulla volutpat sem nulla, quis dignissim odio feugiat nec. Suspendisse vel bibendum lacus. Duis vestibulum imperdiet bibendum. Proin mattis laoreet vehicula. In vel mauris ut lacus cursus lobortis ut quis elit. Etiam lorem lorem, sollicitudin a lorem ac, accumsan egestas nisi.`;


console.log(lorem1.split(" ").length);

const etSum = lorem1.match(/ et /gi).length;
const etSumComma = lorem1.match(/ et\, /gi).length;
const etSumpoint = lorem1.match(/ et\. /gi).length;
console.log(etSum + ' ' + etSumComma + ' ' + etSumpoint);

// BONUS 2

const isPalindrome = (str) => {
    str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    return str == str.split('').reverse().join('');
} 

console.log(isPalindrome('Amor, Roma'));