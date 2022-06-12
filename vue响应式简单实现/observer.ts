const data = {
  name: "如意虎头鞋",
  age: 18,
  info: {
    gender: 'male',
    hobby: {
      specific: 'football'
    }
  },
  family: ['xue', 'hao', 'ting', 'li']
}

type ObserverData = Record<string, any>

const observer = (target: ObserverData) => {
  // 针对非对象类型值， 直接返回该值
  if (typeof target !== 'object' || target === null) return target


  if (Array.isArray(target)) {
    const oldArrayPrototype = Array.prototype;
    const convertArray = Object.create(oldArrayPrototype);

    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(method => {
      convertArray[method] = function () {
        // 调用老方法
        // @ts-ignore
        oldArrayPrototype[method].call(this, ...arguments)
        console.log("更新视图")
      }
    })

    // 修改target原型
    // @ts-ignore
    target.__proto__ = convertArray
  }

  // 针对对象类型， 一次对属性做响应式处理
  for (const targetKey in target) {
    defineProperty(target, targetKey, target[targetKey])
  }
}


const defineProperty = (target: ObserverData, key: string, value: any) => {
  observer(value)

  Object.defineProperty(target, key, {
    get(): any {
      return value
    },
    set(newValue: any): void {
      if (newValue !== value) {
        value = newValue
        console.log("更新视图")
      }
    }
  })
}


observer(data)
// data.info.hobby.specific = "basketball"
data.family.push('mama', 'baba')
console.log(data)

