let str =
  'Lorem ipsum dolor et sit amet consectetur adipisicing elit. Minus debitis, tempora mollitia, eos enim hic molestiae officiis odio nostrum non voluptatem praesentium voluptate aliquam delectus explicabo recusandae nihil, eius vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque excepturi rerum nemo, at velit non numquam exercitationem quisquam incidunt voluptas consectetur impedit iure recusandae fugit necessitatibus animi sunt facere? Odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae expedita est? Esse ipsa voluptates quo pariatur eum modi error dolor neque illo fugit, autem praesentium, veniam quaerat tenetur sit.';

let onlyWords = /\W+/gi;
let onlyChars = str.split(onlyWords).filter(Boolean);
let amountOfWords = onlyChars.join(' ').split(' ').length;
let sortedArr = onlyChars.slice().sort();

// //* find unique values *//
// let result = [];
// for (let i = 0; i < sortedArr.length - 1; i++) {
//   if (sortedArr[i + 1] == sortedArr[i]) {

//   } else {
//     result.push(sortedArr[i]);
//   }
// }

console.log(`there are ${amountOfWords} words`);

let amountOfEt = 0;
for (let i in onlyChars) {
  if (onlyChars[i] == 'et') {
    amountOfEt++;
  }
}

console.log(`The word et is repeated ${amountOfEt} time(s)`);
