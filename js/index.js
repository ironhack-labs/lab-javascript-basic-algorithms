// Iteration 1: Names and Input
let hacker1 = "blablabla"
let hacker2 = "blablablabla"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)



// Iteration 2: Conditionals

if ( hacker1.length >  hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length <  hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  } else {
    console.log("Wow, you both have equally long names, XX characters!");
  }
// Iteration 3: Loops
//1.1
let uppercased_spaced = "";
let space = " ";

for (let i = 0; i< hacker1.length; i++){
    uppercased_spaced += hacker1[i].toUpperCase() + space; "blablabla "
  }
    uppercased_spaced = uppercased_spaced.slice(0,-1);
    console.log(uppercased_spaced)
    //1.2

    let reversed_name = ""
    for(let i = hacker2.length-1; i >= 0; i--){
      reversed_name += hacker2[i];
    }
    console.log(reversed_name)
     

    //1.3
    let sorted_names = [hacker1, hacker2];
sorted_names = sorted_names.sort();
if (sorted_names[0] == sorted_names[1]){
  console.log("What?! You both have the same name?")
} else if(sorted_names[0] == hacker2){
  console.log("Yo, the navigator goes first definitely.")
}
else if (sorted_names[0] == hacker1){
 console.log( "The driver's name goes first.")
}

//Bonus1.1

let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non iaculis risus. Aliquam pellentesque, massa ut fermentum blandit, felis est feugiat nibh, sit amet blandit nibh nulla et velit. Nullam aliquet leo nisi, quis porttitor quam porttitor vulputate. Duis tincidunt volutpat consectetur. Pellentesque vestibulum fermentum enim, id gravida nulla placerat sed. Phasellus tristique mi non orci ullamcorper, et aliquet nisi luctus. Nulla facilisi. Suspendisse accumsan ac mauris at pretium. Integer mi mi, maximus vel libero mattis, tincidunt mollis tortor. Curabitur vulputate vehicula odio eget pretium. Vivamus malesuada turpis sem, vel dignissim libero auctor ac. Curabitur justo ante, scelerisque quis varius a, sodales vitae nisi. Suspendisse vel nibh vitae mi feugiat vestibulum non at sapien. Maecenas suscipit tortor urna, vel lacinia sem sollicitudin a. Mauris nisl nisi, auctor id semper eu, elementum nec augue. Proin placerat ante a lorem rutrum condimentum. Fusce congue congue pretium. Donec in efficitur est, non lobortis lorem. Quisque at lacinia lacus, non congue arcu. Mauris semper eget nisi eget elementum. Nunc in malesuada turpis. Nunc posuere ligula in ante tincidunt, sed venenatis tellus pellentesque. Nam sagittis, libero eget egestas tristique, diam purus aliquam massa, eu iaculis tortor orci id nibh. Nunc volutpat vitae nibh non malesuada. Cras rhoncus turpis vitae bibendum suscipit. Proin scelerisque urna ut velit gravida aliquam.Quisque sit amet dapibus orci, in facilisis orci. Praesent vitae orci purus. Pellentesque id urna pharetra, viverra mi quis, ornare purus. Nulla tristique purus nec lorem rutrum rutrum. Mauris volutpat ligula et metus ultricies, ut aliquam eros porttitor. Praesent nec mauris sit amet magna auctor condimentum. Nam rutrum at leo a mollis. Suspendisse potenti. Ut semper lobortis ornare. Quisque tempus non risus vel interdum. Nam tortor arcu, tristique condimentum facilisis mattis, fringilla vel nisi. Integer nisi lectus, feugiat vel convallis dapibus, hendrerit sed augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nunc nisl, vehicula sed ligula et, cursus ultricies sem.";
//Bonus1.2
let words = paragraphs.split(' ');
let counted_words = words.length;
console.log(counted_words);
//Bonus1.3
let et_times = 0;
for (let i = 0;i < words.length;i++) {
  if (words[i] == "et"){
    et_times++;
  } 
}
console.log(et_times)

//Bonus2
let phrase_to_check = "A man, a plan, a canal, Panama!"

phrase_to_check = phrase_to_check.split("").join();


let raw_strings_of_phrase = ""
for( i = 0; i < phrase_to_check.length ; i++ ) {
  raw_strings_of_phrase += phrase_to_check[i].replace(" ","").replace(",","").replace("!","")
}
console.log(raw_strings_of_phrase);
let reversed_phrase = ""

for(let i = raw_strings_of_phrase.length-1; i >= 0; i--){
  reversed_phrase += raw_strings_of_phrase[i];
}
console.log(reversed_phrase)
if (reversed_phrase.toLowerCase() == raw_strings_of_phrase.toLowerCase()){
  console.log("phrase is Palindrome!")
} else {
  console.log("phrase is NOT Palindrome!")
}
