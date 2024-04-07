function sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    return "I want sandwich of ".concat(item);
}
// making diiferent types of sandwich order
var collection1 = sandwich("Capsicum", " mayo", " black paper");
var collection2 = sandwich("Chicken tikka", "egg", "tomato");
var collection3 = sandwich("garlic chicken", " mayo sauce", " cheese");
//printing the message
console.log("enjoy your sandwich Manal Kafeel, ".concat(collection1));
console.log("enjoy your sandwich Manal Kafeel, ".concat(collection2));
console.log("enjoy your sandwich Manal Kafeel, ".concat(collection3));
