// Names and Input
let hacker1 =  'Justin'
console.log('The driver\'s name is ' + hacker1 )

let hacker2 = window.prompt('What is your name?')
console.log('The navigator\'s name is ' + hacker2)
//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(hacker1 + ' has the longest name, it has ' + hacker1.length + ' characters.')
} else if (hacker2.length > hacker1.length) {
  console.log(hacker2 + ' has the longest name, it has ' + hacker2.length + ' characters')
} else {
  console.log('wow, you both got equally long names, ' + hacker1.length + ' characters!!')
}

//Loops

//Put a space to driver name and makle uppercase
let hacker1space = ''
 for (var i = 0; i < hacker1.length; i ++) {
  hacker1space += hacker1[i].toUpperCase() + ' ' 
 } 
 console.log(hacker1space)


 //Navigator name in reverse
 let hacker2reverse = ''
for (var i = hacker2.length - 1; i >= 0; i--) {
  hacker2reverse += hacker2[i];
}
console.log(hacker2reverse)

//Lexicographic Order

var lex = hacker1.localeCompare(hacker2)
if (lex == -1) {
  console.log('The driver\'s name goes first')
} 
else if (lex == 1) {
  console.log('Yo, the navigator goes first definitely')
}
else {
  console.log('What?! You both got the same name?')
}





//Palindrome  Checker
palin = prompt('type a palindrome')
function palindrome(palin) {
  var re = /[\W_]/g; //check globablly for only words (regex)
  palin = palin.toLowerCase().replace(re, ''); //make entire input lowercase, and replace all non word characters
  var len = palin.length;
  for (var i = 0; i < len/2; i++) { //split word/sentence in half
    if (palin[i] !== palin[len - 1 - i]) { //if first letter (i) does not match last letter (length minus one minus count of loop)
        return console.log('this is not a palindrome');
    } else {
      return console.log('This is a palindrome')
    }
  }
 }
 palindrome(palin);


// Lorem ipsum generator
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum porttitor ligula non consectetur. Mauris sed consectetur libero, eget elementum libero. Vestibulum ullamcorper luctus lacinia. Donec sagittis turpis et ullamcorper placerat. Integer in eros id elit facilisis blandit non at nisl. Phasellus mollis tempor lectus vitae rhoncus. Vestibulum non ex risus. Donec justo tortor, fringilla porttitor tincidunt eget, porta vel nisl. Suspendisse scelerisque vitae ante non tincidunt. Nullam et lacus non tortor mollis consequat. Etiam luctus magna in accumsan convallis. Ut porta turpis ut urna eleifend rutrum vel viverra massa. Sed iaculis neque dui, et dignissim dolor ultrices vitae. Nunc mauris ante, interdum sed venenatis non, semper sed urna.
Vivamus non eros diam. Morbi rutrum, massa nec molestie posuere, ante nisl vestibulum lacus, scelerisque finibus dolor ipsum eget justo. Sed commodo lacus eu purus ultrices bibendum. Praesent cursus vestibulum eros id sollicitudin. Mauris efficitur ex risus, consequat fringilla ligula convallis sit amet. Phasellus id augue nulla. Suspendisse et velit odio.
In hac habitasse platea dictumst. Suspendisse quis quam id leo facilisis convallis. Etiam sollicitudin consectetur semper. Praesent consequat facilisis mi, eu blandit turpis facilisis ut. Sed hendrerit diam nisl, id vehicula elit ultricies ac. Nunc ornare, tortor vel vulputate tincidunt, risus lacus ultricies nulla, ac hendrerit lacus mi ut eros. Mauris sollicitudin felis ut magna sollicitudin laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis viverra erat congue ullamcorper. Aenean ornare malesuada enim. Fusce scelerisque sapien sapien, ac rhoncus odio commodo quis. Suspendisse ac sapien molestie nulla accumsan molestie in ac dolor. Duis auctor mi est, in cursus tortor suscipit vel. Sed tincidunt elit at nunc euismod volutpat.`
let wordCount = lorem.split(' ').length //split sring into array after every space, and count length of array
console.log(wordCount) //Number of Words

var wordMatch = lorem.match(/et/g).length; //using regex. g means global, so it counts every word.
console.log(wordMatch)
