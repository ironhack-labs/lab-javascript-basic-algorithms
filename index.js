// Iteration 1: Names and Input
let hacker1 = "Carlos";
console.log("The driver's name is "+hacker1);
let hacker2 = "Javier";
console.log("The navigator's name is "+hacker2);

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has " +
    hacker1.length+" characters.");
}else if(hacker2.length>hacker1.length){
    console.log("It seems that the navigator has the longest name, it has "+
    hacker2.length+" characters.");
}else{
    console.log("Wow, you both have equally long names, "+
    hacker1.length+" characters!.");
}


// Iteration 3: Loops
let result1="";
let result2="";
hacker1.toUpperCase().split('').forEach(letter => {
    result1 += letter + " ";
});
console.log(result1.trim());

for(let i=hacker2.length-1;i>=0;i--){
    result2+=hacker2[i];
}

console.log(result2);

// BONUS
let longText=`Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Aliquam cursus cursus sollicitudin. 
Proin ante metus, accumsan vel consectetur quis, maximus 
id risus. Aenean elementum accumsan est at aliquam. Vestibulum 
facilisis ante ac eros tempor interdum. Vivamus ac pretium ante, 
a convallis enim. Aliquam erat volutpat. Ut vel augue at lacus 
lacinia condimentum. Ut mollis, lacus a semper euismod, orci 
diam auctor dolor, a egestas quam eros vel lacus. Nam sit amet 
vulputate magna. Pellentesque dictum interdum dui non tincidunt. 
Aliquam sed odio ipsum. Suspendisse a semper enim. Proin pharetra 
ex in eros sagittis, nec bibendum est eleifend.

Nam vulputate in dolor sagittis ornare. Donec fringilla aliquet 
velit, vel viverra tortor egestas ac. Aenean placerat quam quis 
pulvinar ultrices. Maecenas volutpat luctus elit, pulvinar egestas 
leo rutrum non. Quisque in sagittis nunc. Vivamus lobortis eros eu 
risus gravida, in facilisis sem placerat. Sed tincidunt mauris vel 
magna tempus volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Cras vestibulum est ac varius vulputate. Mauris ultricies auctor 
tortor eu tincidunt. Donec eu gravida elit. Nullam eu fermentum sapien. 
Maecenas tincidunt mi quis erat venenatis, vitae suscipit eros lobortis.

Vivamus euismod, lorem ac porta placerat, enim turpis malesuada orci, 
id gravida ipsum orci nec velit. Donec eu venenatis orci. Praesent mollis 
pulvinar volutpat. Fusce ac finibus nunc. Sed viverra sodales sapien in 
vestibulum. In tristique ligula at finibus tempor. Cras eleifend 
condimentum ullamcorper. Pellentesque sem mauris, commodo ut libero 
ac, elementum semper tortor. Praesent dapibus arcu consectetur tristique 
commodo.`;


let etCount=0;
let words=longText.split(/\s+/);

words.forEach(word => {
    if (word.toLowerCase()==="et") {
        etCount++;
    }
});

console.log("Number of words : "+words.length);
console.log("Number of 'et' words : "+etCount);

