// Iteration 1: Names and Input
let hacker1 = 'Adrian'
console.log(`The driver's name is ${hacker1}`)
let hacker2 = 'Adria'
console.log(`The navigator's name is ${hacker2} `)

// Iteration 2: Conditionals
//Compare the lengths of names
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }

// Iteration 3: Loops

//Split Hacker1 name
let splitHacker1 = hacker1.split("")
let joinHacker1Array = splitHacker1.join(" ")
console.log(joinHacker1Array.toUpperCase())

//Reverse hacker2 name
let splitHacker2 = hacker2.split("")
//console.log(splitHacker2)
let reverseHacker2Array = splitHacker2.reverse()
//console.log(reverseHacker2Array)
let joinHacker2Array = reverseHacker2Array.join("")
console.log(joinHacker2Array)

//Lexicographic order
console.log(hacker1.localeCompare(hacker2))
if ((hacker1.localeCompare(hacker2)) == -1) {
  console.log("The driver's name goes first.")
} else if ((hacker1.localeCompare(hacker2)) == 1){
 console.log("Yo, the navigator goes first definitely.") 
} else {
  console.log("What?! You both have the same name?")
}

//Bonus 1 
let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id iaculis nisl. Fusce maximus felis eu porttitor congue. Vestibulum auctor sed erat non elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer vitae nisi fringilla, egestas tortor vel, scelerisque turpis. Nunc vitae diam non libero ornare volutpat. Ut ac ante porttitor, viverra neque et, imperdiet nisi. Phasellus mollis neque a lorem tristique tempor. Fusce facilisis vel felis in interdum. Morbi malesuada magna eu massa cursus, hendrerit tincidunt nisi posuere. Duis sodales odio eu dolor feugiat, a iaculis risus tincidunt. Donec et dui justo. In ultricies quis leo in molestie. Aliquam eget enim feugiat, consectetur dolor sit amet, tristique nulla. Etiam ultricies sapien leo, ut cursus massa convallis quis. Ut ac diam sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer et eros leo. Maecenas a egestas ex, et egestas turpis. Curabitur dui lorem, aliquet a bibendum a, imperdiet et est. Pellentesque efficitur, arcu sit amet fringilla congue, nisl odio aliquam dolor, sed condimentum ante metus quis orci. Suspendisse commodo tincidunt venenatis. Morbi convallis vitae eros eu dapibus. Nullam eu lectus orci. In congue imperdiet augue, in commodo eros pretium ut. Duis aliquam dolor magna. Morbi felis nunc, tristique at luctus quis, mattis in risus. Fusce leo nunc, porttitor ac justo in, commodo luctus elit. Maecenas vestibulum ornare sapien, vitae imperdiet enim sollicitudin mattis. Maecenas vitae neque sapien. Sed laoreet imperdiet neque, quis molestie dolor maximus ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc consequat, dui et faucibus suscipit, enim magna placerat neque, ac egestas arcu purus in lorem. Duis faucibus mi suscipit est hendrerit aliquet. In convallis lorem a vulputate accumsan. In pretium dolor nec semper hendrerit."
console.log(paragraphs.split(" ").length)

console.log(paragraphs.match(/et/g).length)
