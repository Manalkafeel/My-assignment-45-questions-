//creating variable
let userName=["Manal","Anfaal","Admin","Romail","Rohail"];

// using for each function
    userName.forEach(oneUser =>{
        if(oneUser==="Admin"){
            console.log(`Hello ${oneUser}, would you like to see status report.`)
        } 
        else {
            console.log(`Hello ${oneUser} thanks for logging in again.`)
        }
    }
  )
