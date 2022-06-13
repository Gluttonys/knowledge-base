/**
 * @desc 实现一个 new
 * @param target
 */
var myNew = function (target) {
    var obj = Object.create(null);
    obj.__proto__ = [].shift.call(arguments);
    var ret = target.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
};
function Person() {
    this.name = "如意虎头鞋";
}
var p = myNew(Person);
console.log(p);
