var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var data = {
    name: "如意虎头鞋",
    age: 18,
    info: {
        gender: 'male',
        hobby: {
            specific: 'football'
        }
    },
    family: ['xue', 'hao', 'ting', 'li']
};
var observer = function (target) {
    // 针对非对象类型值， 直接返回该值
    if (typeof target !== 'object' || target === null)
        return target;
    if (Array.isArray(target)) {
        var oldArrayPrototype_1 = Array.prototype;
        var convertArray_1 = Object.create(oldArrayPrototype_1);
        ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (method) {
            convertArray_1[method] = function () {
                var _a;
                // 调用老方法
                // @ts-ignore
                (_a = oldArrayPrototype_1[method]).call.apply(_a, __spreadArray([this], arguments, false));
                console.log("更新视图");
            };
        });
        // 修改target原型
        // @ts-ignore
        target.__proto__ = convertArray_1;
    }
    // 针对对象类型， 一次对属性做响应式处理
    for (var targetKey in target) {
        defineProperty(target, targetKey, target[targetKey]);
    }
};
var defineProperty = function (target, key, value) {
    observer(value);
    Object.defineProperty(target, key, {
        get: function () {
            return value;
        },
        set: function (newValue) {
            if (newValue !== value) {
                value = newValue;
                console.log("更新视图");
            }
        }
    });
};
observer(data);
// data.info.hobby.specific = "basketball"
data.family.push('mama', 'baba');
console.log(data);
