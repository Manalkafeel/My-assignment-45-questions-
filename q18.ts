//Making an array of countries with its original order
let countriesToVisit : string[]=["denmark","argentina","brazil","china"]
console.log("original order:",countriesToVisit);
//make list with alphabetical order
console.log("Alphabeticalorder:",[...countriesToVisit].sort());
// Checking our array is still in original order
console.log('Still in original orde',  countriesToVisit);
//reverse alphabetical order
console.log("reverse alphabetical order",[...countriesToVisit].reverse());
// Checking our array is still in original order
console.log('Still in original orde',  countriesToVisit);
// we have change the original order of array into reverse form
console.log("original order reverse:",countriesToVisit.reverse());
// reverse again in order to attain its original order
console.log("back to original order:",countriesToVisit.reverse());
//sort your original array into alphabetical order
console.log("sort in alphabetical order:",countriesToVisit.sort());
// we have change the original order again of array into reverse form
console.log("original order reverse again:",countriesToVisit.reverse());