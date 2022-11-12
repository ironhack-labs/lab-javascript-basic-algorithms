console.log("I'm ready!")

console.log("Empieza el 1")

    const hacker1="antonio"
    console.log("The driver's name is "+hacker1)
    const hacker2="Nicolas"
    console.log("The navigator's name is "+hacker2)

console.log("Empieza el 2")

    if(hacker1.length>hacker2.length){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
        }else if(hacker1.length<hacker2.length){
            console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
            }else{
                console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
    }

console.log("Empieza el 3")

    let finalHacker1Name="";

    for(i=0;i<hacker1.length;i++){
        finalHacker1Name+=hacker1[i].toUpperCase() + " ";
    }
    console.log(finalHacker1Name)

    let navigatorNameReverse=" "
    
    for(i=hacker2.length-1;i>=0;i--){
        navigatorNameReverse+=hacker2[i]
    }

    console.log(navigatorNameReverse)

    if(hacker1.toLowerCase()<hacker2.toLowerCase()){
        console.log("The driver's name goes first.")
        }else if(hacker2.toLowerCase()<hacker1.toLowerCase()){
            console.log("Yo, the navigator goes first definitely.")
            }else{
               console.log("What?! You both have the same name?") 
            }

console.log("Bonus time 1")            

    let loremIpsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis auctor molestie. Mauris sagittis nisl iaculis, venenatis lacus at, molestie risus. Suspendisse egestas purus magna, sit amet tempor libero auctor sed. In nec dapibus sem. Nunc ut nunc et sapien rutrum volutpat. Curabitur nec auctor sapien. Integer fermentum condimentum erat. Duis semper viverra enim, vel venenatis arcu scelerisque at. Nullam faucibus quam ac laoreet tempor.

    Nunc placerat velit quis erat egestas convallis. Nunc augue velit, vulputate ut ultricies non, iaculis id libero. Nam mollis rhoncus nisl. Cras maximus tortor ac suscipit congue. Nam ac sapien elit. Quisque ut tortor ut tellus porta accumsan. Morbi efficitur vulputate metus ut accumsan. Nulla porttitor gravida neque, dignissim pharetra ipsum. Praesent vel tortor quis erat mollis pellentesque. Aliquam semper sodales tellus, sed ornare metus ultrices vel. Nulla rhoncus hendrerit lacinia. Donec eget enim tortor. Maecenas lectus mauris, porta quis accumsan sed, dignissim ut erat. Vestibulum suscipit urna in bibendum mattis.
    
    Fusce ac porttitor eros. Sed sollicitudin felis a nunc aliquam, non aliquet velit condimentum. Morbi elementum at felis vitae vehicula. Morbi eros augue, congue ac venenatis a, faucibus non lacus. Duis efficitur quam ut nibh cursus tristique. Duis at leo purus. Nunc non vulputate leo. Phasellus sit amet ullamcorper libero."