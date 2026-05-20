// Iteration 1: Names and Input

let hacker1 ="Ruzi";

console.log("The driver's name is "+ hacker1);

let hacker2 ="Neymar";

console.log("The navigator's name is " + hacker2 );

// Iteration 2: Conditionals
let h1 =hacker1.length;
let h2 = hacker2.length;

if( h1>h2){
    console.log("The driver has the longest name, it has " + h1 + " characters");
}
else if (h1=h2){
    console.log("It seems that the navigator has the longest name, it has " +h2 +" characters.");
}
else {
    console.log("Wow, you both have equally long names, XX characters!");
}
// Iteration 3: Loops

let ans = "";

if (h1 > 0) {
      for (let k = 0; k < h1 - 1; k++) {
        ans += hacker1[k]+ " "; 
    }
   ans += hacker1[h1 - 1];
}

console.log(ans.toUpperCase());

let ans2="";
for( let len=hacker1.length-1; len >=0; len-- ){
    ans2+=hacker1[len];
}
console.log(ans2);


// Iteration 3.3: Lexicographic Order

if (hacker1<hacker2) {
    console.log("The driver's name goes first.");
} 
else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} 
else {
    console.log("What?! You both have the same name?");
}

//bonus 1 
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum tincidunt quam ac fermentum. Nam eu felis dolor. Donec non molestie quam. Suspendisse eleifend, ante vehicula fringilla accumsan, nisi nisi scelerisque felis, vel molestie neque tortor ac velit. Curabitur vulputate massa non tempor interdum. Integer consectetur, velit non dapibus aliquam, massa elit condimentum ipsum, a maximus dui lectus vel tellus. Phasellus eu mauris consequat lacus convallis pellentesque. Nullam efficitur vehicula nulla, non tempor elit mollis quis. Duis molestie a nibh ut vestibulum. Cras eros turpis, blandit id ultricies id, vehicula id ligula.

Donec dolor odio, accumsan ornare accumsan quis, scelerisque at mi. In egestas sapien lacus, non tempus magna luctus sit amet. Aenean lacus purus, fringilla eget rhoncus quis, consequat non mauris. Duis at est sit amet velit posuere rhoncus. Nullam faucibus lacus sit amet lorem euismod, ut sollicitudin odio semper. Sed nec vehicula ex. Pellentesque quis leo suscipit, placerat diam ac, rhoncus augue. Nunc at nisi ac orci efficitur finibus. Quisque volutpat rhoncus massa, nec feugiat enim. Suspendisse quis porttitor magna.

Donec id commodo nibh. Nulla in felis id augue egestas lobortis. Quisque euismod condimentum rhoncus. Quisque consectetur odio vitae libero bibendum, nec aliquet turpis interdum. Aenean ac neque tellus. Duis est leo, commodo et sem nec, lobortis venenatis augue. In interdum tempus libero id facilisis. Curabitur euismod feugiat egestas. Nam vestibulum, risus ut molestie dapibus, massa odio mattis ex, in auctor justo mi eget dolor. Nullam scelerisque interdum odio eu aliquam. Curabitur imperdiet enim massa, eu bibendum nibh accumsan vel.`
let wordCount = 0;
let etCount = 0;
let currentWord = "";
for (let i = 0; i <= longText.length; i++) {
    let char = longText[i];
   if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        currentWord += char.toLowerCase();
    }
    else if (char === " " || char === "\n" || i === longText.length) {
        if (currentWord !== "") {
            wordCount++; 
            if (currentWord === "et") {
                etCount++; 
            }
            currentWord = ""; 
        }
    }
}
console.log("Total word count: " + wordCount);
console.log("The word 'et' appears: " + etCount + " times");

// bonus 2 
let phraseToCheck = "Was it a car or a cat I saw?";
let cleanText = "";

for (let i = 0; i < phraseToCheck.length; i++) {
    let char = phraseToCheck[i]; 
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        cleanText += char.toLowerCase();
    }
}
let isPalindrome = true;
let left = 0;
let right = cleanText.length - 1;
while (left < right) {
    if (cleanText[left] !== cleanText[right]) {
        isPalindrome = false; 
            break; 
    }
    left++;  
    right--; 
}
if (isPalindrome) {
    console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
    console.log(`"${phraseToCheck}" is NOT a palindrome.`);
}
