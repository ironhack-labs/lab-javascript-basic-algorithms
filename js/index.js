// Instructions
// Iteration 1: Names and Input
// 1.1 Create a variable `hacker1` with the driver's name.

// 1.2 Print `"The driver's name is XXXX"`.

// 1.3 Create a variable `hacker2` with the navigator's name.

// 1.4 Print `"The navigator's name is YYYY"`.
// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?



let hacker1 ="Carlos";
let hacker2 ="Tiago";


console.log(`The driver's name is ${hacker1}`);
console.log(`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals


    if (hacker1.length ==hacker2.length){
            console.log(`Wow, you have equally long names, ${hacker1.length} characters!`);
    }else if(hacker1.length>hacker2.length){
            console.log(`It seems driver has the longest name, it has ${hacker1.length} characters.`);
    }else{
            constructor(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`); 
                
    }
        
  




// Iteration 3: Loops
let hacker1UpperCaseName = "";
for (let i=0 ; i < hacker1.length ; i+=1){
    hacker1UpperCaseName += hacker1[i].toUpperCase() + " ";
    
}
console.log(hacker1UpperCaseName);

let hacker2ReverseName ="";


for (let i = hacker2.length -1; i >= 0 ; i -= 1){
    hacker2ReverseName += hacker2[i]
}

console.log(hacker2ReverseName);

let alfabetoMaiusculo = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let hacker1Upper= hacker1.toUpperCase();
let hacker2Upper= hacker2.toUpperCase();



                    if (hacker1==hacker2){
                        console.log("What?! You both have the same name?");
    
                    }else if (hacker1.length > hacker2.length && hacker1.slice(0,hacker2.length) ==hacker2.slice(0,hacker2.length)){
                        console.log("Yo, the navigator goes first definitely.");
                    }else if (hacker2.length > hacker1.length && hacker2.slice(0,hacker1.length) ==hacker1.slice(0,hacker1.length)){
                        console.log("The driver's name goes first.")
                    }else{
                     
                            stopExternalFor:for (let a = 0 ; a<hacker1.length ; a+=1){
                                                }
                                                for(let i = 0 ; i<alfabetoMaiusculo.length; i+=1){
                                                    if (hacker1Upper[a]==hacker2Upper[a]){
                                                
                                                        break;

                                                    }else if (hacker1Upper[a]==alfabetoMaiusculo[i]){
                                                        console.log("The driver's name goes first.")
                                                        break stopExternalFor;

                                                    }else if (hacker2Upper[a]==alfabetoMaiusculo[i]){
                                                        console.log("Yo, the navigator goes first definitely.")
                                                        break stopExternalFor;
                                                    }       
                                                }
                                            }
                                        

                        
                    
//Bonus 1 
let textString =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim, mi ac tristique venenatis, dolor elit fringilla dui, sed sodales mauris dolor ut odio. Nullam iaculis tellus massa, id sodales sapien cursus nec. Pellentesque quis finibus ex, at viverra est. Pellentesque ac sollicitudin arcu. Mauris et interdum nisl. Cras pellentesque, mauris bibendum sodales cursus, odio libero laoreet lectus, non varius diam lorem sit amet odio. Suspendisse eget vulputate ex. Curabitur mattis pharetra mi a volutpat. Phasellus quam ipsum, feugiat vitae egestas nec, pellentesque eu eros.

Vivamus eu magna pharetra, aliquet justo vitae, condimentum neque. Fusce ultrices, dui a rhoncus ultrices, neque nunc lacinia erat, vel convallis nulla arcu non neque. Maecenas et rhoncus mi. Vestibulum id nulla eget mauris ultrices pulvinar et et turpis. Vivamus sagittis posuere lobortis. Aenean odio nibh, vulputate vehicula orci id, vestibulum dignissim quam. Etiam accumsan eu lectus vel tempus. Donec nisl magna, pharetra at ante eu, ornare fringilla dui. Morbi pellentesque felis quis ex placerat sollicitudin. Proin quis urna elit. In sollicitudin lorem a odio efficitur, at pretium dui sagittis. Etiam bibendum diam nec ex vehicula, eu maximus dui ornare. Vivamus sit amet diam lacinia, placerat nisl et, accumsan arcu. Quisque placerat commodo massa et tempus. Duis sit amet tellus et mi ornare posuere nec a sapien. Phasellus dui nisl, suscipit sed enim eget, pellentesque sagittis nisi.

Aenean hendrerit tortor augue, at accumsan tellus pharetra ultrices. Cras rutrum mauris scelerisque velit convallis vehicula vitae sed nisl. Praesent auctor orci ut hendrerit dapibus. Quisque fringilla tempor libero eget gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam sollicitudin ullamcorper diam semper imperdiet. Morbi venenatis fringilla libero eget porta. Curabitur mollis facilisis aliquet. Etiam commodo nibh ut dui molestie feugiat. Donec ullamcorper commodo ultricies. Sed odio ante, tempus quis venenatis vel, tincidunt id justo.`;

let numberWordsTextString = 0;


for(let i = 0 ; i < textString.length ; i += 1){
    for(let a = 0; a <= alfabetoMaiusculo.length ; a += 1){
        if(textString[i].toUpperCase()==alfabetoMaiusculo[a]){
            
            if(textString[i+1] == ` ` || textString[i+1] == `
            `|| textString[i+1] == `,` || textString[i+1] == `.` || textString[i+1] == `?`){
                numberWordsTextString += 1;
            }
        }
    }
}

console.log(numberWordsTextString)

let counterEt = 0;
let wordEt =`et`
let wordEtUpper = `Et`
for(let i = 0 ; i < textString.length ; i += 1){

        if((textString[i]+textString[i+1])== wordEt || (textString[i]+textString[i+1])==wordEtUpper){
            if(alfabetoMaiusculo.includes(textString[i-1]) || alfabetoMaiusculo.toLowerCase().includes(textString[i+2]) || alfabetoMaiusculo.toLowerCase().includes(textString[i-1])){              
            }else if(textString[i+2] == ` ` || textString[i+2] == `
            `|| textString[i+2] == `,` || textString[i+2] == `.` || textString[i+2] == `?`){
                counterEt += 1;
            }
        }
    }
console.log(counterEt)


//Bonus 2 

let phraseToCheck =`A man, a plan, a canal, Panama!`
let phraseToCheckReverse = ""
let phraseToCheckJoin = ""
let phraseToCheckReverseJoin = ""
for (let i = phraseToCheck.length -1; i >= 0 ; i -= 1){
    phraseToCheckReverse += phraseToCheck[i]
}

for (let i = 0 ; i<phraseToCheck.length ; i += 1){
    if(alfabetoMaiusculo.includes(phraseToCheck[i]) || alfabetoMaiusculo.toLowerCase().includes(phraseToCheck[i])){

    phraseToCheckJoin +=phraseToCheck[i].toLowerCase();
    }          
}
for (let i = 0 ; i<phraseToCheck.length ; i += 1){
    if(alfabetoMaiusculo.includes(phraseToCheckReverse[i]) || alfabetoMaiusculo.toLowerCase().includes(phraseToCheckReverse[i] )){
    phraseToCheckReverseJoin +=phraseToCheckReverse[i].toLowerCase();
    }
}


if (phraseToCheckReverseJoin == phraseToCheckJoin){
        console.log("Essa frase é um palíndromo")
}else{
        console.log("Essa frase não é um palíndromo")
}

