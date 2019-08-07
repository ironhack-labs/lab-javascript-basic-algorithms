console.log("I'm ready!")
var hacker1 = "Alexandre"
console.log("The Driver's name is " +hacker1)
var hacker2 = prompt("What is your name ?")
console.log("The Navigator's name is " + hacker2)

if (hacker1.length>hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + "characters")
}
else if (hacker1.length<hacker2.length) { 
  console.log("Yo, Navigator got the longest name, it has " + hacker2.length + "characters")}

  else{
    console.log("wow, you both got equally long names, " + hacker1.length || hacker2.length + "characters !!")
  }

  let transformedString = ""
  for(var i =0; i< hacker1.length; i++) {
    /*console.log(hacker1[i].toUpperCase()+ " ")*/
    transformedString = transformedString + hacker1[i].toUpperCase()+ " " 
  }
  console.log(transformedString)

  let reverse = ""
  for(var i= hacker2.length -1; i>=0; i--){
    reverse = reverse + hacker2[i]
  }
console.log(reverse)

let palindrome = prompt("Palindrome ?");
let revpalin="";
  for(var i= palindrome.length -1; i>=0; i--){
    revpalin = revpalin + palindrome[i]
  }
console.log(palindrome)
if(palindrome==revpalin){
  console.log("It's a Palindrome ! ")
}
else{
  console.log("It's not a palindrome !")
}

var count=1;
var text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel quam erat. Cras a malesuada mi. Phasellus euismod quis mi et vestibulum. Vivamus leo enim, consectetur vitae cursus ut, elementum vel libero. Maecenas commodo dui quam, at bibendum metus pellentesque at. Nulla at tellus fermentum, fringilla sem egestas, cursus risus. Pellentesque quis ante convallis, sollicitudin dolor et, tincidunt dolor. Sed faucibus dolor libero, sed suscipit lectus efficitur non. Integer tristique gravida urna eget congue. Vestibulum venenatis luctus elementum. Maecenas congue nibh enim, nec consequat orci rhoncus ac. Vivamus aliquet eget nibh sit amet elementum. Duis ultrices malesuada diam in viverra. Donec laoreet turpis vitae laoreet eleifend. Ut imperdiet ex et egestas vulputate. Suspendisse et luctus turpis. Nam pulvinar auctor cursus. Nullam sit amet maximus tellus. Aenean ultrices urna nisi, eu ornare mi sollicitudin vitae. Pellentesque pulvinar orci purus, sit amet interdum eros suscipit et. Maecenas dapibus mauris sit amet eros lacinia, id semper nibh tristique. Aenean nec odio ligula."
for(i=0; i< text.length; i++){
  if(text[i]== " "){
    count = count + 1;
  }
}
console.log(count)
