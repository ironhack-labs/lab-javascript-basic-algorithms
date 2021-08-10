// Iteration 1: Names and Input
let hacker1 = 'Alfredo';
console.log(hacker1);
let hacker2 = 'Emilio';
console.log(hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let hacker1Spaced = "";
for (let i = 0; i <= hacker1.length; i++){
  hacker1Spaced += hacker1.charAt(i).toUpperCase() + " ";
}

console.log(hacker1Spaced);

let hacker2Inverse = "";
for(let i = hacker2.length; i >= 0; i--){
  hacker2Inverse += hacker2.charAt(i);
}

console.log(hacker2Inverse);
let lexicographic = hacker1.localeCompare(hacker2);

if(lexicographic == 1){
  console.log("The driver's name goes first.")
} else if (lexicographic == -1){
  console.log("Yo, the navigator goes first definitely.")
} else{
  console.log("What?! You both have the same name?");
}

//Bonus 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam lacus, gravida sodales nunc in, tristique hendrerit nibh. Nullam imperdiet arcu ac scelerisque rhoncus. Suspendisse lacinia justo vitae erat luctus, at ullamcorper turpis dignissim. Vestibulum quam nulla, laoreet sed nunc tincidunt, semper laoreet odio. Nam vel nunc eget dui egestas luctus sit amet semper nisi. Fusce diam urna, sollicitudin sed porttitor in, ullamcorper pharetra sapien. Curabitur aliquam arcu id nisl fringilla, ut fermentum augue vehicula. Vestibulum finibus convallis sodales. Curabitur in nibh turpis. Sed lacinia felis a sollicitudin suscipit.

Suspendisse justo lorem, porta et nisi ut, bibendum dapibus leo. Suspendisse eget ornare nisi. Quisque finibus ex a diam consectetur, sit amet placerat felis ullamcorper. Cras hendrerit quam arcu. Sed vel felis maximus, faucibus massa id, maximus enim. Nullam nunc dolor, euismod nec elit a, consectetur ornare turpis. Fusce non dolor blandit, convallis risus quis, sodales nisl. Phasellus iaculis eleifend libero, sed mollis ante sollicitudin et. Nulla et enim ut elit fringilla egestas id nec urna. Praesent molestie consequat convallis. Fusce ac dignissim eros. Aliquam vulputate vestibulum egestas. Aliquam tristique ut ante et porta. Praesent at odio ex. Integer volutpat metus sed turpis molestie, eget imperdiet massa suscipit. Curabitur accumsan mauris libero.

Suspendisse ac leo quis turpis eleifend fringilla. Fusce ut eleifend turpis. Nam dictum nisl sit amet lectus tempus, malesuada porttitor orci aliquet. Suspendisse in sem lacus. Aliquam sagittis id massa a sagittis. Ut ultrices pulvinar rhoncus. Donec congue vulputate dui, porta imperdiet tellus consectetur non. Quisque pellentesque elit ex, nec elementum erat consectetur pellentesque. Nunc tempor, felis ac cursus ultrices, sapien metus imperdiet felis, ut posuere felis sapien non nulla. Quisque viverra, elit quis fermentum semper, lectus dui rhoncus purus, eget fermentum eros nunc sit amet libero. Nullam facilisis posuere placerat.`;

let wordCount = lorem.split(" ").length; //Still misses 2 words that are not preceded by a space.

console.log(wordCount);

let etCount  = lorem.split("et").length;
console.log(etCount);