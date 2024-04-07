// making array 
var pets = ["cat", "dog", "rabbit", "goat", "chick"];
//for loop
for (var _i = 0, pets_1 = pets; _i < pets_1.length; _i++) {
    var onePet = pets_1[_i];
    console.log("A ".concat(onePet, " would make a great pet."));
}
// message outside the loop
console.log("Any of these  animals would make a great pet!");
