var data = {
    name: "如意虎头鞋",
    age: 18,
    info: {
        gender: 'male',
        hobby: {
            specific: 'football'
        }
    }
};
var observer = function (target) {
    // 针对非对象类型值， 直接返回该值
    if (typeof target !== 'object' || target === null)
        return target;
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
data.info.gender = "female";
data.info.hobby.specific = "basketball";
console.log(data);
