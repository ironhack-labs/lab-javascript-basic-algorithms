// Iteration 1: Names and Input
let hacker1 = "Rodrigo";
    console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Eduardo Palomo";
    console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
    if (hacker1.length === hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) }

    else if  (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)}

    else if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)}
                                // da igual cual variable ponga, el caracter sería el mismo **

// Iteration 3: Loops

    for (const x of hacker1) 
        {console.log(x.toUpperCase()  )} 

    // parte dos de loops 
    
    function invertir(hacker2) {
        let x = hacker2.length;
        let cadenaInvertida = "";
          
            while (x >=0)   {
              cadenaInvertida = cadenaInvertida + hacker2.charAt(x);
              x--;          }
              console.log(cadenaInvertida);
                             }
          invertir(hacker2)

    // parte 3 

    let a = "The driver's name goes first.";
    let b = "Yo, the navigator goes first definitely."
    let c = "What?! You both have the same name?"

        if      (a.localeCompare(b) === 1)  {console.log(a)}
        else if (a.localeCompare(b) === -1) {console.log(b)}
        else                                {console.log(c)}