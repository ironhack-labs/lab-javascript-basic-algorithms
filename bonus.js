let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat suscipit tortor in scelerisque. Maecenas mollis turpis est, at tempor est rutrum sit amet. Curabitur vitae odio ut urna hendrerit laoreet maximus quis dolor. Morbi et blandit dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vitae ipsum quam. In in tincidunt lectus. Proin sit amet leo lacus. Nullam lectus urna, ornare at ultrices at, venenatis vel urna. Sed dapibus, purus vitae condimentum gravida, augue augue accumsan justo, in imperdiet tellus massa in risus. Integer lectus eros, mollis non sem at, rutrum dapibus velit. In vulputate porttitor purus, nec bibendum lacus varius vitae. Sed tincidunt nec nisl non volutpat. Duis rutrum urna consectetur nibh ultricies, posuere interdum magna pharetra. Nullam eu vehicula nunc. Vivamus eget orci quis lacus rhoncus ultricies non vitae orci. Vestibulum ante dui, cursus in mollis nec, eleifend eget enim. Morbi blandit euismod leo. Phasellus laoreet ac lacus in mattis. Nullam sit amet metus a tellus mollis mattis quis varius nisl. Donec feugiat tellus nec diam ultrices aliquam. Morbi nec tincidunt justo. Praesent eget neque sed elit sagittis pretium ut non quam. Curabitur sodales libero nec malesuada finibus. Proin ullamcorper turpis fermentum neque consectetur malesuada. Fusce vulputate nibh et eros volutpat, a porttitor turpis accumsan. Nulla tempor dui at dui scelerisque, vitae iaculis lacus condimentum. Sed non aliquet lacus. Suspendisse varius, nulla eget interdum fringilla, ex ligula tempor lorem, eget blandit tellus nisi vel est. Vivamus sit amet eros eu lorem convallis tempor. Sed commodo rhoncus magna, quis tincidunt velit tincidunt nec. Etiam rutrum, tortor ac vehicula condimentum, mi augue porttitor felis, a hendrerit ligula orci vitae nibh. Duis fermentum imperdiet risus ut pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

let loremWords = lorem.split(" ");


console.log(loremWords.length)

let i = 0;
let j = 0;
for (i = 0; i < loremWords.length; i++) {
    loremWords[i] + ` ${i}`;
    if (loremWords[i] === "et" || loremWords[i] === "et," || loremWords[i] === "et." || loremWords[i] === "Et") {
        j++
    }
}
console.log(j)