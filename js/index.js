console.log("I'm ready!");

let hacker1 = "Joe";
console.log(hacker1);

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Sarah";
console.log(hacker2);

console.log(`The navigator's name is ${hacker2}.`);

// Loops: Iteration 2 - Loop and conditionals 
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1} has a longer name than ${hacker2}.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`${hacker2} has a longer name than ${hacker1}.`)
} else {
    console.log("Both the navigator and driver have very similar names.")
};

// Loops: Iteration 3
// 3.1 
// first time didn't work, since I didn't split and join, returns characters one by one instead of single string.
var capitalized = ""
for (i = 0; i = < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase() += capitalized);
};

var reversed = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    var capitalized = hacker2[i].toUpperCase();
    console.log(reversed += capitalized)
};

// 3.2 - What is an alternative for not using the reverse method? Reverse method is only for arrays not strings.
for (i = 0; i < hacker2.length; i++) {
    console.log(hacker2[i].reverse());
};

// second attempt with just loop, no methods 
var reversed = ""
for (i = 0; i > hacker1.length; i--) {
    console.log(reversed += (hacker1[i]);
    }

    // 3.3
    if (hacker1[0] > hacker2[0]) {
        console.log("The driver's name goes first.");
    } else if (hacker1[0] < hacker2[0]) {
        console.log("Yo the navigator goes first definitely!");
    } else {
        console.log("What!?You both have the same names!");
    };

    // Can also use .charAt()? So comparing alphabetical order is automatically inbuilt? Because here it's not comparing numbers. How does it know that one letter comes before another? 
    // 

    // Bonuses

    // Bonus 1
    const loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et euismod sapien. Vivamus eu ante sodales, hendrerit dui ac, aliquam arcu. Quisque vel purus sed quam pulvinar mattis sed interdum turpis. Fusce fermentum auctor magna euismod faucibus. Sed ac orci vel justo auctor ultricies. Pellentesque tristique luctus ultrices. Donec mollis blandit nulla, at sollicitudin leo pellentesque in. Nunc maximus pretium risus, in eleifend metus consequat ac. Curabitur tempus lacus eget lacinia convallis. Quisque convallis tortor vel felis finibus tincidunt. Nullam gravida dui vitae tellus volutpat, eget feugiat purus maximus. Nam ligula purus, euismod a dictum sed, convallis nec justo. Quisque laoreet erat lobortis neque rutrum, sollicitudin commodo dui porttitor. Phasellus eu convallis est, a convallis libero. Nm euismod nibh sed ante aliquet, vel sollicitudin lacus accumsan. Vivamus at augue eget ipsum laoreet semper eu vel elit. Nulla convallis urna diam, in laoreet ipsum gravida vitae. Proin porta varius quam a bibendum. Nam sed est euismod felis aliquet ornare mollis nec nisi. Donec fermentum risus non convallis tempor. Proin maximus risus et turpis congue, a gravida sem dapibus. Quisque vulputate maximus tincidunt. Sed ut neque in turpis ullamcorper mattis vel non nulla. Aliquam vitae imperdiet lorem. Fusce eu metus sollicitudin, mattis magna sed, elementum nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In laoreet nisl vel ultricies viverra. Vestibulum a neque ex. Donec blandit eros sapien, vitae condimentum nunc pellentesque quis. Morbi auctor pellentesque massa sed lobortis. Praesent vitae egestas urna. Aenean elementum ullamcorper neque, a scelerisque velit ornare placerat."
    var wordcounter = 0
    var etcounter = 0

    // dealing with commas and punctuation important as well 

    for (i = 0; i < loremipsum.length; i++) {
        if (loremipsum[i] === " ") { // string check
            console.log(wordcounter++)
        }
    };

    console.log(wordcounter);

    //miscounts words by one 

    for (i = 0; i <= loremipsum.length; i++) {
        if (loremipsum[i] === "et") {
            console.log(etcounter++);
        }
    };

    console.log(etcounter);

    //* doesn't register etcounter

    // Bonus 2:
    //Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

    //"A man, a plan, a canal, Panama!"
    //"Amor, Roma"
    //"race car"
    //"stack cats"
    //"step on no pets"
    //"taco cat"
    //"put it up"
    //"Was it a car or a cat I saw?" and "No 'x' in Nixon".
    //Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 😃

    var phraseToCheck = "Amor" // 
    var palindrome = ""
    //maybe take the word and reverse it, then iterate it and check if it equals the same characters in the index you iterate over for the other word??? Or work backwards from each side and compare if letter in the middle is equal? Seems less scientific? or is it more accurate...

    // what about comparing reversed?

    for (i = 0; i < phraseToCheck.length; i++;)
        (j = phraseToCheck - 1; j >= 0; j--;)
        (
            if phraseToCheck[i] === phraseToCheck[j]) {
            console.log("Palindrome!");
        };

    // Second Approach - cleave in half.
    for (i = 0; i < phraseToCheck.length / 2; i++) {
        while (phraseToCheck[i] === phraseToCheck[1 - i])
    }