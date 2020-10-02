// Iteration 1: Names and Input

let hacker1 = "Vera"

console.log("The driver's name is " + hacker1)

let hacker2 = "Santi"

console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + "characters.")
  } else if (hacker2.length > hacker1.length){
    console.log("It seems that the navigator has the longest name, it has " +  hacker2.length + " characters.")
  } else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!.")
  }

// Iteration 3: Loops

function allCapsSpaced(str) {
    let initString = ""
  
    for(i=0; i < hacker1.length; i++){
      initString = initString + str[i].toUpperCase() + " "
    }
    initString.trim()
    return initString
  }
  
  allCapsSpaced(hacker1)
  
  function reverseOrder(str) {
    let newString = ""
    for(i=str.length-1; i >= 0 ; i--) {
      newString = newString + str[i]
    }
    return newString
  }
  
  reverseOrder(hacker2)
  
  if(hacker1 > hacker2) {
    console.log("The driver's name goes first.")
  } else if(hacker2 > hacker1) {
    console.log("Yo, the navigator goes first definitely.")
  } else {
    console.log("What?! You both have the same name?")
  }

  // Bonus 1

  let paragraphs= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet consequat dui. Ut vitae ultrices sem. Duis pharetra mattis arcu et venenatis. Phasellus non ultricies est, condimentum efficitur quam. Vestibulum ut nulla venenatis, bibendum ante in, blandit est. Cras faucibus molestie orci ac feugiat. Integer eleifend eros sed ipsum sagittis congue. Nulla laoreet felis sed libero dictum, vitae tincidunt eros fringilla. Integer id faucibus nibh, vel vehicula justo. Cras ultrices nulla sed tortor ornare gravida. Aliquam blandit malesuada nunc vitae imperdiet. Praesent blandit, erat id placerat interdum, justo sem commodo neque, vitae dignissim leo est eget risus. Sed malesuada, turpis fermentum volutpat accumsan, dui lacus consequat orci, et vehicula nisl quam ac enim. Curabitur vel urna a ex malesuada tempus. Curabitur semper dolor sit amet viverra condimentum. Ut ut viverra lectus, viverra egestas odio. Vestibulum at cursus tellus, et scelerisque mauris. Curabitur congue magna sit amet consectetur finibus. Proin pretium laoreet faucibus. Suspendisse vitae mi dignissim nisi dignissim efficitur eget in leo. Integer nec eros sollicitudin, consequat massa sed, aliquam quam. Vestibulum ultrices ex leo, ac imperdiet libero condimentum eu. Pellentesque eu ipsum quam. Nulla viverra euismod quam, a tincidunt lorem rhoncus venenatis. Proin scelerisque egestas neque, eu tincidunt lectus tempus vel. Nunc eu ex massa. Mauris volutpat mi eget cursus sagittis. Nulla at felis sed tortor maximus ultrices. Vivamus pellentesque tortor ut ex commodo hendrerit. Sed sapien est, volutpat in rutrum ut, accumsan eget felis. Quisque dictum odio vel dapibus luctus. Phasellus quis tortor tortor. Suspendisse suscipit, ligula sed imperdiet auctor, nisi nisl ultrices libero, non tempor magna nunc in nisl. Nunc rhoncus, tortor at rutrum consequat, magna neque hendrerit eros, ac ultricies sapien est vitae tellus. In id suscipit felis, tincidunt tempus justo. Suspendisse pretium tincidunt eros ut consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum suscipit iaculis augue sed commodo."

let spaces = 0
  for(i=0; i < paragraphs.length; i++) {
    if(paragraphs[i] === " ") {
      spaces++
    }
  }

console.log(spaces-2) //uso -2 porque los párrafos que comienzan en otra línea no me dejaban crear un solo string. Entonces reemplace espacios vertical (pressing enter) por un espacio horizontal (pressing spacebar). 