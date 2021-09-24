// const user = {
//    name: 'Evgen',
//    showName() {
//       console.log(this.name);
//    },
// }

// // user.showName()

// const bestUser = {
//    name: 'Evgen',
//    age: 35,
   
// }
// // user.showName.apply(bestUser)

// function toSeyHello(manager, group) {
//    // console.log(`${this.name}, wa are glad to see you! I am ${manager}, your manager. You group is ${group}.`)
// }
// let manager = 'Petro'
// let group = 37
// toSeyHello.call(bestUser, manager, group)
// // toSeyHello.call(bestUser, 'Petro', 37)
// // toSeyHello.apply(bestUser, ['Petro', 37])fun


// // ! this in CALLBACK - bind

// const product = {
//    name: 'Banana',
//    price: 25,
//    changePrice(value) {
//       return (this.price = value)
//    },
// }

// const fruit1 = {
//    name: 'Ananas',
//    price: 50,
// }

// function showProduct(product, callback) {
//    let price = callback()
//    // console.log(`${product} coast ${price} now`);
// }

// showProduct('fruit', product.changePrice.bind(product, 20))
// showProduct("fruit1", product.changePrice.bind(fruit1, 99))

// // !================================= PRACTICE ========================

// function every(array, callback) {
//    const results=[]
//    for (let elem of array) {
//       let condition = callback(elem)
//       // console.log(condition);
//       results.push(condition)
//    }
//    // console.log(results);
//    if (results.includes(false)) {
//       return false
//    } else {
//       return true
//    }
// }
// let result = every([1, 11, 111, 2, 22, 222], getLessThenTen)
// result = every([1, 2, 3, 4, 5], getLessThenTen)

// // console.log(result);

// function getLessThenTen(number) {
//    // if (number < 10) {
//    //    return true
//    // } else {
//    //    return false
//    // }
//    return number < 10 ? true:false
// }
// function getMoreThenTen(number) {
//    return number > 10 ? true : false
// }
// result = every([1, 2, 3, 23, 51], getMoreThenTen)

// // =========================================================

// function compact(array, callback) {
//    const newArray = []
//    for (let value of array) {
//       // console.log(Boolean(value));
//       // if(Boolean(value))newArray.push(value)
//       callback(value, newArray)
//    }
//    return newArray
// }

// function getFalsyValues(elem, falsyValues) {
//    if(!Boolean(elem)) falsyValues.push(elem)
// }
// function getNotFalsyValues(elem, notFalsyValues) {
//    if(Boolean(elem)) notFalsyValues.push(elem)
// }

// // console.log(compact([1, 0, '', null, 'Hello']));
// // console.log(compact([Infinity, ' ', {}, []]));

// // console.log(compact([1, 0, '', null, 'Hello'], getFalsyValues));
// // console.log(compact([1, 0, '', null, 'Hello'], getNotFalsyValues));


// // ====================================================================

// function showDeliveryStatus(array) {
//    let message;
//    message = `Done` //progress 100
//    message = `In progress` // <100
//    message = `Ready to delivery`
//    console.log(`object`);
// }

// // showDeliveryStatus(orderA)

// let promise = new Promise(function(resolve, reject) {

//    setTimeout(() => console.log("done!"), 1000);
 
//  });
 
 
//  promise.then(
 
//    result => alert(result), 
 
//    error => alert(error) 
 
// );
 

let person = {
   name: 'ffr',
   surname: 'iifvdd',
   fatherName: 'fdfdfdfdf',
   age:30,
}

console.log(person);

// person.update('age', 37)
// person.add('age', 37)
person["age"] = 25;
console.log(person);