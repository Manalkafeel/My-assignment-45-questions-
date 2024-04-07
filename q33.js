// make array
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//using loop 
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var oneNumber = number_1[_i];
    var ordinaryEnding = void 0;
    if (oneNumber === 1) {
        ordinaryEnding = "st";
    }
    else if (oneNumber === 2) {
        ordinaryEnding = "nd";
    }
    else if (oneNumber === 3) {
        ordinaryEnding = "rd";
    }
    else {
        ordinaryEnding = "th";
    }
    console.log("".concat(oneNumber).concat(ordinaryEnding));
}
