// Iteration 1: Names and Input

let hacker1 = "João Valente" ;
console.log("The driver's name " + hacker1);

let hacker2 = "João Cravidão";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length +  " characters.")
}
else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length + " characters.")
}
else {
    console.log("Wow, you both have equally long names, " +hacker1.length+ " characters!")
}
    

// Iteration 3: Loops

let driverName = ``
for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase() + " ";
  }
  
  
  console.log(driverName);

  let navigatorName = ``
  for (let i= hacker2.length - 1; i>=0; i--){
    navigatorName += hacker2[i];
}

    console.log(`${navigatorName}`);

  const compareNames = hacker1.localeCompare(hacker2);
  if (compareNames < 0){
    console.log("The driver's name goes first.");
}
    else if (compareNames > 0) {
        console.log("Yo, the navigator goes first, definitely.");
    }

  else  {
    console.log("What?! You both have the same name?");
  }

  //Bonus 1

  let longText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis sapien cursus massa auctor, ut auctor felis convallis. Sed finibus, orci eu sodales semper, felis ligula facilisis felis, a blandit massa massa in elit. Phasellus bibendum, metus a rhoncus euismod, orci est malesuada libero, ac consequat leo ligula quis ante. Morbi porta elementum diam ac gravida. Vivamus sollicitudin felis laoreet odio tincidunt dictum. Donec suscipit elementum mauris in vestibulum. Fusce vitae metus et massa tristique blandit. Donec cursus venenatis augue, vel hendrerit ante auctor id. Quisque ullamcorper massa magna, sed volutpat magna placerat vitae. Mauris in urna nec nisl pharetra tristique non vitae sem. Vivamus posuere, massa non elementum consequat, arcu ipsum suscipit justo, quis lacinia nunc nibh vitae ante. Pellentesque varius convallis ipsum, at condimentum nunc sagittis vel. Donec porttitor ut justo eget aliquet.
  Mauris vestibulum erat et elit finibus placerat. Donec ultricies augue elementum faucibus commodo. Vestibulum porta lectus et ex egestas, at vulputate massa suscipit. Vivamus a lacinia velit. Morbi semper dignissim lorem a consequat. Phasellus dictum dignissim maximus. Curabitur neque ante, dictum sed erat nec, blandit aliquet velit. Suspendisse potenti. Nam suscipit eget eros quis ornare. Aliquam vel arcu congue, ornare mauris ac, ullamcorper justo. Donec augue velit, malesuada sed laoreet eu, iaculis non eros. Curabitur egestas, felis vitae pulvinar tempus, dolor mi vehicula libero, vel fermentum tortor lacus posuere lacus. Duis vitae placerat est, eu lobortis odio. Mauris commodo nunc tempus, luctus nunc sit amet, gravida justo. Mauris nec vestibulum nisl. Suspendisse tincidunt nibh eu odio vulputate, non interdum nunc hendrerit.
  Nullam facilisis auctor magna, a venenatis sapien mollis ut. Nam sed finibus nisl, vel euismod nisl. Nulla convallis enim non nunc vehicula, dapibus vulputate orci placerat. Fusce eget vulputate ligula, nec pellentesque arcu. Fusce et velit felis. Fusce egestas, est elementum scelerisque egestas, sapien orci tempus dui, ultrices sagittis tellus sapien ac tortor. Ut metus tortor, porttitor in odio eu, eleifend efficitur lectus. Quisque sapien justo, pretium venenatis congue a, suscipit a lacus. Maecenas elementum vulputate convallis. Etiam varius enim at pulvinar imperdiet. Nunc sit amet lectus cursus, vestibulum elit quis, posuere lorem. Nunc nec enim consectetur, egestas diam at, venenatis lacus.`
  

  let wordCount = 0;
  let inWord = false;
  
  for (let i = 0; i < longText.length; i++) {
    if (longText[i] !== ' ' && !inWord) {
      wordCount++;
      inWord = true;
    } else if (longText[i] === ' ') {
      inWord = false;
    }
  }
  
  console.log(`Number of words in this text: ${wordCount} `);

  const latinWord = "et";
  const textLowercase = longText.toLowerCase();
  const latinWordLowercase = latinWord.toLowerCase();
  let count = 0;
  
  for (let i = 0; i < longText.length; i++) {
    if (
      (i === 0 || textLowercase[i - 1] === ' ') &&
      (i + 1 === longText.length || textLowercase[i + 2] === ' ') &&
      textLowercase[i] === latinWordLowercase[0] &&
      textLowercase[i + 1] === latinWordLowercase[1]
    ) {
      count++;
    }
  }
  console.log(`The Latin word "${latinWord}" appears ${count} times.`);



  //Bonus 2

  const phraseToCheck ="amor roma";
  let reverseString ="";
  for(let i= phraseToCheck.length-1; i>=0;i--){
    reverseString+=phraseToCheck[i];

    if(reverseString.length===phraseToCheck.length){
        if(reverseString===phraseToCheck){
            console.log("is"); 
        }
        else{
            console.log("is not");
        }
    }
    }
  