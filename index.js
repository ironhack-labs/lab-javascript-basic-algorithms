// Iteration 1: Names and Input//
let hacker1 = 'Rodolfo';
console.log(`O nome do hacker1 é ${hacker1}`);

let hacker2 = 'Carol';
console.log(`O nome do hacker2 é ${hacker2}`);


// Iteration 2: Conditionals//

let hacker1Length = hacker1.length;
console.log(hacker1.length);

let hacker2Length = hacker2.length;
console.log(hacker2.length);

if(hacker1.length > hacker2.length) {
    console.log(`O maior nome é do ${hacker1} e ele possui ${hacker1.length} caracteres`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Os dois nomes sao do mesmo tamanho e possuem ${hacker1.length} caracteres`)
} else {
    console.log(`O maior nome é do ${hacker2} e ele possui ${hacker2.length} caracteres`)
}
    
       


// Iteration 3: Loops//


let test2 = '';
let index = 0;  
while(index < hacker1.length) {
    console.log(hacker1[index])
    test2 += hacker1[index].toUpperCase() + " "
    index +=1;
}

console.log(test2);

//outra opcao de loops//
let hacker1CapitizeName = '';

    for(let i = 0; i < hacker1.length; i += 1){       
        hacker1CapitizeName += `${hacker1[i].toUpperCase()} ` ;
    }

console.log(hacker1CapitizeName)

//excercicio bonus1 - nao sabia fazer o split - fiz com video do youtube - o Et nao entendi pq nao funcionou//

let paragrafo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus scelerisque sagittis. Nulla est lacus, hendrerit id elit ut, congue sagittis purus. Mauris egestas efficitur ligula, a mattis felis pellentesque non. Curabitur ante neque, porttitor quis suscipit ac, tristique ac augue. Maecenas vehicula mollis risus eu lacinia. Praesent justo sem, tincidunt sed iaculis vitae, tincidunt quis mauris. Integer id massa blandit eros tempus tempor non ut ipsum. Curabitur finibus ut orci eget ultricies. Mauris condimentum sit amet ante eu vestibulum. Pellentesque hendrerit turpis at lectus posuere, rutrum maximus erat facilisis.Morbi placerat, leo eu fringilla elementum, lorem sapien ultricies massa, vitae blandit leo dolor a sem. Suspendisse in dictum enim. Aliquam aliquam tempor purus, et consectetur tortor bibendum et.Pellentesque in imperdiet felis. Donec lacinia iaculis nunc, in porta quam. Sed ullamcorper quis dui eu porttitor. Aliquam erat volutpat. Praesent et dolor nisl. Ut vitae ultricies libero, eget sagittis urna. In eu ipsum et tortor condimentum pretium a at ligula. Aliquam sagittis ultrices leo id cursus. Duis nec eleifend odio, vel vulputate dui. Nam feugiat auctor urna, vitae gravida dui lobortis in. Duis fermentum vehicula sapien sit amet porta. Etiam sit amet felis sapien. Vestibulum euismod commodo orci et elementum. Praesent et porttitor neque. Aenean luctus condimentum malesuada. Cras scelerisque vehicula mattis.usce imperdiet eleifend est et placerat. Nullam in mi id nisl rhoncus vulputate. Integer aliquet lacus id dui facilisis, quis vestibulum erat et vulputate. Pellentesque ac nibh faucibus, semper lacus vel, condimentum purus et et.'

let result = paragrafo.split(' ');
console.log(result);

let contEt = 0;

if(result === 'et') {
    console.log(`Achei ${contEt = contEt + 1} a palavra et`)
}


