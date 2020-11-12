// ------ Iteration 1: Names and Input ------

let hacker1 = "Elizabeth";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Rafa";
console.log(`The navigator's name is ${hacker2}\n`);

// ------ Iteration 2: Conditionals ------

if(hacker1.length>hacker2.length)
    console.log(`${hacker1} has the longest name. length = ${hacker1.length}\n`);

else if(hacker1.length<hacker2.length)
    console.log(`${hacker2} has the longest name. length = ${hacker2.length}\n`);

else
    console.log(`${hacker1} y ${hacker2} Both have equially long names. length = ${hacker1.length}\n`);


for(let i = 0; i<hacker1Mayus.length; i++){
    console.log(`hacker1Mayus[i] `)
    
}
//lkllk
// ------ Iteration 3: Loops ------
// ------ Iteration 3: Loops ------

//without loops
console.log(hacker1.toUpperCase().split('').join(' '));
console.log(hacker2.split('').reverse().join(''));

if(hacker1.localeCompare(hacker2)<0)
    console.log(`${hacker1} goes first.\n`);

else if(hacker1.localeCompare(hacker2)>0)
    console.log(`${hacker2} goes first.\n`);

else
    console.log(`${hacker1} and ${hacker2} have the same name.\n`);


// ------ Bonus 1 ------ 


let text = `${'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus orci facilisis turpis ultricies laoreet. Nullam ultricies orci vitae urna pulvinar, ut hendrerit orci malesuada. In hac habitasse platea dictumst. Pellentesque tempor nunc sem, eget dignissim erat molestie eget. In tellus nisl, pulvinar sit amet efficitur non, ultrices quis ante. Fusce varius nisi sed orci porta, vel pellentesque metus varius. Vestibulum est odio, blandit sed aliquet a, ullamcorper nec lectus.'} 
${'Nam eget commodo risus, sed fermentum enim. Etiam tempus nunc massa, tincidunt fringilla tellus ultrices sed. Sed sit amet congue nisi, sit amet aliquet massa. Ut ultrices elit sit amet nunc pharetra, euismod auctor ipsum auctor. Aenean viverra rutrum rutrum. Nunc congue libero imperdiet purus commodo euismod. Suspendisse pellentesque enim sem, quis sagittis neque efficitur vitae. Mauris scelerisque placerat mauris eget ornare. Sed imperdiet libero libero, non varius purus eleifend non. Duis tempus sed turpis at sollicitudin.'} 
${'Duis non dapibus urna. Aliquam iaculis risus eros, eu vulputate ligula consectetur id. Cras ut viverra nisi, non malesuada augue. Curabitur pharetra iaculis fringilla. Sed eu arcu in est sagittis ultricies quis sed orci. Aliquam suscipit leo at ullamcorper ultricies. Suspendisse rutrum, purus non sodales ultrices, felis augue posuere ligula, non sagittis nunc quam feugiat enim. Phasellus ornare interdum quam condimentum euismod. Duis non ante dui. Curabitur in urna augue. Ut elementum eros auctor enim bibendum pretium. In sit amet diam sed felis condimentum aliquet.'}`;
console.log(text.split(' ').length);




let textArray = text.split(' ');
let contador = 0;

for(let i=0;i<textArray.length;i++){
if(textArray[i].includes('et'))
    contador++;
}

/*
for(let i=0;i<textArray.length;i++){
if(textArray[i]==='et')
    contador++;
}
*/

console.log(contador);



// ------ Bonus 2 ------ 

