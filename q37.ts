// making function
function make_shirt(size:string="large",printMessage:string="I LOVE TYPESCRIPT"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on the shirt`)
}
//calling function with by default values
make_shirt();
// calling function with medium size and by default message
make_shirt("medium")
// calling function with small size and different message
make_shirt("small", "I LOVE CODING")
