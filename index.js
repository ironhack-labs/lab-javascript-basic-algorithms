// Iteration 1: Names and Input
const hacker2 = "Clara"
const hacker1 = "Cristina"

console.log(`The driver´s name is ${hacker1} `)
console.log(`The navigator´s name is ${hacker2} `)

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){



    console.log("The driver has the longest name, it has " + hacker1.length + " characters")
}else if(hacker1.length<hacker2.length){

    console.log("The driver has the longest name, it has " + hacker2.length + " characters")
}else {

    console.log("Wow, you both have equally long names, XX characters!")
}


// Iteration 3: Loops

let driverCapitalLetter = hacker1.toUpperCase()

let h1Spaced = ''

for (let i = 0; i < driverCapitalLetter.length; i++) {

let charactertoAdd = driverCapitalLetter[i]

    h1Spaced += charactertoAdd + ' '

}

console.log(h1Spaced)


// BONUS 1

let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc convallis, felis non eleifend ultrices, ante lacus venenatis libero, vitae fringilla elit justo in mi. Morbi eu gravida odio. Maecenas ut mattis eros. Sed ultrices nisl iaculis tellus tincidunt, eget auctor augue finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus faucibus condimentum semper. Ut id scelerisque nulla, a pulvinar ligula. In quis dignissim purus. Fusce a luctus augue. Suspendisse sit amet odio velit. Morbi metus sapien, bibendum varius eleifend sit amet, rhoncus sit amet dui. Sed vitae dignissim sem. Nunc sed ipsum sed massa eleifend ultricies ac ut lorem. Donec sagittis faucibus nisl at aliquam. Mauris quis enim a orci dignissim mattis. Proin tempus enim arcu, sed porta sapien tristique non. Sed convallis pellentesque dui, in fermentum nisl imperdiet ac. Vivamus nec blandit lectus. Fusce luctus purus ac gravida commodo. Proin tempor tempor tristique. Fusce faucibus aliquam velit eu lacinia. Maecenas consequat imperdiet dignissim. Fusce tincidunt pulvinar ullamcorper. Ut vel aliquet turpis. Aenean vel eleifend sem, ultrices egestas massa. In suscipit congue imperdiet. Duis dictum, felis vehicula imperdiet commodo, ante mauris porttitor nunc, vel pellentesque elit est non turpis. Vivamus rutrum fermentum consequat. Duis vel dolor et elit porta semper nec eu ante. Sed non purus justo. Morbi lacinia cursus aliquet. Quisque ut sem in ex eleifend dapibus sit amet vel mi. Morbi blandit libero nec tempus tempus. Phasellus pretium ipsum vitae neque elementum fermentum eu non nisl. Integer id aliquet augue. Donec congue sollicitudin mauris sit amet fermentum. Aliquam ex tellus, tempus at porttitor quis, sagittis eget massa. Duis malesuada magna at lacus iaculis, ut bibendum massa pretium.'


// numero de palabras = numero de espacios + 1
// tengo una mesa roja. = espacio1 + espacio2 + 1 = 3 

// de acuerdo al feedback en Student Portal usamos split y una variable nueva para contar las palabras:

/*
let totalWords = 0
longText.split('').forEach(word => {
    totalWords++
});

console.log(`number of words: ${totalWords}`)
*/
