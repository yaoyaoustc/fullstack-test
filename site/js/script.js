var message = "in global";
console.log("global: message =" + message);

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);

    b();
}
function b() {
    console.log("b: message = " + message);

}
a();
var string = "hello";
string += "world";
console.log(string + "!");
if (sidedish === undefined) {
    sidedish = "whatever"; 
}
var facebook = {
    name: "Facebook",
    "stock of company":100,
    ceo: {},
    account:{},
}
function multiply(x, y) {
    return x * y;
}
function test() {
    console.log()
}