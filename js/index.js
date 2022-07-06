// Iteration 1: Names and Input
//
let hacker1 = "Philip";
console.log(`The driver name is ${hacker1}.`);
let hacker2 = "Philip";
console.log(`The navigator name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
//3.1 
let hacker1Upper = hacker1.toUpperCase();
let hacker1WithSpace = '';
for (let i = 0 ; i < hacker1Upper.length ; i++) {

    hacker1WithSpace += `${hacker1Upper[i]} `;

} 
console.log(hacker1WithSpace);

//3.2
let hacker2Reversed = '';
for (let i = hacker2.length-1 ; i >= 0 ; i--) {
    
    hacker2Reversed += `${hacker2[i]}`;

}

console.log(hacker2Reversed);

//3.3

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo the navigator goes first definitely");
} else {
    console.log("What?! You both have the same name?");
}

//bonus 1

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum porta aliquet. Duis molestie ut tellus id blandit. In dui nisi, gravida quis mi nec, pulvinar efficitur purus. Sed augue metus, rutrum in commodo a, porta a mi. Sed porta augue porttitor mauris lobortis porttitor. Donec non sem id erat ullamcorper gravida. Morbi eget ex nulla. Quisque condimentum purus vel mollis molestie. Nulla neque mi, ultricies luctus varius a, congue in arcu. Nunc nec ullamcorper nulla. Integer eget odio varius, laoreet ipsum ut, pharetra justo. Maecenas accumsan massa quis eros maximus fermentum. Sed purus turpis, euismod nec ornare a, egestas id elit. Sed nunc est, pulvinar eu hendrerit venenatis, bibendum sit amet dui. Praesent ultricies gravida urna, id auctor tellus efficitur ut. Aliquam efficitur tellus eget porta blandit. Vivamus placerat scelerisque est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In feugiat interdum ante vitae vehicula. Duis eget mi quis nisi malesuada eleifend a sed arcu. Nunc pellentesque ut leo sit amet pretium. Fusce nec commodo lectus, vel dictum urna. Aliquam tristique turpis in ex aliquet, vitae euismod metus viverra. Integer ac sem vitae tortor molestie mollis a sed tellus. Nullam elementum turpis turpis, sit amet dapibus elit auctor ac. Sed posuere faucibus tellus, a congue arcu rutrum sed. Sed sed elementum lectus. Fusce volutpat arcu viverra malesuada venenatis. Sed posuere lectus ut facilisis gravida. Fusce sed laoreet odio. Fusce rhoncus viverra risus, ut vestibulum risus ullamcorper eu."

let wordCount = 0;
for (let i = 0 ; i < loremIpsum.length ; i++) {
    if (loremIpsum[i] === " ") {
        wordCount += 1;
    } else if (loremIpsum[i] === ", ") {
        wordCount -= 1;
    } else if (loremIpsum[i] === ". ") {
        wordCount -= 1;
    } else if (loremIpsum[i] === "; ") {
        wordCount -= 1;
    } else {
        continue;
    }
}
console.log(wordCount + 1);