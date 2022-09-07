// Iteration 1: Names and Input

const hacker1 = "Volodymyr";
const hacker2 = "Mog";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} 
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


// Iteration 3: Loops

// 3.1
let hacker1_upper = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1_upper += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(hacker1_upper);



// 3.2
let hacker2_reverse = "";
for (let i = hacker2.length; i > 0; i--) {
    hacker2_reverse += hacker2.charAt(i-1);
}
console.log(hacker2_reverse);



// 3.3

if (hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first definitely.")
}
else {
    console.log("What?! You both have the same name?")
}



// Bonus 1:

// word count

let paragraph = 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisl vel nunc volutpat luctus in ac nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec aliquam volutpat erat, eget varius turpis faucibus eget. Quisque a porta tellus, eu scelerisque nunc. Vestibulum aliquam est diam, in aliquam nisi varius vitae. Etiam consequat orci nec sapien dictum ullamcorper pharetra at arcu. Nam mi leo, molestie a turpis nec, venenatis rutrum nibh. Vivamus vehicula dui et nisl facilisis, accumsan finibus nisl posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ornare nibh ut nulla pellentesque gravida. Nulla accumsan sit amet magna ullamcorper ultricies. Sed nec arcu blandit, ornare augue eu, elementum enim. Nulla at tristique mauris. Morbi eget malesuada risus. Maecenas eget suscipit dolor. Proin malesuada at tortor a lacinia.

Praesent eu nunc ipsum. Sed vel interdum mauris. Ut ante leo, ultricies sed finibus vel, ullamcorper eget leo. Curabitur nec euismod mi. Suspendisse potenti. Mauris nibh velit, molestie id dui a, mattis luctus lorem. Curabitur consectetur, metus sed feugiat dapibus, purus nulla accumsan lorem, eu interdum quam purus a nisi. Fusce at eros mi. In tempus metus sit amet ligula lacinia, id fringilla justo finibus. Mauris sodales eget orci vel pulvinar. Ut et dolor vel neque maximus facilisis et id enim. Cras commodo est vitae facilisis sollicitudin. Nam eleifend ipsum quis quam rhoncus lobortis. Sed vulputate odio nibh, id sagittis massa egestas nec. Praesent sed est eros.

Duis nec semper et nunc. Donec sem felis, iaculis ac ornare quis, sollicitudin vitae nibh. Nullam quis magna vitae eros condimentum molestie. Mauris dui lorem, imperdiet in risus a, egestas tristique arcu. Nam quam metus, dignissim nec interdum a, commodo maximus velit. Nulla dapibus odio risus, ac auctor velit tincidunt et. Sed nec erat eget felis maximus iaculis. Etiam varius iaculis elit, eget posuere nulla eleifend nec. Sed vitae turpis sagittis, cursus sem varius, aliquet arcu. Vivamus aliquam luctus arcu, quis lobortis turpis molestie eu. Cras risus augue, tempus vel rhoncus dignissim, accumsan vel mi. Etiam tincidunt porta massa, tempus varius dolor.`
let count = 0;
for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === " "){
        count++;
    }  
} console.log(count + 1);



// number of times for "et"

let et_counter = 0;
for (let j = 0; j < paragraph.length; j++){
    if (paragraph[j] === "e" && paragraph[j+1] === "t" && paragraph[j-1] === " " && paragraph[j+2] === " ")
    et_counter++;
    } 
console.log(et_counter);


// Bonus 2:

let phrase_to_Check = "A man, a plan, a canal, Panama!";
let new_phrase_to_Check = phrase_to_Check.replace(/[^a-zA-Z]/g, '').toLowerCase();


let reverse_version = "";
for (let i = new_phrase_to_Check.length + 1; i > 0; i--) {
        reverse_version += new_phrase_to_Check.charAt(i-1);
}

if (reverse_version === new_phrase_to_Check){
    console.log("The phrase is Palindrome.");
} else {
    console.log("The phrase is not Palindrome.")
}


