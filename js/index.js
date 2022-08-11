// Iteration 1: Names and Input

let hacker1 = "Carlos"

console.log(`The driver's name is ${hacker1}.`)

let hacker2 = "Jose Antonio"

console.log(`The driver's name is ${hacker2}.`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker1.length < hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
} else if(hacker1.length === hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

let str = "";

[...hacker1].forEach(element => str = str + " " + element.toUpperCase())

console.log(str)

let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i]   
}

console.log(reverse) 


cmp = hacker1.localeCompare(hacker2)

if(cmp === -1){
    console.log("The driver's name goes first.")
} else if(cmp === 0){
    console.log("Yo, the navigator goes first definitely.")    
} else {
    console.log("What?! You both have the same name?")
}

// Bonus time
// Generate 3 paragraphs.Store the text in a variable type of string.
let ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec lobortis felis ut risus dignissim, vitae gravida nulla rhoncus.Nam viverra, elit sit amet sagittis vulputate, nisl nibh eleifend purus, sit amet pretium nunc quam a odio.Vivamus volutpat nec velit luctus accumsan.Integer ornare tempor felis.Nam nec nisi ut purus iaculis suscipit.Aenean id nisl quam.Integer ornare quam ut ex aliquam, id congue sapien scelerisque.Donec facilisis neque sit amet augue mattis suscipit.Pellentesque et tempus diam.Fusce massa libero, porta eget nunc a, ultricies sollicitudin mi.Nullam porta dapibus augue vel tempus.Aenean est arcu, consequat at odio eget, tincidunt congue turpis.Nam feugiat tortor nec turpis mattis maximus.Maecenas volutpat vitae turpis ac efficitur.Aliquam erat volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut fringilla pulvinar urna vitae aliquet.Donec tempus sollicitudin ligula vitae volutpat.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla ultrices purus vel massa luctus vulputate.In feugiat, sapien quis suscipit convallis, neque lorem condimentum est, ac scelerisque ex ligula eu justo.Duis sit amet lorem nulla.Morbi dictum imperdiet nisi congue viverra.Pellentesque viverra libero in dolor porttitor lobortis.Donec ultricies bibendum nunc, ut euismod justo viverra ac.Aenean mollis sit amet velit et tempor.In hac habitasse platea dictumst.Donec eros eros, finibus sed nulla gravida, dictum bibendum arcu.Vivamus lobortis, lectus ut blandit rutrum, enim nunc tempus risus, laoreet lacinia justo erat id dolor.Duis varius et massa nec ultricies.Vestibulum id velit suscipit, luctus ligula dictum, porttitor ante.Maecenas malesuada cursus felis at tincidunt.Duis luctus velit at nulla mattis, laoreet consectetur nunc elementum.Maecenas viverra placerat volutpat.Etiam quis finibus diam.Nam maximus, ex vel elementum facilisis, felis lorem pellentesque risus, pharetra placerat dui dui in nulla.Vestibulum tempor gravida commodo.Mauris mollis, nulla id commodo cursus, nisl elit tincidunt orci, ultrices lobortis elit sem id urna.Proin vestibulum dignissim aliquet.Mauris eget orci non tortor elementum dictum vitae semper urna.Nulla porta nisl id neque pulvinar sagittis.Praesent hendrerit lorem ac justo luctus pharetra.";

// Make your program count the number of words in the string.
let words = ipsum.split(" ");
console.log(words.length)

// Make your program count the number of times the Latin word et appears.
let et_cont = 0
for (const word of words) {
    if (word === "et") et_cont++
}

console.log(et_cont)
