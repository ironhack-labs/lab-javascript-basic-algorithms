// Iteration 1: Names and Input
let hacker1 = "Mohsen"

console.log("The driver's name is " + hacker1)

let hacker2 = "Google"
console.log("The navigator's name is " + hacker2)
// Iteration 2: Conditionals
let k = 0
let x = 0
for(i = 0; i < hacker1.length; i++){
    k = k+1
}
for(i = 0; i < hacker2.length; i++){
    x = x+1
}
if(k > x){
    console.log("The driver has the longest name, it has " + k + " characters.")
}
else if(x > k){
    console.log("It seems that the navigator has the longest name, it has " + x + " characters.")
}
else{
    console.log("Wow, you both have equally long names, " + k + " characters.")
}
// Iteration 3: Loops
let changedHacker1 = ""
for (i = 0 ; i < hacker1.length ; i++){
    changedHacker1 = changedHacker1 + hacker1[i]
    changedHacker1 = changedHacker1 + " "
}
console.log(changedHacker1)

let changedHacker2 = ""
for(i = hacker2.length - 1 ; i >= 0 ; i--){
    changedHacker2 = changedHacker2 + hacker2[i]
}
console.log(changedHacker2)

if(hacker1 > hacker2){
    console.log("The driver's name goes first.")
}else if(hacker1 < hacker2){
    console.log("Yo, the navigator goes first, definitely.")
}else{
    console.log("What?! You both have the same name?")
}
//Bonus 1:
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit eros eu blandit fringilla. Morbi rhoncus enim ac varius facilisis. Duis vitae cursus massa. Sed id lorem rhoncus, sagittis nisi nec, pellentesque tortor. Pellentesque pellentesque orci ac eros volutpat, vitae blandit purus dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Suspendisse condimentum nibh at orci placerat luctus. Praesent in odio id magna pellentesque gravida a vel elit. Aenean sed hendrerit sapien. Donec felis nulla, malesuada eget fringilla et, posuere nec felis. Suspendisse porttitor sit amet felis eu fringilla. Praesent blandit sapien non lectus scelerisque porta.
Proin pharetra, nisi in hendrerit rhoncus, ipsum metus luctus lorem, hendrerit sodales erat tellus in ipsum. In a varius velit, at placerat arcu. Proin in lacus nec libero pellentesque varius ut et sapien. Nunc vitae enim in sapien molestie dapibus. Pellentesque interdum purus velit, vitae varius nisi tincidunt ut. Morbi sit amet nisi hendrerit, hendrerit quam in, commodo magna. Nam blandit nisi sit amet massa molestie rutrum. Aenean at dui condimentum arcu hendrerit venenatis. Curabitur sit amet fringilla diam. Maecenas blandit eget nulla quis posuere. Nunc gravida eget mauris consequat viverra. Ut ultricies arcu eu felis lobortis rhoncus. Nulla ut sem finibus, scelerisque nulla sed, rutrum augue. Aliquam egestas dui orci, vel luctus sapien sollicitudin vel. Nunc non scelerisque elit, quis commodo tellus. Nam ex lorem, ullamcorper sit amet ex sit amet, pharetra vulputate ante.
Fusce pellentesque, lacus et semper laoreet, dolor metus elementum arcu, sed fermentum lectus massa eu quam. Proin elementum libero vel risus efficitur dictum. Aliquam dolor lorem, placerat eget magna a, auctor pulvinar purus. Curabitur sit amet odio augue. Ut eu rutrum odio. Sed iaculis sem risus, tempus bibendum nisi condimentum scelerisque. Etiam id efficitur nisi, sit amet imperdiet metus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`

let spaceCounter = 1
for(let i=0 ; i < longText.length ; i++){
    if(longText[i] === " "){
        spaceCounter ++
    }
}

console.log("The number of words are: " + longText.trim().split(/\s+/).length)



let matches = longText.match(/\bet\b/gi);
let countET = matches ? matches.length : 0;


console.log("The number of ETs are: " + countET)

//Bonus 2:
let phraseToCheck = "A man, a plan, a canal, Panama"
let phraseWithoutSpace = ""
let reverseToCheck = ""
for(i = 0 ; i < phraseToCheck.length ; i++){
    if(phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "!" || phraseToCheck[i] === ";"){
        continue
    }else{
        phraseWithoutSpace = phraseWithoutSpace + phraseToCheck[i]
    }
}

for(i = phraseWithoutSpace.length - 1 ; i >= 0 ; i--){
    reverseToCheck = reverseToCheck + phraseWithoutSpace[i]
}

if(phraseWithoutSpace.toLowerCase() === reverseToCheck.toLowerCase()){
    console.log("Good! You have a Palindrome")
}else{
    console.log("Nope! No Palindrome!")
}