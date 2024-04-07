//array of curreent users
var current_users = ["Manal", " Hamza", "Rohail", "Romail", "Ali", "Zunairah"];
// array of new users
var new_users = ["manal", " Anfal ", "Fatima", "Rohail"];
//loop to check user name availability
new_users.forEach(function (new_one_user) {
    // making a condition that user name is already exits
    var condition = (current_users.some(function (current_0ne_users) { return current_0ne_users.toLowerCase() === new_one_user.toLowerCase(); }));
    if (condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this user name ".concat(new_one_user, " is available. "));
    }
});
