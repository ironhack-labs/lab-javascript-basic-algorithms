//Iteración 1

let hacker1 = "Luis";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Diego";
console.log(`The drivers name is ${hacker2}`);

//Iteración 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length) {
  console.log(`The driver ${hacker2} has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}`)}
//Iteración 3
//3.1
let driver = ""
for (i=0; i < hacker1.length;i++){

  driver+=hacker1[i].toUpperCase() + " "
  
} console.log(driver)

//3.2
let navigator= ""
for (i=hacker2.length-1; i >= 0;i--) {
  
 navigator+=hacker2[i]

} console.log(navigator)

//3.3

/*"The driver's name goes first."
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/

switch (true) {
  case hacker1.charCodeAt(0)<hacker2.charCodeAt(0):
    console.log(`The driver's name goes first`)
    break;
  case hacker1.charCodeAt(0)>hacker2.charCodeAt(0):
    console.log('Yo, the navigator goes first definitely.')
    break;
  default:
    console.log('What?! You both have the same name?')
    break;
}

//BONUS 1
let parrafos = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas est, eu commodo eros. Curabitur eu mi orci. In faucibus bibendum pharetra. Quisque sit amet fringilla dui, vel volutpat odio. Morbi id sapien nec nulla fermentum faucibus ac quis sem. Donec at orci mauris. Sed erat massa, imperdiet a lacus ac, dignissim suscipit mi. Aliquam congue, sapien sed imperdiet imperdiet, ligula mi venenatis ante, non ornare nisl ligula vel mi. Pellentesque varius, est at ullamcorper sodales, risus lectus convallis urna, non mollis magna elit nec purus. Praesent at tellus suscipit diam fringilla efficitur nec quis diam. Vestibulum ullamcorper sem eget mi posuere tristique. Sed faucibus id tortor sit amet finibus. Praesent bibendum et velit sed imperdiet. Cras diam risus, maximus vel dapibus in, fringilla at nisl. Nullam sed luctus nulla, vel consequat nulla. Sed porta bibendum euismod. Fusce malesuada maximus dolor, sit amet tincidunt justo suscipit sed. Mauris ornare consectetur pulvinar. Fusce laoreet scelerisque bibendum. 
Suspendisse in congue risus, nec vehicula magna. Vivamus malesuada velit a iaculis tincidunt. Mauris hendrerit massa in elit mattis bibendum. Aenean eget ullamcorper nibh. Aliquam rhoncus feugiat mi, eu blandit nisi sodales lacinia. Ut pellentesque enim sit amet odio rutrum euismod. Proin condimentum dignissim eros non varius. Maecenas eget mauris orci. Nulla facilisi. Morbi at scelerisque dolor, vel bibendum nulla. In magna nisi, consequat et aliquam sit amet, commodo sed massa. Integer iaculis risus nec metus pulvinar, eu blandit lorem placerat. Fusce eu est lacus. Morbi volutpat pellentesque nisi, id placerat felis posuere nec. Nunc vulputate ex a nunc consectetur consectetur. Etiam lobortis id mauris a tempus. Phasellus faucibus lectus eu magna venenatis, ut facilisis sapien varius. Donec ac consequat velit. Fusce eu mi felis. Praesent tempor tincidunt ante, et pulvinar turpis tincidunt a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam et varius neque.`

let contarPalabra = 0
for(i=0 ; i<parrafos.length ; i++){

  if(parrafos[i]==" "){
    contarPalabra+=1
  } 

}console.log(contarPalabra + 1)


let contarET = 0
for(i=0 ; i<parrafos.length ; i++){

  if(parrafos[i]==" " && parrafos[i+1]=="e" && parrafos[i+2]=="t" && parrafos[i+3]==" "){
    contarET+=1
  } 

}console.log(contarET)


//BONUS 2
let fraseToChec='race car'
fraseToChec=fraseToChec.replace(/ /g, "")

let reverseFrase= ""
for (i=fraseToChec.length-1; i >= 0;i--) {
  
 reverseFrase+=fraseToChec[i]
reverseFrase=reverseFrase.replace(/ /g, "")
} 
console.log(reverseFrase)

if(fraseToChec==reverseFrase){

  console.log('Es un palindromo')

}else{
  console.log('No es un palindromo')
}



