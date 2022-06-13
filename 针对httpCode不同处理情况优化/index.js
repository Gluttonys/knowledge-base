/**
 * @desc 针对项目中常见的HTTP CODE 多种处理方式
 * @desc 策略模式的使用
 */
/**
 * 策略体
 * context: 服务端返回的信息对象
 */
var policyBody = {
    200: function (context) {
        var message = context.message;
        console.log(message);
    },
    201: function (context) {
        console.log("怎么说");
    },
    404: function (context) {
        var code = context.code;
        if (code === 404) {
            console.log("需要重定向");
        }
    },
    500: function (context) {
        console.log("500");
    }
    // ...
};
// @ts-ignore
Promise.reject(200).catch(function (code) { return policyBody[code]({
    code: 200,
    message: "这是一次正确的请求"
}); });
// @ts-ignore
Promise.reject(404).catch(function (code) { return policyBody[code]({
    code: 404,
    message: "未找到正确资源"
}); });
