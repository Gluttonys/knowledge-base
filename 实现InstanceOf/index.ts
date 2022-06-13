const myInstanceof = (obj: any, className: any) => {
  let pointer = obj
  while (pointer) {
    if (pointer === className.prototype) return true

    pointer = pointer.__proto__
  }
  return false
}


class Animal {
  name: string = "旺财"
}


const dog = new Animal()

console.log(myInstanceof(dog, Animal));
