

//daniel here

// Iteration 1: Names and Input

const hacker1 = 'Frank';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Adriano';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
} else if ( hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else  if (hacker1.length === hacker2.length)
  {
  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}
// Iteration 3: Loops

let spacedName = ''
for (let i = 0; i < hacker1.length; i++) {
  const char = hacker1[i];
  spacedName += hacker1[i] + ' ';
}
console.log(spacedName.toUpperCase());

let reverseName = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
 
}
console.log(reverseName);

if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first")   // Driver 'Fran' comes first
   } else if(hacker1.localeCompare(hacker2)=== 1){
     console.log("Yo, the navigator goes first, definitely.")  // Adriano Nav comes first
   } else if (hacker2.localeCompare(hacker1) === 0) {
     console.log("What?! You both have the same name?")
   }
  
   const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dapibus erat. Integer libero ligula, ullamcorper ut vestibulum eget, pretium et justo. Suspendisse non urna quis ex dictum semper. Vestibulum at rhoncus dui. Suspendisse potenti. Quisque rutrum viverra ultrices. Donec a hendrerit nibh. Fusce bibendum ultrices sapien ut tempor. Ut faucibus dictum interdum.

   Cras nec libero at arcu dapibus facilisis. Aenean id magna luctus est tristique tincidunt. Ut sed justo consequat, ornare nisi at, vehicula enim. Curabitur sit amet sapien quis dolor scelerisque hendrerit. Integer blandit, tellus luctus fringilla mollis, ex ex interdum lectus, ac ultrices leo nisl at justo. Donec vehicula erat velit, eu ultrices mi pharetra non. Vestibulum non interdum dui. Ut elementum in magna nec finibus. Morbi ante magna, tincidunt at porttitor vel, aliquet a dolor. Sed nec libero tellus.
   
   Aenean eget velit eu ante tempor porta vel pretium dui. Nulla non erat a metus sagittis egestas sed nec metus. Duis sit amet metus ante. Curabitur rhoncus hendrerit fringilla. Sed ante mi, sagittis et sem nec, mattis facilisis justo. In pellentesque cursus leo, vitae iaculis ipsum sollicitudin id. Ut placerat arcu suscipit, tincidunt lorem at, vestibulum tellus. Fusce a egestas lacus, eu finibus massa. Proin vehicula placerat turpis, tempus convallis eros blandit et.`;
  
   // i search on google and take the code from slingacademy.com - Adriano
  
   const countWords = (str) => {
    const words = str.split(' ');
  
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== '') {
        count++;
      }
    }
    return count;
  };
  
  console.log(`The number of words in is ${countWords(longText)}`);
  
  // this is the code from Fran
  
  const numberOfWords = longText.split(' ').length;
  console.log(numberOfWords);
  
  // this is by Adriano
  let count = longText.split(" et ").length
  console.log(count)
  