// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
    let hacker1 = 'Bob';
// 1.2 Print `"The driver's name is XXXX"`.
    console.log(`The Drivers name is ${hacker1}`);
// 1.3 Create a variable `hacker2` with the navigator's name.
    let hacker2 = 'Sarah';
// 1.4 Print `"The navigator's name is YYYY"`.
    console.log(`The Navigators name is ${hacker2}`);

// Iteration 2: Conditionals
    const len1 = hacker1.length
    const len2 = hacker2.length

    if(len1 > len2){
        console.log(`The driver has the longest name, it has ${len1} characters`)
    }else if(len1 < len2){
        console.log(`It seems that the navigator has the longest name, it has ${len2} characters.`)
    }else{
        console.log(`Wow, you both have equally long names, ${len1} characters!.`)
    }

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
   console.log(hacker1.split('').join(' ').toUpperCase())
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
   console.log(hacker2.split('').reverse().join(''))
//3.3 Depending on the lexicographic order of the strings, print:
    if (hacker1 < hacker2) {
        console.log(`"The driver's name goes first."`)
    }else if (hacker1 > hacker2) {
        console.log(`"Yo, the navigator goes first definitely."`)
    }else {
        console.log(`What?! You both have the same name?`)
    } 









// Bonus 1:
    let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis, leo sit amet consequat porttitor, augue tellus tristique tortor, 
    et finibus justo enim vulputate nulla. Donec pretium maximus arcu ut ultrices. Aliquam erat volutpat. Ut scelerisque bibendum libero, 
    a tempor mi imperdiet eu. In id rhoncus dolor, non sodales augue. Praesent quis odio ut justo sodales iaculis. Praesent nec posuere ex. 
    Fusce tincidunt leo lectus, vitae ornare justo tincidunt nec. Etiam at ipsum et metus viverra viverra. 
    Duis diam lorem, elementum laoreet dolor non, sodales eleifend orci. Donec ac odio volutpat, porttitor neque eu, luctus elit. Nunc porta orci nibh, 
    a lacinia libero pretium non.

    Donec vel orci tempus ex interdum porttitor nec vel lorem. Phasellus varius quam sed nibh aliquam, nec elementum massa tempus. 
    Proin vitae turpis id justo consequat bibendum. Integer et ipsum vitae lectus vestibulum sodales sit amet et purus. Donec 
    blandit elementum lacus viverra faucibus. Cras auctor eu tellus sit amet mollis. Sed risus mauris, suscipit a facilisis sit amet, 
    luctus non orci. Sed eget est vel ligula egestas accumsan. Aliquam erat volutpat. Aenean eleifend posuere bibendum. Nam id sodales massa,
    non facilisis tellus. Pellentesque neque eros, convallis a ex et, tincidunt tincidunt velit. Nunc venenatis risus vel nisi blandit dignissim. 
    Donec semper erat ut ipsum egestas lacinia.

    Etiam facilisis mauris aliquam, dignissim purus nec, luctus urna. Nulla commodo lorem volutpat malesuada dignissim. Aenean fermentum 
    leo ut odio porta, sed imperdiet neque efficitur. Praesent vitae gravida dolor, eu auctor purus. Suspendisse tempor lectus sit amet turpis 
    consectetur suscipit a vitae quam. Praesent malesuada, dui non mattis ornare, mauris odio tempor purus, sed luctus diam justo nec sapien. Nunc 
    convallis neque nec bibendum mollis.`;


    function countWords() {
        console.log(paragraph.split(" ").length);
    };

    function countEt() {
        console.log(paragraph.match(/\bet\b/gi).length);
    };

    countWords();
    countEt();

// Bonus 2:
    function removeSpecialChar (str){
        return strClean =  str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase()
    }

    function ispali (str){
        let cleanString = removeSpecialChar(str);
    
        if (cleanString.split(' ').join('') == cleanString.split(' ').join('').split('').reverse().join('')){
            return 'Palindrome'
        }else{
            return 'Not a Palindrome'
        }
    }

    console.log(ispali('step on none pets'))