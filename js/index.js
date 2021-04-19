// Iteration 1: Names and Input
let hacker1 = "Nico";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Natasha"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

let hacker1 = "Nico";
let uppercased = hacker1.toUpperCase().split('').join (' ');
console.log (uppercased)

//3.2

let str = "Nico"
let newStr = str.split('')
console.log(newStr.reverse().join(''))

//3.3

if (hacker1[0] < hacker2[0]) {
    console.log(`The driver's name goes first.`)
  }
  else if (hacker1[0] > hacker2[0])
  {
    console.log(`Yo, the navigator goes first definitely.`)
  }
  else {
    console.log(`What?! You both have the same name?`)
  }

//Bonus 1
let text1 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

let text2 = "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. "

let text3 = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."

let textElements = [];
textElements = text2.split (" ");
  for ( i=0; i>textElements.length;i++) {
    textElements [i];
  }


//Bonus 2

function phraseToCheck (str) {
    var reg = /[\W\s]/g;
    //reg = This is a regular expression which means find the following pattern \W (any non-alphanumerical character) and \s (any space) in all the string (G).
    var strReg = str.toLowerCase().replace(reg,"");
    //replace (reg,"") tells us that all the characters that str cointains must be replaced by an empty space.
    console.log (strReg);
    var reversed = strReg.split("").reverse().join("");
    if (strReg == reversed) {
      console.log ("This word is a palindrome");
    } else {
      console.log ("This word is not a palindrome");
    }
  }
  phraseToCheck ("Was it a car or a cat I saw?")
