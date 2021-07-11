/* eslint-disable */
// js 에서도 type check 를 사용할수 있다.

// formatting & Linting & TypeChecking

/*
formatting ex)Prettier,beautify
미적인 것 들에 초점

Linting ex)Eslint
 잘지키면 좋은것들 오류가 날수 있는것들 을 잡아주는것

TypeChecking ex)TypeScript(타입을 정의해줌)
 말그대로 타입 을 체크 해주는것
*/
/* 다음 코드에 있는 콘솔 관련 eslint rule 을 꺼준다. */

// Closure

// var numCounters = 0

// function getCounter() {
//   numCounters += 1

//   var result = { count: count, total: 0 }
//   function count() {
//     result.total += 1
//   }
//   return result
// }

// var counterA = getCounter()
// counterA.count()
// counterA.count()

// var counterB = getCounter()
// counterB.count()

// console.log(counterA.total, counterB.total, numCounters)

// prototype

function Person(name) {
  this.name = name
}

function Student(name) {
  this.__proto__.constructor(name)
}

Person.prototype.greet = function greet() {
  return `Hi , ${this.name} !`
}

Student.prototype.study = function study() {
  return `${this.name} is Studying`
}

Object.setPrototypeOf(Student.prototype, Person.prototype) //상속 해준다.

const me = new Student('Chaewoon')
console.log(me instanceof Student)
console.log(me instanceof Person)

const anotherPerson = new Person('FOO')
console.log(anotherPerson instanceof Student)
