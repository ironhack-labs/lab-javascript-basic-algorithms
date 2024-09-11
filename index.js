// Iteration 1: Names and Input

let hacker1 = "Balfa"
console.log("The driver's name is", hacker1)
let hacker2 = "Balfat"
console.log("The navigator's name is", hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has", hacker1.length, "characters.")
}
else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has", hacker2.length, "characters.")
}
else {
    console.log("Wow you both have equally long names,", hacker1.length, "characters!")
}

// Iteration 3: Loops
let capitalSpaced = ""
let hacker1Capital = hacker1.toUpperCase()
console.log(hacker1Capital)
for (let i = 0; i < hacker1Capital.length; i++) {
    capitalSpaced = capitalSpaced.concat(hacker1Capital.charAt(i))
    capitalSpaced = capitalSpaced.concat(" ")
}
console.log(capitalSpaced)

let navigatorReversed = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorReversed = navigatorReversed.concat(hacker2.charAt(i))
}
console.log(navigatorReversed)
// let i = 0;
// do{
//     if(hacker1.charAt(i)<hacker2.charAt(i)){
//         console.log("The driver's name goes first.")
//     }
//     else if(hacker1.charAt(i)>hacker2.charAt(i)){
//         console.log("Yo, the navigator goes first, definetely.")
//     }
//     else if(hacker1.charAt(i)===hacker2.charAt(i) && i===hacker1.length-1 && i === hacker2.length-1){
//         console.log("What?! You both have the same name?")
//     }
//     i++;
//     console.log(i)
// } while(hacker1.charAt(i-1)===hacker2.charAt(i-1) && (i < hacker1.length | i < hacker2.length))

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus Time
// Bonus 1

let longText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque, elit a aliquet gravida, est mauris blandit orci, in condimentum nisi risus eget augue. Aenean a egestas urna. Phasellus faucibus nec ipsum eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra tortor sit amet velit finibus viverra. Nullam eleifend ante felis, sed dictum erat feugiat ac. Donec turpis eros, gravida sagittis massa efficitur, bibendum finibus lectus. Etiam ante justo, porttitor eu malesuada ac, convallis eu augue. Sed sed nulla quis magna consectetur imperdiet. Sed in mauris eget purus vestibulum rhoncus. Vivamus varius, diam ut laoreet porta, nunc augue dignissim lacus, at convallis arcu mi ac urna. Aenean pharetra neque metus, vel iaculis sapien suscipit tristique. Sed vel bibendum nibh. Proin efficitur gravida velit, tincidunt placerat dolor consequat ac. Aliquam ut sem gravida, fringilla ligula eu, aliquet nunc. Quisque dolor eros, sollicitudin tempor iaculis quis, consequat in ante. Ut in rutrum dolor. Nunc convallis malesuada felis et sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In eu nunc consequat, volutpat libero sed, convallis purus. Donec tincidunt quam magna, id lacinia lectus ornare suscipit. Cras at varius nisi. Integer dictum neque turpis, ac placerat risus dapibus ut. Donec gravida, velit at accumsan hendrerit, odio urna euismod odio, a luctus ipsum risus eget nisl. Sed sollicitudin, dui in tincidunt faucibus, mi ex tincidunt purus, vel ultrices orci elit id arcu."
let numberWords=1
let numberEts=0
for(let i=0;i<longText.length;i++){
    if(longText.charAt(i)===" "){numberWords++}
    if(longText.charAt(i)===" " && longText.charAt(i+1)==="e" && longText.charAt(i+2)==="t" && longText.charAt(i+3)===" ")
    {numberEts++}
}
console.log(numberWords)
console.log(numberEts)

//Bonus 2

let phraseToCheck="A man, a plan, a canal, Panama"
phraseToCheck=phraseToCheck.toLowerCase();
let i=0
let j=phraseToCheck.length-1
for(i,j;i<j;i,j){
    if (i===j && phraseToCheck.charAt(i)===phraseToCheck.charAt(j)){
        console.log(phraseToCheck,"is a palindrome")
        break
    }
    else if (phraseToCheck.charAt(i)===" "){
        i++
        continue
    }
    else if (phraseToCheck.charAt(i)===","){
        i++
        continue
    }
    else if (phraseToCheck.charAt(j)===" "){
        j--
        continue
    }
    else if (phraseToCheck.charAt(j)===","){
        j--
        continue
    }
    else if(phraseToCheck.charAt(i)!==phraseToCheck.charAt(j)){
        console.log(phraseToCheck,"is no palindrome.", phraseToCheck.charAt(i),"does not match", phraseToCheck.charAt(j))
        break
    }
    else if (i===j && phraseToCheck.charAt(i)===phraseToCheck.charAt(j)){
        console.log(phraseToCheck,"is a palindrome")
        break
    }
    else{
        if (i===j && phraseToCheck.charAt(i)===phraseToCheck.charAt(j)){
            console.log(phraseToCheck,"is a palindrome")
            break
        }
        else{
            i++
            j--
            console.log("i=",i ,"and character at i=", phraseToCheck.charAt(i))
            console.log("j=",j,"and character at j=",phraseToCheck.charAt(j))
            if (i===j && phraseToCheck.charAt(i)===phraseToCheck.charAt(j)){
                console.log(phraseToCheck,"is a palindrome")
                break}

        }
       
    }
} 
if (i===j && phraseToCheck.charAt(i)===phraseToCheck.charAt(j)){
    console.log(phraseToCheck,"is a palindrome", j,i)}