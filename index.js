// Iteration 1: Names and Input

const hacker1 = "Diego"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "María"
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals

const hacker1Length = hacker1.length
console.log(hacker1Length)

const hacker2Length = hacker2.length
console.log(hacker2Length)


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2Length}characters`)
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the ${hacker2} has the longest name, it has ${hacker2Length} characters`)
}

else {
    console.log(`What?! You both have the same name?`)
}


// Iteration 3: Loops

//parte 1

let hacker1Word = ""

for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i]
    hacker1Word += char + ' '
}
console.log(hacker1Word.toUpperCase())

let hacker2Word = ""

//parte 2

for (let i = hacker2.length - 1; i >= 0; i--) {
    const char2 = hacker2[i]
    hacker2Word += char2
}
console.log(hacker2Word)


//parte 3

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar lorem elementum, ultricies nisl vel, pulvinar purus. Aenean metus arcu, interdum ut libero et, faucibus molestie ligula. Aliquam erat volutpat. Nulla purus lacus, pulvinar id orci scelerisque, dapibus volutpat justo. Aenean libero velit, molestie nec aliquet sit amet, ultricies non erat. Fusce vestibulum ut dolor sodales placerat. Morbi sodales purus enim, ut pulvinar ipsum porta id. Praesent in lacinia justo. Vestibulum et dapibus elit. Vestibulum ac pharetra purus. Suspendisse malesuada tincidunt arcu, in pulvinar sem eleifend vulputate. Duis blandit sodales rutrum. In vehicula dui nec ullamcorper tempor. Phasellus elit lacus, mollis quis sem in, volutpat aliquet ante. Pellentesque maximus feugiat dignissim.
Praesent mauris justo, finibus ac odio et, sodales ullamcorper dolor.Vestibulum iaculis, sapien eget efficitur dignissim, sem tellus vestibulum dolor, vel viverra orci purus eget tortor.Nullam eu hendrerit quam.Quisque in dignissim velit.Vivamus blandit tincidunt ex, in fermentum risus commodo quis.Integer ac ipsum blandit augue euismod fermentum.Nam eget risus diam.Aliquam vitae dolor rhoncus odio volutpat ultrices eget ac lorem.Etiam diam tellus, fringilla nec risus a, porta auctor quam.Nunc ut justo justo.
Nulla facilisi.In vulputate pellentesque condimentum.Curabitur nec nulla libero.Integer a vehicula dui, in semper justo.Morbi sit amet leo malesuada, mattis eros sodales, maximus lorem.Duis tempor diam non dolor convallis rutrum.Morbi facilisis sapien felis, ut egestas nibh auctor vitae.Vivamus pulvinar nibh a leo tincidunt venenatis.`

let count = " "

for (let i = 0; i < longText.length; i++) {
    count++
}
console.log(count)





