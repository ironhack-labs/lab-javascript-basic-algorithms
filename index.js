// Iteration 1: Names and Input
const hacker1 = "Sora"

const hacker2 = "Riku"

console.log(`The driver's name is ${hacker1}`)

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}

// Iteration 3: Loops

let hacker1driver = ""

for (let i=0; i < hacker1.length; i++) {
    const dri = hacker1[i].toUpperCase()
    hacker1driver += dri + " "
    
}

console.log(hacker1driver.trim())

let hacker1Reversed = ""

for (let i = hacker1.length -1; i >= 0; i--) {
    const char = hacker1[i];
    
    hacker1Reversed += char;
}

console.log (hacker1Reversed)

let drive = false

for(let i= 0; i < Math.min(hacker1.length, hacker2.length); i++){

if(hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`)
    drive = true
    break
    
} else if (hacker1[i] > hacker2[i]) {
    console.log(`Yo, the navigator goes first, definitely.`)
    drive = true
    break
}
} if (!drive) {
    console.log(`What?! You both have the same name?`)
}

let count = 0;

const longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

for(let i = 0; i < longText.length; i++) {
    const long = longText[i] + longText[i + 1];
    if (long === "et"){
        count++;
    }
}

console.log("count: ", count)

