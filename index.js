// Iteration 1: Names and Input
const hacker1 = "aoge", hacker2 = "hamid";
console.log("The driver's name is", hacker1);
console.log("The navigator's name is", hacker2);
// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters. `);
}else if(hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};
// Iteration 3: Loops
// .1
let big = "";
for(const val of hacker1){
    big += val.toUpperCase() + " ";
}
console.log(big);

// .2
let reverse = "";
for(let i=hacker2.length-1; i>=0; i--){
    if (i==0){
        reverse += hacker2[i].toUpperCase();
    }else{
        reverse += hacker2[i];
    }
}
console.log(reverse);

// .3
console.log(hacker2.localeCompare(hacker1))

if(hacker1.localeCompare(hacker2)<0){
    console.log("The driver's name goes first.");
}else if(hacker1.localeCompare(hacker2)>0){
    console.log("Yo, the navigator goes first, definitely.");
}else{
    console.log("What?! You both have the same name?");
}

// bonus
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et cursus turpis. Vestibulum lacinia venenatis euismod. Curabitur suscipit mattis lorem, vel viverra eros consectetur at. Pellentesque non ex at tellus mollis mattis. Nullam vitae ullamcorper neque, eget tempus metus. Pellentesque in tellus consequat orci malesuada tincidunt sed ac sem. Sed faucibus non metus eu venenatis. Suspendisse mi justo, facilisis vitae nulla sed, hendrerit dapibus velit. Sed at semper mi. Sed nisi augue, vulputate ut tempor sit amet, sodales nec neque. Ut malesuada tempus commodo. Etiam consectetur est quis venenatis bibendum. Donec efficitur vulputate tortor, cursus volutpat nunc tempus ut. Curabitur placerat metus sit amet lectus luctus consequat. Vestibulum consectetur feugiat posuere.

Nulla viverra metus vel turpis egestas, et mattis mauris viverra. Quisque volutpat justo eget lacus vulputate elementum. Sed eget tortor id nisi interdum pellentesque. Ut finibus ac mi quis facilisis. Integer non tincidunt ante, nec suscipit eros. Maecenas fermentum nibh ultricies tellus sollicitudin porttitor. Vivamus laoreet sapien lectus. Nullam tincidunt justo eu felis rhoncus viverra. Cras a lorem ut mauris tincidunt scelerisque finibus in sapien. Morbi lacinia, magna et pharetra vulputate, libero ex aliquam elit, eu tempus mi odio quis lacus. Proin mollis diam non ex cursus porttitor. Vivamus iaculis turpis risus, id egestas ipsum pretium quis. Phasellus facilisis, justo non posuere blandit, neque enim porta erat, et aliquet lectus ante ut augue.

Praesent vehicula dolor vitae diam suscipit aliquet. Donec ullamcorper pharetra arcu vitae rutrum. Donec ultrices quis sapien eget euismod. Morbi congue pulvinar pretium. In hac habitasse platea dictumst. Aliquam mauris tortor, pretium sit amet risus sit amet, porta dignissim felis. Quisque tempor pellentesque consectetur. Cras et magna vel massa fringilla faucibus. Mauris quis nunc porttitor, placerat nisi in, consequat nibh.`

// push each word to an array
function str2arr(m) {
    let myArr = [];
    let counter = "";
    for (let i = 0; i < m.length; i++) {
      if (m[i] !== ' ') {
        counter += m[i];
      } else{
        myArr.push(counter);
        counter = "";
      }
    }
    // Add the last word if it exists
    if (counter.length > 0) {
      myArr.push(counter);
    }
    // console.log(myArr);
    return myArr;
}

// builtin function to check number
let count = longText.split(" ");
console.log(count.length);

// own function for to count the length
console.log(str2arr(longText).length);

// to check et in the paragraph
str_array = str2arr(longText);
count = 0;
for (const val of str_array){
    if(val === "et"){
        count+=1;
    }
}
console.log(count)

// bonus 2
const phraseToCheck = "A man, a plan, a canal, Panama!";
function palindrome(str){
    
    let word=""
    alph = "abcdefghijklmnopqrstuvwxyz"
    
    // get just the alphabet in the phrase
    for(const val of str){
        if(alph.toUpperCase().includes(val.toUpperCase())){
            word+=val.toUpperCase();
        }
    }
    // console.log(word);

    // check if phrase is palindrome
    let count=0;
    for(let i=0; i<word.length;i++){
        if(word[i] === word[word.length-1-i]){
            count+=1;
        }
    }
    // console.log("count: ", count, " word.length: ", word.length)

    // return true if 
    if(count === word.length){
        return true;
    }else{
        return false;
    }

}

console.log(palindrome(phraseToCheck));

// test git commands