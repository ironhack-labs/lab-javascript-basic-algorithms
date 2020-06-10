// Iteration 1: Names and Input
let hacker1 = "Graziella";
console.log("the driver's name is ", hacker1);

let hacker2 = "Fanny";
console.log("the navigator's name is ", hacker2);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else{
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let uppercasedHacker1 = hacker1.toUpperCase();
console.log(uppercasedHacker1);
let result = "";
for (let index = 0; index < hacker1.length; index++) {
    result += hacker1[index].toUpperCase() +" ";
}
console.log(result);
let result1 ="";
for (let index = hacker2.length-1; index >= 0; index--) {
    result1 += hacker2[index];
}

console.log(result1);


if (hacker1.length > hacker2.length) {
    for (let index = 0; index < hacker1.length; index++) {
      let currentLetter1 = hacker1[index];
      let currentLetter2 = hacker2[index];
      if (currentLetter1 > currentLetter2) {
          console.log("Yo, the navigator goes first definitely.");
          break;
      }else if (currentLetter1 < currentLetter2){
          console.log("The driver's name goes first.");
          break;
      }else if(currentLetter1 === currentLetter2){
          continue;
      }else{
        console.log("What?! You both have the same name?");
      }
    }
}

//Bonus 1

var paragraph ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet maximus diam. Duis pellentesque tincidunt neque, in sodales diam tristique id. Praesent sodales accumsan neque, et venenatis massa dictum vel. Nulla nec nisi ullamcorper, suscipit purus pharetra, sollicitudin ex. Aenean varius lorem sed purus semper, nec lobortis ex fringilla. Nunc cursus ut nisi gravida dictum. Fusce egestas fermentum accumsan. Suspendisse laoreet sit amet urna in pulvinar. Mauris commodo odio quis libero gravida, non cursus ante egestas. Maecenas nulla ante, efficitur id consequat nec, porta in erat. Donec congue erat nec pulvinar volutpat. Aenean bibendum placerat magna et ultrices. Suspendisse vitae arcu et dui semper eleifend. Sed lobortis lacus ac laoreet interdum. Duis non egestas ante. Nulla mi sem, viverra a fringilla non, euismod vitae augue. Ut interdum nulla arcu, malesuada dapibus nisl egestas vel. In sed sem est. Donec sit amet eros ornare, varius sapien et, pretium enim. Integer rhoncus at justo sit amet interdum. Aliquam erat volutpat. Morbi sit amet nulla magna. Sed lobortis sem sed iaculis ultrices. Integer vitae nulla aliquet eros aliquet commodo. Integer vel placerat lorem. In id libero quis ligula cursus congue. Nulla elementum facilisis dictum. Maecenas molestie metus non condimentum egestas. Vestibulum augue turpis, pellentesque in semper ac, convallis convallis arcu. Proin eget faucibus erat."

function numberOfWords(text){
    return text.split(' ').length;
}

console.log(numberOfWords(paragraph));

function countWord(text,word){
    return text.split(word).length - 1;
}

console.log(countWord(paragraph,'et'));

