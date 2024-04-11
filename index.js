// Iteration 1: Names and Input

    let hacker1 = "Doha";
    let hacker2 = "Aditya";

    console.log(`The drivers name is ${hacker1}`);
    console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

    if(hacker1.length > hacker2.length){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    }
    else if(hacker2.length === hacker1.length){
        console.log(`Wow, we both have equally long names, ${hacker2.length} characters!`);
    }
    else{
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters. `)
    }

// Iteration 3: Loops

    //3.1
    let space = "";
    for(let i = 0; i < hacker1.length; i++){
        space += hacker1[i].toUpperCase() + " ";
    }
    console.log(space);

    //3.2
    let rev = '';
    for(let i = hacker2.length - 1; i >= 0; i--){
        rev += hacker2[i];
    }
    console.log(rev);

    //3.3
    const lexico = [hacker1,hacker2];
    lexico.sort((a,b) => a.localeCompare(b));
    if(lexico[0] === lexico[1]){
        console.log('What?! You both have the same name?');
    }
    else if(lexico[0] === hacker1){
    console.log("The driver's name goes first");
    }
    else{
        console.log('Yo, the navigator goes first, definitely');
    }

    //Bonus 1
    let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar sagittis risus, non faucibus urna. Vestibulum eget pellentesque odio. Cras varius dolor ac pulvinar suscipit. Sed vel justo neque. Phasellus id dui dictum elit tempor egestas a non orci. Mauris malesuada elit nec eros ultrices mollis. Morbi sit amet felis nibh. Phasellus iaculis interdum eros, at cursus urna tristique nec. Suspendisse sem nisi, iaculis eget gravida ac, mattis ut mi. Aliquam sapien nisi, auctor posuere laoreet ac, viverra non leo. Maecenas sem erat, lobortis non lectus sed, dapibus interdum justo. Curabitur cursus, augue et maximus dignissim, nunc metus feugiat elit, a porta odio metus sit amet eros.

    Aenean dolor velit, fringilla imperdiet eleifend in, sagittis at erat. Pellentesque faucibus leo vel efficitur cursus. Quisque cursus non urna ut consectetur. Nullam blandit commodo metus, at ultricies turpis porta non. Proin at nunc feugiat, lacinia quam ac, finibus ante. Nam facilisis lacus vitae odio ultrices, et semper nisl maximus. Cras vel tortor nibh. Donec purus neque, condimentum ac venenatis id, molestie non nisl. Nullam eget lectus id ipsum iaculis commodo ac eu magna. Sed sed accumsan elit. Nulla quis mattis metus.
    
    Vestibulum at vulputate enim. Vivamus eu leo purus. Nunc vitae purus lacus. Maecenas eget sem congue, egestas nibh at, elementum felis. Aenean vitae lectus porttitor, iaculis odio a, dignissim dui. Suspendisse rhoncus magna in risus lobortis, ultricies consectetur sem fermentum. Donec ac metus facilisis, rutrum nisl a, rutrum odio. Donec posuere feugiat diam in tempus. Suspendisse cursus eu turpis in lobortis. Morbi rhoncus varius luctus. Mauris tempor quam tortor, sit amet egestas turpis tristique non. Donec eget nisl pretium, mollis sapien dictum, fringilla quam. Sed cursus molestie quam id suscipit.`;

    let wordSearcher = longText.split(' ');
    var etCount = 0;
    console.log(wordSearcher.length);
    for(i=0;i < wordSearcher.length;i++){
        if(wordSearcher[i].includes("et")){
            etCount++;
        }
    }
    console.log(etCount);

    //Bonus 2
    let phraseToCheck = "step on no pets";
    let reversed = '';
    let reg = /[\W_]/g;
    let str = phraseToCheck.toLowerCase().replace(reg, '');
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    if(reversed === str){

        console.log(true);
    }
    else 
    {
        console.log(false);
    }







