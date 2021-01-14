// Iteration 1: Names and Input

const hacker1="Barbara"

console.log (`"The driver's name is ${hacker1}.`)

const hacker2="Montserrat"
console.log(`"The navigator's name is ${hacker2}.`)




// Iteration 2: Conditionals

if(hacker1.length>hacker2.length) {
console.log (`The driver has the longest name, it has ${hacker1.length}characters.`)
}

else if(hacker1.length<hacker2.length) {
console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else {
console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops


//3.1

console.log (hacker1.toUpperCase().split('').join(' '))



//3.2
let hacker2reverse=""

for (let i=hacker2.length-1; i>=0; i--){
  
 hacker2reverse+= hacker2.charAt(i) 
}

 console.log(hacker2reverse); 


//3.3

if (hacker1.localeCompare(hacker2)<0){
    console.log ("The driver's name goes first.")
    }
    
    else if (hacker1.localeCompare(hacker2)>0){
      console.log ("Yo, the navigator goes first definitely.")
    
    }
    
    else {
      console.log("What?! You both have the same name?")
    }


//Bonus 1:

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed felis tempus, congue nibh sit amet, efficitur ante. Etiam augue magna, dapibus a posuere non, mattis nec turpis. Nunc laoreet risus nec consectetur vestibulum. Nulla facilisi. Proin et nulla ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam pellentesque malesuada turpis. Morbi accumsan consequat urna. Donec id interdum lorem. Proin vitae egestas neque, nec ultricies dui. Etiam sagittis magna ac elementum commodo. Phasellus ut elit cursus, faucibus felis at, aliquet sapien. Integer sem nibh, fringilla at pellentesque efficitur, convallis sit amet lectus. Sed mattis viverra enim, nec porta lacus suscipit ac. Fusce vitae ex nunc. Etiam volutpat sit amet metus vitae sagittis.'


let nWords= 0

for (let i=0; i<paragraph.length; i++){
  
    if (paragraph.charAt(i)===" "){
       nWords+=1
    }
   }
   
 nWords+=1   

console.log(nWords); 
