// Iteration 1: Names and Input

const hacker1 = "ben";
const hacker2 = "mohamed";

// console.log("The driver's name is " + hacker1);
// console.log("The navigator's name is "+ hacker2)


// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    // console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
} else if (hacker1.length > hacker2.length){
    // console.log ("The driver has the longest name, it has " + hacker1.length+ " characters")
} else {
    // console.log ( " It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
}


// Iteration 3: Loops

// 3.1
let h1 = ""
for (let i = 0; i < hacker1.length ; i++) {
     h1 += hacker1[i].toUpperCase() + " "

}
// console.log(h1)

// 3.2
let h2 =""
for ( let j = hacker2.length -1 ; j >= 0 ; j--) {
    h2 += hacker2[j]
}
// console.log (h2)

// 3.3

// I HAVE NO CLUE!!!!

// Bonus 1:

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at felis varius, rutrum urna sit amet, placerat sapien. Etiam ornare ipsum a nisl gravida, ac euismod mi viverra. Cras id lacinia enim. Pellentesque sed et eget nisi mollis cursus. Ut nec sapien egestas, scelerisque odio eget, varius tellus. Maecenas bibendum semper lectus, ut consequat magna. Donec sagittis ex sit amet leo sollicitudin, efficitur tempor elit vulputate. Quisque nec velit at nulla pulvinar tempus. In neque lacus, varius vitae purus pellentesque, accumsan rhoncus dui. Vivamus quis justo tempus, eleifend ex non, ullamcorper erat. Aliquam lectus eros, vulputate vel aliquet feugiat, mattis at turpis. Nunc at ipsum blandit, dictum tellus quis, vulputate ante.Quisque non tristique neque. Donec ac lacinia elit. Aenean eget nibh ut mauris interdum tempus a sed metus. Donec sagittis elit sit amet felis vestibulum, a accumsan elit vehicula. Nunc vitae tempor lectus. Nulla sit amet lectus lectus. Mauris suscipit leo nec velit gravida, eu scelerisque est molestie. Proin hendrerit mattis consequat. Vivamus pellentesque ex at sem fermentum fermentum. Integer euismod neque imperdiet venenatis iaculis. Aliquam ac nulla tristique, sagittis ante vel, pellentesque ex.Fusce cursus interdum varius. Cras eget massa vel lorem congue vulputate. Pellentesque luctus sodales urna eu luctus. Sed porttitor sit amet dui ut tincidunt. Morbi a interdum urna, nec vulputate mi. Morbi a malesuada lectus. Sed dapibus ultrices scelerisque. Curabitur eget malesuada ligula. Nullam elementum, leo ac imperdiet malesuada, orci sem facilisis sapien, vel bibendum libero nulla in nulla. Nulla commodo tincidunt purus, vel placerat massa ullamcorper et. Sed vestibulum pharetra odio in tristique. Sed tincidunt dolor sem, id viverra quam porttitor eu. Vivamus ac lorem purus. Aenean quis ante ipsum."
let wordCounter = 0
for (let k = 0; k < longText.length ; k++) {
    if (longText[k+1] === " ") {
        wordCounter++
    }
}

// console.log(wordCounter)

let etCounter = 0
for (let l = 0; l < longText.length ; l++) {
    if (longText[l-1] === " " && longText[l] === "a" && longText[l+1] === "t" && longText[l+2] === " ") {
        etCounter++
    }
}

console.log(etCounter)