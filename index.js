// Iteration 1: Names and Input
let hacker1= "geethu";
console.log(`The driver's name is ${hacker1}`);
let hacker2= "mariana";
console.log(`The navigator's name is ${hacker2}`);
let result1= hacker1.length;
let result2=hacker2.length;
// Iteration 2: Conditionals
if(result1>result2){
    
    console.log(`The driver has the longest name, it has ${result1} characters.`)
}else if(result1<result2){
    console.log(`It seems that the navigator has the longest name, it has ${result2} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${result1} characters!.`)
}

// Iteration 3: Loops
//let driverCapital=hacker1.toUpperCase();
//let drivName=driverCapital.split(" ");

//console.log(drivName);
let result = hacker1.toUpperCase().split('').join(' '); 
console.log(result);
let results="";
for(let i=hacker2.length-1;i>=0;i--){
    results+=hacker2[i];
}
console.log(results);
if(hacker2>hacker1){
console.log(`The driver's name goes first.`);
} else if(hacker1>hacker2){
console.log(`Yo, the navigator goes first, definitely.`);
}else{
    console.log(`What?! You both have the same name?`);
}

//Bonus 1:
let longText=`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat`;
let wordsParagraph=longText.trim().split(/\s+/).length;
 console.log(wordsParagraph);

 let wordAppers=longText.match(/et/g).length;
console.log(wordAppers);
//Bonus 2:


function phraseToCheck(n){
let result=n.length;

for(let i=0;i<=result;i++){
    if(n[i] !== n[length-1-i]){

        console.log("not palindrome");
    }else{
        console.log("palindrome");
    }
}
}
 console.log(phraseToCheck("race car"));