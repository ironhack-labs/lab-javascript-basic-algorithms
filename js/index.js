// Iteration 1: Names and Input
//1.1
let hacker1="Sijin"
//1.2
console.log("The drivers's name is "+hacker1)
//1.3
let hacker2="Melissa"
//1.4
console.log("The navigator's name is "+hacker2)


// Iteration 2: Conditionals
//2.1
if(hacker1.length>hacker2.length)
console.log("The driver: "+hacker1+" has the longest name, it has "+hacker1.length+" characters.");
else if(hacker2.length>hacker1.length)
console.log("It seems that the navigator: "+hacker2+" has the longest name, it has "+hacker2.length+ " characters.")
else
console.log("Wow, you both have equally long names, "+hacker1.length+" characters!")

// Iteration 3: Loops
//3.1
console.log(hacker1.toUpperCase().split('').join(' '));
//3.2
console.log(hacker2.split('').reverse('').join(' '));
//3.3
let hackerLexi=hacker1.localeCompare(hacker2)
if(hackerLexi>0)
    console.log("The driver's name: "+hacker1+" goes first.")
else if(hackerLexi<0)
    console.log("Yo, the navigator: "+hacker2+ " goes first definitely.")
else
    console.log("What?! You both have the same name?")

//Bonus1
let count=0;
let countEt=0;
var loremIpsum=` Aenean ultricies riset sapien, et commodo arcu scelerisque et. Maecenas fermentum pretium et, ut`
for (let i=0;i<loremIpsum.length;i++){
    if(loremIpsum[i]===' ' )
    count++;
    if(loremIpsum[i]+loremIpsum[i+1]=='et'&& loremIpsum[i-1]===' ')
    countEt++;
}
 
console.log("Number of words in Lorem Ipsum = "+count)
console.log("Number of times 'et' appeared : "+countEt)

//Bonus2
let counter=0;
let phraseToCheck="put it up"    

let str = phraseToCheck.replace(/[^A-Za-z0-9]/g,'')
let len=str.length-1
for(let i=0;i<str.length/2;i++){
    if(str[i]!=str[len-i])
    counter=1;
}
if(counter==1)
console.log(phraseToCheck+" - This is not a palindrome")
else
console.log(phraseToCheck+"- This is a palindrome")
// console.log("I'm ready!");
