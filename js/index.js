// Iteration 1: Names and Input
let hacker1='Hortencia';
console.log(`The driver name is ${hacker1}`);
let hacker2='William';
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
const difference = hacker1.length-hacker2.length;

if(difference==0){
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}else if(difference>0){
	  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else{
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);  
}

// Iteration 3.1: Loops
let extendedDriver='';
for(let i=0;i<hacker1.length;i++){
    extendedDriver+=hacker1[i].toUpperCase()+' ';
}
extendedDriver=extendedDriver.trim();
console.log(extendedDriver);

// 3.2
let extendedNavigator='';
for(let j=hacker2.length-1;j>=0;j--){
  extendedNavigator+=hacker2[j];
}
console.log(extendedNavigator);

//3.3
if(hacker1<hacker2){
  console.log(`Yo, the navigator goes first definitely.`);
}else if (hacker1>hacker2){
  console.log(`The driver's name goes first.`);
}else{
  console.log(`What?! You both have the same name?`);
}

//Bonus1

function countWords(str) {
         str = str.replace(/(^\s*)|(\s*$)/gi,"");
         str = str.replace(/[ ]{2,}/gi," ");
         str = str.replace(/\n /,"\n");
         return str.split(' ').length;
      }

const paragraphs=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit est placeat voluptatum? Distinctio officiis consectetur asperiores tempore quasi! Officiis deserunt repellat eius amet iure culpa, sint eveniet. Odio, perferendis?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit est placeat voluptatum? Distinctio officiis consectetur asperiores tempore quasi! Officiis deserunt repellat eius amet iure culpa, sint eveniet. Odio, perferendis?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo impedit est placeat voluptatum? Distinctio officiis consectetur asperiores tempore quasi! Officiis deserunt repellat eius amet iure culpa, sint eveniet. Odio, perferendis?
`;

let wordNum=countWords(paragraphs);
console.log(wordNum);

//Bonus 1.3
let cleanParagraph=paragraphs;
let countLet=0;
let newWord='';
cleanParagraph = cleanParagraph.replace(/[ ]{2,}/gi," ");
cleanParagraph = cleanParagraph.replace(/\n /," ");
let j=0;
for(let i=0;i<cleanParagraph.length;i++){
  if(cleanParagraph[i]!=' '){
    newWord=newWord+cleanParagraph[i];
    if(newWord==='sit'){
      console.log(newWord);
      countLet++;
    }
  }else{
    newWord='';
  }
}

console.log(countLet);

// bons 2

let palindrome = `A man, a plan, a canal, Panama!`


palindrome = palindrome.replace(/[ ]/gi,"");
palindrome = palindrome.replace(/\n /,"");
palindrome = palindrome.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
palindrome = palindrome.toLowerCase()



let backPalindrome='';
for(let j=palindrome.length-1;j>=0;j--){
  backPalindrome+=palindrome[j];
}
console.log(backPalindrome);
  //console.log(palindrome);
if (backPalindrome===palindrome){
  

  console.log('That is a Palindrome!');
}else{
  console.log('Sorry. Not a Palindrome.');
}
