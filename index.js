// Iteration 1: Names and Input
let hacker1=prompt("hacker1")
let hacker2=prompt("hacker2")
console.log("The driver’s name is " +hacker1)
console.log("The navigator’s name is "+hacker2)

// Iteration 2: Conditionals
let letter1=hacker1.length
let letter2=hacker2.length
if(letter1>letter2)
{
  console.log("The driver has the longest name, it has " +letter1 + "characters.")
}
else if(letter2>letter1){
  console.log(`It seems that the navigator has the longest name, it has ${letter2} characters.`)
}
else{
  console.log(`Wow, you both have equally long names, ${letter1} characters!.`)
}

// Iteration 3: Loops
let hacker1Upper=hacker1.toUpperCase()
hacker1Upper=hacker1Upper.split('').join(' ')
console.log(hacker1Upper)
let final=""
for(i=hacker2.length-1;i>=0;i--)
{
 final += hacker2[i]
}
console.log(final)

hacker1.localeCompare(hacker2)
if(hacker1.localeCompare(hacker2)==1){
console.log("The driver's name goes first.") } 
  else if (hacker1.localeCompare(hacker2)==-1){
  console.log("Yo, the navigator goes first, definitely.")}
else if (hacker1.localeCompare(hacker2)==0){
  console.log("What?! You both have the same name?")}

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra scelerisque rutrum. In dignissim velit velit, non tristique enim malesuada ac. In ut fringilla arcu. Pellentesque vel est sed quam pellentesque suscipit. Ut ut nulla interdum, tempus neque a, scelerisque leo. Integer lorem diam, vulputate nec tellus a, consequat sollicitudin libero. Quisque commodo vitae risus vel fringilla. Pellentesque commodo convallis velit vel dapibus. Phasellus porta eros sed suscipit volutpat. Nam eu pharetra diam. Suspendisse rutrum porta sem ac consequat. Cras hendrerit orci facilisis ornare vestibulum. Morbi pellentesque eleifend sem id faucibus. Cras nec arcu at dui gravida elementum eget non dolor. Donec ultrices egestas consectetur.Mauris a hendrerit erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae dignissim tortor. Suspendisse condimentum iaculis purus in viverra. Nullam mattis, nisl et ultricies molestie, dui mi laoreet magna, viverra sodales nisi nisl ac nibh. Nullam pulvinar, nibh eu mattis bibendum, nibh lacus sollicitudin erat, vitae laoreet orci urna non nunc. Sed odio augue, faucibus a consequat ut, finibus quis mi. Praesent in vulputate arcu, quis semper ante. Vestibulum eu urna condimentum, fermentum ligula quis, volutpat augue. Mauris aliquam ullamcorper cursus. Cras sed tortor nisi. Donec a tincidunt arcu, at ornare nisi. Etiam consectetur placerat turpis, eu fermentum sem volutpat eu. Sed malesuada sed sapien a sollicitudin. Fusce lobortis, augue nec dictum maximus, arcu diam suscipit erat, eget convallis nulla metus ac arcu. Aliquam erat volutpat.Sed vel elit luctus, pharetra enim quis, efficitur leo. Aliquam auctor odio in accumsan vehicula. Morbi ipsum turpis, faucibus rutrum libero eget, elementum ornare lorem. Curabitur dignissim ante vel eleifend elementum. Vivamus laoreet enim ac sapien tincidunt vehicula. Curabitur dictum non orci a ultrices. In fringilla elit ac eros blandit dapibus. Etiam quis malesuada nunc. Proin quis felis turpis. Aliquam aliquam ultricies luctus. In vitae tristique felis."
let wordCount = longText.split(" ").length
console.log(wordCount)
let text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra scelerisque rutrum. In dignissim velit velit, non tristique enim malesuada ac. In ut fringilla arcu. Pellentesque vel est sed quam pellentesque suscipit. Ut ut nulla interdum, tempus neque a, scelerisque leo. Integer lorem diam, vulputate nec tellus a, consequat sollicitudin libero. Quisque commodo vitae risus vel fringilla. Pellentesque commodo convallis velit vel dapibus. Phasellus porta eros sed suscipit volutpat. Nam eu pharetra diam. Suspendisse rutrum porta sem ac consequat. Cras hendrerit orci facilisis ornare vestibulum. Morbi pellentesque eleifend sem id faucibus. Cras nec arcu at dui gravida elementum eget non dolor. Donec ultrices egestas consectetur.Mauris a hendrerit erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae dignissim tortor. Suspendisse condimentum iaculis purus in viverra. Nullam mattis, nisl et ultricies molestie, dui mi laoreet magna, viverra sodales nisi nisl ac nibh. Nullam pulvinar, nibh eu mattis bibendum, nibh lacus sollicitudin erat, vitae laoreet orci urna non nunc. Sed odio augue, faucibus a consequat ut, finibus quis mi. Praesent in vulputate arcu, quis semper ante. Vestibulum eu urna condimentum, fermentum ligula quis, volutpat augue. Mauris aliquam ullamcorper cursus. Cras sed tortor nisi. Donec a tincidunt arcu, at ornare nisi. Etiam consectetur placerat turpis, eu fermentum sem volutpat eu. Sed malesuada sed sapien a sollicitudin. Fusce lobortis, augue nec dictum maximus, arcu diam suscipit erat, eget convallis nulla metus ac arcu. Aliquam erat volutpat.Sed vel elit luctus, pharetra enim quis, efficitur leo. Aliquam auctor odio in accumsan vehicula. Morbi ipsum turpis, faucibus rutrum libero eget, elementum ornare lorem. Curabitur dignissim ante vel eleifend elementum. Vivamus laoreet enim ac sapien tincidunt vehicula. Curabitur dictum non orci a ultrices. In fringilla elit ac eros blandit dapibus. Etiam quis malesuada nunc. Proin quis felis turpis. Aliquam aliquam ultricies luctus. In vitae tristique felis."
let count = 0
for (let i = 0; i < text.length; i++) {
  if (text[i]+text[i + 1] === "et") {
    count++
  }
}
console.log(`The Latin word "et" appears ${count} times.`)


let phraseToCheck = prompt("Enter a phrase")
let phraseReversed = ""
for(let i=phraseToCheck.length-1; i>=0; i--){
 phraseReversed+= phraseToCheck[i]
}
if(phraseToCheck==phraseReversed){
  console.log("It is a Palindrome")
}
else {
  console.log("It is not a Palindrome")
}







