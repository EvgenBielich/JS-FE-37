// !TASK 1

const product = {
   name: 'prod',
   price: 0,
   quantity: 0,

   //! методы что показывают их текущее значение
   shownName() {
      console.log(this.name);
   },
   showPrice() {
      console.log(this.price);
   },
   showQuantity() {
      console.log(this.quantity);
   },

   //! методы что изменяют их текущее значение
   changeName(value) {
      return this.name = value
   },
   changePrice(value) {
      return this.price = value
   },
   changeQuantity(value) {
      return this.quantity = value
   },
   updateQuantity(value, isCost) {
      // 1 иф-елсе
      // if (isCost) {
      //    return this.quantity -= value
      // } else {
      //    return(this.quantity += value)
      // }

      // 2
      // if (isCost) return (this.quantity -= value)
      // return (this.quantity += value)

      // 3 тернарный оператор
      isCost ? (this.quantity -= value) : (this.quantity += value)

   }
}

// console.log(product);
// product.shownName()
// product.showPrice()
// product.showQuantity()

// product.changeName('Peach')
// product.changePrice(55)
// product.changeQuantity(3)
// console.log(product);
// product.updateQuantity(1, true)
// product.showQuantity()
// product.updateQuantity(0.5, false)
// product.showQuantity()



// !TASK 2
// Добавь к обьекту product  метод, который высчитывает стоимость общего количетва текущего товара

product.getTotalPrice = function () {
   return this.price * this.quantity

}
// console.log(product.getTotalPrice());

// !TASK 3
// Запиши в переменную TotalPrice общую стоимость всех товаров в масcиве products

const products = [
   { name: 'Grape', price: 80, quantity: 2 },
   { name: 'Banana', price: 30, quantity: 5 },
   { name: 'Kiwi', price: 100, quantity: 1.5 },
]

function getTotalPrice(arr) {
   let totalPrice = 0

   for (let i = 0; i < arr.length; i++) {
      console.log(products[i])
      totalPrice += products[i].price * products[i].quantity
   }
   // console.log('totalPrice:', totalPrice);
}
// getTotalPrice(products)


// !TASK 4

// Создать функцию, которая принимает массив продуктов, название товара и его количество и віводит его стоимость, если товара достаточно или сообщает о том, что товара нет на складе в указанном количестве
// написать функцию тремя способами

const allProducts = [
   { name: 'bread', price: 20, quantity: 100 },
   { name: 'milk 2,5%', price: 30, quantity: 24 },
   { name: 'cheese', price: 300, quantity: 10 },
   { name: 'chorizo', price: 560, quantity: 4 },
   { name: 'lemon', price: 60, quantity: 9 },
   { name: 'lavazza', price: 250, quantity: 24 },
]

// console.log(allProducts);

function getResponse(arr, prod, count) {
   // console.log(arr);
   for (let product of arr) {
      // console.log(product.name);
      // проверяем есть ли желаемый товар в массиве продуктов
      //! 1 ----------------------------------------------------------
      // if (product.name === prod) {
      //    console.log(`${prod} есть на складе`);
      //    if (product.quantity >= count) {
      //       console.log(`${prod} могу купить`);
      //       let cost = product.price * count
      //       console.log(`${prod} можете купить за ${cost} монет`);
      //    } else {
      //       console.log(`${prod} нет в достаточном количестве`);
      //    }
      // } else {
      //    console.log(`${prod} нет такого товара на складе`);
      // }

      //! 2--------------------------------------------------------------
      const { name, quantity, price } = product
      if (name === prod) {
         // console.log(`${prod} есть на складе`);
         return quantity >= count
            ? console.log(`${prod} могу купить за ${product.price * count} монет`)
            : console.log(`${prod} нет в достаточном количестве`);
      }
   }
   console.log(`${prod} нет такого товара на складе`);
}

getResponse(allProducts, 'lavazza', 24)

