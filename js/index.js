// Iteration 1: Names and Input
// Iteration 2: Conditionals
// Iteration 3: Loops

// Bonus 1
console.log("------------bonus 1 : how many words-------------------------------------------------------------")

var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nibh vel nisi fermentum imperdiet at sit amet leo. Praesent sit amet feugiat velit. Morbi aliquam mauris sed eros tincidunt, et finibus lacus tincidunt. Ut dapibus, odio sit amet ornare aliquet, massa libero gravida mauris, non dignissim metus mauris at tortor. Sed eu tellus pretium neque dapibus blandit ut nec quam. Etiam ac orci iaculis, molestie dolor at, euismod nunc. Etiam non mauris lectus. Sed viverra mauris in dolor bibendum, sed scelerisque leo mattis. Aliquam eget mi nunc. Vivamus maximus velit nec risus faucibus, ac ultrices massa cursus. Maecenas condimentum, arcu vitae rhoncus suscipit, nulla lorem faucibus ex, eu molestie libero tellus non est. Phasellus elit velit, suscipit ac justo ut, semper placerat lectus. Morbi vel diam nec ipsum egestas mollis. Integer sollicitudin fermentum quam vel efficitur. Proin sed purus non risus eleifend feugiat eget eu ipsum. Aliquam erat volutpat. Cras dignissim imperdiet nunc quis placerat. Aliquam venenatis lobortis felis, quis imperdiet turpis fringilla ac. Mauris ac lectus sed nisl porttitor efficitur nec lobortis neque. Integer interdum arcu eget erat dignissim volutpat. Duis facilisis placerat lacus, quis porttitor risus laoreet et. Nunc ultrices lobortis velit, a interdum massa vehicula nec. Praesent a eros ultricies, cursus felis quis, pharetra eros. Vestibulum egestas et magna ut ullamcorper. Quisque ornare placerat neque, id eleifend nunc. Cras non feugiat sapien. Aliquam vulputate augue massa, eget vulputate arcu tincidunt a. Duis fermentum eros eu leo fringilla bibendum. Phasellus consectetur augue nisl, in tincidunt tortor venenatis in. Mauris vitae sem id mauris porta volutpat. Phasellus eu posuere turpis. Integer quis lacus eget nunc congue luctus at in nunc. Suspendisse nulla ipsum, consectetur vitae lacus sed, aliquet facilisis turpis. Cras tincidunt dolor ac mi placerat, ac vestibulum lacus ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam laoreet libero nulla. Donec et libero a eros dignissim lacinia a euismod purus. Curabitur non ex sem. Nullam tempor elementum commodo. Aenean lacinia felis dui, et consequat nulla fringilla in."

if(paragraph === "" || paragraph.charAt(paragraph.length-1) === " "){
    var total = 0;
} else { var total = 1;}
for (var i = 0; i<paragraph.length; i++) {
    if (paragraph[i] === " ") {
        total += 1;
    }
}
console.log(total)

console.log("------------bonus 1 : ET-------------------------------------------------------------")

let arr= paragraph.replace(/[^\w\s]/gi, "").split(' ');
let words = 0;
for(let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === 'et') {
        words += 1
    }
}
console.log(words);

// Bonus 2
console.log("------------bonus 2-------------------------------------------------------------")

var phraseToCheck = "No 'x' in Nixon";
phraseToCheck = phraseToCheck.toLowerCase();
phraseToCheck = phraseToCheck.replace(/[\W\s]+/g, '');

var numberOfChar = phraseToCheck.length;
//var strToArr = phraseToCheck.split("");
var charFirst = 0;
var firstStr = "";
var secondStr = "";
if (numberOfChar%2 === 0) {
    charFirst = numberOfChar/2;
    for(let i = 0; i<charFirst; i++) {
        var firstStr = phraseToCheck[i] + firstStr;
    }
    for(let j = charFirst; j<numberOfChar; j++) {
        var secondStr = secondStr + phraseToCheck[j];
    }
    if (firstStr === secondStr) {
        console.log("yes it's a palindrome")
    } else {console.log("no it's not a palindrome")}
} else if (numberOfChar%2 !== 0) {
    charFirst = (numberOfChar/2)-0.5;
    for(let i = 0; i<charFirst; i++) {
        var firstStr = phraseToCheck[i] + firstStr;
    }
    for(let j = charFirst+1; j<numberOfChar; j++) {
        var secondStr = secondStr + phraseToCheck[j];
    }
    if (firstStr === secondStr) {
        console.log("yes it's a palindrome")
    } else {console.log("no it's not a palindrome")}
}