// !arrays

// создание массива
const array = [1, 2, 3, 'Java Script', 4, 5, 6];
// console.log(array);

// !номер индекса
// console.log(array[3]);

// !изменить значение
array[0] = 'I love'
// console.log(array[0]);
// console.log(array);

// !удалить элемент
// delete array[1]
// delete array[2]
// console.log(array[1]);
// console.log(array[2]);
// console.log(array);

// !add elem by index
array[1] = 'HTML'
array[2] = 'CSS'
console.log(array);


// !иттерация (for & for...of)
// !break & continue
for (let i = 0; i < array.length; i += 1) {
   if (typeof array[i] === 'string') {
      continue
   }
   // console.log("index:", i);
}


for (let i = 0; i < array.length; i += 1) {
   // console.log('BREAK');
   if (typeof array[i] === 'string') {
      break
   }
   // console.log(array[i]);
}

//  !многомерный массив
const multiArray = [
   [1, 10, 100, 1000],
   [2, 20, 200, 2000],
   [3, 30, 300, 3000],
]

// console.log(multiArray.length);
// console.log(multiArray[2]);

for (let array of multiArray) {
   // console.log(array);
}

// Примитивы присваиваются новой переменной по значению - тюе ксерокопия
// сложные типы передают только ссылку
// т.е еще одна переменая имеет доступ к тем же данным

let age = 30
// console.log('age', age);

let myAge = age
// console.log('myAge', myAge);
// console.log(age === myAge);

age = 31
// console.log('age', age);
// console.log('myAge', myAge);
// console.log(age === myAge);

// =============

const numbers = [12, 23, 34, 45]
// console.log('numbers',numbers);

const myNumbers = numbers
// console.log('myNumbers', myNumbers);

// изменение значения первого эл-та в исходном массиве
numbers[0] = 10005000
// console.log('numbers', numbers);
// console.log('myNumbers', myNumbers);

// !методы массива
// console.log('numbers', numbers);

// !slice
const mySliceNumbers = numbers.slice()
// console.log('mySliceNumbers', mySliceNumbers);
// console.log(numbers === mySliceNumbers); //false

numbers[0] = 12
// console.log('mySliceNumbers', mySliceNumbers);
// console.log(numbers === mySliceNumbers);

const firstTwoElems = numbers.slice(0, 2)
// console.log('firstTwoElems', firstTwoElems);

// !split
let myString = 'my String'
// console.log(typeof myString, myString);
// console.log(myString[0]);
// console.log(myString[1]);
// console.log(myString[2]);
// console.log(myString[3]);
// console.log(myString[4]);
// console.log(myString[5]);
// console.log(myString[6]);
// console.log(myString[7]);
// console.log(myString[8]);
// console.log(myString.length);

const arrayFromString1 = myString.split('')
// console.log(arrayFromString1);

const arrayFromString2 = myString.split(' ')
// console.log(arrayFromString2);

const arrayFromString3 = myString.split('s')
// console.log(arrayFromString3);

const arrayFromString4 = myString.split('S')
// console.log(arrayFromString4);

// !join
const myArray = ['I', "love", 'JS']
// console.log(myArray);

let arrayToString = myArray.join(' ')
// console.log(arrayToString);

// !indexOf()  & includes()
// console.log('myArray', myArray);

// console.log('myString', myString);

const exampleArray = [1, 1, 2, 3, 4, 4]
// console.log(exampleArray);
const unshiftElem = exampleArray.unshift(0)
// console.log(unshiftElem); //exampleArray.length
// console.log(exampleArray); // добавился єл-т в начале

const pushElem = exampleArray.push(5)
// console.log(pushElem);
// console.log(exampleArray); // добавился єл-т в конец

const shiftElem = exampleArray.shift()
// console.log(shiftElem);
// console.log(exampleArray); // удаляет один єл-т с начала массива


const popElem = exampleArray.pop()
// console.log(popElem);
// console.log(exampleArray); // удаляет один єл-т сконца массива

// !splice
// delete
let deleteSplice = exampleArray.splice(1, 1) //с какого єл-та и по какой удалить
// console.log(deleteSplice);
// console.log(exampleArray);


// add ["I", "Love", "JS", 1, 2, 3, 4, 4]
let addSplice = exampleArray.splice(0, 0, 'I' , 'Love', 'JS') //перед индексом удаляем 0 єл-тов и вставляем єлементі
// console.log(addSplice);
// console.log(exampleArray);
                                    //(индекс, сколько удаляем, что вставляем)
let replaceSplice = exampleArray.splice(5, 1, "react", 'NOdeJS')
// console.log(replaceSplice);
// console.log(exampleArray);

// !concat

const firstPiece = [1, 2]
// console.log(firstPiece);

const secondPiece = [3, 4]
// console.log(secondPiece);

const thirdPiece = [5, 6]
// console.log(thirdPiece);

const fullArray = firstPiece.concat(secondPiece, thirdPiece)
// console.log(fullArray);