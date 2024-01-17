// Iteration 1: Names and Input
let hacker1 = "Gav";
console.log("The driver's name is" + ' ' + hacker1);
let hacker2 = "Barbie"
console.log("The navigator's name is" + ' ' + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log("The driver's name is longer")
}
else if (hacker2.length > hacker1.length) {
    console.log("The navigator's name is longer")
}
else if (hacker2.length === hacker1.length) {
    console.log("WOW! You both have equally long names!")
}


// Iteration 3: Loops

const hacker1New = hacker1.toUpperCase();
console.log(hacker1New);

for (i = 0; i < hacker1New.length; i++) {
    console.log(hacker1New[i])
}


//for (var i = count - 1; i >= 0; i--)
for (j = hacker2.length - 1; j >= 0; j--) {

    console.log(hacker2[j])
}



// Iteration 3.3: Loops

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first")
}
else if (hacker2.localeCompare(hacker1) === -1) {
    console.log("Yo, The navigators's goes first")
}
else if (hacker2.localeCompare(hacker1) === 0) {
    console.log("WOW! You both have equally names!")
}


let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui nec velit convallis rutrum. Donec eget ullamcorper massa, ac tempor tellus. Proin eget posuere sapien. Vivamus gravida finibus orci, in posuere ante consectetur mattis. Suspendisse potenti. Praesent justo lacus, vulputate non quam nec, gravida congue ligula. Maecenas tincidunt sollicitudin pellentesque.
Morbi in sagittis ex. In non massa nec turpis maximus fringilla. Sed sit amet erat nisl. Praesent vestibulum a enim id pellentesque. Mauris gravida gravida semper. Curabitur tincidunt ipsum vitae nisl accumsan varius. Sed nulla augue, venenatis nec tortor sit amet, imperdiet euismod elit.
Fusce fringilla neque leo, quis molestie libero commodo et. Pellentesque nunc est, tincidunt id urna ac, vehicula gravida risus. Suspendisse eget lorem id risus condimentum malesuada sit amet sit amet est. Suspendisse blandit volutpat consectetur. Morbi sollicitudin arcu in bibendum tincidunt. Maecenas enim ligula, porttitor eget rutrum sit amet, sodales nec nibh. Curabitur vulputate tellus posuere consectetur hendrerit. Donec a tincidunt velit, ac molestie lectus. Nam dignissim lorem dolor, vel tempor massa tincidunt id. Donec quis arcu vitae massa mollis tincidunt at eget sapien. Nullam lacinia sed nulla at tristique. Aliquam tincidunt ante purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris porttitor in metus at semper. Cras commodo ac turpis eget vehicula. Nullam eu arcu posuere, cursus neque vel, lobortis ligula.`


let count = 1

function howMany(wordCount) {

    for (let i = 0; i < wordCount.length; i++) {
        if (wordCount[i] === ' ') {
            count++
        }

        
    }
    return count;
}

console.log(howMany(longText))