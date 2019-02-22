// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату 
// регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и 
// класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

let User = function(name) {
    this.name = name;
    this.dateOfReg = new Date();
};
User.prototype.getInfo = function() {
   console.log(this.name, this.dateOfReg);
};

let Admin = function(name, sup) {
    User.call(this, name);
    this._superAdmin = sup;
};

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;


let administrator = new Admin('Kate', true);
Admin.prototype.getInfo = function() {
    User.prototype.getInfo.call(this);
    console.log('SuperAdmin: ' + this._superAdmin);
}.bind(administrator);

console.log(administrator);

let Guest = function(name) {
    User.call(this, name);
    this.validDate = this.dateOfReg + 604800000;
};

Guest.prototype = Object.create(Guest.prototype);
Guest.prototype.constructor = Guest;

let guest = new Guest('Petya');
console.log(guest);

Guest.prototype.getInfo = function() {
    User.prototype.getInfo.call(this);
    console.log('Valid till: ' + new Date(this.validDate));
};

console.log(guest);

