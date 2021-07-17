// js 에서도 type check 를 사용할수 있다.

const { type } = require("os")

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

// function Person(name) {
//   this.name = name
// }

// function Student(name) {
//   this.__proto__.constructor(name)
// }

// Person.prototype.greet = function greet() {
//   return `Hi , ${this.name} !`
// }

// Student.prototype.study = function study() {
//   return `${this.name} is Studying`
// }

// Object.setPrototypeOf(Student.prototype, Person.prototype) //상속 해준다.

// const me = new Student('Chaewoon')
// console.log(me instanceof Student)
// console.log(me instanceof Person)

// const anotherPerson = new Person('FOO')
// console.log(anotherPerson instanceof Student)

// const a = [1, 2, 3, 4, 5]

// const [head, ...rest] = a
// console.log(head, rest)

// const paerSonalData = {
//   email: '1',
//   password: '****',
// }

// const publicData = {
//   nickname: '3',
// }

// const overrides = {
//   email: '12341234',
// }

// const user = {
//   ...paerSonalData,
//   ...publicData,
//   ...overrides,
// }

// console.log(user);

/**
 * 다음 문제를 풀어봅시다.
 *
 * A. 30대 미만이 한명이라도ㅡ사는 모든 도시
 */

/**
* @typedef Person 
* @property {number} age 
* @property {string} city 
* @property {string | string[]} [pet]
*/

/**
 * @type {Person[]}
 */
 const people =[
    {
      age : 20,
      city : '서울',
      pet : ['cat','dog']
    },
    {
      age : 40,
      city : '부산'
    },
    {
      age : 31 ,
      city : '대구',
      pet : ['cat','dog']
    },
    {
      age : 36,
      city : '서울'
    },
    {
      age : 27,
      city : '부산',
      pet : [
        'cat'
      ]
    },
    {
      age : 24,
      city : '서울',
      pet : 'dog'
    }
  ]
    /** @tyape {string[]} */
  function solveA(){
    const cities = []
  
    // Solve A 의 중심적인 부분
    for(const person of people){
      if (person.age<30){
        if(!cities.find((city) => person.city === city)){
          cities.push(person.city)
        }
      }
    }
    return cities
  }
  function solveAMordern() {
    const allcities = people.filter(({age})=>age <30).map(({city})=>city)
    const set = new Set(allcities)
    return Array.from(set)
  }
  
  console.log('solveA',solveA())
  console.log('solveAMordern',solveAMordern())


  /** B. 각 도시별로 개와 고양이를 키우는 사람들의 수*/

  /**
   * {
   *    "서울"  : {
   *        "dog" : 2,
   *        "cat" : 1
   *    },
   *    "대구" : {
   *        "dog" : 1,
   *        "cat" : 1,
   *    },
   *    "부산" : {
   *        "cat" : 1,
   *    }
   * }
   */

  /**
   * @typedef {Object.<string,Object.<string,number>} PetsOfCities
   */

  function SolveB(){
    /**
     * @type {PetsOfCities}
     */
    const result{}

    for(const person of people){
        const {city,pet: petOrPets} = person

        if(petOrPets){
          const PetsOfCity = result[city] || {}
            if(typeof petOrPets === 'string'){

                const pet = petOrPets

                result[city][pet] = result[city][pet] + 1
            }
            else if(typeof petOrPets === 'undefine'){

            }

            result[city] = PetsOfCity
        } 
    }
    return result    
}
console.log('solveB',SolveB())