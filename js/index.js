// Iteration 1: Names and Input
let hacker1= "Lupita"

console.log("The driver´s name is: ",hacker1 )

let hacker2="Antonio"

console.log("The navigator´s name is:", hacker2)


// Iteration 2: Conditionals 
let hac1=hacker1.length 
let hac2=hacker2.length


if (hac1 > hac2){
    console.log("The driver has the longest name, it has" ,hac1, "characters")
}
else if (hac1 < hac2){
    console.log("It seems that the navigator has the longest name, it has" ,hac2, "characters")
}
else if (hac1 === hac2) {
    console.log("Wow, you both have equally long names characters!")
}
else{
    console.log("Ingrese un nombre") 
}





// Iteration 3: Loops

let newName1= hacker1.toUpperCase()
console.log(newName1.split(''))

let newName2=hacker2.split('')
reverseName2=(newName2.reverse(''))
reverseName=reverseName2.join('')
console.log(reverseName)


let miArreglo=[hacker1,hacker2]
miArreglo.sort((a,b) =>{
   if (a===b){
   console.log("What?! You both have the same name?")
}
else if (a>b){
    console.log("The driver's name goes first.");
}
else if (a<b){
    console.log("Yo, the navigator goes first definitely.");
}
else{
    console.log("Ingrese un nombre") 
}



})

const parah1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec rutrum neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer interdum nec nisi eget tincidunt. Phasellus sagittis finibus sagittis. Aliquam erat volutpat. Mauris et finibus enim, eget auctor sem. Donec mattis velit id libero iaculis cursus. Quisque lectus nisi, tempor non semper et, posuere eget leo. Fusce egestas pharetra varius. Phasellus eu hendrerit nulla.In aliquam vestibulum urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin dignissim est ut neque tincidunt, a tempus arcu viverra. Etiam interdum sem nec ante ultricies pretium. Integer quis ornare dolor. Pellentesque pulvinar tristique rhoncus. Nullam eget dictum sapien. Maecenas tristique a diam id commodo. Nulla nibh lorem, convallis consectetur mi id, viverra facilisis lacus. Quisque porta enim ut tellus posuere, non pharetra dolor auctor. Maecenas imperdiet lacus tellus, eget feugiat ipsum finibus vitae. Proin sit amet leo risus. Proin varius nulla mi, nec dapibus libero eleifend a. Quisque a magna imperdiet turpis eleifend tristique vel sagittis lectus. Sed laoreet nisi sit amet neque congue sagittis vel ac purus. Mauris ante lorem, hendrerit et luctus vitae, rutrum sed justo. Phasellus feugiat urna ante, ultricies suscipit mauris ultrices vel. Nulla congue blandit lorem, finibus cursus turpis mattis in."


let arreglo1=parah1.split(' ')
let arregloEt= []

console.log(arreglo1.length)

for(let i = 0; i < arreglo1.length; i++){

    if(arreglo1[i] = 'et'){
        console.log(arregloEt)
        arregloEt.push(arreglo1[i])
    }
}
console.log(arregloEt)



//Bono 2
function wordToCheck(str) {
    const strReversed = str.split("").reverse().join("");
   
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }
  console.log(wordToCheck("radar")); 
  console.log(wordToCheck("gato")); 
  console.log(wordToCheck("oso")); 



  function phraseToCheck(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed2 = newStr.split("").reverse().join("");

    return newStr === strReversed2 ? "es palindromo" : "no es palindromo";
  }
  console.log(phraseToCheck("Ali tomo tila")); 
  console.log(phraseToCheck("coche de carreras ")); 
  console.log(phraseToCheck("gatos de pila")); 