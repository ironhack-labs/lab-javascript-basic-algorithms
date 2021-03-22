// Iteration 1: Names and Input
const hacker1 = `Alex`
console.log(`The driver's name is ${hacker1}`)
const hacker2 =`TomTom`
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)}

// Iteration 3: Loops

let mayus=``
for (let i = 0;i<hacker1.length;i++){
  let caps = hacker1.toUpperCase()
  

  mayus += (caps[i] + ` `)
}
console.log(mayus)

let reversal=``
for (let i = (hacker2.length-1);i>=0;i--){
  let rev = hacker2
  

  reversal += (rev[i] + ` `)
}
console.log(reversal)

let lexic = hacker1.localeCompare(hacker2)
if (lexic=1){console.log(`The driver's name goes first.`)}
else if (lexic = -1){ `Yo, the navigator goes first definitely.`}
else {`What?! You both have the same name?`}


//Bonus 1: 

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut tellus tortor. Nullam volutpat nibh at sem vulputate consectetur. Pellentesque rhoncus sagittis arcu eget gravida. Sed dolor turpis, volutpat quis facilisis non, semper id metus. Nam eleifend at mauris ut fringilla. Proin nec mollis justo. Mauris vulputate, ex id condimentum faucibus, lectus lectus viverra turpis, venenatis hendrerit ligula est eget leo. Praesent dapibus aliquam nibh, quis tempor ante pharetra cursus. Proin ligula nunc, molestie in venenatis et, finibus non tellus. Pellentesque tempor velit ut justo ultrices commodo. Suspendisse suscipit ullamcorper dui, at egestas ex facilisis ut. Curabitur erat lorem, lobortis eget diam at, dapibus fermentum elit. Suspendisse lectus metus, ultricies sed leo ut, venenatis volutpat mi. Phasellus sed purus enim. Pellentesque iaculis nibh accumsan euismod congue. Morbi tristique elementum cursus.

Fusce non nibh nec nibh tristique venenatis sed at nisl. Nam suscipit tincidunt nulla blandit fringilla. Praesent feugiat vel sem in pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent rhoncus facilisis sapien, feugiat volutpat lacus tempor et. Phasellus vitae maximus urna. Etiam erat nunc, interdum eget vulputate eget, iaculis vitae turpis. Ut pretium nulla vitae tortor porttitor, nec fermentum mauris efficitur. Quisque ac convallis lectus, ac congue tortor. Suspendisse ultricies lorem ac scelerisque malesuada. Phasellus dui mauris, tincidunt vitae dapibus vitae, finibus finibus orci.

Nulla mauris sem, ornare imperdiet aliquet at, varius vitae velit. Suspendisse ut metus eget arcu gravida fermentum elementum et magna. Sed dapibus mi dui, sed accumsan nisi blandit in. Duis urna sapien, ullamcorper in porta sed, sodales sit amet lorem. Nullam aliquet finibus justo nec sollicitudin. Donec at sapien maximus, aliquam lectus nec, pellentesque eros. Ut mollis in purus et cursus. Duis quam lorem, iaculis eu quam sed, posuere convallis nibh. Proin posuere turpis dui, ut accumsan erat iaculis vel. Duis bibendum tincidunt mi vitae euismod. Donec consequat tincidunt aliquet. Proin eleifend eget ex id mollis. Pellentesque pretium in nisi bibendum imperdiet. Morbi blandit id ex non imperdiet.`

let wordCount = 3
for (let i=0;i<lorem.length;i++){
  if (lorem[i] === " "){
    wordCount++
  }
}
console.log(wordCount)

let etLatin = 0;
etLatin = lorem.match(/et/gi).length; 
console.log(etLatin);

//Bonus 2:

let phraseToCheck = `put it up`
let phrase = ``

for (let i = 0; i < phraseToCheck.length; i++){
if (phraseToCheck[i] === ` `){

}else {phrase += phraseToCheck[i]}
}

let rhalf= ``
let lhalf= ``

if (phrase.length % 2 == 0){
for (let i = 0; i < phrase.length/2; i++){
  lhalf += phrase[i]
}

for (let i = phrase.length-1; i >= (phrase.length/2); i--){
  rhalf += phrase[i]
}
} else {
  for (let i = 0; i < (phrase.length/2)-1; i++){
  lhalf += phrase[i]
}
for (let i = phrase.length-1; i > (phrase.length/2); i--){
  rhalf += phrase[i]
}
}
if (rhalf === lhalf){
  console.log(`${phraseToCheck} is a palindrome`)
  } else {console.log(`${phraseToCheck} is not a palindrome`)}