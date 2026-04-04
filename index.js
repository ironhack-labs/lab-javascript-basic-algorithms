// Iteration 1: Names and Input
let hacker1 = "driver";
let hacker2 = "navigator";


console.log("The driver's name is " + hacker1)
console.log("The navigator's name is"+ hacker2)



// Iteration 2: Conditionals

if (hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has "+hacker1.length+" characters.");
}
    
else if (hacker1.length<hacker2.length){
     console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
}
   
else {
    console.log("Wow, you both have equally long names, "+ hacker1.length + " characters!");
}




// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "))
console.log(hacker2.split("").reverse().join(""))


if(hacker1.toLowerCase>hacker2.toLowerCase){
    console.log("The driver's name goes first.")
}

else if(hacker1.toLowerCase>hacker2.toLowerCase){
    console.log("Yo, the navigator goes first, definitely.")
}

else {
    console.log("What?! You both have the same name?")
}


// Bonus

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dapibus massa quis elementum. Morbi ut sapien posuere, viverra quam sed, semper quam. Donec vitae tellus semper, pulvinar orci in, pretium lorem. Aenean luctus turpis sodales, gravida tortor at, feugiat nibh. Praesent blandit sapien non nisi elementum, sed pulvinar ex condimentum. Nulla nec scelerisque leo. Quisque laoreet dapibus molestie. Donec non laoreet nisi. Phasellus dignissim vulputate lorem, eu hendrerit diam sagittis sed. Vivamus dapibus eros sed mi suscipit tempor. Nunc porta lorem et risus tristique pharetra. Nam elementum, nisi vitae aliquet consequat, nisl arcu mollis quam, sit amet fringilla justo libero quis ante. Nunc ante turpis, elementum et posuere aliquet, finibus id metus. Nulla non metus quis dolor pretium condimentum suscipit id libero. In malesuada lorem ex. Ut sit amet tortor arcu.

                Donec euismod ultrices arcu et pulvinar. Fusce blandit libero at velit gravida molestie. Aenean volutpat massa pellentesque enim suscipit egestas. Donec sit amet rutrum quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent quis nulla vel sem condimentum feugiat sit amet non quam. Praesent vel rhoncus quam. Vestibulum dignissim, orci et euismod suscipit, metus ante ultrices neque, sed facilisis mauris risus ac ipsum. Integer in eros et magna ornare tempor. Donec euismod metus et ex auctor condimentum. Phasellus a iaculis sapien, et auctor lectus. Nam laoreet arcu eget pulvinar suscipit. Donec efficitur arcu vel elementum feugiat. Donec vitae suscipit orci. Nullam et augue arcu.

                Nunc quis orci id sem feugiat maximus a quis sapien. Sed mollis diam sit amet felis porttitor mollis. Vivamus lacinia mi at eleifend rhoncus. Aenean sed risus et nibh interdum ornare. Morbi interdum tempus neque id eleifend. Fusce semper sem ac odio fermentum lacinia. Maecenas elit dui, finibus in efficitur rhoncus, accumsan non tellus. Praesent cursus sapien a efficitur tincidunt.`;

console.log(longText.trim().split("/\s+/").length) 




const matches = longText.match(/\bet\b/gi);
const etCount = (matches || []).length;
console.log(etCount);


// bonus 2

let phraseToCheck = "racecar"; 


let normalized = phraseToCheck.toLowerCase();


let isPalindrome = true;

for (let i = 0; i < normalized.length / 2; i++) {
    if (normalized[i] !== normalized[normalized.length - 1 - i]) {
        isPalindrome = false;
        break; 
    }
}

if (isPalindrome) {
    console.log(phraseToCheck + " is a palindrome.");
} else {
    console.log(phraseToCheck + " is not a palindrome.");
}