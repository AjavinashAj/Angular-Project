var petName = "dog";
function setPetName() {
    var petName = "cat";
    console.log("inner petname:" + petName);
}
setPetName();
console.log("outer petname:" + petName);
var index = 0;
for (var index = 0; index < 5; index++) {
    console.log("inside index:" + index);
}
console.log("outside index:" + index);
