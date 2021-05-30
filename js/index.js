//---LAB 01 - JS Basic Algorithms -- 21.05.2021
//---Writen by Pedro Pasquali e Thais Silva
//---Code Diary--//
/*
30.05.21 - Arrumei 3.1 + 3.2 + 3.3 e fiz o Bonus.

*/

// Iteration 1: Names and Input
let hacker1 = `Pedro`;//--Driver
let hacker2 = `Thais`;//--Navigator

//--ANSWER HERE--//console.log(`The driver´s name is ${hacker1}`);
//--ANSWER HERE--//console.log(`The navigator´s name is ${hacker2}`);



// Iteration 2: Conditionals

//--ANSWER HERE--//
/*
if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};
*/


// Iteration 3: Loops 
//---3.1--- && //---3.2---
function iteration31(anyhacker) {
    let newhacker = ``
    for (let i = 0; i < anyhacker.length; i += 1) {
    newhacker += (` ${anyhacker[anyhacker.length-1-i]}`);
    }
    newhacker = newhacker.substring(1, newhacker.length)
    return newhacker.toUpperCase()
}
//--ANSWER HERE--//console.log(iteration31(hacker1))


//---3.3--- (nao terminado. Achei difícil. Fiquei com a sensacao de que nao sei por onde começar. Comeco um pensamento e mudo pra outro e assim por diante...)
let alphabet = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
/*
function lexicoOrder(word1, word2) {
  let alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
  if (word1 === word2){
    return `What?! You both have the same name? Incredible! What are the odds?!`;
  } else if (word1.indexOf(alphabet[0]) === )
}


let word1LexOrder = ``
for (let index = 0; index < word1.length; index += 1);

  alphabet.findIndex(function(`p`){
    console.log(`p`);
  });

  alphabet.forEach(function(checkIndexPosition)){
                   let indexPosition = word
                   }
  word1LexOrder = 
*/




//------ BONUS-1----Check no.of words
let paragraphs = (`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ante elementum, vulputate erat at, suscipit massa. Integer vel arcu vel urna volutpat ultrices vitae hendrerit ex. Nunc hendrerit dictum dui quis bibendum. Phasellus eget diam turpis. Vivamus vitae urna nec lectus tempor porta. Mauris imperdiet ullamcorper est. Fusce faucibus a velit non auctor. Fusce posuere tempus sollicitudin. Quisque posuere laoreet aliquam. Aliquam vel mattis nisi. Vivamus iaculis ante et urna placerat, nec tempus augue dictum. Fusce sed ullamcorper ex. Ut sed rutrum tellus. Suspendisse odio odio, suscipit eget libero dapibus, lacinia venenatis arcu.`+

`Morbi at ipsum at orci semper pharetra. Sed gravida consequat velit. Aenean lorem mi, ullamcorper eget neque sit amet, rutrum mattis turpis. Aliquam pretium congue lobortis. Quisque laoreet nibh id orci posuere vestibulum. Aenean luctus, lorem eu ornare imperdiet, nisi nisl laoreet justo, a venenatis mauris odio et mi. Nulla ac ipsum ex. Sed justo urna, finibus quis mi sed, volutpat lobortis felis. Pellentesque euismod fermentum arcu, at malesuada eros varius non. In eget venenatis lacus, in cursus dolor. Aenean sit amet odio felis. Quisque dignissim mattis purus, non imperdiet est. Sed enim metus, fermentum sit amet tempor id, condimentum nec dui. Vivamus a bibendum diam, a placerat sem. Aliquam ornare purus eu metus ornare, quis dapibus felis mollis.`+

`Integer vel purus est. Proin pharetra odio nec varius porta. Curabitur sollicitudin dui ac est commodo, fermentum fermentum ex iaculis. Vivamus dui ligula, pharetra vitae tellus vel, lacinia eleifend eros. Ut euismod odio eget volutpat ornare. Aliquam vestibulum eros sapien, sed gravida arcu condimentum a. Sed accumsan sem ac sapien lobortis posuere. Nunc feugiat massa neque, quis ullamcorper sem efficitur eu. Maecenas at dui placerat, mollis diam at, tincidunt nulla.`)

//--ANSWER HERE--//console.log(`We have ${paragraphs.split(` `).length} WORDS in the text`)
//--ANSWER HERE--//console.log(`We have "ET" ${paragraphs.split(`et`).length} times in the text`)


//------ BONUS-2----Check if palindrome

/*
str = `Amor, Roma`
console.log(str.split(`,`))


for( let index = 0; index < str.length; index += 1){
  if (str[index] === str[str.length-1]) {
    true
  }
}
*/