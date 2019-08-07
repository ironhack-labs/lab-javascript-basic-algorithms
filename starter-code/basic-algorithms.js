// Names and Input
var hacker1="Niraja";
console.log("the driver's name is " +  hacker1);
var hacker2=window.prompt("enter navigator's name please...");
var hacker11="";
var hacker22="";

console.log("The navigator's name is " + hacker2)



//Conditionals
if(hacker1.length>hacker2.length){
    console.log("The driver has the longest name" + hacker1.length)
}
else if(hacker2.length>hacker1.length){
    console.log("yo, navigator got the longest name" + hacker2.length)
}

else{
    console.log("wow, you both got equally long names" + hacker1.length)
}

var upper;
for(let i=0;i<hacker1.length;i++){
    
    hacker11+=hacker1[i] + " ";
}
upper=hacker11.toUpperCase();
console.log(upper);

for( let j=hacker2.length-1;j>=0;j--){
    console.log(hacker2[j]);
}

if(hacker1.charCodeAt(0)>hacker2.charCodeAt(0)){
    console.log("the driver's name goes first")
}

else if(hacker2.charCodeAt(0)>hacker1.charCodeAt(0)){
    console.log("yo,the navigator goes first definitely")
}

else{
    console.log("what ?! you both got the same name?")
}


//Pallindrome
var opposite="";
var Palindrome=window.prompt("enter a string to check palindrome");
for( let k=Palindrome.length-1;k>=0;k--){
    opposite+=Palindrome[k];
}
console.log(opposite);

if(Palindrome===opposite){
    console.log("the word is Palindrome")
}

 else {
     console.log("the word is not Palindrome")
 }


// Lorem ipsum generator

var text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat"

var count=0;
for(let u=0;u<text.length;u++){
    if(text[u]===" ")
    count++;
}

console.log("the number of words in the above paragraph is " + count);

var countet=0;

for(let p=0;p<text.length;p++){
    if(text[p-1]===" " && text[p]==="e"&& text[p+1]==="t" && text[p+2]===" ")
    countet++;
}

console.log("the number of et in the paragraph is " +  countet);