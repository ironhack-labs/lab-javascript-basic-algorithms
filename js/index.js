// Iteration 1: Names and Input

var hacker1 = `Yannick`;
console.log(`The driver's name is ${hacker1}`);

var hacker2 = `Anthony`;
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
function longestName(driverName, navigatorName) {
    if (driverName.length > navigatorName.length) return (`The driver has the longest name, it has ${driverName.length} characters.`);
    if (navigatorName.length > driverName.length) return (`The navigator has the longest name, it has ${navigatorName.length} characters.`);
    return (`Wow, you both have equally long names, ${driverName.length} characters!.`);
}

longestName(hacker1, hacker2);

// Iteration 3: Loops
function printName(driverName) {
    var output = ``;
    for (let i = 0; i < driverName.length; i++) {
        output += driverName[i] + ` `;

    }
    return output.toUpperCase();
}

console.log(printName(hacker1));

function printNameReverse(navigatorName) {
    var output2 = ``;
    for (let i = navigatorName.length - 1; i >= 0; i--) {
        output2 += navigatorName[i];

    }
    return output2;
}

console.log(printNameReverse(hacker2));

function orderName(driverName, navigatorName) {

    if (driverName < navigatorName) return `The driver's name goes first.`;
    if (driverName > navigatorName) return `Yo, the navigator goes first definitely.`;
    return `What?! You both have the same name?`;

}

console.log(orderName(hacker1, hacker2));

// BONUS 1

loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra iaculis augue eu dictum. Proin dignissim eros dolor, vel interdum ante laoreet sed. Nulla vitae nibh vitae erat efficitur consequat. Suspendisse quis ornare purus. Maecenas elit magna, pretium in erat vel, congue maximus sapien. Phasellus ac convallis nisi. Nulla accumsan justo justo, eu cursus metus efficitur in. Nulla ut tempus metus, sit amet varius purus. Nam ut quam at erat dignissim suscipit sit amet non dui. Nullam nec magna justo. Suspendisse sit amet odio a metus tempus pellentesque. In vitae urna sed arcu auctor bibendum. Maecenas sollicitudin rutrum quam, in efficitur tellus bibendum porta. Nullam lobortis odio vitae mauris elementum volutpat. Donec et dapibus mi, nec hendrerit metus. Mauris nulla lacus, tristique in lacinia vitae, scelerisque imperdiet lectus.

Ut tincidunt auctor erat, eget luctus velit dapibus ac. Nam venenatis facilisis magna et congue. Morbi porta, ex in ultrices luctus, mauris enim vehicula lectus, consequat dictum sapien dolor vel lorem. Maecenas volutpat ante vel urna elementum, accumsan mattis ipsum lacinia. Quisque at aliquet ex, sed sagittis odio. Ut at condimentum libero. Suspendisse semper egestas neque eget feugiat. Sed sagittis ultrices ipsum, in gravida purus faucibus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas eu nibh quis quam imperdiet vulputate. Sed efficitur aliquet tempus. Aliquam elementum nisl in quam pretium, ac condimentum mauris malesuada. Nam rutrum tempus blandit. Curabitur nisi diam, scelerisque ut lectus non, maximus molestie metus. Cras congue id neque eu porttitor. Phasellus pulvinar id urna ac tempor.

Proin eros justo, ornare id tempus in, condimentum at dolor. Vivamus molestie orci non augue placerat, sit amet pulvinar est commodo. Quisque rhoncus iaculis felis, sed tristique turpis cursus a. Ut quam enim, gravida et sapien et, rutrum euismod dui. Nullam suscipit neque eu nibh tempor, vel semper metus volutpat. Etiam maximus vel odio eu ornare. Nam vel gravida sapien. Pellentesque eu varius felis. Sed dignissim felis ac pellentesque fermentum. Morbi dapibus, nisl sed volutpat eleifend, ligula est feugiat arcu, eu blandit diam sem vel est. Ut magna neque, mattis ut imperdiet eget, pulvinar sit amet diam. Maecenas malesuada dapibus nisi, in pellentesque lacus fermentum nec.`;

function countWords(text) {
    // adding 2 for the first and last word
    return text.split(" ").length + 2;
}

console.log(countWords(loremIpsum));

const phraseToCheck = `Was it a car or a cat I saw?`;

function PalindromeCheck(text) {
    var output = text;
    output = output.toLowerCase();
    output = output.replace(/[^a-z]/g, ``);
    if (output.length % 2 !== 0) {
        letterToRemove = Math.floor(output.length / 2);
        outputOdd = "";
        for (let i = 0; i < output.length; i++) {

            if (i !== Math.floor(output.length / 2)) {
                outputOdd += output[i];
            }
        }
        output = outputOdd;
    }

    var firstHalf = output.slice(0, output.length / 2);
    var secondHalf = output.slice(output.length / 2);
    var secondHalfReverse = "";
    for (let i = secondHalf.length - 1; i >= 0; i--) {
        secondHalfReverse += secondHalf[i];
    }
    if (firstHalf === secondHalfReverse) return `It's a Palindrome !`;
    return `Not a Palindrome !`;

}

console.log(PalindromeCheck(phraseToCheck));