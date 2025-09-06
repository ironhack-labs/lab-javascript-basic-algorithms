// Iteration 1: Names and Input
const hacker1="Anna"
const hacker2="John Miguel"

// Iteration 2: Conditionals
const hacker1Length=hacker1.length
const hacker2Length=hacker2.length

let finalPhrase;

if(hacker1Length>hacker2Length){
    finalPhrase=`The driver has the longest name, it has ${hacker1Length} characters.`
}
else if(hacker1Length<hacker2Length){
    finalPhrase=`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
}
else if(hacker1Length===hacker2Length){
    finalPhrase=`Wow, you both have equally long names, ${hacker1Length} characters!`
}
console.log(finalPhrase)



// Iteration 3: Loops
//3.1
let FinalString3_1=""
for (let i=0; i<hacker1Length; i++){
    let char
    if(i===hacker1Length-1){
       char=hacker1[i]; 
    } else {
        char=hacker1[i]+" ";   
    }
    FinalString3_1 += char
}
console.log(FinalString3_1)


//3.2
let FinalString3_2=""
for (let i=hacker2Length-1; i>=0; i--){
    FinalString3_2 += hacker2[i]
}
console.log(FinalString3_2)


//3.3
let finalPhrase3_3
if(hacker1<hacker2){
    finalPhrase3_3=`The driver's name goes first.`
}
else if(hacker1>hacker2){
    finalPhrase3_3=`Yo, the navigator goes first, definitely.`
}
else if(hacker1===hacker2){
    finalPhrase3_3=`What?! You both have the same name?`
}
console.log(finalPhrase3_3)


//Bonus1
longText=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.

Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque.
`
let countEt=0
for (let i=0; i<longText.length; i++){
    let char = longText[i]+longText[i+1];
    if(char==="et"){
        countEt +=1
    }
}
console.log(countEt)



//Bonus2
stringArray=[
"A man a plan a canal Panama",
"Amor Roma",
"race car",
"stack cats",
"step on no pets",
"taco cat",
"put it up",
"Was it a car or a cat I saw"
]

for (let each_string of stringArray){
    const each_stringLowerCase = each_string.toLowerCase()
    let reversed_each_string="";
    const indexCharIndex=[];

    for (let i=each_string.length-1; i>=0; i--){
        const charIndex = each_stringLowerCase[i];

        //get the current [i] OR [i+1] of the reversed_each_string
        //add chart to the reversed string without spaces
                //if True: add a "_"
                //if False: continue
        //if [i] in the each_string is "_"
                //if True: add a "_"
                //if False: continue
    
        indexCharIndex.push(charIndex);
        const XXXX = indexCharIndex.length-1;

        if(charIndex!==" "){
            reversed_each_string += charIndex;
        }

        if (each_string[XXXX]===" "){
            reversed_each_string += "_";            
        }
    }

    console.log(reversed_each_string);
    const validationTest = reversed_each_string === each_stringLowerCase;
    console.log(`-----------${validationTest}--------------\n\n`);
}    
