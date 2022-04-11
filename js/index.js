// Iteration 1: Names and Input

let hacker1 = "Leticia";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Keven";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if(hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, XX characters!`)
}

// Iteration 3: Loops
let spacedLetters = "";
for(let i = 0; i < hacker1.length; i++) {
    spacedLetters += hacker1[i]+" ";
   }

   console.log(spacedLetters.toUpperCase())

let reversedName = "";
   for(let i = hacker2.length -1; i >= 0; i--) {
        reversedName += hacker2[i]
       }  

    console.log(reversedName)

    if(hacker1.localeCompare(hacker2) === -1){
        console.log(`The driver's name goes first`)
    }
    else if(hacker1.localeCompare(hacker2) === 1){
        console.log(`Yo, the navigator goes first definitely.`)
    }
    else if(hacker1.localeCompare(hacker2) === 0){
        console.log(`What?! You both have the same name?`)
    }


    //Bonus 1

    let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et scelerisque nulla. Fusce lacinia interdum sem, id pharetra libero scelerisque eget. Vestibulum tempor ex in lacus commodo, eget elementum nulla efficitur. Nunc congue mauris nec nunc mattis, volutpat consequat turpis eleifend. Nunc tristique arcu vitae justo pharetra porta. Aenean ac pharetra quam. Integer in convallis turpis, ornare tincidunt nulla. Duis vulputate elit id laoreet porttitor. Vestibulum facilisis enim quis est tempor, ac dignissim dolor dignissim. Morbi aliquet ipsum a sem dapibus, in ornare diam tincidunt.

    Vestibulum a neque vitae lectus porta facilisis. Sed varius, orci eu sodales fringilla, diam odio venenatis felis, eget mattis leo magna nec lorem. Maecenas id faucibus quam. Praesent venenatis urna nec metus tempus feugiat. Aenean vitae leo vestibulum, rutrum purus eget, tincidunt mauris. In non dui dictum, sollicitudin massa vel, tincidunt tortor. Nunc cursus, leo non dignissim auctor, turpis orci euismod neque, vitae euismod metus magna in purus. Etiam sodales non quam vel auctor. Morbi consectetur volutpat egestas. Nullam at interdum sapien. Curabitur ut nibh augue.
    
    Maecenas in urna et massa aliquam rutrum. Praesent elementum maximus tellus, sed gravida metus interdum vel. Nunc ac magna diam. Donec rhoncus dolor lacus, et laoreet massa vestibulum quis. Cras tristique nibh dignissim eros rhoncus lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis dignissim mauris sit amet enim placerat dapibus. Integer commodo lacus diam, non porttitor mauris dapibus a. Nunc vitae luctus ex."