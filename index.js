// Iteration 1: Names and Input

const hacker1 = "gustavo"
console.log("the driver name is " + hacker1);

const hacker2 = "camila"
console.log ("the navigator's name is " + hacker2)


// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length ) {
    console.log("the driver has the longest name, it has " + hacker1.lenght + "characters.")
}   

else if ( hacker2.length > hacker1.length) {
    console.log( "it seems that the navigator has the longest name, it has" + hacker2.length + "characters")
} 
else if (hacker1.length === hacker2.length) {
    console.log("wow, you both have equally long names, " + hacker1.length + "characters")
} 
else{
    console.log ("Error");
}

// Iteration 3: Loops

let formattedName = ""
for (let i  = 0; i < hacker1.length; i++){
    formattedName += hacker1 [i].toUpperCase() + " "

}
console.log(formattedName);

// Bonus 1 

const longText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque mi risus, sed tristique elit placerat a. Donec pellentesque, urna porttitor lobortis feugiat, diam augue sodales ligula, ac suscipit eros augue at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur velit diam, gravida ut ornare sed, facilisis vitae felis. Donec sit amet urna tellus. In vel ultricies tellus. Sed est risus, eleifend a orci et, sodales ultricies tortor. Maecenas in leo maximus nibh volutpat euismod id quis eros. Vivamus feugiat facilisis tristique. Praesent sed felis ut nisi sodales finibus non vel diam. Praesent sit amet eros non velit pulvinar mollis placerat at turpis.

Quisque sagittis nunc ante, in eleifend justo consequat et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras vel varius felis, quis vestibulum velit. Nulla accumsan, orci at elementum ullamcorper, tortor dolor tristique arcu, ut vulputate enim urna in ante. In nec sapien orci. Phasellus gravida orci est, ut fringilla metus viverra vitae. Ut dolor lacus, pharetra eget tempor at, malesuada nec tortor. Donec imperdiet eros eget sem fringilla, et auctor nisi blandit. Quisque sit amet ante facilisis, sollicitudin magna at, tincidunt ex. Vivamus eu eleifend ipsum, quis tempus odio. Quisque ut dictum velit. Nulla aliquam nunc in erat commodo, eu semper augue auctor. Aenean consectetur dolor sit amet lorem scelerisque, ac luctus eros lobortis.

Nam sed eros libero. Vestibulum ipsum ipsum, consequat et volutpat non, ornare at leo. Cras ut bibendum quam. Ut volutpat, elit ut suscipit malesuada, neque sapien facilisis orci, vel maximus enim massa ac lectus. In semper euismod risus, quis dapibus lacus consectetur vel. Proin dignissim tellus quam, quis dapibus purus tempus ultricies. Pellentesque est massa, dapibus non eleifend sed, luctus a ex. Aliquam eget ex ut eros efficitur eleifend vitae a tellus. Ut dapibus neque ipsum, vitae volutpat eros sodales eget. Sed mollis, tortor eu rhoncus sagittis, nibh diam porttitor ligula, non gravida enim tellus vel ligula. Suspendisse mollis sodales justo. Aenean blandit cursus eleifend. Vivamus in condimentum ipsum, quis blandit elit. Maecenas quis hendrerit magna. Nulla felis justo, feugiat at ipsum sed, faucibus ullamcorper mauris. Aenean eu augue sed mi auctor tempor semper sit amet sapien.`


const wordCount = longText.split ( " " )
console.log (wordCount.length);


let etCount = 0; 

for (let i = 0; i < wordCount.length; i++) {
    if (wordCount [i] === "et") {
        etCount++
    }
}

console.log(etCount);


//Bonus 2 

const phraseToCheck = "A man, a plan, a canal, Panama!" ;
let reversePhrase = "";
const cleanString = phraseToCheck.replace( something ... ).toLowerCase() ; 
like something here that clean all the other characters, then a loop that runs from the end to the beginning and then the
 if that needs to check if the clean string is = to its reversed version ... just don't know how.

