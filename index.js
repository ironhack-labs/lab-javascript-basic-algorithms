// Iteration 1: Names and Input
let hacker1 = "Helmut"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Frieda"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops
//3.1
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}
//3.2
for (let i = hacker1.length-1; i >= 0 ; i--) {
    console.log(hacker1[i]);
}
//3.3
let comparison = hacker1.localeCompare(hacker2)

if(comparison > 0) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if(comparison < 0) {
    console.log(`The driver's name goes first.`)
} else {
    console.log(`What?! You both have the same name?`)
}
//Bonus 1

// const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis metus rhoncus sem finibus dictum. Vestibulum eleifend tincidunt dui vitae vehicula. Aliquam scelerisque nisi maximus justo maximus euismod. Ut sed justo non orci pellentesque ullamcorper sagittis sit amet massa. Praesent nec imperdiet magna. Curabitur ultrices arcu id justo viverra sollicitudin. Morbi varius bibendum ante non rutrum. Ut a neque id sapien gravida elementum. Vivamus quis scelerisque erat. Integer sagittis at mi at congue. Morbi tincidunt pellentesque augue vel feugiat. Suspendisse vitae felis sem. Phasellus ipsum ligula, rutrum a velit quis, sollicitudin venenatis orci. Donec ornare suscipit ex, non sollicitudin arcu accumsan nec. Vestibulum odio felis, accumsan vel sem in, suscipit pellentesque ligula. Vestibulum euismod lobortis massa, id volutpat tellus iaculis non. Aliquam faucibus tincidunt dolor sed fermentum. Etiam euismod eleifend lacinia. Nulla ex ligula, dignissim eu nisl vel, cursus auctor ligula. Ut tristique vitae lorem at luctus. Nunc ac turpis tempus, mollis nisl id, fringilla ante. Cras volutpat ullamcorper mauris in bibendum. Sed lacus sapien, auctor in sodales vel, luctus vel purus. Maecenas vitae tempor est. Fusce urna mi, feugiat eu neque et, placerat euismod orci. Nullam laoreet ligula vitae velit consectetur, at mollis libero pellentesque. Pellentesque interdum tellus sed urna rhoncus fringilla. Morbi eu justo eu orci consequat semper. Donec convallis, ex nec ornare eleifend, lacus sem egestas nunc, id consequat purus ipsum quis mauris. Quisque tincidunt scelerisque bibendum. Integer cursus sollicitudin sapien, sed convallis est feugiat vitae. Quisque id varius magna. Curabitur sagittis lacinia vulputate. Fusce tristique sit amet augue ac ultrices. Nam imperdiet volutpat nisl in elementum. Morbi interdum tincidunt urna eu ornare. Sed laoreet magna eu metus fermentum scelerisque. Fusce metus nunc, elementum sed sagittis a, venenatis vitae enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean auctor convallis porttitor. Proin vel dapibus diam, at rhoncus erat. Nullam facilisis nulla sed urna feugiat cursus. Aliquam suscipit ipsum non velit ullamcorper dictum a a diam. Morbi vehicula lacus ut imperdiet porttitor."

let wordCount = 0
let etCount = 0
for (let i = 0; i < longText.length; i++){
    if (longText[i] === ' ') { //counts up 1 every time a space is encountered
        wordCount++
    } else if (longText[i] + longText[i+1] === 'et') {
        etCount++ //counts every occurrence of "et", not just the actual word - I'm stumped here.
    }
}
console.log(wordCount)
console.log(etCount)

// Bonus 2

function phraseToCheck(str) {

    str = str.toLowerCase()
    let newString = '' ;

    for (let i = 0; i <= str.length -1; i++) {
        //check for the most common punctuation marks and skip 'em
        if (str[i] === ',' || str[i] === '!' || str[i] === ' ' || str[i] === `'` || str[i] === '?' || str[i] === ':' || str[i] === ';' ) {
            continue
        } else {newString += str[i]}; //create new string with all letters pushed together
    }

    //check to see if the characters from first half of string correspond to characters from second half
    for (let i = 0; i < newString.length / 2; i++) {
    if (newString[i] !== newString[newString.length - 1 - i]) {
            console.log("NOT A PALINDROME!");
        }
    }
console.log("It's a palindorome alright!");
}


