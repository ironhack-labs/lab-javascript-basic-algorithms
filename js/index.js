// Iteration 1: Names and Input

const hacker1 = 'Neo'

console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Trinity'

console.log(`The navigator's name is ${hacker2} `)



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let capital = ''
for (i = 0; i < hacker1.length; i++) {
    capital += hacker1[i].toUpperCase()
}
console.log(capital)

console.log(`${hacker2[6]}${hacker2[5]}${hacker2[4]}${hacker2[3]}${hacker2[2]}${hacker2[1]}${hacker2[0]}`)


if (hacker1[0] < hacker2[0]) {
    console.log(`The driver's name goes first.`)
} else if (hacker2[0] < hacker1[0]) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
}


//Bonus 1

let loren = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula nibh iaculis efficitur porttitor. Aenean blandit laoreet hendrerit. Maecenas sed consequat ante. Integer neque libero, finibus ac vehicula at, consectetur eget erat. Nullam at maximus elit. Donec ut venenatis ipsum, a imperdiet neque. Aenean at bibendum arcu. Vivamus magna massa, ultricies in rhoncus a, viverra a eros. Mauris tincidunt quis neque ac placerat. Duis a augue nec ante mattis condimentum. Proin at nisl neque. Cras in tortor vel diam volutpat luctus. Nullam cursus, tortor nec viverra lacinia, felis dui tristique lorem, sagittis pellentesque nisi ipsum eget nunc. Quisque pharetra porta leo, sit amet semper dolor convallis et. Etiam vitae orci euismod, venenatis mauris eget, fringilla urna. Pellentesque sed magna mi. Phasellus eros enim, vestibulum ac porttitor eget, commodo sit amet leo. Maecenas malesuada, ex et rhoncus consectetur, ligula libero laoreet eros, ut elementum libero justo vel sapien. Quisque finibus quis eros quis rutrum. Morbi porta nisi augue, ac auctor augue fringilla facilisis. Proin euismod dignissim quam eu vulputate. Aliquam placerat nunc enim, viverra accumsan urna pulvinar quis. Suspendisse quis vulputate nibh. Aenean non augue dictum, fermentum elit id, hendrerit dui. Ut et urna vitae velit imperdiet egestas quis a lacus. Sed tincidunt tellus nisl. Donec id blandit nulla. In cursus purus sed ante accumsan convallis. Donec vulputate est eu iaculis vestibulum. Aliquam cursus dui in sem convallis, sed feugiat odio sagittis. Mauris sit amet convallis massa, sed dignissim justo. Pellentesque vel iaculis augue. Nulla eu sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In pulvinar massa sit amet cursus sollicitudin. Curabitur tincidunt velit pellentesque euismod egestas. Sed pulvinar urna id sem pulvinar iaculis. Phasellus id tincidunt nunc, eget scelerisque libero. Etiam id gravida sem. Pellentesque at dictum justo. Duis libero velit, accumsan ac imperdiet a, mollis vitae urna. Donec volutpat odio sit amet massa suscipit, non scelerisque ligula molestie. Praesent pulvinar lorem at nulla pharetra, sed rutrum arcu interdum.'

console.log(loren.split(" ").length)

let counter = 0
for (i = 0; i < loren.length; i++) {
    if (loren[i] === 'e') {
        if (loren[i +1] === 't') {
            counter += 1
        }
    }
}

console.log(counter)

let counter = 0
for (i = 0; i < loren.length; i++) {
    if (loren[i] === 'e' && loren[i+1] === 't' && loren[i-1] === ' ' && (loren[i+2] === ' ' || loren[i+2] === '.' || loren[i+2] === ',')) {
        counter += 1
    }        
}

console.log(counter)
