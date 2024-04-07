var personName = "Manal";
//lowercase
console.log(personName.toLowerCase());
//uppercase
console.log(personName.toUpperCase());
//title case
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
