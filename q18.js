var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making an array of countries with its original order
var countriesToVisit = ["denmark", "argentina", "brazil", "china"];
console.log("original order:", countriesToVisit);
//make list with alphabetical order
console.log("Alphabeticalorder:", __spreadArray([], countriesToVisit, true).sort());
// Checking our array is still in original order
console.log('Still in original orde', countriesToVisit);
//reverse alphabetical order
console.log("reverse alphabetical order", __spreadArray([], countriesToVisit, true).reverse());
// Checking our array is still in original order
console.log('Still in original orde', countriesToVisit);
// we have change the original order of array into reverse form
console.log("original order reverse:", countriesToVisit.reverse());
// reverse again in order to attain its original order
console.log("back to original order:", countriesToVisit.reverse());
//sort your original array into alphabetical order
console.log("sort in alphabetical order:", countriesToVisit.sort());
// we have change the original order again of array into reverse form
console.log("original order reverse again:", countriesToVisit.reverse());
