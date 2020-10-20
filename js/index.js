// ...................i1
let h1 = `badww`
console.log(h1)
let h2 = `badwww`
console.log(h2)

// ....................i2
h1.length===h2.length 
  ? console.log(`Wow, you both have equally long names,${h1.length} characters!`)
  : h1.length > h2.length
    ?console.log(`The driver has the longest name, it has ${h1.length} characters`)
    : console.log(`It seems that the navigator has the longest name, it has ${h1.length} characters`)
    
    
// ..................i3

let h1c = h1.toUpperCase().split("").join(" ")
console.log(h1c)
//.................
let h2c = h2.split("").reverse().join("")
console.log(h2c)
//................
let longest = h1.length===h2.length ? h1 : h1.length>h2.length ? h1 : h2
//................
for (let i=0;i<longest.length;i++) {
  if (h1.toLowerCase().charCodeAt(i)<h2.toLowerCase().charCodeAt(i)) {
    console.log(`The driver's name goes first.`)
    break;
  } else if (h1.toLowerCase().charCodeAt(i)>h2.toLowerCase().charCodeAt(i)) {
    console.log(`Yo, the navigator goes first definitely.`)
    break;
  } else if (longest.length === i+1) {
    console.log(`What?! You both have the same name?`)
  }
}



//..................... bonus1
let lorem = 
 // `1 2 3 et 5 6 7et 8 9. 10 (et 12 et) et- 15 et16 17 et.
// 19 20.`

`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem magna, imperdiet ac enim ut, cursus vulputate quam. Nam consequat sed augue eu porta. Vestibulum tincidunt dui ac libero suscipit consequat. Phasellus orci mi, consequat quis pellentesque id, tempus aliquam metus. Nullam at dolor ultricies nibh dictum auctor nec vitae sem. Cras vel lacus sollicitudin nulla posuere gravida. Curabitur sollicitudin convallis aliquet. Sed sed sodales purus. Duis eget faucibus leo. Maecenas dignissim dui sit amet diam aliquet maximus.

//Nulla et enim suscipit, consequat ex a, feugiat odio. Mauris in maximus justo, quis pharetra urna. Nam ut lectus eget nisl hendrerit vestibulum sed ut ante. Integer ut dictum tellus. Nulla sed congue velit, at faucibus ligula. Quisque eu bibendum neque. Etiam semper erat bibendum tellus fringilla, a varius orci volutpat. In hac habitasse platea dictumst. Nulla a sagittis lorem. Sed ac facilisis quam, a ornare nibh. Duis neque odio, convallis sit amet aliquet vitae, semper cursus libero. Nam rutrum, tortor non mollis blandit, tellus dolor ultricies nisi, quis vehicula est sem a nibh. Praesent dignissim vel arcu posuere efficitur. Donec ante metus, sagittis condimentum rhoncus quis, malesuada eget libero.

//Nulla ultricies purus quis ultricies accumsan. Nunc et ornare mi. Fusce quis est eget risus placerat sollicitudin et ut dui. Praesent efficitur a eros et blandit. Nullam ut interdum odio. Donec id tempor tellus. Aenean ante tellus, ornare quis quam ut, vehicula accumsan erat. Sed volutpat tincidunt tellus, at mattis lorem tincidunt sit amet. Quisque eget mattis risus, non fermentum lacus. Mauris nec porta mi.`
// tiene 253


if (lorem.split(".\n").length === 1){
  console.log(lorem.split(' ').length);
} else {
  console.log(lorem.split(' ').length + lorem.split('.\n').length -1 +  " words");
}
console.log(lorem.split(' et ').length + 
            lorem.split(' et.').length +
            lorem.split(' et,').length + 
            lorem.split(' et)').length + 
            lorem.split('(et ').length + 
            lorem.split('-et ').length + 
            lorem.split(' et-').length -7 +
            ' "et"');


// ....................bonus2

function isPalindrome(str) {
  let strArr = str.toLowerCase().split("")
  let cleanArr = []
  strArr = strArr.map(x=>x.match(/[a-z0-9]/g) && cleanArr.push(x))

  for (let i =0;i<cleanArr.length;i++) {
    if (cleanArr[i]!==cleanArr[cleanArr.length-1-i]){
      return "it's NOT a Palindrome"      
    } 
  } 
 return "it's a Palindrome"
}

var phraseToCheck = "ajkjaa"
isPalindrome(phraseToCheck)


