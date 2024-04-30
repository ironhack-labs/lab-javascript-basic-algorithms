// Iteration 1: Names and Input

const hacker1 = "Tiago";

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Daniel"

console.log(`The navigator's name ${hacker2}`)

// Iteration 2: Conditionals

const length1 = hacker1.length
const length2 = hacker2.length

if( length1 > length2){
    console.log(`The driver has the longest name, it has ${length1} characters.`)
} else if(length1 < length2){
    console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`)
} else { console.log(`Wow, you both have equally long names, ${length1} characters!`)}

// Iteration 3: Loops

let newWord = ""
for(let i=0; i< hacker1.length; i++){
    newWord += hacker1[i] + " ";
}
console.log(newWord.toUpperCase())

let newWord2 = ""
for(let i=hacker2.length -1; i>= 0; i--){
    newWord2 += hacker2[i];
}
console.log(newWord2)

if (hacker1.localeCompare(hacker2)===-1){
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2)===1){
    console.log("Yo, the navigator goes first, definitely.")
}else { console.log("What?! You both have the same name?")}

// Bonus 1 //

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida. Turpis cursus in hac habitasse. Sit amet volutpat consequat mauris. Hendrerit dolor magna eget est. Sem viverra aliquet eget sit amet tellus. Suscipit adipiscing bibendum est ultricies integer quis auctor. Fames ac turpis egestas integer. Ut diam quam nulla porttitor massa id neque. Ac feugiat sed lectus vestibulum mattis.

Turpis cursus in hac habitasse. Et magnis dis parturient montes nascetur ridiculus mus mauris. Eu mi bibendum neque egestas congue quisque. Mauris ultrices eros in cursus turpis massa tincidunt dui. Nullam eget felis eget nunc lobortis. Fermentum odio eu feugiat pretium nibh ipsum. Ipsum dolor sit amet consectetur adipiscing elit ut. Nibh tellus molestie nunc non blandit massa. Leo a diam sollicitudin tempor id eu nisl nunc mi. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Vitae nunc sed velit dignissim sodales ut. Sed viverra tellus in hac habitasse. Egestas maecenas pharetra convallis posuere. Tincidunt arcu non sodales neque sodales. Arcu bibendum at varius vel pharetra vel turpis. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in.

Adipiscing elit duis tristique sollicitudin nibh sit. Libero volutpat sed cras ornare arcu. Adipiscing diam donec adipiscing tristique risus nec feugiat. Ac tortor vitae purus faucibus. Amet consectetur adipiscing elit duis tristique. Sed vulputate mi sit amet. Eget gravida cum sociis natoque penatibus et magnis dis. Faucibus a pellentesque sit amet. Cras fermentum odio eu feugiat pretium nibh ipsum. Fames ac turpis egestas maecenas pharetra. Platea dictumst quisque sagittis purus sit amet volutpat. Mauris vitae ultricies leo integer malesuada. Massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit. Orci ac auctor augue mauris augue neque gravida in fermentum. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Laoreet non curabitur gravida arcu. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ac tortor dignissim convallis aenean et tortor at risus viverra.`

let totalWords = 0;
let totalEt = 0;
for(let i=0; i< longText.length; i++){
    const chi = longText[i];
    const chi2 = longText[i+1];

    if(chi === " "){
        totalWords++
    } else if(chi === "e" && chi2 === "t"){
        totalEt++
    }
}
console.log("total words",totalWords + 1)
console.log("total et", totalEt)


