// Iteration 1: Names and Input

let hacker1 = "miguel";
console.log("The driver's name is ", hacker1)
let hacker2 = "victor"
console.log("The navigator's name is ", hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
        console.log("The driver has the name, it has",hacker1.length ,"characters")
    } else if (hacker1.length < hacker2.length){
        console.log("It seems that the navigator has the longest name, it has",hacker2.length,"characters")
    } else if (hacker1.length === hacker2.length){
        console.log("Wow, you both have equally long names,",hacker1.length, "characters!")
    }


// Iteration 3: Loops

let w = new String();
for (let i = 0; i < hacker1.length; i++){
    w = w +" "+ hacker1[i].toUpperCase()
}
console.log(w)

let h = new String();
for (let i = hacker2.length -1; i >= 0 ; i--){
    h = h + hacker2[i]
}
console.log(h)

if (hacker1 === hacker2){
        console.log("What?! You both have the same name?")
    } else if (hacker1 < hacker2){
        console.log("The driver's name goes first.")
    } else if (hacker1 > hacker2){
        console.log("Yo, the navigator goes first definitely.")
    }

//Bonus 1

var z = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare justo lacinia, porta metus quis, eleifend erat. Donec pulvinar justo eget magna iaculis, eu elementum dui auctor. Curabitur et luctus quam. Phasellus scelerisque felis ut odio egestas, sed vulputate nibh feugiat. Duis eu quam mollis, cursus tellus at, vehicula diam. Nunc sit amet eros efficitur, semper erat ut, rutrum magna. Ut condimentum tortor sed rhoncus cursus. Phasellus interdum ligula nec elit maximus, id pretium massa ullamcorper. Nulla facilisi. Nullam faucibus pulvinar augue a egestas. Sed imperdiet iaculis velit, ac imperdiet ante laoreet vitae. Cras gravida, quam at lobortis posuere, nisi lectus pellentesque nisl, in euismod ipsum enim eget enim. Ut sapien nisl, pulvinar ut eros in, rhoncus malesuada orci. Nulla non neque est. Cras eu justo eget ligula facilisis placerat at non eros. Sed consequat nibh ut leo consequat, nec consectetur tellus dictum. Donec a posuere leo. Etiam tempus risus in fringilla posuere. Ut ultricies nulla nec efficitur efficitur. Phasellus imperdiet vel quam non feugiat. Nam pretium pharetra tellus non aliquet. In facilisis ipsum eget ultrices porttitor. Vivamus orci diam, cursus vitae libero eu, efficitur pulvinar turpis. Pellentesque sit amet lorem finibus, faucibus nunc et, mattis eros. Quisque blandit ullamcorper iaculis. Duis bibendum nec nunc eu scelerisque. Sed tellus ex, maximus vitae ligula sed, feugiat dictum ante. In et dui vel mi elementum luctus. Fusce euismod a eros at blandit. Fusce ultricies risus nec tortor aliquam vulputate. In pharetra, neque consectetur sodales mattis, risus risus tristique nibh, sed aliquam mauris neque at turpis. Duis vel cursus nibh. Suspendisse eu augue dui. Donec eu tincidunt lorem, pulvinar faucibus diam.";

var f = z.split([" "])
console.log(f.length, "words")

var y = 0
for (let i = 0; i < f.length; i++){
    if (f[i] === "et," ||f[i] === "et"){
        y++
    }
}
console.log(y)

var y = 0
f.forEach(function(i){
    if (i === "et," || i === "et"){
        y++
    }
})
console.log(y)
