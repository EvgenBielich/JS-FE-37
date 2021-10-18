function Constructor(prop1,prop2) {
   this.prop1 = prop1
   this.prop2 = prop2
}

const newObj = new Constructor()

const User = function (login, password) {
   this.login = login
   this.password = password

   this.showLogin = function () {
      console.log(this.login);
   }
}

User.prototype.showPassword = function () {
   console.log(this.password);
}
const user1 = new User('user', 'qweffd')
console.log(user1);

console.log(User.prototype);

const user2 = new User('user2', 'qwereqd')
console.log(user2);


// new function

function NewUser(name, age, login, password) {
   User.call(this, login, password)
   this.name = name
   this.age = age
}

// перезаписіваем прототайп новой функци и привязіваем в него прототайп из исходной функции

NewUser.prototype = Object.create(User.prototype)
NewUser.prototype.Constructor = NewUser
// добавляем новые методы в прототайп новой функции


// создаем экземпляр из новой функции
const newUser1 = new NewUser('igor', 17, 'new user1', 'dsfgsdf')
console.log(newUser1);