let guestList =["Manal","Anfaal","Sabahat","Zunairah","Javeria","Arisha"];

let dontCome = guestList[0];

console.log(dontCome ,"not able to come");

guestList.splice(0,1,"Miraal");

//we have to make list of guests with the message of invitation
guestList.forEach(oneGuest => console.log(`Hey ${oneGuest} would you like to dinner with me ? `));