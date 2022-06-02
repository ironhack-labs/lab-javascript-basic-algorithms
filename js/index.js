// Iteration 1: Names and Input

let hacker1=""
let hacker2=""
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name ${hacker2}`)



//
// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.` )
}
else if(hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow!? You both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

/*3.1
let getLettersCaps = (string) => {
    let newArr = []
    for(let e of string) {
      newArr.push(e.toUpperCase())
    }
    return newArr.join(" ");
  }*/

/*3.2*/
  function reverseName(name){
    let reversedName =""  
    for(let i=name.length-1; i>=0; i--){
        reversedName+=name[i]
      }
      return reversedName
  }
  console.log(reverseName("John"))


  /*3.3
  let name1=""
  let name2=""
  if(name1[0]<name2[0]){
      console.log(`The driver's name goes first.`)
  }else if(name1[0]>name2[0]){
      console.log(`Yo, the navigator goes first definitely.`)
  }else(`What?! You both have the same name?`)*/

  function compareOrder(name1, name2) {
    if(name1[0]<name2[0]) {
      console.log(name1)
      console.log(name2)
    }
    else {
      console.log(name2)
      console.log(name1)
    }
  }

/*Bonus 1*/
  let lorem= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo, metus nec sodales vulputate, neque nisi tristique magna, et porttitor enim ipsum vel velit. Donec a arcu a nulla viverra tempus. Nulla aliquam, metus auctor condimentum laoreet, neque eros lacinia elit, at mollis ex felis a risus. Aliquam accumsan interdum eros ac volutpat. Pellentesque iaculis a mauris eget volutpat. Donec magna erat, vestibulum sit amet ipsum et, egestas pretium ante. Donec at vehicula tortor, pulvinar tempus ante. Fusce accumsan tortor et tristique volutpat. In varius elementum sem. Maecenas a imperdiet tellus. Proin consequat faucibus nisl. Etiam sed maximus felis, ut laoreet sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Nulla volutpat urna arcu, dignissim laoreet dui consectetur sit amet. Suspendisse faucibus diam vitae mi aliquam, non placerat tellus interdum. Maecenas pellentesque vehicula rutrum. Maecenas eleifend odio est, ac egestas nulla posuere et. Quisque a nisi vel erat fringilla suscipit. Sed pharetra dolor lorem, a semper ante egestas sit amet. Mauris risus neque, sagittis eu feugiat at, tempor in ipsum. Praesent condimentum a magna ac rutrum. Praesent a massa non neque dapibus aliquet. Duis non vestibulum elit, ut molestie eros. Mauris eleifend mollis ligula, at blandit ante cursus vitae. Nulla odio tortor, condimentum malesuada turpis at, aliquam ultricies lorem. Sed volutpat arcu dignissim ipsum varius vehicula. Nullam vehicula tristique ante, sed gravida ex interdum vitae. Suspendisse ut ipsum efficitur, blandit ligula efficitur, tempus nibh. Phasellus arcu mi, sodales sit amet lacus et, sollicitudin semper odio. Nulla ut lectus quis mi volutpat ullamcorper. Nulla aliquet turpis id erat vulputate auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas in eleifend tortor. Maecenas imperdiet enim sit amet cursus volutpat. Pellentesque ut metus maximus, facilisis nisl ut, vehicula quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sapien sapien, efficitur non orci non, laoreet ullamcorper ligula. Quisque magna lorem, gravida at efficitur ut, posuere eget justo."
  
  let countWords1 = (string) => {
    return string.split(" ").length
    }

  let countWords2 = (string) => {
    let newArr = string.split(" ")
    let etCounter = 0
    for(let e of newArr) {
      if(e === "et") {
        etCounter++
      }
    }
    return etCounter
  }
  
 
  let phraseToCheck = (phrase) => {
    let newSentence = ""
    let found = false
    for(let i=phrase.length-1; i>=0; i--) {
        newSentence+=phrase[i]
    }
    console.log(newSentence)
    if(newSentence===phrase) {
      found = true
    }
    return found
  }
