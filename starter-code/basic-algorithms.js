// Names and Input

// #1-4
var hacker1 = "Jon"
console.log("The driver's name is Jon");

var hacker2 = window.prompt("hacker2 Whats yo name?");
console.log("The navigators name is " + hacker2 + ".");


//Conditionals

// #5
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " letters.");
}

else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " letters.");
}

else console.log("wow, you both got equally long names, " + hacker1.length + " letters.");

// Loops 

// #6
var emptySpace = ''
for (i=0; i<hacker1.length;i++) {
  emptySpace += hacker1[i].toUpperCase() + " ";
  if (emptySpace.length == hacker1.length*2) {
  console.log(emptySpace);
  }
}
// #7
var backwards = ""
for (j=hacker2.length-1; j>=0; j--) {
  backwards += hacker2[j];
  if(backwards.length == hacker2.length) {
    console.log(backwards);
  }
}
// #8
var lex = hacker1.localeCompare(hacker2);
if (lex == -1) {
  console.log("The drivers name goes first")
}
else if (lex == 1) {
  console.log("Yo, the navigator goes first definitely")
}
else console.log("What?! You both got the same name?")

// Palindrome Check

// #9
var palindrom = window.prompt("Enter any word");

function checkPalindrom(palindrom) {
  var isItPali;
    for (p = palindrom.length-1; p >= 0; p-- ) {
    
        if(palindrom[p] == palindrom.charAt(palindrom.length-1-p))  {
          isItPali = "This word is a Palidrome!";
        }
        else  {
          isItPali = "This word is NOT Palidrome!";
        
          return isItPali;
        }
    }
    return isItPali;
}
console.log(checkPalindrom(palindrom))

// Lorem ipsum 

// #10
var ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut pretium orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas in lectus vestibulum, dictum nibh sed, convallis eros. In vel neque faucibus risus euismod lobortis vel sit amet mauris. Fusce nec risus finibus, eleifend tortor a, mattis nisi. Integer ultricies mollis velit, hendrerit consequat nunc gravida quis. Integer commodo, enim ac scelerisque viverra, lacus massa lobortis nisi, nec porta sem ligula sit amet velit. Nunc nibh enim, ultricies non facilisis id, tempor ut odio. Integer augue lectus, suscipit in enim non, aliquam tincidunt tellus. Etiam ullamcorper orci a nisl mollis congue. Integer hendrerit congue luctus. Curabitur eget scelerisque enim. Curabitur ornare, enim ut sagittis maximus, ipsum tellus tristique est, et euismod urna neque lacinia urna. In dapibus vulputate ullamcorper. Aenean imperdiet enim enim, sed varius elit convallis at. Aenean elementum orci eget purus varius, ut pulvinar leo sagittis.

Donec in lacus dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus vestibulum, justo non pharetra mattis, quam nisi varius urna, sed ornare ligula ligula a nibh. Vestibulum aliquet tempor mollis. Suspendisse tincidunt velit aliquam ante feugiat bibendum. In tempus sem nunc, non fringilla libero vulputate ac. Curabitur risus ex, interdum sed aliquet ac, vestibulum quis odio. Etiam at tellus eget mauris dictum efficitur. Aliquam lobortis, risus quis porta tempor, tellus tellus consectetur ante, nec scelerisque ex neque sed dui. Pellentesque egestas ligula non velit iaculis suscipit.

Sed feugiat eu magna et mattis. Sed lacus turpis, viverra sit amet semper id, tincidunt ac lacus. In aliquam non sem ut tempor. Praesent blandit mollis risus accumsan pellentesque. Duis maximus libero in nisi maximus, a euismod felis malesuada. Quisque rhoncus convallis augue quis ultricies. Morbi maximus a orci sit amet tincidunt. In interdum interdum mattis. Suspendisse eget risus neque. Pellentesque elementum, tellus at tincidunt volutpat, mi diam tristique tortor, sed porttitor sapien arcu vitae dui. Curabitur risus tellus, rhoncus non tincidunt sit amet, ultrices mattis odio. Suspendisse auctor ut nulla ultricies iaculis.`

// Word Count
var wordCount = ipsum.split(" ").length +1;
console.log(wordCount);

// "et" count
var etCounter = ipsum.split(" et ").length -1;
console.log(etCounter);