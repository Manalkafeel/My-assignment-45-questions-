//creating variable
var userName = ["Manal", "Anfaal", "Admin", "Romail", "Rohail"];
// using for each function
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see status report."));
    }
    else {
        console.log("Hello ".concat(oneUser, " thanks for logging in again."));
    }
});
