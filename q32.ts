//array of curreent users
let current_users=["Manal"," Hamza" ,"Rohail","Romail","Ali","Zunairah"];
// array of new users
let new_users=["manal"," Anfal ","Fatima","Rohail"];
//loop to check user name availability
new_users.forEach(new_one_user=>{
    // making a condition that user name is already exits
    let condition=(current_users.some(current_0ne_users=>current_0ne_users.toLowerCase() ===new_one_user.toLowerCase()))
    if (condition){
        console.log(`sorry ${new_one_user} is already taken!`)
    }
    else{
        console.log(`this user name ${new_one_user} is available. `)
    }
})