// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
const hacker1 = 'singh'
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Simarpreet'
console.log(`The navigator's name is ${hacker2}`);
// conditionls 
// const driver1 = hacker1.length
// const driver2 = hacker2.length


// console.log(driver1)
// console.log(driver2)

if(hacker1.length >hacker2.length)
{
    console.log(`The driver has the longest name, it has ${hacker1.length} characters `)
}

else if(hacker1.length < hacker2.length){


    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
    else { 
        console.log(`Wow, you both have equally long names, ${hacker1.lengths} characters!`)

    }

// Loops
let result = hacker1.toUpperCase().split("").join(" ")

console.log(result)
reverseresult = result.split("").reverse().join("")
console.log(reverseresult)


if (hacker1.localeCompare(hacker2) ==1) {
    console.log('Yo, the navigator goes first definitely.')
}else if (hacker1.localeCompare(hacker2) ==-1) {
    console.log("The driver's name goes first.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1:

//let para1 = document.getElementById("p1").innerHTML
//console.log(para1)

//let para1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
//let numberCount = para1.split(/\s+/).length
//console.log(numberCount)
//console.log(para1.match(/et/g))

//Bonus 2

//let phraseTocheck = 'Hello this is my first class in Iron hack I am little but nervous'
let word = "racecar"
let reverseword = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseword += word[i];}
console.log(reverseword);
//Bonus 2
if (reverseword == word) {
    console.log("It's a palindrome");
} else {
    console.log("I's not a palindrome");
}

// Bonus 1
const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis dui, commodo vitae est ac, vehicula scelerisque tellus. Pellentesque eleifend elit quis lorem ornare, ac imperdiet tortor pellentesque. Donec quis malesuada est. Fusce eget mauris velit. Cras lobortis porttitor semper. Suspendisse ornare ligula eget erat dignissim commodo. Aliquam elementum nibh ac metus semper efficitur. Sed posuere iaculis justo non venenatis. Sed non egestas dolor. Vivamus gravida neque arcu, quis luctus augue blandit ut. Donec eu quam et quam egestas sodales ullamcorper eu lectus. Maecenas a turpis ut arcu varius finibus. Maecenas at pretium elit. Phasellus ipsum est, lobortis ac nunc quis, porta ultrices eros. Fusce condimentum lorem purus, quis tempor metus posuere at. Curabitur fringilla scelerisque ipsum.Donec pharetra condimentum nibh vitae elementum. Cras consequat ligula sit amet turpis placerat tempor. Vivamus sagittis pulvinar erat. Pellentesque vitae lorem volutpat, condimentum ipsum in, vulputate sapien. Vestibulum lacinia rutrum nunc nec hendrerit. Etiam vel dictum purus. Mauris laoreet turpis odio, eget varius tortor commodo sed. Cras tempor arcu turpis, auctor porttitor turpis molestie eu. Phasellus vitae lorem semper, suscipit mauris at, bibendum diam. Integer sit amet urna in diam vulputate blandit non dapibus dolor. Aenean hendrerit arcu quis lectus scelerisque, eget pharetra mi pharetra. Pellentesque rutrum pretium bibendum. Phasellus quis ligula rhoncus, sodales metus placerat, semper erat.Vivamus ut congue nulla. Curabitur imperdiet aliquam cursus. Vivamus tortor velit, varius lobortis nulla et, gravida malesuada est. Vestibulum egestas risus nec viverra mattis. Etiam eget quam orci. Sed blandit finibus justo, sed bibendum lectus feugiat gravida. Donec ut augue placerat, accumsan ipsum eget, posuere augue. Vivamus eros magna, tempus ac interdum ut, malesuada at augue. Vestibulum dui velit, accumsan vel venenatis in, scelerisque quis ligula.";
let words=text.split(" ").length;
console.log(words);

const text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis dui, commodo vitae est ac, vehicula scelerisque tellus. Pellentesque eleifend elit quis lorem ornare, ac imperdiet tortor pellentesque. Donec quis malesuada est. Fusce eget mauris velit. Cras lobortis porttitor semper. Suspendisse ornare ligula eget erat dignissim commodo. Aliquam elementum nibh ac metus semper efficitur. Sed posuere iaculis justo non venenatis. Sed non egestas dolor. Vivamus gravida neque arcu, quis luctus augue blandit ut. Donec eu quam et quam egestas sodales ullamcorper eu lectus. Maecenas a turpis ut arcu varius finibus. Maecenas at pretium elit. Phasellus ipsum est, lobortis ac nunc quis, porta ultrices eros. Fusce condimentum lorem purus, quis tempor metus posuere at. Curabitur fringilla scelerisque ipsum.Donec pharetra condimentum nibh vitae elementum. Cras consequat ligula sit amet turpis placerat tempor. Vivamus sagittis pulvinar erat. Pellentesque vitae lorem volutpat, condimentum ipsum in, vulputate sapien. Vestibulum lacinia rutrum nunc nec hendrerit. Etiam vel dictum purus. Mauris laoreet turpis odio, eget varius tortor commodo sed. Cras tempor arcu turpis, auctor porttitor turpis molestie eu. Phasellus vitae lorem semper, suscipit mauris at, bibendum diam. Integer sit amet urna in diam vulputate blandit non dapibus dolor. Aenean hendrerit arcu quis lectus scelerisque, eget pharetra mi pharetra. Pellentesque rutrum pretium bibendum. Phasellus quis ligula rhoncus, sodales metus placerat, semper erat.Vivamus ut congue nulla. Curabitur imperdiet aliquam cursus. Vivamus tortor velit, varius lobortis nulla et, gravida malesuada est. Vestibulum egestas risus nec viverra mattis. Etiam eget quam orci. Sed blandit finibus justo, sed bibendum lectus feugiat gravida. Donec ut augue placerat, accumsan ipsum eget, posuere augue. Vivamus eros magna, tempus ac interdum ut, malesuada at augue. Vestibulum dui velit, accumsan vel venenatis in, scelerisque quis ligula.";
let nz = text1.split(/\s+/).length
console.log(nz)


let para1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
let numberCount = para1.split(/\s+/).length
console.log(numberCount)