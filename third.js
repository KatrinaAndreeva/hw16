// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен
// быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - 
// наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.


function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function() {
    return {
        name: this.name,
        price: this.price
    };
};

let OfficeFurniture = new Furniture('bookshelf', 3500);
OfficeFurniture.accountingNumber = '0008765';
OfficeFurniture.getInfo = function() {
    let info = Furniture.prototype.getInfo.call(this);
    info.accountingNumber = this.accountingNumber;
    return info;
};
console.log(OfficeFurniture.getInfo());

let HomeFurniture = new Furniture('sofa', 9000);
HomeFurniture.size = 'kingsize';
HomeFurniture.getInfo = function() {
    let info = Furniture.prototype.getInfo.call(this);
    info.size = this.size;
    return info;
};
console.log(HomeFurniture.getInfo());
