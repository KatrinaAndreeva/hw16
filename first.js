// Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

function Planet(name) {
    this.name = name;
    this.getName = function() {
        return 'Planet name is ' + this.name;
    };
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);
    this.satelliteName = satelliteName;
    this.getName = function() {
        return new Planet(this.name).getName() + '. ' + 'The satellite is ' + this.satelliteName;
    };
}

let Earth = new PlanetWithSatellite('Earth', 'Moon');
console.log(Earth);
console.log(Earth.getName());
