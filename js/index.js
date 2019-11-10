// Iteration 1: Names and Input
    //1.1 to 1.4. create variables with programmer's names and show them on console:

var hacker1 = "Dani";
var hacker2 = "Berto";
console.log("The driver's name is",hacker1);
console.log("The navigator's name is",hacker2);

// Iteration 2: Conditionals
    //2.1. Depending on which name is longer, print: 

var a = hacker1.length;
var b = hacker2.length;

/*console.log(a);
console.log(b);*/

if(a>b){
    console.log("The driver has the longest name, it has",a,"characters.");
}else if(a<b){
    console.log("It seems that the navigator has the longest name, it has",b,"characters.");
}else{
    console.log("Wow, you both have equally long names,",b,"characters!");
}

// Iteration 3: Loops
    //3.1 Print all the characters of the driver's name, separated by a space and in capitals

function getDriversNameSpacedCaps(driversName){

    let hacker1_remastered;

    for(let i = 0; i < a; i++){
        if(i === (a-1)){
            hacker1_remastered += hacker1.charAt(i).toUpperCase();
        }else{
            hacker1_remastered += hacker1.charAt(i).toUpperCase() + " "; 
        }
    }

    return hacker1_remastered;

}

//getDriversNameSpacedCaps(hacker1);
console.log(getDriversNameSpacedCaps(hacker1));

    //3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function getNavigatorsNameBackwards(navigatorsName){

    let hacker2_remastered;

    for(let i = b; i >= 0; i--){
        hacker2_remastered += hacker2.charAt(i);
    }

    return hacker2_remastered;
}

console.log(getNavigatorsNameBackwards(hacker2));

    //3.3 Depending on the lexicographic order of the strings, print the appropriate

function compareLexicograficOrder(driversName, navigatorsName){
    
    let comparision = driversName.localeCompare(navigatorsName);

    let value = "";

    if(comparision < 0){
        value = "The driver's name goes first.";
    }else if(comparision > 0){
        value = "Yo, the navigator goes first definitely.";
    }else{
        value = "What?! You both have the same name?";
    }

    return value;

}

console.log(compareLexicograficOrder(hacker1,hacker2));

//Bonus Time!

    /*Bonus 1:
        
        Generate 3 paragraphs. Store the text in a variable type of string.
        Make your program count the number of words in the string.
        Make your program count the number of times the Latin word et appears.
    */

    //var randomText = "et et hey et yo et et"
    var randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec laoreet nisl. Nulla a velit imperdiet, tempus mi non, euismod mauris. Curabitur sollicitudin viverra tellus. Mauris luctus placerat laoreet. Phasellus volutpat, est ac interdum pretium, ante lacus vehicula augue, eget porttitor ipsum ex vitae neque. Integer dictum, neque sit amet vulputate sagittis, dui urna faucibus elit, at pellentesque dui risus ac arcu. Aliquam sit amet lorem nec felis pulvinar rutrum sit amet vel sapien. " +

    "Donec dapibus posuere semper. Pellentesque tempus egestas arcu, porta pellentesque nibh dapibus vel. Cras sem mauris, mollis quis scelerisque a, tempus auctor magna. Nam tincidunt posuere arcu, ut molestie nulla vestibulum quis. Praesent et turpis maximus magna venenatis accumsan eu id tortor. Nullam pulvinar at metus a bibendum. In vel condimentum dolor, sit amet viverra est. Quisque dignissim, urna ac elementum congue, ipsum ipsum luctus sapien, quis viverra arcu nisl molestie magna. Cras consequat purus hendrerit risus molestie hendrerit. Maecenas eleifend mollis sapien at laoreet. " +
    
    "Nunc at nisl sed nisi sollicitudin sodales. Phasellus sodales sollicitudin odio eu congue. Proin vehicula hendrerit pulvinar. Donec ex urna, vestibulum quis sem ut, eleifend faucibus magna. Proin aliquet risus quis lorem auctor, quis interdum quam porttitor. Donec lorem purus, tempor at leo eget, porta ornare leo. Sed lorem nisi, luctus non viverra in, sollicitudin pulvinar ante. Donec vitae mattis erat. Duis nec erat ante. Nunc sed neque quis risus tincidunt gravida quis ac tortor. Quisque et orci quis elit congue ultricies et et velit. Pellentesque tempus ligula ac ante accumsan cursus. Donec vel nisi non eros gravida finibus. Cras pretium interdum pretium.";

    var words = randomText.split(" ");

    console.log("The three Lore ipsum paragraphs contain",words.length,"words.");

    var counter = 0;

    for(let i = 0; i < words.length; i++){

        if(words[i] === "et"){
            counter++;
        }

    }

    console.log("The word 'et' appears",counter,"times within the paragraphs.");


    /*Bonus 2:

        Ask the user for a new string and check if it's a Palindrome. Examples of palindromes:

        "A man, a plan, a canal, Panama!"
        "Amor, Roma"
        "race car"
        "stack cats"
        "step on no pets"
        "taco cat"
        "put it up"
        "Was it a car or a cat I saw?" and "No 'x' in Nixon".
    */

    //window.prompt("Enter any sentece, the program will check if it's a palindrome!");
   
    var sentence = "No 'x' in Nixon";
    var regExp = /[^A-Za-z0-9]/g;
    
    function checkPalindrome(string){
        
        string = string.toLowerCase();
        string = string.replace(regExp,'');

        // string = string.replace(" ", '');
        // string = string.replace(",", '');
        // string = string.replace(".", '');
        // string = string.replace("?", '');
        // string = string.replace("!", '');
        // string = string.replace("'", '');

        //console.log(sentence);

        for(let i = 0; i < string.length; i++){
            if(string[i] !== string[(string.length)-1-i]){
                return "The sentence is not a palindrome";
            }
            return "The sentence is a palindrome!";
        }
    }

    console.log(checkPalindrome(sentence));