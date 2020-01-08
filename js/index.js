// Iteration 1: Names and Input

let hacker1 = "Kathleen";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Guillaume";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name. It has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let capitalStr = ""
for (i=0; i < hacker1.length; i++) {
    capitalStr += " " + hacker1.charAt(i);
}
console.log(capitalStr.toUpperCase());

// 3.2
let reverseStr = ""
for (i=hacker2.length-1; i >= 0; i--) {
    reverseStr += hacker2.charAt(i);
}
console.log(reverseStr);

// 3.3

if (hacker2.localeCompare(hacker1)) {
    console.log(`The driver's name goes first.'`);
} else if (hacker1.localeCompare(hacker2)){
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

// Bonus 1

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lorem augue, placerat nec ex porttitor, hendrerit vulputate ligula. Vestibulum feugiat pretium ex vel varius. Proin non purus faucibus turpis maximus auctor. Aliquam eget tortor non massa fringilla rhoncus. Donec diam lorem, vestibulum in imperdiet ac, molestie et orci. Nulla blandit, nisl non molestie consectetur, tellus neque fringilla neque, in ultrices massa lacus vel justo. Donec eget vestibulum libero. Ut vel posuere augue, in suscipit erat. Fusce sed turpis mi. In hac habitasse platea dictumst. Donec ut tellus interdum ligula luctus vehicula. Ut varius vehicula libero, eget suscipit orci tempus a. Quisque eu ligula congue, consectetur orci sed, convallis mauris. Curabitur eget erat vitae augue aliquet viverra at a nunc. Sed id orci convallis, semper nisi non, blandit quam.
Suspendisse potenti. Quisque lectus orci, venenatis sit amet metus sit amet, ultricies vestibulum est. In scelerisque dapibus mauris, id pharetra nunc dignissim a. Pellentesque tincidunt rhoncus fringilla. Vivamus aliquam mi sit amet magna pharetra auctor. Vivamus eu malesuada diam, vitae pellentesque augue. Aliquam erat volutpat. Integer leo ex, elementum nec lorem tincidunt, dapibus pharetra lectus.
Nulla facilisi. Vivamus in blandit est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam imperdiet lacus ut felis porta, nec porta nibh mattis. Etiam accumsan pulvinar tortor, quis tempus leo molestie eu. Fusce placerat mauris in risus varius consequat. Praesent non porttitor ligula, commodo suscipit risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate placerat purus sit amet consectetur. Praesent rhoncus euismod felis, at bibendum augue ornare feugiat. Aenean ex urna, blandit nec sem sit amet, euismod pretium augue. Nunc consectetur, nulla cursus cursus auctor, nisl ante tristique nisi, id imperdiet mauris erat ut purus.`

// Make your program count the number of words in the string.

function Count(str) {
    let total = 0;
    for (let i=0; i<str.length; i++) {
        if (str.charAt(i) === " ") {
            total+=1;
        }
    }
     return total + 1;
}
console.log(Count(paragraph));

// OU

let parArr = paragraph.split(" ");
console.log(parArr.length)

// Make your program count the number of times the Latin word et appears.

let countWord = 0;
paragraph.split(" ").forEach(word => {
    if (word === "et") {
        countWord += 1;
    }
})
console.log(countWord)

// OU

function CountWords(str){
    let count = 0;
    let strArray = str.split(" ");
    for (let i =0; i<strArray.length; i++){
      if (strArray[i]=="et"){
        count++;
      }
    }
  return count;
  }
  console.log(CountWords(paragraph));

  







