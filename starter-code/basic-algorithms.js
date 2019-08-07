// Names and Input

let hacker1 ="Sara";
console.log("The driver name is " + hacker1);

let hacker2 ="null";

hacker2 = prompt("please enter the navigator's name");

console.log ("The navigator's name is " + hacker2);



//Conditionals

if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
 console.log ("Yo, navigator got the longest name, it has " + hacker2.length + " characters"); 
} else {
 console.log ("wow, you both got equally long names, " + hacker1.length + " characters!!");
}


// Loops

let printVariable ="";
for (let i=0; i < hacker1.length; i++){
  printVariable += hacker1[i] + " ";
}
console.log(printVariable.toUpperCase()); 

printVariable ="";

for (let i =0; i<hacker2.length; i++){
  printVariable += hacker2[hacker2.length-i-1];
}

console.log(printVariable);

for (let i =0; i<hacker1.length || i<hacker2.length ; i ++){
  if (hacker1[i].localeCompare(hacker2[i])<0){
    console.log("The driver's name goes first");
    break;
  } else if (hacker1[i].localeCompare(hacker2[i])>0){
    console.log("Yo, the navigator goes first definitely");
    break;
  } else if (i== hacker1.length-1 && i == hacker2.length-1 && hacker1[i].localeCompare(hacker2[i])==0){
    console.log ("What?! You both got the same name?")
    break;
  } else {
    continue;
  }
}

//  Palindrome 

let variableToCheck ="";
variableToCheck =prompt("Please enter a String so we can check if it's a Palindrome");

let i =0;

variableToCheck = variableToCheck.replace(" ","");
variableToCheck = variableToCheck.replace("!","");
variableToCheck = variableToCheck.replace(",","");
variableToCheck = variableToCheck.replace("?","");
variableToCheck = variableToCheck.replace(")","");
variableToCheck = variableToCheck.replace("(","");

while (variableToCheck[i] == variableToCheck[variableToCheck.length-i-1]){
  if (i=variableToCheck.length-1){
    console.log("the word " + variableToCheck + " is a Palindrome");
    break;
  }
  i++;
}
// Lorem ipsum generator

let loremIpsumParagraphs ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada finibus lectus id fermentum. Aenean non suscipit nisi. Donec sed diam sodales, dapibus ante vel, malesuada tellus. Pellentesque quis consequat sem, nec volutpat lectus. Proin sapien elit, viverra in ultricies sit amet, consequat quis risus. Praesent non luctus lorem, et dapibus libero. Sed venenatis non lorem hendrerit posuere. In hac habitasse platea dictumst. Nulla mauris quam, condimentum in dapibus vel, dignissim in orci. Pellentesque accumsan nisl a risus molestie tempor. Ut dignissim fringilla auctor. Nullam id luctus sem. Integer gravida est sed erat rutrum ultrices.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget ante ligula. Nulla nisl ipsum, condimentum non purus luctus, egestas eleifend ex. Maecenas laoreet augue elit, ac condimentum purus venenatis eget. Nulla posuere est ac ornare auctor. Suspendisse vestibulum vehicula tristique. Sed nec orci felis. Aenean condimentum eleifend velit, non molestie felis cursus nec. Proin sagittis bibendum ligula maximus commodo.Integer nec magna eget est consectetur consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam posuere molestie commodo. Aenean et ipsum at tortor tincidunt bibendum vel venenatis urna. Suspendisse laoreet tempus ante eget eleifend. Praesent laoreet, dolor eu pulvinar gravida, lectus turpis ullamcorper ex, ut malesuada justo sem id eros. Quisque auctor, erat vel lacinia gravida, urna magna elementum mauris, id egestas quam risus non est. Nulla placerat nunc ut lorem fringilla, quis porta dolor convallis. Suspendisse eleifend aliquam massa sagittis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed risus vitae sapien luctus molestie. In ullamcorper sem et urna tincidunt, et ultricies neque auctor. Nunc tempor tincidunt risus. Praesent malesuada dignissim dolor, eget egestas lacus egestas nec. In rhoncus dui sit amet risus suscipit auctor. Nulla pharetra et est vitae molestie."

let wordcounter = 1; 



for (let i =0; i<loremIpsumParagraphs.length; i++){
  if(loremIpsumParagraphs[i]==" "){
    wordcounter +=1;
  }
}
console.log(wordcounter);

// reinitialisation de la variable wordcounter 
wordcounter = 0;
for (let i =0; i<loremIpsumParagraphs.length; i++){
  if (i == 0 && loremIpsumParagraphs[i].toUpperCase =="E" && loremIpsumParagraphs[i+1].toUpperCase == "T"){
    wordcounter +=1;
  } else if (i == loremIpsumParagraphs.length){
    break;
  } else if(loremIpsumParagraphs[i].toUpperCase =="E" && loremIpsumParagraphs[i-1] == " " && loremIpsumParagraphs[i+1].toUpperCase == "T" && loremIpsumParagraphs[i+2].toUpperCase == " "){
    wordcounter +=1;
  }
}

console.log(wordcounter);
