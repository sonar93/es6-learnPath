// const original = x => x
// console.log(original(100))

// const obj = {
//     name: 'wfm',
//     logname(){
//         setTimeout(() => {
//             console.log(this.name)
//         }, 1000)
//     }
// }

// const func = (a = 10) => a

// console.log(func());

// const name = 'ngs'
// const age = 25
// const obj = {name, age}

// console.log(obj)

// const createPerson = (name, surname, fieldname, fieldPostfix) => {
//     const fullname = name + ' ' + surname
//     return {fullname,
//             name,
//             surname,
//             getJob: () => {
//                 return 'Front End'
//             },
//             [fieldname + fieldPostfix]: 'E250'
//         }
// }

// console.log(createPerson('Sona', 'Narek', 'model', '-name'))

// // Destructor

// let obj = {
//     name: 'NGS',
//     age: 25
// }

// let {name: n, age: a} = obj

// console.log(n, a)

// let array = ['wfm', 10]

// let [name, , color='red'] = array;

// console.log(name, color);

// function logStrings(num, ...args) {
//     console.log(num, args)
// }

// let spreadArray = ['wfm', 'wfm-2', 'wfm-3']
// logStrings(20, ...spreadArray)

// // Loops

// const array = [1,2,3,4,5]

// for (let item of array) {
//     console.log(item)
// }

//array.forEach(element => console.log(element));

// // Class

// function Car(name) {
//     this.name = name
// }

// Car.prototype.logName = function () {
//     console.log(this.name)
// }

// let car = new Car('Audi')
// car.logName()

// class Car {
//     9constructor(name){
//         this.name = name
//     }

//     logname(){
//         console.log(this.name)
//     }

//     static staticFunc() {
//         console.log()
//     }
// }

// let car = new Car('BMW')
// car.logname()

//let set = new Set([1,2,3,3,4,4,5,3])
// let set = new Set().add(2).add(3)

// console.log('Set size: ', set.size)
// console.log('Set has: ', set.has(3))
// console.log('Set delete: ', set.delete(3))
// console.log('Set has: ', set.has(3))
// console.log('Set clear: ', set.clear())
// console.log('Set size: ', set.size)

// let set = new WeakSet()

// let key = {}
// set.add(key)

// console.log(set.size);
// key = null
// console.log(set.size);

// let map = new Map()

// map.set('name', 'WFM')
// map.set('age', 25)

// let obj1 = {}
// let obj2 = {}

// map.set(obj1, 10)
// map.set(obj2, 50)

// console.log('Size:',map)

// let map = new Map([
//     ['name', 'wfm'],
//     ['age', 25]
// ])

// for(let ent of map.entries()){
//     console.log(`${ent[0]} - ${ent[1]}`)
// }

// let map = new WeakMap()

// key = {}

// map.set(key, 'key')
// console.log(map.size);
// key = null
// console.log(map.size);

// let s = Symbol('field')

// let obj = {
//     [s]: 'wfm'
// }

// function createIterator(arr) {
//     let count = 0
//     return {
//         next() {
//             return count < arr.length
//                 ? {value: arr[count++], done: false}
//                 : {value: undefined, done: true}
//         }
//     }
// }

// let iter = createIterator([1,2,3,4,5])
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// let f = {
//     [Symbol.iterator](){
//         let pre = 0, cur =1
//         return {
//             next() {
//                 [pre, cur] = [cur, pre+cur]
//                 return {value: cur, done: false}
//             }
//        }
//     }
// }

// for (let n of f) {
//     console.info(n)
// }

// let obj1 = {a: 1}
// let obj2 = {b: 2, c:3}

// Object.assign(obj1, obj2)

// console.log(obj1);

// http://date.jsontest.com

// function oldDelay(ms, func) {
//     setTimeout(() => {
//         func()
//     }, ms)
// }

// function delay(ms = 1000) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject()
//         }, ms)
//     })
// }

// delay(4000)
//     .then(() => console.log('Delay passed'))
//     .catch(() => console.info('reject'))

// import $ from "jquery";

// let promise = new Promise((resolve, reject) => {
//   $.ajax({
//     url: "http://date.jsontest.com",
//     dataType: "json",
//     success: response => resolve(response),
//     error: error => reject(error)
//   });
// });

// promise
//   .then(data => data.date)
//   .then(date => console.log(date))
//   .catch(error => console.log(error));
