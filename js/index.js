//---LAB 01 - JS Basic Algorithms -- 21.05.2021
//---Writen by Pedro Pasquali e Thais Silva 

console.log(`hi there, testing, testing...1,2,3`) 

// Iteration 1: Names and Input

let hacker1 = `Pedro`//--Driver
let hacker2 = `Thais`//--Navigator

console.log(`The driver´s name is ${hacker1}`)
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops 

let index=0;
let iterationN=0; //-not used
let spacesNeeded=hacker1.length-1; //--- 4 ----not used
let toAdd=(hacker1[index]+` `); //+hacker1[index+=1]+` `)
let toAdd2=(hacker2.charAt(hacker2.length-1-index));
let hacker1new=``;
let hacker2new=``;

/* //---3.1--- UNCOMMENT TO TEST

while (index<hacker1.length){
    hacker1new=toAdd;
    index+=1;
    toAdd+=(hacker1[index]+` `);
} 
console.log(hacker1new.toUpperCase());
*/


//---3.2--- UNCOMMENT TO TEST

while (index<hacker2.length){
    hacker2new+=toAdd2;
    index+=1;
//    toAdd2+=(hacker2.charAt(index-`hacker2.length`))
}
console.log(hacker2new)



//------ BONUS-----NOT FINISHED

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non tortor in velit luctus faucibus eu aliquam est. Nunc sodales id dui vehicula lacinia. In vel consectetur nibh. Integer id sapien blandit arcu dignissim eleifend eu blandit elit. Nullam a est et justo vestibulum interdum vel eu arcu. Mauris et pulvinar justo. Vestibulum et est id elit porttitor dapibus. Nunc at pellentesque nisi. \n Donec maximus scelerisque mi, id convallis urna vulputate id. Aenean dignissim purus justo, nec placerat purus mollis non. Nam egestas faucibus lorem eget euismod. Vestibulum at mollis lectus. Maecenas congue luctus augue, iaculis convallis lectus egestas eu. Aenean vitae neque nec justo vulputate sagittis. Nullam venenatis vel justo id auctor. Sed in tortor nunc. Proin mattis eros ac ligula tempor ornare. Nunc elementum ornare ultrices. \n et et et "

// ? arrumar paragrafos, pq o terceiro nao ta indo

function WordCount(str) { 
    return str.split(" ").length;
  }
  console.log("The paragraph has", WordCount(paragraph), "words."); // Sempre colocar vírgula , entre diferentes coisas que vão ser retornadas no console.log ("string", variable, "string") exemplo.


  let count = (paragraph.match(/et/g) || []).length; // ? deixar em funcoes que aprendemos ate agora
  console.log("The paragraph has", count, "'et' words");

  // Bonus 2

	@@ -79,8 +81,8 @@ for (let i = phraseToCheck.length - 1; i>= 0; i -= 1) { // reparar que o hacker.
    palindromeCheck += phraseToCheck[i]
}

if (phraseToCheck === palindromeCheck) { // ? esta faltando tirar os espacos do meio da string, senao todos estao dando not palindrome
    console.log('Palindrome phrase')
}   else {
    console.log('Phrase chosen is not palindrome.')