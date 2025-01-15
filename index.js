// Iteration 1: Names and Input

const hacker1 = "Néstor"

console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Óscar"

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops


const capitalDriver = hacker1.toUpperCase()
let separateDriver = ""
for (i =0; i< capitalDriver.length;i++){

    separateDriver = separateDriver + `${capitalDriver[i]} `
}

console.log(separateDriver)


hacker1.length

let reverseDriver = ""
for(i = 0; i < hacker1.length;i++) {
    reverseDriver = reverseDriver + `${hacker1[hacker1.length -1 - i]}`
}

console.log(reverseDriver)



if(hacker1.localeCompare(hacker2) == 1){
    console.log(`The driver's name goes first.`)
}else if(hacker1.localeCompare(hacker2) == -1){
    console.log(`Yo, the navigator goes first, definitely.`)
}else {
    console.log(`What?! You both have the same name?`)
}




// Bonus 1

const longtext = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nunc tristique, facilisis erat et, porttitor velit. Sed at lectus in erat volutpat aliquam vitae ac mi. Aenean facilisis, diam sed lobortis elementum, sem mauris imperdiet turpis, at lacinia nulla metus in ante. Phasellus dui enim, hendrerit eget nisi lacinia, pharetra pulvinar ex. Proin rutrum et felis et dignissim. Nulla eget metus dui. Nulla felis lectus, porttitor et mauris ac, ullamcorper volutpat diam. Pellentesque varius ullamcorper faucibus. Duis facilisis leo lacus, vel dapibus urna accumsan sit amet.

Aliquam semper ac ex id sagittis. Vestibulum pulvinar, dolor nec dignissim tristique, odio dui dignissim mi, eu aliquet ipsum ex nec libero. Morbi aliquet eu sem id dictum. Donec accumsan venenatis erat vitae ullamcorper. Duis nisi tellus, lobortis eu viverra non, interdum sed ligula. Ut dictum luctus enim a posuere. In venenatis varius lacinia. In sodales et magna at congue. In finibus justo a tortor dignissim suscipit. Nunc ex elit, aliquet quis porta non, ultricies ut turpis. Cras interdum lacus est, accumsan egestas magna volutpat ut. Sed lectus nibh, condimentum a sapien egestas, interdum consequat neque. Suspendisse non massa tempor, sollicitudin purus at, consequat orci. Proin vel aliquet nulla. Phasellus vitae massa odio.

Mauris sed aliquet enim. In pretium viverra dui porta aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis nisl id nisi eleifend scelerisque eu id sapien. Vivamus nisl lacus, scelerisque nec tellus in, porttitor malesuada eros. Suspendisse ornare enim ut sem efficitur sagittis. Nullam commodo sem id magna cursus, ut congue mi mattis. Nulla nec viverra erat. Cras lacinia ullamcorper posuere. Donec mattis turpis maximus, ullamcorper ante sit amet, egestas ipsum. Morbi consectetur dolor in arcu pulvinar, nec tempor purus pharetra. Nullam hendrerit venenatis arcu. Donec tincidunt sit amet lectus in imperdiet. Sed porttitor nulla eget quam rhoncus commodo. Sed fringilla mauris nec fringilla porttitor.

Donec lacinia blandit cursus. Praesent sed erat at augue bibendum malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam in libero et nulla tristique cursus. Phasellus sed interdum urna. Suspendisse consequat arcu justo, facilisis vulputate est pharetra non. Quisque ultrices dolor in maximus rutrum. Nulla viverra est felis, sed scelerisque justo fermentum sed. Vestibulum nisl mauris, lacinia ut arcu ac, fringilla pulvinar augue. Quisque ac quam quis nunc ullamcorper tristique eu quis enim. Nam pulvinar tristique fermentum. Fusce eu fermentum ex.

Ut et ipsum euismod, elementum justo vitae, ornare erat. Nulla nec aliquam dui. Nullam porttitor justo id enim pulvinar, nec suscipit elit ornare. In ornare leo eget turpis imperdiet, eget rhoncus eros pretium. Quisque at nulla sit amet lacus hendrerit dapibus. Pellentesque consequat ac purus placerat tincidunt. Duis efficitur velit a orci tempor, at porta arcu ornare. Nullam ultricies diam ac purus finibus lobortis. Duis sollicitudin lorem ut gravida dapibus. Vivamus mollis elementum erat non cursus. Sed vel ex in orci consectetur fermentum eu id metus. Nulla mollis euismod gravida. Duis diam nisl, efficitur euismod commodo in, laoreet non nisl. Sed accumsan sit amet ipsum eget gravida.`


console.log(longtext.split(/\s+/).length);


// Bonus 2

const phraseToCheck = `No 'x' in Nixon`

const palindromo1 = phraseToCheck.replace(/[^A-Z\d\s]/gi, '')

const sinEspacio = palindromo1.replace(/\s+/g, '')

let reversePal = ""
for(i = 0; i < sinEspacio.length;i++) {
    reversePal = reversePal + `${sinEspacio[sinEspacio.length -1 - i]}`
}

 if(sinEspacio.toUpperCase() == reversePal.toUpperCase()) {
    console.log(`${phraseToCheck} is a palindrome!!`)
 } else {
    console.log(`Sorry, ${phraseToCheck} is not a palindrome :(`)
 }

