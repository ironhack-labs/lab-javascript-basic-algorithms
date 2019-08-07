// Names and Input
var hacker1="Zacharia";

 console.log(`the hacker's name is ${hacker1}`);

var hacker2= window.prompt("And you are?");

console.log(`the navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} letters`);
    }
    else if (hacker1.length == hacker2.length){
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters each!`);
    }
    else{
        console.log(`Navigator has the longest name, it has ${hacker2.length} characters.`);
    }

 for (i=0;i<hacker1.length;i++){
        console.log(hacker1[i].toUpperCase());
    }


for (i=hacker2.length - 1 ;i>=0 ; i--){
    console.log(hacker2[i]);
}

var names =[hacker1,hacker2];

for (i=0;i<names.length; i++){
    names.sort();
    if(hacker1==hacker2){
        console.log("You guys got the same name?");
    }
    else if (names[0]==hacker1){
        console.log ("The driver's name goes first");
    }
    else if(names[0]==hacker2){
        console.log("The navigator definitely goes first");
    }
}

var palindrome = window.prompt("Type a sentence");

for(i=0;i<palindrome.length;i++){
    let question = palindrome.replace(/\W/g,"");
    
    let answer = question.split('');
    answer.reverse('');

    if(question.toLowerCase() == answer.join('').toLowerCase()){
        console.log("It's a palindrome!");
    }
    else{
        console.log("Do you even know what a plaindrome is??");
    }
}

var lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit finibus tellus quis pellentesque. Nunc egestas metus eu sollicitudin tempus. Quisque eleifend viverra lectus sit amet suscipit. Pellentesque sed consectetur neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus, dolor eget volutpat ultricies, libero nisl porta mi, id efficitur turpis turpis sed urna. Suspendisse nec sodales nisi. Ut vehicula vulputate suscipit. Integer quis erat eget ante sagittis ullamcorper in sit amet diam. Nullam nec euismod est. Maecenas hendrerit turpis ac massa aliquam interdum. Vestibulum condimentum risus molestie condimentum dapibus. In mollis mauris ex, ut commodo ipsum pellentesque at. Integer et ultrices augue, a rhoncus orci. Ut posuere elit et ante pharetra, a varius metus porta. Maecenas dapibus interdum erat ut vestibulum. Morbi at odio tellus. Pellentesque bibendum rhoncus orci, at consequat ipsum facilisis a. Morbi nec iaculis sem. Morbi malesuada ligula eget mi pellentesque pulvinar. Sed lacinia, tellus eget venenatis consectetur, eros justo fermentum magna, mollis ultricies purus dolor laoreet neque. Aenean rhoncus faucibus ultricies. In sed laoreet libero. Suspendisse in tincidunt tortor. Nunc mattis, purus ut porttitor pulvinar, velit urna facilisis leo, sit amet suscipit erat purus eu ligula. Praesent sit amet lectus accumsan, ornare tellus a, aliquam massa. Morbi id magna et erat pellentesque iaculis. Duis aliquet magna lacus, sit amet consectetur lectus venenatis non. Ut fringilla ex et pellentesque pulvinar. Suspendisse at felis nec erat iaculis maximus. Sed facilisis arcu id luctus dictum. Nullam vitae dolor malesuada, porttitor mi sit amet, malesuada nulla. Donec vel libero et metus interdum vulputate. Morbi accumsan eros vitae augue auctor consectetur. Nam nec urna in diam pulvinar eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed et accumsan dolor. Vestibulum in eleifend ante. ";

var count = 0;


function countWords(words) {
    const tmp = words.split(/\W/);
    let count = 0;
    for (let i = 0; i < tmp.length; i += 1) {
      if (tmp[i]) count++;
    }
    console.log(count);
    }
    countWords(lorem);

function countEt(words){
    const dude = words.split(/\W/);
    let newCount = 0;
    for (let i = 0; i < dude.length; i+=1){
        if (dude[i] == "et"){

        newCount++;}
    }
    console.log(newCount);
}
countEt(lorem);


//Conditionals


// Lorem ipsum generator
