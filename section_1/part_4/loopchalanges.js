let sum = 0
let i = 0

while (i <= 5) {
    sum +=1
    i++
} 

// countdown 5 to 1 

let countdown = []
let j = 5
while (j > 0) {
    countdown.push(j)
    j--
}

// tea collection from user

let teacollection = []
let tea 
/*
 do {
    tea = prompt('Enter the tea menu  if you want to stop type - "stop" ')
    if (tea !== "stop") {
        teacollection.push(tea)
    }
 } while (tea !== "stop");
*/

// stors the sum 

let total = 0 
let k = 1
do {
    total += k
    k++
} while (k <= 3);

// multiplication numbers

let multiplicationnumbers = []
let numbers = [2, 4, 6]

for ( let l = 0; l < numbers.length; l++) { 
  //  takenum = numbers[l] * 2
  //multiplicationnumbers.push(takenum)
    multiplicationnumbers.push(numbers[l] * 2)
    
}
// console.log(multiplicationnumbers);


// cities 

let cities = ["london","tokyo","new york","singapore"]
let mycities = []

for (let m  = 0; m < cities.length; m ++) {
  const element = cities[m ];
  mycities.push(element)
    }

console.log(mycities);
