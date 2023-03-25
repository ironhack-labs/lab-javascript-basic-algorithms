// Iteration 1: Names and Input
// Iteration 1: Names and Input
// 1.1
let hacker1= "John";
// 1.2
console.log(`The diver's name is ${hacker1}`)

//1.3
let hacker2= "Henk"
//1.4
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
//2.1
if (hacker1.length> hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length< hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops
//3.1
let hacker="";
for(let i=0; i< hacker1.length; i++){
  hacker+= hacker1[i].toUpperCase()+ " ";
}
console.log(hacker)

//3.2
let hacker_reverse="";
for(let i=hacker1.length-1; i >=0; i--){
  hacker_reverse += hacker1[i]
}

//3.3
if(hacker1.localeCompare(hacker2)==1){
  console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2)==-1){
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}

//Bonus 1
longText= `Lorem et ipsum dolor sit  et et amet, consectetur adipiscing elit. Mauris quis est sapien. Vestibulum vestibulum euismod augue, sed scelerisque est semper non. Morbi ac urna pellentesque, blandit odio id, fringilla lectus. Nunc lobortis, nunc ut tincidunt elementum, nulla metus fermentum quam, id consequat arcu dui ac augue. Nullam quam ligula, pretium vel nibh quis, tincidunt tristique mi. Nam varius commodo ante, id blandit libero. Morbi in blandit urna, blandit posuere arcu.

Ut facilisis imperdiet metus fermentum blandit. Cras vel felis vel lectus placerat suscipit. Vivamus nec tincidunt nisl. Fusce rhoncus aliquam ex, at imperdiet mauris efficitur a. Phasellus sagittis tellus eu nibh pellentesque lacinia. Duis faucibus, velit et aliquam hendrerit, sem felis maximus urna, ut facilisis eros urna et leo. Curabitur volutpat pharetra erat, et gravida diam tincidunt sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur, odio sit amet commodo tristique, arcu purus hendrerit mauris, at imperdiet dolor dui non enim. Ut sollicitudin vehicula orci et vestibulum. Quisque auctor condimentum magna et blandit. Nullam leo urna, congue vel elementum a, porta eget lacus. Ut eget ligula enim. Fusce ornare imperdiet risus, et dictum sapien consequat blandit. Curabitur vitae viverra neque. Aenean nec ornare lacus.

Duis pretium erat et libero sagittis, et dictum risus congue. Nunc maximus magna quam, ut tempor quam fringilla vitae. Praesent aliquam tellus odio. Nam tincidunt, mi ac euismod feugiat, ipsum nisl cursus justo, eu tempor metus nibh id ex. Phasellus lobortis turpis sit amet justo ornare mattis. Donec ut ipsum auctor, imperdiet lorem ut, ullamcorper odio. Maecenas vehicula risus eu lorem molestie sollicitudin. Suspendisse consequat felis est, in tristique sapien pharetra a. Integer vitae sodales orci, in venenatis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed feugiat purus. Etiam id pretium dui, eget suscipit erat. Nunc vitae massa et quam hendrerit aliquet sed nec ex. In efficitur quam vitae turpis consectetur commodo."
`
longTextArray= longText.split(" ");
let count=0;
for(let i=0; i< longTextArray.length; i++){
  if(longTextArray[i].search(/et/)==0){
    count++;
  };
};

console.log(`Aantal "et" ${count}`);

//Bonus 2
let phraseToCheck = "racecar";
let isPalindrome;

for(let i=0; i < phraseToCheck.length/2-1; i++){
  if(phraseToCheck[i]=== phraseToCheck[phraseToCheck.length-1-i]){
  isPalindrome= true;
}  else{
  isPalindrome= false;
  break
  }
}

console.log(isPalindrome)