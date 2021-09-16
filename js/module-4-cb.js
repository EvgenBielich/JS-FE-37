function hightPrder(value, callback) {
   callback(value)
}
hightPrder(`Hello, I am callback`, setMessage)

function setMessage(message) {
   // console.log(message);
}
// ==================================================
function toDoMeal(prods, cb) {

   // console.log(prods);
   let result = cb(prods)
   console.log(result);
   // console.log(`Your dish -`);
}

// toDoMeal(['bread', 'meat'], toDoSandwich)
// toDoMeal(['banana', 'orange'], toDoSandwich)

// callback

function toDoSandwich(arr) {
   // console.log(arr);
   let bread = arr.includes('bread')
   // console.log(bread);
   if (bread) return 'sandwich for you'
   return 'no bread '
}

// ========================================================
const results = [{mail:'', scores: 10}]
function getResultByTests(getMax, getMin, mail, ...scores) {
   // console.log(mail);
   // console.log(scores);
   // добавялем в базу данные о тесте
   let total = 0
   for (let i of scores) {
      total += i
   }
   // console.log(total);
   const obj = { mail, scores: total }
   results.push(obj)
   // console.log(results);
   // проверяем обновленные с помощью колбеков
   const scoresArr = []
   for (let obj of results) {
      // console.log(obj.scores);
      scoresArr.push(obj.scores)
   }
   // console.log(scoresArr);
   let max = getMax(scoresArr)
   let min = getMin(scoresArr)
   console.log('max', max, 'min', min);

}


getResultByTests(getMaxValue, getMinValue, 'a@gmail.com',1,1,1,1,1,1,1,1,1,1,1,1,1 )

// callback 
function getMaxValue(arr) {
   return Math.max(...arr)
}
function getMinValue(arr) {
   return Math.min(...arr)
}

// ==============================================================

const toGetF = (count, callback) => {
   let firstNum = 0
   let secondNum = 1
   const arrWithValues = [firstNum, secondNum]
   // получить массив с числами такой последовательности
   // console.log(arrWithValues);
   for (let i = 3; i <= count; i++) {
      let newNum = firstNum + secondNum
      // console.log('newNum', newNum);
      firstNum = secondNum
      secondNum = newNum
      arrWithValues.push(newNum)
   }
   console.log(arrWithValues);
   let result = callback(arrWithValues)
   return result
}

console.log('только четные',toGetF(18, getEvenValues));
console.log('сумма всех',toGetF(7, getSum));
// callback
function getEvenValues(arr) {
   const arrValues = []
   for(let num of arr) {
      if (num % 2 === 0) {
         arrValues.push(num)
}
   }
   return arrValues
}

function getSum(arr) {
   let total = 0
   for (let i of arr) {
      total += i
   }
   return total
}