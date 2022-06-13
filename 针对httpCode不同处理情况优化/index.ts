/**
 * @desc 针对项目中常见的HTTP CODE 多种处理方式
 * @desc 策略模式的使用
 */

type Context = {
  // http code 状态
  code: number,
  // 服务端提示信息
  message: string
}

/**
 * 策略体
 * context: 服务端返回的信息对象
 */
const policyBody: Record<number, (context: Context) => void> = {
  200: (context) => {
    const {message} = context
    console.log(message)
  },
  201: (context) => {
    console.log("怎么说")
  },
  404: (context) => {
    const {code} = context
    if (code === 404) {
      console.log("需要重定向")
    }
  },
  500: (context) => {
    console.log("500")
  }
  // ...
};

// @ts-ignore
Promise.reject(200).catch(code => policyBody[code]({
  code: 200,
  message: "这是一次正确的请求"
}))

// @ts-ignore
Promise.reject(404).catch(code => policyBody[code]({
  code: 404,
  message: "未找到正确资源"
}))











