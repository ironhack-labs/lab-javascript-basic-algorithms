// ---------------Iteration 1: Names and Input------------------------


const hacker1 = "Simon";
console.log (`The driver´s name is: ${hacker1}`)

const hacker2 = "Simon";
console.log (`The navigator´s name is: ${hacker2}`)

// Iteration 2: Conditionals

let charCnt1 = hacker1.length;
let charCnt2 = hacker2.length;

    if (charCnt1 > charCnt2) 
        {
         console.log(`The driver has the longest name, it has ${charCnt1} characters.`);
        }

    else if(charCnt1 < charCnt2) 
        {
        console.log(`It seems that the navigator has the longest name, it has ${charCnt2} characters.`);
        }

    else if(charCnt1 === charCnt2) 
        {
        console.log(`Wow, you both have equally long names, ${charCnt2} characters!`);
        }

//-----------Hackernam in capital letters---------------------------

let position = 0;
let hacker1upper = hacker1.toUpperCase();
let hackerSpaceCapital = "";

    do 
    { 
     hackerSpaceCapital = hackerSpaceCapital + (hacker1upper.charAt(position)) + " ";
     position ++;
    } 
    while (position < charCnt1);

console.log(hackerSpaceCapital);

//----------------Hackername in reverse-----------------------------
let hackerreverse = "";
position = charCnt1;

do 
{ 
    hackerreverse = hackerreverse + (hacker1.charAt(position));
    position --;
} 
while (position > -1);

console.log(hackerreverse);

//------------------counting which name has more letters------------
if (hacker2>hacker1)
    {
    console.log("The driver's name goes first.");
    }
else if (hacker1>hacker2) 
    {
    console.log("Yo, the navigator goes first, definitely.");
    }
else (
    console.log("What?! You both have the same name?")
    )

//---------------Bonus part-----------------------------------
const longstring = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt orci a lorem accumsan vestibulum. Proin luctus sem ut ante eleifend faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id bibendum ligula. Ut rutrum arcu non ullamcorper ornare. Mauris lacinia massa sit amet arcu pellentesque rutrum. Quisque sed vehicula nisi. Proin nec dui lorem. Nulla in auctor lorem. Curabitur scelerisque odio ut fermentum euismod. Nullam interdum felis non ex pellentesque, in tristique sem semper. Donec vulputate erat ut ornare maximus. Ut ut massa non purus tempus tincidunt nec at magna. Sed pulvinar laoreet ipsum vitae accumsan.

Maecenas vel nulla ac ante lacinia fringilla in ac velit. In hac habitasse platea dictumst. Maecenas aliquam massa sit amet libero malesuada, tempor rutrum velit pellentesque. Etiam pulvinar rutrum velit. Integer ut malesuada elit. Proin nisi magna, suscipit vitae ullamcorper et, interdum vel quam. Maecenas ut ullamcorper sapien, at efficitur augue. Proin erat augue, dignissim non imperdiet a, porttitor id arcu. Nam consequat eu libero a consequat. Donec sed porta sapien. Aenean tempor sit amet dolor sit amet rhoncus. Morbi vitae aliquet nisi. Pellentesque sem lorem, condimentum vitae ornare at, tincidunt vitae libero. Donec consectetur mauris risus, vel posuere magna vulputate nec. Nulla sed molestie augue. Nam vel neque a justo semper finibus.

Sed justo nisl, porta vitae blandit non, gravida nec sem. Nullam sapien ipsum, volutpat consectetur rutrum et, volutpat in metus. Maecenas eu leo gravida, hendrerit diam sed, pretium diam. Proin vel libero sit amet elit blandit feugiat. Suspendisse potenti. Sed sem ligula, vehicula eu elit nec, posuere congue justo. Cras id orci ac dui ullamcorper blandit in a lacus. Mauris sem purus, ultrices ut pharetra ac, tincidunt non arcu. Vestibulum eu tortor vel turpis ullamcorper interdum. Vestibulum nec tincidunt sapien. Curabitur arcu urna, auctor vitae vehicula non, dapibus et odio. `


let numberOfWords ;
let etCounter = "";
let splittedArray = "";
const searchString = `et`;
let counter = 0;

function wordCounter(text) 
    {
        return text.split(/(?:,| )+/).length;
    }

 //------------Setting number of words as global variable, using it to know when to end the loop-------------
numberOfWords = wordCounter(longstring); 
console.log("Words counted: " + numberOfWords);

//---------splitting the text so each word can be checked-------
function arraySplit(array)
 {
    const wordArray = array.split(/(?:,| )+/);
    return wordArray;
 }

//----------Counting how much the word "et" is in the text---------
function arrayList(array2)
 {    
    for(let i=0; i<numberOfWords; i++)
     {
         if (array2[i] === searchString)
          {
            counter ++;
          }
     }
     etCounter = counter;
     return etCounter;
 }

splittedArray = (arraySplit(longstring));
console.log("Number of et: " + arrayList(splittedArray));

//----------------String Reverser----------------------------

function stringReverser (inputString)
 {
    let reversed = "";
    for (let i = inputString.length - 1; i >= 0; i--) 
        {
         reversed += inputString[i];
        }
        return reversed;
 }

// ---------------Some variable declaration---------------------
let phraseToCheck = "step on no pets";
let reversedWord = "";
numberOfWords = wordCounter(phraseToCheck);

//-------------If number of words can be divided by two, chances are good we find a Palindrome------------------------
    if (numberOfWords % 2 === 0) 
     {
       let splittedArray = (arraySplit(phraseToCheck));
       let firstCounter = 0;
       let lastCounter = numberOfWords-1;
       let validCounter = 0;

 //--------------Split string array, reverse the second half and conpare it agains the respective counterpart---------------
        for (let i=0; i<(numberOfWords/2); i++)
            {
               // console.log((splittedArray[firstCounter]).toLowerCase());
               // console.log(stringReverser(splittedArray[lastCounter]).toLowerCase())
                
                if ((splittedArray[firstCounter]).toLowerCase() === stringReverser(splittedArray[lastCounter]).toLowerCase())
                    {
                        validCounter ++; 
                    }
                else 
                    {
                        break;
                    }
            
             firstCounter ++;
             lastCounter --;
            }

 //-------------check if all word pairs matched--------------------
                if (validCounter === (numberOfWords/2))
                    {
                        console.log("Words are a Palindrome");
                    }
                else 
                    {
                        console.log("Words are not a Palindrome");  
                    }
       } 

    //----------------IF number of words cannot be divided by 2-------------------------
       else 
        {
           console.log("Words are not a Palindrome");  
         }
