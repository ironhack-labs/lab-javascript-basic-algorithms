// Iteration 1: Names and Input
const hacker1 = "jason";
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Marious";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const driverLength = hacker1.length;
// console.log(driverLength)
const navigatorLength = hacker2.length;
// console.log(navigatorLength)
if(driverLength > navigatorLength) {
    console.log(`The driver has the longest name, it has ${driverLength} characters.` )
} else if (navigatorLength > driverLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
}else if (navigatorLength === driverLength) {
    console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
}

console.clear();



// Iteration 3: Loops
let newDriversName = "";
for (let i = 0; i < hacker1.length; i++){
    newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName);



//3.2
let newNavigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorName += hacker2[i];
}
console.log(newNavigatorName)

//3.3
hacker1Compare = hacker1.toLowerCase();
hacker2Compare = hacker2.toLowerCase();

if (hacker1Compare > hacker2Compare) {
  console.log("The driver's name goes first.")
}
else if (hacker1Compare < hacker2Compare) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 




//Bonus 1

const paragraph  = "Vestibulum quiets cursetus sem. Proin auctor purus at lacinia tincidunt.Cras tincidunt vehicula scelerisque. Praesent ultricies cursus lorem eget ultretices. Duis accumsan tortor ac lectus suscipit, nec efficitur elit porttitor. Duis vel sapien arcu. Donec faucibus urna ac dui efficitur, non aliquam velit viverra. Cras ac nunc eget mauris interdum posuere ac eget maeturis. Vivamus vel enim non felis pharetra vestibulum. Quisque aliquam aliquet ex nec sollicitudin. Sed facilisis nulla ante, id blandit velit feugiat vel. Quisque semper lorem id nunc pretium pulvinar. Donec viverra urna gravida, ullamcorper felis gravida, bibendum sem.Curabitur suscipit pellentesque turpis ut euismod. Proin gravida justo quis mauris tempus tempor. Morbi vulputate a lectus id vestibulum. Donec egestas posuere odio nec mattis. Mauris finibus ipsum orci. Nunc pellentesque sodales velit in tempus. Morbi justo odio, consectetur sed dictum eu, scelerisque fermentum risus. Maecenas purus leo, congue ullamcorper erat nec, volutpat vehicula ipsum. Curabitur eu blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, nibh non tempor tempor, lorem augue pretium nisl, sit amet aliquam dui tortor sed lacus. Duis imperdiet mi vehicula massa fermentum, sed tempus urna ultricies. Donec sagittis quam ut molestie tempus. Quisque viverra, sem sit amet maximus vulputate, dolor ligula iaculis orci, eget commodo nunc tellus sed mauris. Donec id eros imperdiet orci finibus euismod ut quis enim. Nam blandit convallis mauris, a porta nisl egestas vitae. Aliquam pulvinar nisi eget tortor aliquet, at blandit ex semper. Suspendisse vel dui eu lorem maximus luctus a et nisl. Aenean quis nulla congue enim finibus dictum sed non augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";

let wordsCount;


paraWord = paragraph.split(" ");
wordsCount = paraWord.length;
console.log("wordsCount =>", wordsCount);
console.log("paraWord =>", paraWord);




// function etCounter(para){
//     let etCount = 0;
//     para.forEach(element => {
//         if(element === "et")
//         etCount++
//     });
//     console.log(etCount)
// }

// etCounter(paraWord)

let etCount = 0;

for (let i = 0; i < wordsCount; i++) {
    // console.log(paraWord[i])
    if (paraWord[i].toLowerCase() === "et"){
        etCount++
    }
     
}
console.log("number of et =>", etCount)