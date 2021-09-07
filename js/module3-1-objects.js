// console.log({});

const obj = {
   prop_a: 'A',
   prop_b: 'B',
   prop_c: '2',
   prop_d: 'null',
   name: 'Evgen',
   age: 35,
   isOnline: false,

   // !методы 
   // ES5
   showName1: function () {
      console.log('Hello');
   },
   // ES6
   showName2() {
      console.log('World');
   },
}

// !Получить значения свойства в обьекте GET
console.log(obj);
// console.log('name', obj.name);
// console.log(obj['name']);
// obj.showName1()
// obj.showName2()

// !измениьт значение свойства в обьекте UPDATE
// console.log(obj.age);
obj.age = 18
// console.log(obj.age);
// console.log(obj.languages);

// !добавлять POST
obj.languages = ['ukr', 'rus', 'eng',]
// console.log(obj.languages);

// !удалять DELETE
delete obj.age
// console.log(obj.age);

// !short props
let age = 35
// console.log(age);
let skills = ['HTML', 'CSS']
// console.log(skills);

const myUser = {
   age,
   skills,
}
// console.log(myUser);

//  !Вычисляемые свойства obj[var]

let key1 = 'userName'
let key2 = 'lastName'
let key3 = 'skills'

const nextUser = {
   [key1]: 'user',
   studentName: 'user'
}

// console.log(nextUser);

for (let prop in nextUser) {
   // console.log('key', prop);
}
const objects = {}
for (let key in objects) {
   
}

// !CREATE {} ------------------------------------------------------

const product = {
   price: 10,
}
// console.log('отец',product);

const newProduct = Object.create(product)
// console.log('сын',newProduct);

newProduct.price = 100

const newNewProduct = Object.create(newProduct)
// console.log('внук', newNewProduct);
newNewProduct.title = 'product'

for (let key in newNewProduct) {
   if (newNewProduct.hasOwnProperty(key)) {
      // console.log('key of newNewProduct',key);
      // console.log((newNewProduct[key]));
   }
}

// !obj.hasOnProperty()
// console.log(newNewProduct.hasOwnProperty('price'));
// console.log(newProduct.hasOwnProperty('price'));


// Object.keys(obj) - массив ключей
const  myKeys = Object.keys(obj)
console.log(myKeys);
console.log(myKeys[0]); // номер ключа по индексу
console.log(obj[myKeys[0]]);

// Object.values(obj) - массив значений
const myValues = Object.values(obj)
console.log(myValues);

const prod = {
   count: 2,
   price: 10,
}

// Object.ebtries(obj) - многомерный масиив в виде
// [[key1, value1], [key2, value2], [key3, value3]]

const myEntries = Object.entries(prod)
console.log(myEntries);

//  !this ------------------------------------------------------

let nikName = 'BLA BLA BLA'
const user = {
   nikName: 'Super User',
   showUserName() {
      return `Hello, ${this.nikName}`
   },
}

console.log(user.showUserName());