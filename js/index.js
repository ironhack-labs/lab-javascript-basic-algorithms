
// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
//1.2 Print `"The driver's name is XXXX"`.
//1.3 Create a variable `hacker2` with the navigator's name.
	//1.4 Print `"The navigator's name is YYYY"`.

    let hacker1 = 'xxxx';
    console.log('the driver\'s name is ' +  hacker1 );
    let hacker2 = 'yyyy';
    console.log('The navigator\'s name is '  + hacker2 );
    
    // Iteration 2: Conditionals

     //The driver has the longest name, it has XX characters. or
    //It seems that the navigator has the longest name, it has XX characters. or
    //Wow, you both have equally long names, XX characters!.
     
     //const hacker1 = '';
     //switch(hacker1.length){
      // case 4:
     //  console.log('the might be xxx or yyyy')
     //}
    
     const name = 'XXX';
    console.log(name.length);
    switch (name.length) {
      case 2:
        console.log('The driver has the longest name, it has XX characters');
        break;
      case 2:
        console.log('It seems that the navigator has the longest name, it has YY characters.');
        break;
      default:
        console.log('Wow, you both have equally long names, XX characters!');
        break;}


// Iteration 3: Loops