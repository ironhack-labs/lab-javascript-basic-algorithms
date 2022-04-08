
//console.log ("I'm ready!");

// Iteration 1: Names and Input

const hacker1="John";
console.log(`The driver's name is ${hacker1}.`);


const hacker2="David";
console.log(`The navigator's name is ${hacker2}.`); 


// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longers name, it has ${hacker1.length} characters.`);
} else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.}`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let output="";
for (let index=0; index <hacker1.length; index++) {
    //Vertical print
    console.log(hacker1[index].toUpperCase());
    console.log(" ");
    //Horizontal print
    output+=hacker1[index].toUpperCase() + " ";
}
console.log(output);


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let output1 ="";
for (let index=hacker2.length-1; index>=0; index--) {
    //Vertical print
    console.log(hacker2[index]);
    //Horizontal print
    output1+=hacker2[index];
}
console.log(output1);


//3.3 Depending on the lexicographic order of the strings, print:

if ((hacker1.localeCompare(hacker2))===-1) {
    console.log(`The driver's name ${hacker1} goes first`);
} else if ((hacker1.localeCompare(hacker2))===1) {
    console.log(`Yo, the navigator ${hacker2} goes first definitely.`);
} else {
    console.log ("What?! You both have the same name?");
}



// Bonus 1:

//Generate 3 paragraphs. Store the text in a variable type of string.

const string= "Pellentesque lacinia eget sem id efficitur. Nunc hendrerit felis vel massa ornare, at pellentesque dui tincidunt. Donec ut sem condimentum nunc malesuada tempor eget eu metus. Pellentesque id ex scelerisque, mattis neque vel, maximus lectus. Donec quis orci turpis. Aliquam sit amet ex leo. Proin eu neque vestibulum, tempus tellus sed, semper nulla. Sed placerat eget ligula et consequat. Quisque aliquam tortor faucibus, viverra ipsum ac, sagittis ante. Integer imperdiet mattis lorem, sed accumsan velit placerat nec. In at orci venenatis, tincidunt diam mattis, placerat dui. Fusce suscipit tempor tincidunt. Praesent a luctus odio, vitae molestie nulla. Nam varius feugiat mauris, eget tempus ligula pharetra eu. Curabitur condimentum imperdiet hendrerit. Maecenas urna tortor, finibus et pellentesque hendrerit, sodales sed ex. Cras at tincidunt elit, ut pharetra elit. Ut mattis ipsum risus, vitae finibus nunc sodales eu. Praesent luctus a ex ac rhoncus. Morbi dapibus risus eu tincidunt mattis. Donec sed felis ultrices, pellentesque metus vel, rhoncus elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque malesuada in leo non aliquet. Duis dignissim sapien augue, in porttitor est facilisis in. Etiam ac ante eu nisl consectetur dapibus. Vivamus sit amet semper nisi. Maecenas vel volutpat mi. Suspendisse pharetra volutpat augue, nec malesuada felis consequat non. Nam eu egestas nisl. Proin tristique nibh nec erat convallis hendrerit nec at nulla. Sed mattis semper blandit."

//Make your program count the number of words in the string.


let wordsNumber=0;
for (let index = 0; index<string.length; index++) {
    if (string[index]===" " && string[index+1]!==" ")
    wordsNumber++;
}
wordsNumber++;
console.log(`The number of words in the string is ${wordsNumber}.`);



//Make your program count the number of times the Latin word et appears.

//Option 1

let numberOfEt = 0;
for (let index=0; index<string.length; index++) {
    if (index===0) { //if first word is Et
        if(string[index]==="E" && string[index+1]==="t" && string[index+2]===" ") {
            numberOfEt++;
        }
    } else if (index===string.length-3) { //if last word is et
        if(string[index]==="e" && string[index+1]==="t" && string[index+2]===".") {
            numberOfEt++;
        }
    } else {
            if (string[index]===" "&& string[index+1]==="e" && string[index+2]==="t" && string[index+3]===" ") {
                numberOfEt++;
            }
        }
} 
console.log(numberOfEt);

//Option 2

let numberOfEt = 0;
const stringEt=" et ";
for (let index=0; index<string.length; index++) {
    if(index===0 && string.substring(index,index+3)==="Et ") { //case when the paragraph starts with word et
        numberOfEt++;
    } else if(string.substring(index,index+4)===" Et " || string.substring(index,index+4)===" Et," || string.substring(index,index+4)===" et " || string.substring(index,index+4)===" et," || string.substring(index,index+4)===" et.") {
            numberOfEt++;
        }
    }
    
console.log(numberOfEt);
