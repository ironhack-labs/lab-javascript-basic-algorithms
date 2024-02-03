
// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Neo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
    function longestName(hacker1, hacker2) {
        
            if (hacker1.length > hacker2.length){
                console.log(`The hacker ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
            } else if (hacker1.length < hacker2.length){
                console.log(`${hacker2} has the longest name`);
            } else {
                console.log(`Both have equally long names`);
            }

        }

        console.log(longestName(hacker1, hacker2));
    
    
    
    // Iteration 3: Loops

    function printName(hacker1){
        for(let i = 0; i < hacker1.length; i++){
            console.log (hacker1[i].toUpperCase() + " ");
        }
    }

    console.log(printName(hacker1));

    // Bonus

    let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque purus ante, mattis quis lobortis sit amet, blandit in augue. Aenean lorem lorem, consequat imperdiet sem ut, molestie tristique augue. Etiam malesuada felis id justo lacinia, mattis posuere sem tempus. Donec a porta magna. Quisque ultricies eros ut euismod egestas. Cras et suscipit tortor. Pellentesque varius urna vel malesuada sodales. Phasellus augue felis, ultrices ac condimentum vel, accumsan eu arcu.

    Nullam eu porta leo, sed porta velit. Praesent urna turpis, ornare faucibus neque nec, pharetra scelerisque ipsum. Nullam sed varius eros. Fusce ullamcorper laoreet accumsan. Nam eget finibus neque. Suspendisse convallis mi eget iaculis ultrices. Fusce porttitor lorem vel venenatis eleifend.
    
    Nulla pellentesque tortor nec suscipit rhoncus. Maecenas accumsan, libero nec imperdiet sollicitudin, risus tellus hendrerit quam, id tincidunt dui eros a lacus. Proin erat massa, laoreet in ornare eleifend, tempus vel odio. Quisque scelerisque mi id leo rhoncus, sed tincidunt elit mollis. Nullam suscipit pulvinar magna, ut tempor urna euismod vel. Sed vel ipsum sit amet arcu laoreet tempor. Praesent molestie sit amet lectus nec consectetur. Ut eget ex quam. Maecenas luctus nisi vitae vehicula maximus. Etiam imperdiet condimentum enim vitae porta. Nam tempor quis ante nec vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis magna et euismod maximus. Sed auctor neque in ex fermentum rutrum. Fusce non finibus mi, ac rhoncus eros.`

    let quantity = loremIpsum.split(" ").length;
    console.log(`Total words: ` + quantity);

    let etCounter = loremIpsum.split("et").length;
    console.log(`Total of et counts: ` + etCounter);