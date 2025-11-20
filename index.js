// Iteration 1: Names and Input
 let hacker1 = "Joseph";
 console.log (`The driver's name is ${hacker1}`)

 let hacker2 = "Trump"
 console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name,it has ${hacker1.length} characters`)
}
else if(hacker2.length>hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let driver = hacker1;
let capitalLetters = ""

for(let i=0; i<hacker1.length; i++){
capitalLetters += driver[i].toUpperCase() + ""

console.log(capitalLetters)
}



let navigatorName = hacker2
let countdown= " "

for(let i=hacker2.length-1; i>=0; i-- ){
  countdown += navigatorName[i]
}
console.log(countdown)




// if(hacker1.localeCompare(hacker2)){
//    console.log("The driver's name goes first.")
// }else if(hacker2.localeCompare(hacker1)){
//   console.log("Yo, the navigator goes first, definitely")
// }else(
//   console.log("What?! You both have the same name?")
// )


const newLexicoName = hacker1.localeCompare(hacker2)
if(newLexicoName=== -1){
  console.log( "Yo, the navigator goes first, definitely"

  )

}
 else if(newLexicoName === 1){
    console.log("The driver's name goes first")
  }
  else{
    console.log("they have the same name")
  }



// bonus exercise

//this is done but from the ChatGpt as i dont know about .split and .trim methods ,  just red these

let longText = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatum in quas provident aspernatur quaerat iusto eligendi. Sunt incidunt quibusdam doloremque repudiandae animi, itaque ratione aperiam aut fugiat architecto in atque necessitatibus aliquid accusamus tenetur recusandae, ea, ad consectetur cupiditate odit? Voluptatum consequuntur tenetur amet doloremque rem dolor aliquid aperiam et nostrum. Dics at saepe quibusdam expedita libero dicta, explicabo repellat accusamus? Nisi, consequuntur. Corrupti rerum ipsam velit facere adipisci ullam nobis odio sunt. Nihil ad dolorem itaque in, saepe nemo suscipit, earum porro, similique quasi quae pariatur obcaecati voluptas soluta delectus! Aliquam laudantium odio, nostrum neque modi error, non consequatur nesciunt exercitationem, consequuntur quia ut nihil? Possimus hic magni placeat est odit architecto doloribus molestias fugiat illo perferendis! Alias totam nemo ipsum? Ipsam nihil amet nesciunt. Nisi, consequuntur. Vitae ex voluptates cupiditate! Aspernatur dolores "

let wordCount = longText.trim().split(/\s+/).length
console.log("total words:" , wordCount)

let etCount=longText.split("et").length-1

console.log("number of et:" , etCount)

let x;
console.log(x)

const y= null;
console.log(typeof y)
