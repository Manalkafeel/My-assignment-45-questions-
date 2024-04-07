// making function
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// calling function
describe_city("karachi");
describe_city("lahore");
describe_city("islamabad");
describe_city("tokyo", "japan");
