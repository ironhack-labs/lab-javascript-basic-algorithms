console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1="Mario"
console.log(`The driver's name is ${hacker1}`)
let hacker2="Nacho"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
}
if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

var driverName =""
var navigatorName =""
const driverLength = hacker1.length
const navigatorLength = hacker2.length

for (let i=0; i<driverLength; i++){
    if(i ===driverLength -1 ){
        driverName += `${hacker1[i].toUpperCase()}`
    } else
    driverName += `${hacker1[i].toUpperCase()} `
}
console.log(driverName)

for (let i=navigatorLength -1 ; i>=0; i--){
    navigatorName += hacker2[i]
}
console.log(navigatorName)

if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
} else if(hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}


// BONUS 1

var text =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec tempor enim. Nullam eu lacinia leo, nec laoreet leo. Vestibulum elit massa, finibus sed urna sit amet, pretium gravida ligula. Praesent finibus libero nec nisi iaculis euismod. Aenean sed justo nec ante ornare feugiat nec et tellus. Donec fermentum purus eget mauris molestie, ac pretium tellus accumsan. Sed in convallis risus. Vestibulum non nisi mollis, suscipit quam id, aliquam nibh. Maecenas sit amet justo in quam consectetur vestibulum. Nulla facilisi. Phasellus condimentum auctor felis ac rutrum. Aenean mattis ultrices tortor sit amet venenatis. Phasellus id elit id massa tristique euismod nec eget nulla.

Suspendisse vel mauris id arcu vestibulum tempus. Aenean cursus turpis lorem, vitae tempus ipsum sagittis sed. Duis lacinia venenatis leo, ac venenatis nunc pharetra eu. Morbi vel vestibulum ligula. Fusce vel ligula tempus, ultrices lorem et, lobortis augue. Nulla id dolor nunc. Proin vehicula ultricies massa vel laoreet. Quisque efficitur faucibus velit, ut sodales elit aliquet sed. Quisque in diam eleifend libero pharetra placerat. Sed venenatis arcu quis lorem scelerisque, at ultrices tortor finibus. Nulla vel purus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lobortis mi. Pellentesque sagittis non enim vitae finibus. Nunc tincidunt quis enim tempus porttitor. Pellentesque eu blandit nisi.

Nullam quis tortor elit. Maecenas suscipit molestie purus. Aenean vehicula id magna sed congue. Proin quam leo, vulputate ut odio id, porttitor porttitor augue. Quisque consequat ullamcorper lorem quis rutrum. Integer eget justo fermentum, pellentesque turpis sit amet, iaculis mi. Aliquam nec massa vel tellus bibendum ultrices a non arcu. Ut ultricies porttitor libero. Mauris eu molestie magna, non viverra enim. Phasellus fermentum ante et nisi imperdiet, in feugiat ex pellentesque. Curabitur velit orci, faucibus non consectetur in, molestie quis nisi. Nam gravida finibus nunc, ut placerat lacus vulputate sit amet.`
var words=1;
for (i=0; i<text.length; i++) {
    if (text[i]===" "){
        words+=1
    }
}
console.log(words)

textClean = text.replace(/[^a-zA-Z ]/g, "");
console.log(textClean)
var words2=0;
for (i=0; i<text.length; i++) {
    if (textClean[i]==="e" && textClean[i+1]==="t" && textClean[i+2]=== " "&& textClean[i-1]===" "){
        words2+=1
    }
}
console.log(words2)