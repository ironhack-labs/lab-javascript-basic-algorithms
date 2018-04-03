// Names and Input
var hacker1 = "Stephen";
var hacker2 = "Jason";

console.log("The driver\'s name is" + " " + hacker1);
console.log("The navigator\'s name is" + " " + hacker2);
//Conditionals
if (hacker1.length === hacker2.length){
  console.log("Wow, you both equally have long names, " + hacker1.length + " characters");
}
else if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
}
else{
  console.log("The navigator got the longest name, it has " + hacker2.length + " characters." );
}

var result = "";

for (var i = 0; i < hacker1.length; i++){
  result = result + hacker1[i] + " ";

}
 console.log(result.toUpperCase());

var result2 = "";

for (var h = hacker2.length - 1; h >= 0; h--){
  result2 += hacker2[h]
}
console.log(result2)

// Lexicographic Order? Not sure what you want me to do here.

//9. Palindrome
var palindrome = "A man, a plan, a canal, Panama!";
var sub = "";

for (var v = palindrome.length - 1; v >= 0; v--){
  sub += palindrome[v]
}

console.log(sub)



// Lorem ipsum generator

var lorem = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat";

for (var l = 0; l < lorem.length; l++){
  var words = lorem[l]
  if (words === "et"){
    console.log(l)
  }
}