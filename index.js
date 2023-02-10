// Iteration 1: Names and Input
const hacker1 = "Zuzana"; 
console.log("The driver's name is "+ hacker1);

const hacker2 = "Adam"; 
console.log("The navigator's name is "+ hacker2);

// Iteration 2: Conditionals
    if (hacker1.length>hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }
    else if (hacker1.length<hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }
    else if (hacker1.length===hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }

// Iteration 3: Loops
let string ="";
for (let i=0; i<=hacker1.length-1; i++) {
    string += (hacker1[i].toUpperCase())+ " ";
}
console.log(string);


let string2 = "";
for (let i=hacker2.length-1; i>=0; i--) {
    string2 += (hacker2[i]);
}
console.log(string2);


if (hacker1<hacker2) {
    console.log("The driver's name goes first.");
}

else if (hacker2<hacker1) {
    console.log("Yo, the navigator goes first definitely.");
}

else if (hacker1=== hacker2) {
    console.log("What?! You both have the same name?");
}

// Iteration 4: Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel urna vitae quam sagittis efficitur vel non leo. Proin aliquet ultricies erat non dapibus. Donec ornare scelerisque porttitor. Morbi aliquet laoreet mauris fringilla ullamcorper. Vivamus volutpat, libero nec porttitor dapibus, libero risus mollis elit, eu lacinia magna tellus vitae ligula. Praesent laoreet nunc et sapien facilisis, ut varius nisi sagittis. Mauris semper, diam sit amet ultricies bibendum, magna dolor dapibus odio, nec ullamcorper nibh urna id tortor. Vestibulum sollicitudin lectus eget semper accumsan. Nunc scelerisque condimentum eleifend. Quisque sit amet sapien neque. Etiam tempor, arcu id rhoncus mollis, lacus nisi facilisis orci, sed porttitor mi turpis vitae dui. Suspendisse consequat purus sed elit suscipit, non pellentesque libero hendrerit. Phasellus dictum massa nec justo lobortis, vitae iaculis eros ultrices. Quisque sit amet leo suscipit, auctor felis sit amet, congue erat. Cras hendrerit erat ut tellus ultricies, eu eleifend tortor ullamcorper. Etiam a lectus ut ex elementum posuere sit amet non risus. Pellentesque ut quam id tortor consectetur eleifend. Proin velit enim, volutpat quis augue quis, laoreet fringilla quam. Integer hendrerit, ipsum placerat hendrerit hendrerit, lorem lorem vehicula ipsum, blandit mollis nisi dui et felis. Praesent odio dui, pulvinar et quam rhoncus, aliquet facilisis sapien. Fusce tincidunt posuere metus, quis auctor est maximus eu. Ut vel volutpat orci, ac vulputate sapien.Vivamus sodales elit a arcu placerat, quis tempus eros auctor. Mauris pellentesque pretium purus, eu ultrices odio auctor quis. Sed tortor nunc, pellentesque in leo aliquet, finibus accumsan massa. Aliquam et molestie erat, non vestibulum justo. Integer tincidunt et massa ac efficitur. Duis mi ex, hendrerit non mauris id, dignissim convallis nunc. Vestibulum et tempus diam. Aliquam urna elit, feugiat quis pretium ac, convallis nec erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. ";

let wordCount =0;
for (let i=0; i<longText.length; i++) {
    if (longText[i]=== " ") {
        wordCount++;
    }
}
console.log(`Number of words: ${wordCount}`);

let etCount =0;
for (let i=0; i<longText.length; i++) {
    if (longText[i] + longText[i+1] === "et" && longText[i-1] === (" " || "." ) && longText[i+2] === (" " || "." )){
        etCount++;
    }
    else if (longText[i] + longText[i+1] === "Et" && longText[i-1] === (" " || "." ) && longText[i+2] === (" " || "." )){
        etCount++;
    }
}
console.log(`Number of "et": ${etCount}`);



// Iteration 5: Bonus 2