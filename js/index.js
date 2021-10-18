// Iteration 1: Names and Input
const hacker1 = "David";
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Juan";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
const hacker1Length = hacker1.length

const hacker2Length = hacker2.length
if(hacker1Length > hacker2Length){
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`)
}else if(hacker2Length > hacker1Length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}else{
    console.log("Wow, you both have equally long names, XX characters!")
}


// Iteration 3: Loops
let driverCapital= "";
let navigationReverse = "";
for(let i=0; i<hacker1Length; i++){
    driverCapital += (hacker1[i].toUpperCase()+" ")
}
console.log(driverCapital)
for(let j=hacker2Length-1; j>=0; j--){
    navigationReverse += hacker2[j]
}
console.log(navigationReverse)
let combined = []
combined.push(hacker1, hacker2)
combined = combined.sort((a,b) => b.localeCompare(a))


if(hacker1 < hacker2){
    console.log("The driver's name goes first.")
}else if(hacker1> hacker2){
    console.log("Yo, the navigator goes first definitely.")
}else{
    console.log("What?! You both have the same name?")
}

//Bonus 1
let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mauris justo, tristique ac leo eu, condimentum eleifend est. Vestibulum elementum dui non metus tempor, vulputate convallis nunc aliquam. Suspendisse a odio in purus porttitor hendrerit. Praesent quis purus sodales, porta augue eget, facilisis augue. Nullam at lacus ut tortor consequat varius. Etiam accumsan nunc lorem, eget dictum sapien dictum ac. Quisque tristique ultricies lacus, nec varius turpis vehicula in. Sed feugiat dictum ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut mollis lacus tortor. Mauris vitae dui nisl. Aenean rhoncus mauris ante, maximus semper elit aliquet sit amet. Praesent facilisis, urna eget mollis lacinia, ante est euismod sapien, eget fermentum sem sapien at ligula. Duis porta imperdiet dui sed placerat.

Curabitur enim ex, consectetur pharetra commodo et, mattis ac lacus. Duis ac velit a est mollis tempor. Ut bibendum scelerisque molestie. Suspendisse venenatis, mauris ac sollicitudin maximus, felis arcu mattis ex, in ullamcorper turpis metus pulvinar neque. Sed bibendum, quam a lacinia lobortis, orci sapien semper turpis, eget volutpat est eros eu nisi. Ut molestie eleifend lorem, nec facilisis enim posuere in. Ut et urna ac ipsum luctus sollicitudin eget non tellus. Sed ornare velit vitae odio gravida tincidunt. Nunc tristique lacus in diam finibus imperdiet. Phasellus in purus eget tellus tincidunt tempus. Nulla facilisi. Phasellus dolor nisl, pretium ac interdum vitae, convallis eleifend ipsum. Vivamus elementum ullamcorper tellus a venenatis. Sed eget ligula risus.

Fusce convallis, felis et ultricies ornare, nulla arcu interdum mi, pellentesque cursus erat arcu at enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu elit augue. Morbi nec leo et mauris laoreet aliquam nec et lectus. Mauris vitae blandit neque. Etiam a nulla sit amet nisi vehicula molestie vitae vitae sapien. Vestibulum mattis placerat dapibus. Morbi lacinia, odio eget ullamcorper finibus, enim lorem tempor urna, et condimentum libero purus at lectus. Aenean placerat dui eu metus lobortis blandit sed in mi. Praesent mollis nulla nec odio accumsan eleifend. Donec vitae diam finibus, pulvinar ipsum a, ornare nulla. Maecenas non libero cursus, congue massa nec, feugiat nulla. In ac posuere lorem.`
var words = paragraphs.split(" ")
var count = 0;
console.log("There are "+words.length+" words.")
words.map((a)=>{
    if(a === "et"){
        count += 1
    }
})
console.log("Count for 'et' = "+count)

// Bonus 2
phraseToCheck = "step on no pets"
let itspalindrome = true

for(let i = 0, j= phraseToCheck.length-1; i<phraseToCheck.length, j>=0; i++, j--){
    if(phraseToCheck[i]!==phraseToCheck[j]){
        itspalindrome = false;
    }
}
if(itspalindrome === true){
    console.log(`${phraseToCheck} is a palindrome`)
}else{
    console.log(`${phraseToCheck} is not a palindrome`)
}
