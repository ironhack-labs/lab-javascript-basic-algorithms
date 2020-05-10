// Iteration 1: Names and Input
let hacker1 = "felipe"
console.log(" The driver`s name is " + (hacker1))
let hacker2 = "carla"
console.log("  The navigator`s name is "  +  (hacker2))

// Iteration 2: Conditionals
console.log (hacker1.length); //6
console.log (hacker2.length); //5
let driver  = hacker1.length
let navigator = hacker2.length
if(driver > navigator){
console.log("The driver has the longest name, it has" + (driver) + "characters");
} else if (navigator > driver){
   console.log ("It seems that the navigator has the longest name, it has" + (navigator) + "characters"); 
} else if (navigator == driver) {
  console.log("Wow, you both have equally long names, characters!");
} else{
  console.log("empty")
}


// Iteration 3: Loops

//3.1
let driver2 = "felipe"
console.log(driver2.toUpperCase().split("").join(" "))
//3.2
let driver1 = "felipe"
let driverStr = driver1.split("").reverse().join("")
console.log(driverStr)

//3.3
//Bonus 1
let lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin leo ultrices elit maximus, nec finibus eros convallis. Suspendisse potenti. Integer placerat turpis quis lorem malesuada, sit amet vulputate lacus tincidunt. Nullam a ipsum malesuada, sollicitudin quam at, tempus ex. Quisque hendrerit sem vel odio euismod porta. Curabitur efficitur massa sed nunc convallis, eget posuere tortor volutpat. Aenean auctor suscipit massa, non eleifend est scelerisque id. Sed a neque sed sapien venenatis dignissim."
"Suspendisse porta sem odio, non volutpat mauris lacinia id. Sed sagittis, metus sit amet congue ultrices, nibh lectus suscipit risus, malesuada venenatis lorem nisi eu nibh. Aliquam erat volutpat. Praesent eget ipsum quam. Suspendisse sollicitudin, nisl ut gravida semper, odio lacus luctus libero, nec commodo ligula ipsum sit amet dui. Cras malesuada velit eget mi vehicula eleifend. In dignissim mauris in odio tristique, at consequat nunc sollicitudin. Fusce auctor ligula nisl, eget maximus orci rutrum id. Integer vel justo vitae sapien posuere pretium. Nam condimentum tempus est vitae fermentum. Nunc sed sem pharetra nisl scelerisque suscipit et vel ligula."
"Donec varius magna ac elit finibus vestibulum. Duis dictum odio a elit facilisis, non finibus ante dictum. Nulla vitae ipsum facilisis, interdum diam non, pretium nisi. Mauris vitae odio quis augue consequat tempor. Proin ultrices dui eget feugiat viverra. Suspendisse quis metus enim. Proin non interdum mauris. Praesent luctus, justo eget molestie gravida, velit lorem semper ante, aliquet cursus orci lacus in urna. Aenean imperdiet tempus lacus, id eleifend leo faucibus vitae. Pellentesque volutpat, sapien iaculis bibendum ultricies, felis lectus ullamcorper est, in commodo ex arcu sed massa. Phasellus fermentum mauris vel sollicitudin imperdiet. Aliquam suscipit sit amet velit vel suscipit."
//1.2
console.log(lorem.split("").length)