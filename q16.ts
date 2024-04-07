let guestList =["Manal","Anfaal","Sabahat","Zunairah","Javeria","Arisha"];

let dontCome = guestList[0];

console.log(dontCome ,"not able to come");
//replace the guest who are not able to come
guestList.splice(0,1,"Miraal");

console.log("Welcome all , we found a bigger dinner table!")
// add new guest at the beginning of the aaray
guestList.unshift("fatima");

// add guest name at the ending of array
guestList.push("sidra");

// add new gust in the midddle of the array 
let midddleGuest : string ="Aqsa";
// through this we can find the lenght of array
let midddleIndex= guestList.length/2;
 guestList.splice(midddleIndex,0,midddleGuest);
 // Print the invitation message for all guest
 guestList.forEach(oneGuest => console.log(`Hey ${oneGuest} would you like to dinner with me ? `));

