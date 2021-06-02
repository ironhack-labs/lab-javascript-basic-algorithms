// Iteration 1: Names and Input
const hacker1 = "Gabriel";
console.log(`The driver name is: ${hacker1}`);
const hacker2 = "Helder";
console.log(`The navigator's name is ${hacker2}`);
let hacker1Lentgh = hacker1.length;
let hacker2Lentgh = hacker2.length;
// Iteration 2: Conditionals
if(hacker1Lentgh > hacker2Lentgh){
    console.log(`The driver has the longest name, it has ${hacker1Lentgh} characters.`);
}else if(hacker1Lentgh < hacker2Lentgh){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Lentgh} characters.`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1Lentgh} characters!`);
}
// Iteration 3: Loops
result = "";
for (let i = 0; i <= hacker1.length-1; i++){
    result = result + hacker1[i].toUpperCase() + " ";
}
console.log(result);
result2 = "";
for (let i = hacker1.length -1; i >= 0; i--){
    result2 = result2 + hacker1[i];
}
console.log(result2);
//lexicographic order
const text1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const text2 = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";
const text3 = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
const allText= text1 + text2 + text3;
const words = allText.split(" ");
let wordCount = 0;
//number of words
for(let i = 0; i < words.length; i++){
    if (words[i] !== " ") {
        wordCount += 1;
      }
    }
console.log(wordCount);
let etCount = 0;
// latin word
for(let i = 0; i < words.length; i++){
    if (words[i] === "et") {
        etCount += 1;
      }
    }
console.log(etCount)