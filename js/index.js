// Iteration 1: Names and Input


var hacker1 = 'Tobias';
console.log("The drive´s name is " + hacker1);


var hacker2 = 'Florian';
console.log('The navigator´s name is ' + hacker2);

// Iteration 2: Conditionals


let driver = hacker1.length;

let navigator = hacker2.length;


if(driver<navigator){
    console.log('The driver has the longest name, it has ' + driver +  'characters');
} else if (driver>navigator) {
    console.log('It seems that the navigator has the longest name, it has' + navigator + 'characters');
    
} else {
    console.log('Wow, you both have equally long names, ' + driver + 'characters!');

    
}



// Iteration 3: Loops

let capitalName1 = hacker1.toUpperCase();
let capitalName1SPACE = '';
let hacker2BACKWARDS = ''

let test = 1

console.log(capitalName1.length)
console.log(capitalName1)



for(i=0; i < capitalName1.length;i++){
    capitalName1SPACE += capitalName1[i]+ ' ';
}

console.log(capitalName1SPACE)

for(i=hacker2.length-1; i >=0 ;i--){
    hacker2BACKWARDS += hacker2[i]
}

console.log(hacker2BACKWARDS)

