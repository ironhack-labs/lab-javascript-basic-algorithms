// Iteration 1: Names and Input
let hacker1=`Jacke`;
console.log("The driver's name is "+hacker1);
let hacker2=`Bob`;
console.log(`The navigator's name is`+hacker2);



// Iteration 2: Conditionals
if(hacker1.length>hacker2.length)
    {console.log(`The driver has the longest name, it has `+hacker1.length+` characters.`)}
else if(hacker1.length<hacker2.length)
    {console.log(`It seems that the navigator has the longest name, it has `+hacker2.length+` characters.`)}
else
    {console.log(`Wow, you both have equally long names,`+ hacker1.length +` characters.`)}
    
// Iteration 3: Loops

let reSult=``

for(let i=0;i<hacker1.length-1;i++)
    {
        reSult+=hacker1[i].toUpperCase()+' '
    }

console.log(reSult+hacker1.slice(-1).toUpperCase());    

let changeR=``
for(let i=hacker1.length-1;i>=0;i--)
    {
        changeR+=hacker1[i];
    }
 console.log(changeR);   

 if(hacker1[0]<hacker2[0])
    {
        console.log("The driver's name goes first.")
    }
    else if(hacker1[0]>hacker2[0])
        {
            console.log("Yo, the navigator goes first, definitely.")
        }
        else
        {
            console.log("What?! You both have the same name?")
        }



//born1.

let longText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur ex quis libero venenatis sagittis. In porttitor arcu nec turpis porttitor, a tempor dui convallis. Curabitur elementum venenatis eros quis sagittis. Nulla vel lectus venenatis, convallis massa sed, pharetra velit. Etiam vel venenatis eros. Etiam varius sodales nisi, varius finibus mauris volutpat non. In quis metus malesuada, viverra turpis imperdiet, porttitor odio. Sed condimentum neque quis ante sagittis maximus. Donec pellentesque quam quis magna imperdiet, ut eleifend velit laoreet. Pellentesque aliquam suscipit mauris, a molestie sapien facilisis non. Sed semper viverra dictum. Praesent eget tristique mauris. Aenean vel mi vitae ex scelerisque placerat. Praesent quis dictum erat. Proin vel diam a ex eleifend viverra nec id dolor.

Vestibulum blandit faucibus tellus, eu dictum metus faucibus ut. Integer euismod accumsan interdum. Nullam vel nunc in magna venenatis luctus. Vestibulum enim enim, interdum vitae velit ut, sollicitudin finibus nunc. Donec feugiat laoreet aliquet. Morbi vel elit eu magna finibus vestibulum nec ac massa. Aliquam ut est mauris. Nunc malesuada felis at ipsum vestibulum accumsan.

Maecenas ac sapien eros. Duis gravida, justo vestibulum hendrerit laoreet, neque erat eleifend arcu, sed aliquam felis dolor at erat. Nullam viverra, turpis non pharetra blandit, arcu purus fringilla mauris, id ultrices nisi ligula ultrices tortor. Vivamus non purus a risus venenatis accumsan eget ut nisi. Pellentesque quis tellus lectus. Nunc a tincidunt lectus. Aenean cursus augue vel neque posuere, non vulputate leo cursus. Sed consequat, turpis a feugiat pretium, dui purus faucibus arcu, quis elementum massa urna quis augue. Cras condimentum risus ac pellentesque pharetra. Proin vulputate tortor ac augue suscipit condimentum. Etiam euismod tortor sit amet risus luctus posuere. Vestibulum cursus nulla sed orci sollicitudin, quis fermentum metus placerat. Maecenas at nulla at nisl elementum venenatis et eleifend lectus.`

let longTextClean= longText.match(/\b[A-Za-z]+\b/g);
console.log(longTextClean.length);
let count=0;
for(let i=0;i<longTextClean.length;i++)
    {
        longTextClean[i].toLowerCase()
        if(longTextClean[i]===`et`)
            {
                count++
            }

    }
console.log(`The number of et is `+count);




//born2.

let phraseToCheck=`A man, a plan, a canal, Panama!`;
let upperPhrase=phraseToCheck.toUpperCase()
let chaR=``
for(let i=0;i<upperPhrase.length-1;i++)
{
  let code=upperPhrase.charCodeAt(i)
 if(code>=65&&code<=90)
    {
     chaR+=upperPhrase[i]
    }      
}
console.log(chaR);

let chaRFront=``
let chaRBack=``
for(i=0;i<chaR.length/2;i++)
{
    chaRFront+=chaR[i];
}
for(j=chaR.length-1;j>chaR.length/2-1;j--)
{
    chaRBack+=chaR[j];        
    }

console.log(chaRFront,chaRBack);
if(chaRFront===chaRBack)
    {
        console.log(`It was a Palindrome sentence`)
    }
    else
    {
        console.log('It was just a normal sentence')
    }
