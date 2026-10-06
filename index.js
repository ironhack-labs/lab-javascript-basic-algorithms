// Iteration 1: Names and Input

  let hacker1 = "Bourbon";

console.log ( `The driver's name is ${hacker1}` );

  let hacker2 = "Alvaro";

console.log( `The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

   if ( hacker1.length > hacker2.length){
    
    console.log ( `The driver has the longest name, it has ${hacker1.length} characters.` );
   
}

  else if ( hacker1.length < hacker2.length){

    console.log ( `It seems that the navigator has the longest name, it has ${hacker2.length} characters` );

  }

  else { console.log ( `Wow, you both have equally long name, ${hacker1.length} characters!` );

  }


  // Iteration 3: Loops

   let hacker1modified = "";

  for ( let i = 0; i < hacker1.length; i ++ ){

    hacker1modified += hacker1[i].toUpperCase() + " ";
       
  }

   console.log ( hacker1modified );

   
   let hacker2reverse = "";

  for ( let i = hacker2.length -1; i >= 0; i -- ){

    hacker2reverse += hacker2[i];

   }
   
   console.log ( hacker2reverse );

   
   const name1 = hacker1.toLowerCase();
   const name2 = hacker2.toLowerCase();
   const letters = "abcdefghijklmnopqrstuvwxyz";

  for ( let i = 0; i < name1.length && i < name2.length; i ++ ){

   const char1 = letters.indexOf(name1[i]);

   const char2 = letters.indexOf(name2[i]);

      if ( char1 < char2 ){

        console.log ( "The driver's name goes first");

        break;
      
      }
 
     else if ( char1 > char2 ){

        console.log ( "Yo, the navigator goes first, definitrly" );

        break;

      }

     else if ( char1 === char2){ 
        
        console.log ( "What?! You both have the same name?");

       break;
      }
   
    }

     // ====> BONUS 1.

    let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius dolor eros, quis aliquet augue fringilla a. Suspendisse faucibus, neque vel tempus faucibus, justo felis finibus eros, sed aliquam mauris odio id nunc. Donec non ex sem. Pellentesque imperdiet, orci eu congue dapibus, nisl nisi porta magna, quis ultrices ante nisl placerat elit. Sed diam ipsum, hendrerit vel diam malesuada, luctus egestas velit. Proin viverra lectus eget elit ornare posuere. Cras id rutrum ligula, in pretium sem. Pellentesque a ornare turpis. Maecenas non tristique neque, a semper turpis. Nam at tempor ipsum, nec cursus risus. In dictum lectus justo. Aenean at mauris id arcu placerat mollis at id ligula. Cras eget venenatis velit. Nulla faucibus augue id feugiat fermentum. Suspendisse vel dignissim nisi, at tincidunt tortor.
Vivamus cursus rhoncus metus, id tristique nulla ultricies in. Fusce eros magna, tempus ut convallis non, tincidunt bibendum nisl. Fusce sit amet suscipit elit. Duis purus metus, tincidunt viverra neque non, mollis accumsan risus. Maecenas et nibh at eros volutpat egestas. Fusce suscipit felis nec dolor dignissim, et volutpat nunc gravida. Curabitur tincidunt odio sed neque sodales dapibus. Etiam at interdum lacus, ac mollis lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus cursus, velit quis tempor blandit, odio justo consectetur lacus, at vulputate lectus metus at sapien. Donec eu dictum tellus. Nunc finibus, quam non sodales viverra, nisl dui ultrices risus, in dapibus augue est id lacus. Vivamus interdum at odio eget bibendum. In ipsum est, porta sed convallis at, pretium ac orci. Sed accumsan tortor id risus aliquam interdum. Aliquam sagittis vitae mi sed rhoncus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque nisi vel sem ornare feugiat. Quisque egestas euismod sem quis sollicitudin. Vestibulum tellus dolor, commodo vel porttitor eu, sodales ac diam. Phasellus molestie nunc eu orci porta, at aliquet sem dictum. Pellentesque dignissim lectus vitae nibh consequat vestibulum. Ut dolor ex, vulputate non ligula eget, scelerisque hendrerit leo. Phasellus pellentesque metus maximus, ullamcorper risus eu, vestibulum ante. Duis rhoncus, sem quis sodales elementum, mi ipsum bibendum neque, vitae tempor tellus mauris vitae leo. Maecenas volutpat tellus iaculis, interdum lorem ac, consequat sem.
`

let wordNum = 0;

for ( let i = 0; i < longText.length; i ++ ){

    if ( longText[i] !== " " && ( i === 0 || longText[ i - 1] === " ")){

      wordNum ++;
        }
  
    }

      console.log ( wordNum );



      let etNum = 0;

      const etWord = "et";

      for ( let i = 0; i < longText.length; i ++ ){

        const word = longText[i] + longText[i + 1];

         if ( longText[i - 1] === " " && longText[i] + longText[i + 1]
             === "et" && longText[i + 2] === " " ){

                etNum ++;
            
            }

      }

      console.log ( etNum );

      // ========> BONUS 2.

      let phraseToCheck = "A man, a plan, a canal, Panama";

      let justWords = "";

      for ( let i = 0; i < phraseToCheck.length; i ++ ){

          phraseToCheck = phraseToCheck.toLowerCase();
        
         if ( phraseToCheck[i] !== " " && phraseToCheck[i] !== "," ){
            
            justWords += phraseToCheck[i];
         }

        }

        console.log ( justWords);

        let isPalindrome = true;

         for ( let i = 0; i < justWords.length; i ++ ){
         
           if ( justWords[i] !== justWords[ justWords.length -1 -i ]){
 
                 isPalindrome = false;

                 break;
        
            }

         }

           if ( isPalindrome === true ){

            console.log ( "Is a palindrome" );
           
          }

           else { console.log ( "Isn't a palindrome" );

          }

        
        
           



  

