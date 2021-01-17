// Iteration 1: Names and Input
function maxOfTwoNumbers(n1,n2){
    
    let max = 0;
    
    if(n1>n2){
        
        max = 'The max is'+ ' ' + n1;
        
    }else if (n1===n2){
        
        max = 'the numbers are even!';
    }else{
        max = 'The max is'+ ' ' + n2;
    }
    
    return max;
}

maxOfTwoNumbers(5,8);


// Iteration 2: Conditionals
function longer (){
    
    if(hacker1.length > hacker2.length){

        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }else if(hacker1.length == hacker2.length){
        console.log(`Wow, you both have equally long names, it has ${hacker2.length} characters.`);
    }else{
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }
}
longer();


// Iteration 3: Loops

function Capital(){

    let capitals = '';
    for(let i =0; i < hacker1.length; i++){

        capitals += ' ' + hacker1[i].toUpperCase();
    }
    console.log(capitals);
}

Capital();

function reverse(){

    var rev = '';
    for(let i = hacker2.length-1; i >= 0; --i){

      rev += hacker2[i];
    }
    console.log(rev);
}

reverse();

function lexi(){

    if(hacker1.localeCompare(hacker2) === 0){
        
        console.log('What?! You both have the same name?');
        
    }else if(hacker1.localeCompare(hacker2)=== -1){
        
        console.log('The drivers name goes first.');
    }else {
    
        console.log('Yo, the navigator goes first definitely.');
    }
}

lexi();



