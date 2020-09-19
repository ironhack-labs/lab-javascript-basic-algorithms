// Iteration 1: Names and Input

console.log("I'm ready!");

let hacker1 = "Daniel"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Natali"
console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length === hacker2.length)
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)



// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" "))
console.log(hacker2.split("").reverse().join(""))



// BONUS 1


if (hacker1.slice(1) < hacker2.slice(1)){
    console.log(`The driver's name goes first.`)
  } else if(hacker1.slice(1) > hacker2.slice(1)){
    console.log(`Yo, the navigator goes first definitely.`)
  } else if (hacker1.slice(1) === hacker2.slice(1))
    console.log(`What?! You both have the same name?`)
  
  
    let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida aliquam lacus, vitae fermentum tellus pretium sed. Sed congue suscipit augue et cursus. Cras aliquam gravida tellus, quis semper dui consequat sit amet. Curabitur aliquam dignissim est, in suscipit risus faucibus et. Nam eu tincidunt lorem. Ut nec viverra ex. Aliquam erat volutpat. Donec congue ultrices elit eu cursus. Etiam massa nibh, mollis ut eros ut, maximus vestibulum nibh. Maecenas quis nibh consectetur, cursus dolor vitae, tempor tellus. In scelerisque, metus ut sodales venenatis, enim nulla luctus libero, a porttitor augue mauris sit amet ante. Curabitur id fermentum risus, ac dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tellus arcu, lobortis non cursus a, dapibus quis lorem.
  
  Donec dui mi, vulputate sed tempor euismod, pulvinar vitae libero. Praesent cursus lorem in ex vestibulum interdum. Suspendisse volutpat mauris at sapien gravida viverra. Nullam cursus tincidunt volutpat. Suspendisse potenti. Donec porta urna sed lectus aliquam, in egestas ligula iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor aliquam rutrum. Sed aliquet leo vel elit consectetur, at blandit tellus pellentesque. Ut aliquet in eros sit amet tristique. Sed erat lacus, accumsan id ipsum at, eleifend ultricies libero. Curabitur sed dolor pulvinar, pharetra arcu vel, aliquet justo. Etiam et justo tincidunt, convallis ex at, maximus mi. Aenean finibus tortor ligula, in facilisis urna facilisis quis.
  
  Suspendisse dictum eleifend est, et consectetur turpis tincidunt sed. Suspendisse suscipit velit erat, ut gravida dui posuere quis. Phasellus aliquam lacus sit amet ipsum vulputate semper. Vestibulum commodo eros quis risus venenatis, fringilla malesuada ligula mattis. Vestibulum in luctus magna. Donec vel felis viverra, malesuada turpis et, rhoncus urna. Phasellus mollis consectetur nisi, nec tincidunt nisl consectetur id. Praesent euismod et lacus in luctus. Proin mollis lectus et risus tempus, eu interdum mi placerat. Fusce id metus ullamcorper quam aliquam varius aliquam et diam. Suspendisse euismod rhoncus aliquet. Quisque dictum venenatis varius. Nam congue tristique mauris consequat efficitur. Curabitur ut efficitur magna. Ut tempus dui nec eros malesuada elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus.`
  
  
  console.log(paragraphs.split(" ").length)
  console.log(paragraphs.split("et").length)
  
  
  
  // BONUS 2 == NO PUDE! :'(