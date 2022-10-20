console.log("I'm ready!");
// Iteration 1: Names and Input

let hacker1 = "Ruben";
console.log("The driver's name is", hacker1);
let hacker2 = "Wei";
console.log("The navigator's name is", hacker2);


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};


// Iteration 3: Loops
// 3.1
let capitalizedName = "";
for(let i = 0; i < hacker1.length; i++) {
    capitalizedName = capitalizedName + hacker1[i].toUpperCase() + " ";
}
console.log(capitalizedName);

//3.2
let reversedName = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
    reversedName += hacker2[j];
}
console.log(reversedName);

//3.3
for(let m = 0; m < 20; m++) {
    if (hacker1[m] < hacker2[m]){
        console.log("The driver's name goes first.");
        break;
    } else if (hacker2[m] < hacker1[m]){
        console.log("Yo, the navigator goes first definitely.")
        break;
    } else if (hacker1 === hacker2){
        console.log("What?! You both have the same name?");
        break;
    }
}

//Bonus 1

const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis urna ac ligula convallis ultrices. Donec tortor sapien, ultricies ullamcorper tincidunt ut, dignissim vel sapien. Nullam tincidunt elit dolor, nec eleifend lorem euismod non. Mauris sit amet placerat massa, tincidunt volutpat leo. In vitae tincidunt velit, eget fringilla sem. Vivamus purus erat, feugiat vel porta eget, fermentum at arcu. Sed rhoncus leo libero, sed vulputate tellus mollis in. Vivamus venenatis, diam sed vulputate blandit, purus eros rhoncus velit, sed euismod metus sem ullamcorper lorem. Vestibulum mattis quam lectus, eu convallis odio tempus quis. Nullam elit tortor, interdum eget dignissim id, gravida at ex. Vivamus accumsan urna a arcu ullamcorper, non iaculis ex pretium. Nunc at sapien nec nisl pulvinar finibus sit amet eu risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut quis neque ac lacus tincidunt finibus eu at nisl. Suspendisse eu feugiat est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eget condimentum metus. Donec eget nulla pulvinar, efficitur ex vitae, consequat velit. Vivamus a blandit magna. Vestibulum et interdum nisl, interdum sagittis augue. Mauris vel metus consectetur, dapibus elit quis, viverra purus. Proin fermentum, massa eget tempus laoreet, sapien lacus egestas sem, vitae vulputate dolor ligula ac quam. Cras rhoncus sollicitudin leo, quis facilisis diam semper sit amet. Maecenas vitae sagittis turpis, sed iaculis felis. Mauris imperdiet, ipsum et placerat hendrerit, ipsum nibh iaculis nulla, id varius arcu ante non nunc. Morbi vulputate justo orci, in finibus sem tincidunt id. Morbi et luctus mi, non pharetra neque. Quisque luctus sed sapien sit amet feugiat. Integer feugiat, diam eget feugiat blandit, ante libero consequat leo, at volutpat nisl velit luctus leo. Praesent vestibulum ultrices rutrum. Vivamus urna tortor, imperdiet vitae ligula imperdiet, consequat luctus sapien. Duis ultrices, urna sed mattis interdum, orci eros tristique metus, quis aliquet libero erat ac lectus. Nam a tincidunt orci. Donec at massa vitae mi molestie porta eu ut tortor. Integer facilisis blandit euismod. Morbi vel rhoncus mi. Morbi pharetra aliquam mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
console.log(sampleText.split(" ").length);
let counter = 0;
for (let x=0; x < sampleText.length; x++){  
    if(sampleText[x]+sampleText[x+1] === "et"){
        counter++;
    }
};
console.log(counter);

//Bonus 2
function isPalindrome(str){
    let arr =[];
    for(let j=0; j<str.length; j++){
      if(str[j] === "a" || str[j] === "b" || str[j] === "c" || str[j] === "d" || str[j] === "e" || str[j] === "f" || str[j] === "g" || str[j] === "h" || str[j] === "i" || str[j] === "j" || str[j] === "k" || str[j] === "l" || str[j] === "m"|| str[j] === "n"|| str[j] === "o"|| str[j] === "p"|| str[j] === "q"|| str[j] === "r"|| str[j] === "s"|| str[j] === "t"|| str[j] === "u"|| str[j] === "v"|| str[j] === "w"|| str[j] === "x"|| str[j] === "y"|| str[j] === "z" || str[j] === "A" || str[j] === "B" || str[j] === "C" || str[j] === "D" || str[j] === "E" || str[j] === "F" || str[j] === "G" || str[j] === "H" || str[j] === "I" || str[j] === "J" || str[j] === "K" || str[j] === "L" || str[j] === "M"|| str[j] === "N"|| str[j] === "O"|| str[j] === "P"|| str[j] === "Q"|| str[j] === "R"|| str[j] === "S"|| str[j] === "T"|| str[j] === "U"|| str[j] === "V"|| str[j] === "W"|| str[j] === "X" || str[j] === "Y"|| str[j] === "Z"){
        arr.push(str[j].toUpperCase());
      }
    };
  
    for(let i=0; i<arr.length; i++){
      if(arr[i] === arr[arr.length-1-i]){
        if(i<arr.length/2){
          continue;       
        }
      } else {
        console.log("It is not a Palindrome.")
        break;
      }
     console.log("Yes, it is a palindrome.")
      
    }   
  }
  
  isPalindrome("Race, car!");


// instead of going through each alphabet, use regular expression: /[^A-Za-z0-9]/g to represent everything that's not alphabets?
  






