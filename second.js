// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, 
// всегоКвартир: 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 
// 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Building(name, floor) {
    this.name = name;
    this.floor = floor;
    this.getNumberOfFloors = function() {
        return this.floor;
    };
    this.setNumberOfFloors = function() {
        return this.floor = countFloor;
    };
}

let building = new Building('Villa', 5);
console.log(building);


function House(name, floor, flats) {
    Building.call(this, name, floor);
    this.flatsOnFloor = flats;
    this.flatsCount = function() {
        return {
            floors: this.floor,
            totalFlats: this.floor * this.flatsOnFloor
        };
    };
}

let house = new House('apachi', 8, 10);
console.log(house);
console.log(house.flatsCount());

function Mall(name, floor, shops) {
    Building.call(this, name, floor);
    this.shopsOnFloor = shops;
    this.shopsCount = function() {
        return {
            floors: this.floor,
            totalShops: this.floor * this.shopsOnFloor
        };
    };
}
let skyMall = new Mall("Sky", 3, 20);
console.log(skyMall);
console.log(skyMall.shopsCount());
