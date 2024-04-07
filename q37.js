// making function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I LOVE TYPESCRIPT"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on the shirt"));
}
//calling function with by default values
make_shirt();
// calling function with medium size and by default message
make_shirt("medium");
// calling function with small size and different message
make_shirt("small", "I LOVE CODING");
