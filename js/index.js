//iteration 1
const hacker1 = "Cecile";
const hacker2 = "Alex";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

//iteration 2
function longerName (driver, navigator) {
  if (driver.length === navigator.length) {
        return `Wow, you both have equally long names, ${driver.length} characters!`;
  } else if (driver.length > navigator.length) {
        return `Wow, the driver, ${driver} has the longest name, ${driver.length} characters!`;
  } else {
        return `Wow, the navigator, ${navigator} has the longest name, ${navigator.length} characters!`;
  }
}

console.log(longerName(hacker1, hacker2));


// iteration 3.1 
function capitalizeDriver(driver) {
    let biggerDriver = "";
    for (let i=0; i < driver.length; i++) {
        biggerDriver += driver[i].toUpperCase();
        if (i < driver.length - 1) {
            biggerDriver += " "; 
        } 
    }
    return biggerDriver;
}

console.log(capitalizeDriver(hacker1));

// iteration 3.2
function reverseNav(navigator) {
    let result = "";

    for (let i=navigator.length - 1; i >= 0; i--) {
        result += navigator[i];
    }
    return result;
}

console.log(reverseNav(hacker2));

// iteration 3.3
function lexicography(driver, navigator) {
    let comparaison = driver.localeCompare(navigator);

    if ( comparaison === 0 ) { return "WTF ! SAME NAMES !"; }
    else if ( comparaison > 0 ) { return "Navigator comes first"; }
    else { return "Driver comes first"; }

}

console.log(lexicography(hacker1, hacker2));

// Bonus 1.1 - count number of words in string
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ex augue. Fusce facilisis, metus vitae finibus feugiat, risus risus dapibus arcu, quis tincidunt tortor ex vel risus. Pellentesque aliquam arcu lacus, a congue massa tempus ac. Duis aliquam arcu nunc, id euismod odio hendrerit vehicula. Aenean varius justo ac neque efficitur, non condimentum ipsum ultricies. Pellentesque aliquet, turpis eget posuere facilisis, velit odio laoreet ante, vitae efficitur nunc mauris ut enim. Phasellus vitae neque mi. Fusce mattis arcu sed pulvinar mollis. In vitae pharetra purus. Vivamus posuere nibh at ligula auctor, vel malesuada eros feugiat. Vivamus in dapibus mi, at maximus nisl. Donec auctor sodales metus, eu imperdiet nisi sollicitudin ac. Quisque sed odio id nisi maximus sagittis et a dolor. Pellentesque porta nulla sapien, sit amet mollis lorem vulputate a. Morbi faucibus consectetur finibus.

Duis sit amet velit metus. Nullam mattis ligula blandit, suscipit nisi eu, euismod nibh. Proin arcu justo, posuere eu tincidunt et, vulputate quis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum faucibus pellentesque elit, eget suscipit arcu. Proin vulputate ipsum sit amet condimentum pellentesque. Donec condimentum bibendum arcu. Donec sagittis lacus vel posuere dictum. Proin faucibus sem nec tortor efficitur, pretium tincidunt odio efficitur. Sed euismod malesuada egestas. Pellentesque porttitor neque ac velit imperdiet, non commodo est facilisis. Etiam nec lobortis massa, et viverra diam. Quisque gravida mollis pulvinar. Etiam iaculis in turpis vel faucibus. Praesent suscipit sed quam nec commodo. In ex lorem, auctor at fermentum feugiat, ullamcorper nec augue.

Quisque scelerisque a massa vel iaculis. Nunc ut mollis nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sodales ex elementum malesuada rhoncus. Quisque aliquet euismod lacinia. Proin egestas ut massa id hendrerit. Nullam eu varius felis. In rutrum nec erat non scelerisque. Ut ullamcorper eros nec quam volutpat fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos et.`;

function wordCounter(text) {
    return text.split(" ").length;
}

console.log(wordCounter(lorem))

// Bonus 1.2 "et" word counter
function countEt(text) {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        let previouschar = text[i-1];
        let char = text[i];
        let nextchar = text[i+1];
        let nextnextchar = text[i+2];
        if (previouschar === " " && char === "e" && nextchar === "t" && (nextnextchar === " " || nextnextchar === "," || nextnextchar === ".")) {
            counter ++;
        }
    }
    return counter;
}

console.log(countEt(lorem))

// Bonus 2
const stringToCheck = "Was it a car or a cat i saw?";

function isPalindrome(text) {
    let string = text.replace(/[^a-zA-Z]/g, "");
    string = string.toLowerCase();

    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    return string === reverseString;
}

console.log(isPalindrome(stringToCheck));