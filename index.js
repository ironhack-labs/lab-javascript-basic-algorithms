// Iteration 1: Names and Input
let hacker1 = "Kurt";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Alejandro";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals



        if(hacker1.length > hacker2.length){
            console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
            }
            else if(hacker2.length > hacker1.length){
                console.log(`It seems that the navegator has the longest name, it has ${hacker2.length} characters` )
            }

            else if( hacker1.length === hacker2.length){
console.log(`Wow, you both have equally long names,${hacker1.length} characters.`)

            }
// Iteration 3: Loops

let hacker1Mayus = hacker1.toUpperCase()

let hacker1Space = " "

let reverseName = " "

for (let i = 0 ; i < hacker1Mayus.length; i++){
hacker1Space += hacker1Mayus[i] += " "
};
    console.log(hacker1Space);

   for (let i = hacker2.length -1 ; i >= 0; i--) {
    reverseName += hacker2[i]
   }
   console.log(reverseName)

   let ordenNom = [hacker1, hacker2]

if(hacker1[0] < hacker2[0]){
    console.log("The driver s name goes first.")
}

else if (hacker2[0] < hacker1[0]){
    console.log("Yo, the navigator goes first, definitely.")
}
else{
   console.log("What?! You both have the same name?")
}

//Bonus 1

let longText =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non nisl fermentum, posuere risus sit amet, vestibulum purus. Vivamus placerat, ante vitae consequat tempor, elit dolor pulvinar nisl, quis commodo ante ex ac justo. Sed consequat tortor dui, nec vulputate elit fringilla et. Ut at maximus mauris. Cras a velit quis mi pharetra luctus a vel diam. Sed vel arcu erat.
 Morbi vulputate congue lorem a blandit. Cras quis tellus venenatis, scelerisque arcu quis, ultricies elit. Donec a orci at nisi interdum tempor non et felis. In non gravida ipsum. In rutrum tempor velit eu facilisis.

Quisque suscipit ullamcorper ornare. Nam vel nisl venenatis, vestibulum urna et, blandit mi. Cras nunc felis, elementum at consectetur eget, sodales eget est. Nullam porta ornare ante, interdum vehicula elit molestie non. Quisque nisi turpis, aliquam ut egestas id, volutpat sed ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris laoreet tellus ac ante commodo porta. 
Vestibulum nec sem ac nibh efficitur sagittis vitae id neque.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sed pellentesque ligula, nec consectetur nisl. Sed magna purus, pellentesque non augue placerat, consequat efficitur ligula. Praesent quis leo a sem vulputate sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan ligula euismod ornare vehicula. Nam nec hendrerit quam.`

let etNum = 0

for (let i = 0; i <= longText.length-1; i++) {
    if (longText[i] === "e" && longText[i+1] === "t"){
        etNum++
    }
   
}

 console.log(etNum)


 //Bonus 2
 let phraseToCheck = "taco cat"
 let phraseReverse = " " 

for (let i = phraseToCheck.length -1; i >= 0; i--) {
    if(phraseToCheck[i] === " "){
        continue
    }
phraseReverse += phraseToCheck[i]
    
}
console.log(phraseReverse)