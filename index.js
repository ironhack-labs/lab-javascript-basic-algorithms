// Iteration 1: Names and Input

let = hacker1 = "John"
  let = hacker2 = "Jane"
  console.log("The driver's name is " + hacker1)
  console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
  
} else if(hacker1.length < hacker2.length){
  
console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
  
} else{

  console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops


console.log(hacker1.toUpperCase().split("").join(" "))

  console.log(hacker2.split("").reverse().join(""))

const compareResults = hacker1.localeCompare(hacker2)

if(compareResults === -1){
  console.log("The driver's name goes first.")

} else if(compareResults === 1){
  console.log("Yo, the navigator goes first, definitely.")
    } else{
  console.log("What?! You both have the same name?")
    }


// bonus :


const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum, diam non malesuada sollicitudin, diam velit rhoncus nibh, vitae iaculis tellus ligula id sem. Aenean eu turpis et ligula faucibus ultricies. In bibendum, mi non suscipit venenatis, neque dui facilisis leo, ut lobortis lorem ipsum aliquam enim. Praesent et egestas sapien, nec molestie ligula. Quisque varius ac mi id aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In tempor, erat rhoncus fringilla maximus, tellus nisl iaculis orci, id gravida tellus orci placerat metus. Proin eu sem lacinia, mattis nisl a, aliquam ligula. In ac eros feugiat, placerat dolor sit amet, porttitor magna. Aenean facilisis turpis consectetur, tincidunt justo in, gravida urna. Phasellus id tempor odio. In molestie, enim tempus porttitor accumsan, ex nisi ornare nibh, a tristique sapien sem id nisi. Praesent eget magna a leo pharetra interdum ac vitae ligula. Fusce vestibulum ligula ut dui mattis, in facilisis tortor pretium. Donec nisl tellus, eleifend a auctor id, aliquam vitae nisl. Praesent convallis lacus eget nibh congue, posuere maximus enim vehicula. Sed tempor odio vitae urna pretium luctus. Sed condimentum maximus tortor, quis ornare quam vestibulum eu. Aenean posuere neque ex, non sollicitudin justo interdum non. Donec malesuada metus eu volutpat sollicitudin. Nulla hendrerit lacus at lacus bibendum porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique sagittis purus in facilisis. Donec blandit, ante id posuere finibus, lectus ex molestie sem, ac vehicula dolor nisl sed nisl. Curabitur et turpis a ipsum sodales sagittis. Aliquam euismod ornare massa id rutrum. Nullam condimentum porta dui eu mollis. Aliquam sagittis felis augue. Phasellus ut tellus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus gravida tempus. Quisque tristique sem et nunc fermentum vestibulum. Vivamus et consectetur quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis efficitur tellus at nibh vehicula, vel rhoncus arcu elementum. Duis quis venenatis orci. Ut sed libero dignissim, varius massa sit amet, tristique felis. Nulla sit amet diam ut enim venenatis lobortis. Morbi tincidunt ante et dolor luctus, sit amet tincidunt arcu porttitor. Curabitur vel arcu at quam efficitur iaculis. Donec ante nisi, scelerisque eu vehicula in, ultrices nec eros. Nam mattis elementum erat eu ultrices. Quisque luctus mauris quis sapien mollis, in maximus est pharetra. Vivamus feugiat mauris nec ullamcorper vehicula. Nulla sollicitudin non magna nec tincidunt."


const words = longText.split(/\s+/)     // Strange method found, ask in class ?!?!
const wordCount = words.length

const etCount = longText.match(/\bet\b/gi).length   // Strange method found, ask in class ?!?!

console.log(`Number of Words: ${wordCount}`)
console.log(`Number of times "et" appears: ${etCount}`)

 




let phraseToCheck = "Winter is Coming"

function paliphrase(str){
  const string = str.toLowerCase()
  const reversedString = string.split("").reverse().join("")    // need to search more about these "shortcuts"

  return string === reversedString
}
  

  if( paliphrase(phraseToCheck)){

    console.log(phraseToCheck + " is a palindrome for sure")
  } else{
    console.log(phraseToCheck + " is a palindrome? naah")
  }


paliphrase(phraseToCheck)
