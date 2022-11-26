console.log( "I'm ready!" )

console.log( "Empieza el 1" )

    const hacker1 = "antonio"
    console.log( `The driver's name is ${hacker1}.` )
    const hacker2 = "Nicolas"
    console.log( `The driver's name is ${hacker2}.` )

console.log( "Empieza el 2" )

    if ( hacker1.length > hacker2.length ) {
        console.log( `The driver has the longest name, it has ${hacker1.length} characters` )
        } else if ( hacker1.length < hacker2.length ) {
            console.log( `It seems that the navigator has the longest name, it has ${hacker2.length} characters` )
            } else {
                console.log( `Wow, you both have equally long names, ${hacker2.length} characters!` )
    }

console.log( "Empieza el 3" )

    let finalHacker1Name = "";

    for ( i = 0 ; i < hacker1.length ; i++ ) {
        finalHacker1Name += hacker1[i].toUpperCase() + " ";
    }
    console.log(finalHacker1Name)

    let navigatorNameReverse = " "
    
    for ( i = hacker2.length-1 ; i >= 0 ; i-- ) {
        navigatorNameReverse += hacker2[i]
    }

    console.log(navigatorNameReverse)

    if ( hacker1.toLowerCase() < hacker2.toLowerCase() ) {
        console.log( "The driver's name goes first." )
        } else if (hacker2.toLowerCase() < hacker1.toLowerCase()){
            console.log( "Yo, the navigator goes first definitely." )
            } else {
               console.log( "What?! You both have the same name?" ) 
            }
        
    console.log( "comienza extra 1" )        

    const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nulla dictum, posuere elit sed, lobortis nulla. Aenean mollis arcu diam. Phasellus bibendum, ante a porta molestie, metus ex auctor augue, ac placerat velit dui at enim. Vivamus tincidunt justo ut semper mollis. Sed sollicitudin velit ut dignissim sodales. Sed sit amet sollicitudin ex, at pretium orci. Sed finibus nibh interdum, ornare augue eget, auctor lorem. Vivamus sagittis ullamcorper nisi, in mattis sapien congue non. Etiam porttitor turpis risus, et commodo lacus suscipit id. Nulla a facilisis elit. Etiam non ante vulputate, efficitur ipsum quis, ullamcorper justo. Pellentesque rhoncus metus at bibendum vulputate.\n
    Morbi felis lacus, fermentum vel erat in, porta hendrerit nulla. Curabitur arcu leo, scelerisque at massa non, blandit bibendum lectus. Etiam quis metus bibendum, accumsan ex at, interdum orci. Etiam a ante vitae augue convallis efficitur. Sed sit amet diam porttitor, tristique enim at, ultrices dui. Proin bibendum, lacus faucibus cursus bibendum, ligula quam cursus lorem, non ultrices dolor lacus ac urna. Donec rutrum tincidunt tortor. Ut ultrices, lectus non pulvinar maximus, libero nisl semper est, quis luctus lectus velit sit amet sem.\n
    Proin aliquam sem vitae finibus ornare. Aliquam ornare sem elit, id tincidunt ipsum ullamcorper nec. Nullam sed luctus arcu. Donec sit amet ipsum magna. Vestibulum malesuada consequat varius. In hac habitasse platea dictumst. Vestibulum egestas porttitor nibh a viverra. Nulla dignissim non ex in tincidunt. Nunc pretium mi condimentum augue facilisis feugiat. Morbi luctus tempus est eu cursus. Maecenas malesuada leo sit amet tempus fringilla.`