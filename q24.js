// variable declaration
var mango = "mango";
var upperCaseApple = "APPLE";
var ten = 10;
var twenty = 20;
//array making
var fruits = ["guava", "watermelon", "grapes", "oranges"];
// test for equality 
console.log("is mango is equals to mango?");
console.log(mango == "mango");
//test for inequality
console.log("\nis mango is not equals to mango?");
console.log(mango != "mango");
//testing using lower case function
console.log("\nis APPLE is equal to apple");
console.log(upperCaseApple.toLowerCase() == "apple");
//testing using lower case function
console.log("\nis APPLE is not equal to apple");
console.log(upperCaseApple.toLowerCase() != "apple");
// numerical tests
//equalsto
console.log("\n is ten is equlas to twenty");
console.log(ten == twenty);
// not equalsto
console.log("\n is ten is not equals to twenty");
console.log(ten != twenty);
//greater than
console.log("\nis ten is greater than zero");
console.log(ten > 0);
//less than
console.log("\n is twenty is lesser than ten");
console.log(twenty < 10);
//greater than or equals to
console.log("\n is ten is greater than equals to five");
console.log(ten >= 5);
//less than or equals to
console.log("\n is twenty less than equals to ten");
console.log(twenty <= 10);
//test by using and or operator
// here we use and (&&)operator
console.log("\n twenty is  equals to ten and greater than ten");
console.log(twenty == 10 && twenty > 10);
//here we use or(||) operator
console.log("\n twenty is greater than 50 or twenty is equals to twenty");
console.log(twenty > 50 || twenty == 20);
// test whether an item  is include in array
console.log("\n is orange is include in  my array");
console.log(fruits.includes("oranges"));
// test whether an item is not include in array
console.log("\n is orange is  not include in  my array");
console.log(!fruits.includes("oranges"));
