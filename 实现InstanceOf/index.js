var myInstanceof = function (obj, className) {
    var pointer = obj;
    while (pointer) {
        if (pointer === className.prototype)
            return true;
        pointer = pointer.__proto__;
    }
    return false;
};
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "旺财";
    }
    return Animal;
}());
var dog = new Animal();
console.log(myInstanceof(dog, Animal));
