//creating variable
let userName=["Manal","Anfaal","Admin","Romail","Rohail"];
 userName=[]

if (userName.length===0){ 
    console.log("we need some users!")
}
else {
    userName.forEach(oneUser =>{
        if(oneUser==="Admin"){
            console.log(`Hello ${oneUser}, would you like to see status report.`)
        } 
        else {
            console.log(`Hello ${oneUser} thanks for logging in again.`)
        }
    }
  )}