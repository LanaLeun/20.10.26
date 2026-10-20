//атака космических пиратов
let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты']
cargoHold.splice(1,2)
console.log(cargoHold)
//контробанда
cargoHold.splice(1,0,'Золото','Детектор лжи')
console.log(cargoHold)