// Iteration 1: Names and Input
let hacker1=prompt("hacker1")
let hacker2=prompt("hacker2")
console.log("The driver's name is " +hacker1)
console.log("The navigator's name is "+hacker2)



// Iteration 2: Conditionals
let letter1=hacker1.length
let letter2=hacker2.length

if(letter1>letter2)
{
  console.log("The driver has the longest name, it has " +letter1 +" characters.")
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

if(hacker1.localeCompare(hacker2)===1)
{
  console.log("The driver's name goes first.")
}
else if(hacker1.localeCompare(hacker2)===-1)
  {
  console.log("Yo, the navigator goes first, definitely.")
}
else{
    console.log("What?! You both have the same name?")

}

//BONUS 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh tellus molestie. Suspendisse sed nisi lacus sed viverra. A lacus vestibulum sed arcu non odio euismod lacinia at. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Risus quis varius quam quisque. Facilisis magna etiam tempor orci eu. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Arcu felis bibendum ut tristique et egestas quis. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Aliquet nibh praesent tristique magna sit amet purus. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Pellentesque id nibh tortor id aliquet. Arcu risus quis varius quam quisque. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Neque gravida in fermentum et sollicitudin. Ac turpis egestas maecenas pharetra. Semper risus in hendrerit gravida rutrum quisque non. Bibendum neque egestas congue quisque egestas diam. Dignissim enim sit amet venenatis urna cursus. Ut tortor pretium viverra suspendisse potenti nullam ac. Scelerisque purus semper eget duis at tellus. Mus mauris vitae ultricies leo integer. Sed nisi lacus sed viverra tellus in hac habitasse.Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Sapien nec sagittis aliquam malesuada. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Accumsan tortor posuere ac ut consequat semper viverra nam. Mi bibendum neque egestas congue quisque egestas diam. Sociis natoque penatibus et magnis dis parturient montes. Purus non enim praesent elementum facilisis. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Pulvinar etiam non quam lacus suspendisse faucibus. Viverra maecenas accumsan lacus vel facilisis volutpat est. Commodo quis imperdiet massa tincidunt nunc pulvinar. In mollis nunc sed id. Sit amet luctus venenatis lectus. Aliquet lectus proin nibh nisl condimentum. Eget felis eget nunc lobortis. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Suspendisse potenti nullam ac tortor. Tortor dignissim convallis aenean et tortor. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Mi tempus imperdiet nulla malesuada pellentesque."
 
console.log(longText.split(" ").length);
let etCount=0
for(let i=0;i<longText.length-1;i++)
  if(longText[i]+longText[i+1]==="et")
  {
    etCount+=1
  }
console.log(`the number of occurence for the latin word et is ${etCount}`)

//BONUS 2
let phraseToCheck=prompt("enter ur text")
let phraseReversed=""

    for(let i=phraseToCheck.length-1;i>=0;i--){
    phraseReversed+=phraseToCheck[i]
    }
  
if(phraseToCheck==phraseReversed){
  console.log("It is a Palindrome")
}
else{
    console.log("It is a not Palindrome")

}