/**
 * @desc 实现一个 new
 * @param target
 */
const myNew = function (target: Function) {

  const obj: Record<string, any> = Object.create(null)

  obj.__proto__ = [].shift.call(arguments)
  const ret = target.apply(obj, arguments)

  return typeof ret === 'object' ? ret : obj
}


function Person() {
  this.name = "如意虎头鞋"
}


const p = myNew(Person);
console.log(p)



