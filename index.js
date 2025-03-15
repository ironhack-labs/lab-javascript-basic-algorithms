// Iteration 1: Names and Input
let hacker1="Marcelo";
let hacker2="Bruno";

console.log("The driver's name is "+hacker1)
console.log("The navigator's name is "+hacker2)


// Iteration 2: Conditionals
if (hacker1.length>hacker2.length){
    console.log("The driver has the longest name, it has "+hacker1.length+ "characters.");
}else if(hacker2.length>hacker1.length){
    console.log("The navigator has the longest name, it has "+hacker2.length+ "characters.");
}else{
    console.log("Wow, you both have equally long names, "+hacker1.length+" characters!")
}

// Iteration 3: Loops
let spacedName="";
for(let i=0; i<hacker1.length; i++){
    spacedName+=hacker1[i].toUpperCase() + " "
}

console.log(spacedName)

let reversedName="";
for(let i=hacker2.length-1; i>=0; i--){
    reversedName+=hacker2[i];
}

console.log(reversedName)

if(hacker1.localeCompare(hacker2)){
    console.log("Yo, the navigator goes first, definitely.")
}else if(hacker2.localeCompare(hacker1)){
    console.log("The driver's name goes first.")
}else{
    console.log("What?! You both have the same name?")
}

//Iteration 4: Bonus

const longText=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin dolor risus, eget scelerisque urna viverra vitae. Ut luctus lorem eu nulla scelerisque vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed finibus tristique libero. Aliquam tellus enim, vestibulum vel diam in, malesuada semper ex. Integer purus quam, venenatis in ultrices non, porttitor id risus. Vestibulum tellus mauris, auctor in dolor quis, egestas vestibulum sapien.

Maecenas imperdiet metus orci, sit amet malesuada nunc vulputate vel. Ut placerat augue sed dolor aliquam interdum. Aliquam dignissim, sapien in elementum porttitor, nunc massa pellentesque ex, sed gravida enim risus quis ligula. Proin dui nisi, convallis et pretium non, posuere sit amet felis. Donec in ligula sit amet orci consectetur feugiat sed sit amet dolor. Phasellus rutrum ultricies justo ut blandit. Nullam dapibus ex sapien, a facilisis nunc aliquam pulvinar. Integer consectetur libero a orci consequat, eget tristique ante aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Cras pharetra justo venenatis lorem fermentum, quis bibendum lectus suscipit. Maecenas fermentum quam id mattis imperdiet. Proin ultricies nisl vitae quam lacinia, in luctus eros vehicula. Phasellus id quam eu arcu pellentesque laoreet finibus a justo. Praesent pellentesque ut magna vel hendrerit. Morbi ultrices tellus ut libero ultricies gravida. Nunc placerat est in rhoncus dignissim. Nulla egestas sed est vitae semper. `

let count =0;
let etCount=0;

for(let i=0; i<longText.length; i++){
    if (longText[i]===" "){
        count++
    }
    let result=longText[i]+longText[i+1];

    if(result==="et"){
        etCount++
    }
}

console.log(count, etCount)

const phraseToCheck="step on no pe";
let reversedString="";

for(let i=phraseToCheck.length-1; i>=0; i--){
    reversedString+=phraseToCheck[i];

    if(reversedString.length===phraseToCheck.length){
        if(reversedString===phraseToCheck){
            console.log("it's Palindrome.")
        }else{
            console.log(phraseToCheck+ " it's not a Palindrome.")
        }
    }
}