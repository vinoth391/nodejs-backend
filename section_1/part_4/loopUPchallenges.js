// 1 selecting teas 

let teas = ["brown tea", "black tea","chai","coffee"]
let selectedtea =[]
for (let i = 0; i < teas.length; i++) {
    selectedtea.push(teas[i])
    if (teas[i] === "chai") {
        break;
    }
}
 // console.log(selectedtea);

// 2 skip country

let cities = ["london","new york","paris","berlin"]
let visitedcities = []
for (let j = 0; j < cities.length; j++) {
    if (cities[j] === "paris" || cities[j] === "Paris") {
        continue
    }
    visitedcities.push(cities[j])
}
// console.log(visitedcities);

// 3 breaking
let numbers = [1,2,3,4,5]
let smallnumbers = []
for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallnumbers.push(num)
}
// console.log(smallnumbers);

// 4 skipping
let tea =["brown tea", "black tea","chai","coffee"]
let preferedtea = []
for (const teatypes of tea) {
    if (teatypes === "chai" || teatypes === "Chai") {
        continue;
    }
    preferedtea.push(teatypes)
}
// console.log(preferedtea);

//  5 citiesPopulation 

let citiesPopulation = {
    London: 890000,
    "new york": 840000, 
    berlin : 350000,
    paris : 220000
}

let citiesnewpopulation = {}

for (const city in citiesPopulation) {
    if (city == "berlin") {
       break;
    }
    citiesnewpopulation[city] = citiesPopulation[city]
}
// console.log(citiesnewpopulation);

// 6 

let worldcities = {
    London: 890000,
    "new york": 840000, 
    berlin : 350000,
    paris : 220000
}
let largecities = {}

for (const city in worldcities) {
    if (worldcities[city] < 300000) {
       continue
    }
    largecities[city] = worldcities[city]
}

// console.log(largecities);

// 7 foreach loop 

let teacollection =["brown tea", "black tea","chai","coffee"]
let availabletea = []

teacollection.forEach(function(tea) {
    if (tea === "chai") {
        return;
    }
    availabletea.push(tea)
});

// console.log(availabletea);

// 8 

let myworldcities = ["london","new york","paris","berlin"]
let travelledcities = []
myworldcities.forEach((city) => {
    if (city === "paris"){
        return
    }
        travelledcities.push(city)
});
// console.log(travelledcities);

// 9

let mynumbers = [2,5,7,9]
let newnum = []

for (let i  = 0; i  < mynumbers.length; i ++) {
    if (mynumbers[i] === 7) {
        continue
    }
    newnum.push(mynumbers[i] * 2) 
}
// console.log(newnum);

//  10 length

let myteas = ["brown tea", "black tea","chai","coffee"]
let shortteas = []
for (const tea of myteas) {
    if (tea.length > 8) {
        break
    }
    shortteas.push(tea)
}
console.log(shortteas);
