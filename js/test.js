const userInput = prompt('insert a name');

let result = '';

switch (userInput) {
  case 'Raekwon' :
  case 'RZA' : 
  case 'U-God': 
  case 'Masta Killa':
  case 'GZA' :
  case "Ol' Dirty Bastard": 
    result = 'Brooklyn';
    break;
  case 'Method Man' : 
    result = 'Hempstead';
    break;
  case 'Inspectah Deck': 
  case 'Ghostface Killah':
    result = "Staten Island";
    break;
  default:
    result ="Viva el asado";
}

console.log(result);
