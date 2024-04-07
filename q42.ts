// make function
function show_magician(magicians:string[]){
    magicians.forEach(name=> console.log(name));
}
function makeGreat(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}
//making array
let magiciansName =["harry poter","david copperfield","harry houdini","david blaine"];
// calling function
 let greatmagicians =makeGreat(magiciansName)
show_magician(greatmagicians);
