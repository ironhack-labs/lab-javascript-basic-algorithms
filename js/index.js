console.log("I'm ready");

// Iteration 1: Names and Input

let hacker1 = "Yassine";

console.log("The driver's name is"+ " "+ hacker1);

let hacker2 = "Adrien";
console.log("The navigator's name is "+ " "+ hacker2);


// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has "+ hacker1.length+" characters");
} else if (hacker1.length<hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has "+ hacker2.length+" characters");
} else {
    console.log("Wo, you both have equally long names "+ hacker1.length+" characters!");
}

// Iteration 3: Loops


// 3.1
function transformEverything(hacker){
    return console.log(hacker.split('').join(' ').toUpperCase());
}

transformEverything(hacker1);

// 3.2


let hacker2 = "Adrien";


function reversing(hacker){
    var res = hacker2.split('');
    return console.log(res.reverse().join(''));
}

reversing(hacker2);


// 3.3



function comparing(driver, navigator) {
    if(driver < navigator) {
        return console.log("The driver's name goes first");
    }

    if (driver> navigator) {
        return console.log("Yo, the navigator goes first definitely.")
    }

    return console("What?! You both have the same name?");
}

comparing(hacker1,hacker2);


// Bonus 

// Amazing solution
let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies eros vitae aliquam pulvinar. Maecenas hendrerit augue eget purus sollicitudin, eget fringilla orci mattis. Aliquam ex nunc, varius volutpat gravida a, hendrerit in sem. Nulla pulvinar lorem non felis bibendum tempor. Morbi tincidunt lacus purus, sodales consequat urna iaculis eget. Duis tempus, elit in volutpat rutrum, augue tortor ornare nulla, eu auctor quam enim vel erat. Curabitur lacus elit, rhoncus eu interdum vitae, tincidunt sit amet odio. Donec elit risus, auctor vitae posuere vel, convallis nec tellus. Duis ac ultricies elit, et sodales tortor. Maecenas eu ligula sit amet urna posuere euismod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies eros vitae aliquam pulvinar. Maecenas hendrerit augue eget purus sollicitudin, eget fringilla orci mattis. Aliquam ex nunc, varius volutpat gravida a, hendrerit in sem. Nulla pulvinar lorem non felis bibendum tempor. Morbi tincidunt lacus purus, sodales consequat urna iaculis eget. Duis tempus, elit in volutpat rutrum, augue tortor ornare nulla, eu auctor quam enim vel erat. Curabitur lacus elit, rhoncus eu interdum vitae, tincidunt sit amet odio. Donec elit risus, auctor vitae posuere vel, convallis nec tellus. Duis ac ultricies elit, et sodales tortor. Maecenas eu ligula sit amet urna posuere euismod";


function count_words(text) {
//exclude  start and end white-space
text = text.replace(/(^\s*)|(\s*$)/gi,"");
//convert 2 or more spaces to 1  
text = text.replace(/[ ]{2,}/gi," ");
// exclude newline with a start spacing  
text = text.replace(/\n /,"\n");
return text = text.split(' ').length;

}

console.log(count_words(paragraphs));


// Weird solution

let paragraphs = "Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Nunc ultricies eros vitae aliquam pulvinar. Maecenas hendrerit augue eget purus sollicitudin, eget fringilla orci mattis. Aliquam ex nunc, varius volutpat gravida a, hendrerit in sem. Nulla pulvinar lorem non felis bibendum tempor. Morbi tincidunt lacus purus, sodales consequat urna iaculis eget. Duis tempus, elit in volutpat rutrum, augue tortor ornare nulla, eu auctor quam enim vel erat. Curabitur lacus elit, rhoncus eu interdum vitae, tincidunt sit amet odio. Donec elit risus, auctor vitae posuere vel, convallis nec tellus. Duis ac ultricies elit, et sodales tortor. Maecenas eu ligula sit amet urna posuere euismod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies eros vitae aliquam pulvinar. Maecenas hendrerit augue eget purus sollicitudin, eget fringilla orci mattis. Aliquam ex nunc, varius volutpat gravida a, hendrerit in sem. Nulla pulvinar lorem non felis bibendum tempor. Morbi tincidunt lacus purus, sodales consequat urna iaculis eget. Duis tempus, elit in volutpat rutrum, augue tortor ornare nulla, eu auctor quam enim vel erat. Curabitur lacus elit, rhoncus eu interdum vitae, tincidunt sit amet odio. Donec elit risus, auctor vitae posuere vel, convallis nec tellus. Duis ac ultricies elit, et sodales tortor. Maecenas eu ligula sit amet urna posuere euismod";

function calc_et(text){
    let number = 0;
    text.split();
    for (let i = 0; i < text.length; i++) {
        if(text[i] === "et"){
            number + 1;
        }        
    }
    return console.log(number);
}

calc_et(paragraphs);



function count_words_OUR(text){
    return console.log(paragraphs.split(" ").length);
}

count_words_OUR(paragraphs);







