// make function
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function makeGreat(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//making array
var magiciansName = ["harry poter", "david copperfield", "harry houdini", "david blaine"];
// calling function
var greatmagicians = makeGreat(magiciansName);
show_magician(greatmagicians);
