/************* VARIABLES DECLARATION **************/
let hacker1 = 'Joana';
let hacker2 = 'Cruz';
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in eros non est euismod efficitur sit amet vel dui. Suspendisse potenti. Praesent in metus quis arcu semper aliquam a ac dolor. Nulla vitae elit purus. Integer malesuada placerat varius. Nam laoreet neque et ipsum aliquam, vitae tristique justo consequat. Cras mollis gravida tincidunt. Etiam pharetra ornare tincidunt. Mauris sed ex sit amet arcu porttitor ornare vel at ante.\n\nFusce cursus vitae tellus eget molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus egestas odio vel dui cursus euismod. Fusce vel dignissim dui. Cras tellus neque, consequat eget accumsan vel, porta vel quam. Maecenas rutrum, lorem a sagittis laoreet, elit felis facilisis felis, eget feugiat purus ex quis nibh. Mauris consectetur scelerisque aliquet. Vivamus sit amet ipsum ultricies, tempus justo a, imperdiet metus. Fusce nec lacinia lacus. Praesent dictum, dolor non ornare vestibulum, ipsum nunc elementum nunc, ut varius turpis enim sit amet arcu. Ut tincidunt congue velit ut convallis.\n\nPellentesque vitae malesuada ante. Vestibulum molestie non elit quis tincidunt. Donec eget imperdiet nisi, et fringilla erat. Etiam faucibus tempus nibh a posuere. Morbi maximus gravida dui, nec convallis sem elementum non. Etiam nulla dolor, ultricies condimentum laoreet in, euismod a ligula. Proin pharetra laoreet velit eu efficitur. Nulla hendrerit sem vitae lacus tincidunt tincidunt in eget erat.'
let phraseToCheck = 'WasitacaroracatIsaw';

/************* FUNCIONS ****************/
// different outputs comparing the length of two strings
function longestString(hacker1, hacker2){
  if(hacker1.length < hacker2.length){
    console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters');
  } else if(hacker1.length > hacker2.length){
    console.log('The driver has the longest name, it has ' + hacker1.length +  ' characters');
  } else console.log('Wow, you both have equally long names,' + hacker1.length + ' characters!');
}

// prints to the console all characters of a string in upper case
function upper(hacker1){
  let i = 0;
  for(; i < hacker1.length; i++){
    console.log(hacker1[i].toUpperCase());
  }
}

// prints to the console all characters of a string in the reverse order
function reverseArray(hacker2){
  for(i = hacker2.length - 1; i >= 0; i--){
    console.log(hacker2[i]);
  }
}

// different outputs comparing string by the lexical order
function lexicOrder(hacker1, hacker2){
  i = 0;
  while( i < hacker1.length || i < hacker2.length){
    if(hacker1.charCodeAt(i) < hacker2.charCodeAt(i)){
      console.log('The drivers name goes first');
      break;
    }
    else if(hacker1.charCodeAt(i) > hacker2.charCodeAt(i)){
      console.log('Yo, the navigator goes first definitely');
      break;
    }
    else{
      i++;
    }
    console.log('What?! You both have the same name?');
  }
}

// count all the words 
function countWords(s){
  let count = s.split(" ").length;
  return count;
}

// count all the ocurrences of a word
function existWord(s){
  let wordsArray = s.split(" "), count = 0;
  for(let i = 0; i < wordsArray.length; i++) if(wordsArray[i] === 'et') count++;
  return count;
}

// checks if a string is a palindorme not using JS String methods
function palindrome(s){
  let str = s.replace(/[^\w]/g, '');
  const middle = (str.length - 1)/2;
  let i = 0, j = str.length - 1, pal = true;

  while(i < middle && j > middle){
    if(str[i].toUpperCase() !== str[j].toUpperCase() ){
      pal = false;
      break;
    }
    i++;
    j--;
  }

  (pal) ? console.log('The string is a palindrome') : console.log('The string isnt a palindrome');
}

// checks if a string is a palindorme using JS String methods
function palindromeV2(s){
  let str = s.replace(/[^\w]/g, '');
  const middle = (str.length - 1)/2;
  let left = str.substring(0, middle);
  let right = str.substring(middle + 1, s.length).split("").reverse().join("");
  (left.toUpperCase() === right.toUpperCase()) ? console.log('The string is a palindrome') : console.log('The string isnt a palindrome');
}


/************ OUTPUTS **************/
longestString(hacker1, hacker2);
upper(hacker1);
reverseArray(hacker2);
lexicOrder(hacker1, hacker2);
console.log('There is ' + countWords(text) + ' words in the text');
console.log('There is ' + existWord(text) + ' ocurrences in the text');
palindrome(phraseToCheck);
palindromeV2(phraseToCheck);

