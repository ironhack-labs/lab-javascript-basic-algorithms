// Iteration 1: Names and Input

let hacker1 = "Mercedes"
console.log("The driver's name is", hacker1);

let hacker2 = "Lucas"
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longes name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {

    console.log(hacker1[i].toUpperCase());
}

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
}

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely");
} else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name");
}

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium faucibus porttitor. In augue nisl, molestie nec mi sed, rutrum maximus metus. Ut non leo eu elit pharetra dapibus. Etiam eget augue mauris. Vestibulum auctor eleifend diam sit amet laoreet. Aenean non facilisis ipsum, ac gravida sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras id gravida augue. Nunc aliquet dictum sagittis. Proin tempus augue non diam vestibulum tristique. Suspendisse neque dolor, porttitor a ultricies congue, ultricies vel neque. Vivamus vel tincidunt ligula. Maecenas lacinia mauris sed nisl gravida tristique. Aenean in placerat augue. Mauris id diam eu neque suscipit rhoncus id ac arcu. Vivamus mattis quam et turpis vestibulum, at mollis mi fermentum. Fusce quam nunc, tincidunt eu euismod eget, pulvinar quis purus. Donec at hendrerit diam. Sed ornare felis nunc, in varius tellus ornare a. Nullam sit amet tempor nulla. Integer efficitur sodales odio, id porta neque cursus nec. Duis lobortis fermentum diam a dignissim. Ut scelerisque suscipit sapien, efficitur vestibulum nibh. Vestibulum eu odio porta, sollicitudin nisl ac, luctus neque. Donec egestas, est suscipit fringilla porttitor, nulla lacus semper nibh, vel condimentum enim urna non quam. Nulla sit amet aliquam eros. Phasellus quam nulla, euismod et orci eu, volutpat pulvinar enim. Etiam ut tortor luctus, convallis quam in, sodales lacus. Aliquam erat volutpat. Donec massa felis, tempor non scelerisque sit amet, aliquam sit amet lectus."

let wordsCount = 0;

for (let i = 0; i < longText.length; i++) {

    if (longText[i] === " ") {
        wordsCount++;
    } else {
        wordsCount += 0;
    }
}

console.log(wordsCount + 1);

let etWordCount = 0;

for (let i = 0; i < longText.length; i++) {

    if (longText[i] + longText[i + 1] === "et") {
        etWordCount++;
    } else {
        etWordCount += 0;
    }
}

console.log(etWordCount);


const phraseToCheck = "Amor, Roma";
console.log(phraseToCheck.charAt(phraseToCheck.length - 1))

const phraseToCheck1 = phraseToCheck.substring(0, phraseToCheck.length / 2);
const phraseToCheck2 = phraseToCheck.substring(phraseToCheck.length / 2, phraseToCheck.length);

console.log(phraseToCheck1);
console.log(phraseToCheck2);


