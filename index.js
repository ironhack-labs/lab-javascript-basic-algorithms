

console.log("I'm ready!");
// Iteration 1: Names and Input

var hacker1 = "Milande"; 
console.log(`The driver's name is ${hacker1}`);
var hacker2 = "Kate"; 
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver's name has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
// Iteration 3: Loops

console.log(hacker1.toUpperCase());


function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray; //
}

//Bonus1  

var toto = 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a felis et metus accumsan hendrerit. Nunc viverra ipsum ante, vitae consectetur elit aliquam sed. Nulla eget dui consectetur, eleifend magna et, faucibus metus. Suspendisse maximus est ac arcu tempus accumsan. Nulla dignissim ut justo sed malesuada. Mauris sollicitudin pretium odio, ac dignissim nisl sodales eu. Aenean id porttitor mauris. Vivamus mattis est ut nulla tempor, sit amet elementum augue auctor.\ Pellentesque pulvinar varius varius. Donec interdum arcu sagittis posuere sodales. Morbi interdum tincidunt ligula, nec malesuada diam finibus vitae. Nullam consequat velit at sapien cursus porttitor. Fusce ac porta neque, non rhoncus ipsum. Vivamus imperdiet, metus eu consequat efficitur, tortor tortor ornare augue, nec convallis dolor ipsum vel mauris. Etiam porttitor risus ligula, et placerat sem tristique ac. Praesent dictum urna vitae ante viverra elementum. Aenean eleifend suscipit lectus, a tempor purus. Donec consequat varius ligula eget vestibulum.\ Sed cursus varius felis id interdum. Aenean ac dolor eu risus dignissim commodo in vel ipsum. Phasellus pulvinar elit sed tellus convallis, eu blandit est suscipit. In maximus tortor eget metus auctor, maximus dignissim lorem accumsan. Aenean vel metus erat. Mauris tempus massa ut mi venenatis convallis. Integer ut aliquam augue, nec cursus tortor. Nam iaculis fringilla velit ut elementum. In neque odio, interdum eget sodales vitae, efficitur eu ipsum. Praesent consequat odio vitae massa pretium tempor. Praesent ultricies, dui eget iaculis tempor, ligula dolor venenatis sapien, ut lacinia odio urna in urna. Aenean et blandit est. Fusce ut auctor lectus, id imperdiet magna. Vivamus luctus est magna, nec hendrerit odio ultricies vel. Fusce quis gravida nunc. Maecenas pharetra ornare lacus, non imperdiet risus egestas sit amet.'

function WordCount(toto) { 
  return toto.split(" ").length;
}

console.log(WordCount(toto));

function countOccurences(string, word) {
   return string.split(word).length - 1;
}

var count=countOccurences(toto," et "); 

console.log(count);