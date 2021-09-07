// !function

//!обьявление функции

//----FUNCtION EXPRESSION - нельзя вызывать до обьявления
const myFunc = function (param1, param2) {
   // перечесляем действия - инструкции, которые должны выполнится
   // console.log(`Это функциональное выражение с параметрами ${param1} & ${param2}`);
   // console.log(param1, param2);
}

//----FUNCTION DECLARATION - можно вызвать до обьявления
function myFuncDec1(param) {
   // console.log('это декларативное обьяывление');
}

//----ARROW FUNCTION - ES6
const myArrowFunc =  (param1) => {
   // перечесляем действия - инструкции, которые должны выполнится
   // console.log('Это стрелочная функция');
}

// ---- вызовы функций
myFunc('Hello', 'World');
myFuncDec1();
myArrowFunc();


// !PARAMS & ARGUMENTS3
let user
function toSayHello(userName = 'User') {
   alert(`${userName}, рады вас приветствовать!!!`)

}

// toSayHello(user);

function showInfo(userName, userAge) {
   console.log(`Hello, my name is ${userName}. I am ${userAge} years old`);
}

showInfo('Evgen', 35)

// !arguments & ...args

function getResult(...allParams) {
   // console.log(arguments);
   // console.log('allParams', allParams);
   for (let elem of arguments){
      // console.log(elem);
   }
   // arguments.push(1)
   // преобразование псeвдомассива в полноценный массив
   const myArgs = Array.from(arguments)
   // console.log(myArgs);
   myArgs.push(1)
   // console.log(myArgs);
}

getResult(0, 1)

// REST
const getArrayRes = (...allParams) => {
   // console.log(allParams);
}

getArrayRes(1, 2, 3, 4)

// Guard Clause
function getValue(array, value) {
   // console.log(array);
   for (let i = 0; i < array.length; i += 1) {
      if (array[i] === value) return `значение ${value} есть в массиве`
   }
   return `значение ${value} отсутствует в массиве`
}
let result = getValue([1, 2, 3, 4, 5, 6, 7], 5)
// console.log(result);
result = getValue([1, 2, 3, 4, 5, 6, 7], 8)
// console.log(result);

function getSpam(text, words) {
   // console.log(text);
   // console.log(words);
   let i = 1;
   for (let word of words) {
      i++
      // console.log(word, i);
      if(text.includes(word)) return 'SPAAAAAM!!!'
   }
   return text
}

const arr = ['fuiat', 'expdita']
let value = 'debitis exercitationem, fugiat sequi similique qui expedita beatae';

// console.log(getSpam(value, arr)); 


// ! ARROW FUNC & RETURN

const getTotal = (a, b) => a+b

// console.log(getTotal(2, 5));


// !ЗАДАЧИ
// -----------------------------
function checYear(year) {
   let condition = year % 4 === 0;
   if (condition) return `${year} высокосный`
   return `${year} He высокосный`

}
// console.log(checYear(2020));
// console.log(checYear(2021));
// ---------------------------------

function game() {
   let comp = Math.ceil(Math.random() * (10 - 1) + 1)
   // console.log(comp);
   let user = prompt('введите число от 1 до 10')
   // console.log(comp, user);

   if (comp == user) return 'You are win!'
   return 'You lose!'
}
// console.log(game());

// ---------------------------------------

function getMathResult() {
   let num1 = prompt('Enter the first number')
   let num2 = prompt('Enter the second number')
   let symbol = prompt('Enter the symbol')
   let total = 0
   // console.log(num1, num2, symbol);
   switch (symbol) {
      case '+':
         total = num1 + num2
         break
      
         case '-':
            total = num1 - num2
         break
      
         case '*':
            total = num1 * num2
         break
      
         case '/':
            total = num1 / num2
         break
      
      default:console.log('ERROR');
   }
   return total
}
// console.log('result', getMathResult());


function findLongestWord(string) {
   // Change code below this line
   const splitedArr = string.split(' ');
   console.log(splitedArr);
   let longest = splitedArr[0];
   console.log(longest);
   for (const text of splitedArr) {
      if (text.length > longest.length) {
         longest = text
      }
   }
   return longest;
 
 
   // Change code above this line
}
 
findLongestWord("The quick brown fox jumped over the lazy dog");

findLongestWord("Google do a roll")