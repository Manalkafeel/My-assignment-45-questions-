var guestList = ["Manal", "Anfaal", "Sabahat", "Zunairah", "Javeria", "Arisha"];
// add new guest at the beginning of the aaray
guestList.unshift("fatima");
// add guest name at the ending of array
guestList.push("sidra");
// add new gust in the midddle of the array 
var midddleGuest = "Aqsa";
// through this we can find the lenght of array
var midddleIndex = guestList.length / 2;
guestList.splice(midddleIndex, 0, midddleGuest);
// Print the invitation message for all guest
console.log('i can only invite two people for dinner');
// using while loop to remove extra guests 
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("\nsorry,".concat(removeGuest, " i cant invite you to dinner"));
}
// invitation to the last two guest 
guestList.forEach(function (lastTwo) { return console.log("luckly ".concat(lastTwo, " you are still invited for dinner with me")); });
//removing last to guest in order to make empty list
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
