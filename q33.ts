// make array
let number=[1,2,3,4,5,6,7,8,9];
//using loop 
for(let oneNumber of number){
    let ordinaryEnding:string;
if (oneNumber===1){
    ordinaryEnding="st"
}
else if(oneNumber===2){
    ordinaryEnding="nd"
}
else if(oneNumber===3){
    ordinaryEnding="rd"
}
else{
    ordinaryEnding="th"
}
console.log(`${oneNumber}${ordinaryEnding}`);
}
