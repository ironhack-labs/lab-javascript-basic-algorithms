// Iteration 1: Names and Input
let hacker1 = "Elisenda"
console.log(`The drivers name is ${hacker1}`)
let hacker2 = "Felipe"
console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
hacker2.length} 
else if (hacker1.length == hacker2.length) {
  console.log("Wow, you both have equally long names, characters!")
} else {
  console.log("Woow, you're both a hackers")
}



// Iteration 3: Loops

//3.1
let text = "";
let person = hacker2.toUpperCase().split("").join(" ")
let dirver;
for (dirver in person) {
  text += person[dirver] + " ";
}

console.log(text)
//3.2
let text2 = "";
let person2 = hacker2.split("").reverse().join("")
let driver2;
for (driver2 in person2) {
  text2 += person2[driver2] ;
}

console.log(text2)

//3.3
//Bonus 1
let lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin leo ultrices elit maximus, nec finibus eros convallis. Suspendisse potenti. Integer placerat turpis quis lorem malesuada, sit amet vulputate lacus tincidunt. Nullam a ipsum malesuada, sollicitudin quam at, tempus ex. Quisque hendrerit sem vel odio euismod porta. Curabitur efficitur massa sed nunc convallis, eget posuere tortor volutpat. Aenean auctor suscipit massa, non eleifend est scelerisque id. Sed a neque sed sapien venenatis dignissim."
"Suspendisse porta sem odio, non volutpat mauris lacinia id. Sed sagittis, metus sit amet congue ultrices, nibh lectus suscipit risus, malesuada venenatis lorem nisi eu nibh. Aliquam erat volutpat. Praesent eget ipsum quam. Suspendisse sollicitudin, nisl ut gravida semper, odio lacus luctus libero, nec commodo ligula ipsum sit amet dui. Cras malesuada velit eget mi vehicula eleifend. In dignissim mauris in odio tristique, at consequat nunc sollicitudin. Fusce auctor ligula nisl, eget maximus orci rutrum id. Integer vel justo vitae sapien posuere pretium. Nam condimentum tempus est vitae fermentum. Nunc sed sem pharetra nisl scelerisque suscipit et vel ligula."
"Donec varius magna ac elit finibus vestibulum. Duis dictum odio a elit facilisis, non finibus ante dictum. Nulla vitae ipsum facilisis, interdum diam non, pretium nisi. Mauris vitae odio quis augue consequat tempor. Proin ultrices dui eget feugiat viverra. Suspendisse quis metus enim. Proin non interdum mauris. Praesent luctus, justo eget molestie gravida, velit lorem semper ante, aliquet cursus orci lacus in urna. Aenean imperdiet tempus lacus, id eleifend leo faucibus vitae. Pellentesque volutpat, sapien iaculis bibendum ultricies, felis lectus ullamcorper est, in commodo ex arcu sed massa. Phasellus fermentum mauris vel sollicitudin imperdiet. Aliquam suscipit sit amet velit vel suscipit."
//1.2
console.log(lorem.split("").length)