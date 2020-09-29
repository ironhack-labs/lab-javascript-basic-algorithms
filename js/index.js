// Iteration 1: Names and Input
    let hacker1="Eri Evangelou"
    console.log(`The driver's name is ${hacker1}`)
    let hacker2="Carla Navia"
    console.log(`The navigator's name is ${hacker2}`)

    // Iteration 2: Conditionals
    if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has' ${hacker1.length} characters`)
    } else if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
    } else  {
        console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
    }


    // Iteration 3: Loops
        let check= "";
        for (let i=0; i<hacker1.length; i++ ) {
        if (i == hacker1.length-1) {
            check += hacker1[i].toUpperCase()
        } else {
            check += hacker1[i].toUpperCase() + " "
        }
        console.log(check)
        
        
        let comoQuiera = hacker2.split("").reverse().join("")
         console.log(comoQuiera)  
        
         /* let reversed2 = [];
        let comoQuiera2 = hacker1.split("")
        console.log(comoQuiera2)
        for (let i=comoQuiera2.length-1; i>=0; i-- ) {
        reversed2.push(comoQuiera2[i])
         }
        console.log(reversed2.join(""))
        } */
  
        let resultCompare = hacker1.localeCompare(hacker2)
        console.log(hacker1.localeCompare(hacker2))
         if (resultCompare == 1) {
        console.log("Yo, the navigator goes first definitely.")
        } else if (resultCompare == -1) {
        console.log("The driver's name goes first.")
        } else if (resultCompare == 0){
        console.log("Wow! You both have the same name!")
        } else {
        console.log("You haven't introduced your name")
        }
        }

    //Bonus 1:

    let msg1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas urna nunc, hendrerit rutrum diam et, fringilla lobortis justo. Pellentesque in euismod lorem. Nunc at tellus nec risus egestas dignissim. Ut euismod nunc id ornare scelerisque. Vestibulum varius metus vel neque vehicula ullamcorper. Quisque bibendum nunc et lorem malesuada pulvinar malesuada non mi. Pellentesque euismod nisi nec sapien tincidunt sodales. Aliquam erat volutpat. Cras sed malesuada risus, ut porttitor risus. Nulla ex felis, commodo venenatis urna in, gravida laoreet nisl. Pellentesque tempor molestie volutpat. Donec rutrum nulla vel nisl bibendum elementum. Nunc ultrices commodo quam, quis finibus tortor ullamcorper ac.
    Fusce sagittis pulvinar ligula quis placerat. Sed tristique vulputate enim at ultrices. Ut semper nisi a commodo pellentesque. Pellentesque eu velit egestas quam tincidunt eleifend nec sit amet odio. Fusce fermentum, justo ac elementum congue, ligula nulla iaculis nibh, tempor suscipit ipsum dui vitae erat. Sed in mi dignissim, faucibus sapien eget, fringilla urna. Nunc nec ante volutpat, feugiat nibh eget, faucibus lacus. Pellentesque volutpat sed felis vel cursus. Vivamus vitae commodo enim. Mauris nec lobortis purus, faucibus fringilla lacus. Suspendisse potenti. Maecenas sed odio sed nunc sagittis pharetra eu et arcu. Maecenas porta, turpis sit amet finibus suscipit, neque diam suscipit ligula, non convallis leo erat ultricies justo. Donec ornare risus non orci rhoncus, non vehicula lectus blandit. Mauris tincidunt nisi viverra, tincidunt eros et, pellentesque tellus.
    Nunc consectetur ultricies gravida. Duis turpis tortor, interdum semper vestibulum ac, ultrices in lorem. Aenean id orci accumsan, tincidunt nisi quis, finibus metus. Ut pretium leo libero, non placerat sapien mattis at. Cras fringilla turpis a nibh bibendum, ultricies volutpat metus faucibus. Phasellus est ligula, accumsan ut pharetra vel, aliquam vitae magna. Nam suscipit lectus nulla, vitae convallis dolor semper nec. Nulla feugiat vulputate ipsum a posuere. Ut sit amet risus venenatis, mollis nibh et, dictum lectus. Nunc nunc nisl, accumsan non mollis at, mollis vitae nisi. Nulla interdum, tellus eget varius vehicula, odio ligula vestibulum turpis, sit amet ultricies risus augue a nulla. Donec molestie quam a elit venenatis, quis pretium enim dignissim. Nullam aliquet pellentesque eros sit amet semper. Quisque pretium lacinia cursus."

    contador = texto.split(" ");
    console.log (contador.length);

    buscador = texto.split("et");
    console.log(buscador.length);


