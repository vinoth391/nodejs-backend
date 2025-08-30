 // 1 challenge - first tea
 let teaFlavours = ["green tea", "black tea","oolang tea"]
 const first_tea = teaFlavours[0]

 // 2 challenge - fav cities
 let cities = ["London","new york","tokyo","kenya"]
 const fav_cities = cities[2]

// 3 challenge - change name 

let typesoftea = ["Herbal tea ","Black tea","Masala tea"]
typesoftea[1] = "chai"

// 4 challenge - add city using push method

let citiesvisited = ["mumbai","sedney"]
citiesvisited.push("Berlin")

// 5 challenge - edit order

let teaorder = ["chai", "macha","flavored chai", "ice tea"]
const lastorder = teaorder.pop();

// 6 challenge - make softcopy

let populartea = ["black tea", "herbal tea", "matcha"]
let populartea_copy = populartea

// 7 challenge - make hardcopy

let topcities = ["Berlin","singapore","new york"]
//let hardcopycities = [...topcities]
let hardcopycities = topcities.slice()
topcities.pop()

// 8 challenge - merge cities

let europianscities = ["paris","rome,"]
let asiancities = ["singapore","tokyo"]
let worldcities = europianscities.concat(asiancities)

// 9 challenge - find length of array and store in a variable 

let teaMenu = ["malasa chai","oolang tea","green tea","early tea"]
let total = teaMenu.length


// 10 challenge - check if condition

let citiesBucketList = ["tyoto","london","singapore","cape town"]
let islondonsaved = citiesBucketList.includes("london")



 