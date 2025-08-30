function maketea(typeoftea){
    return `making ${typeoftea} `
    console.log(test);
}
let teaorder = maketea("lemon tea")
console.log(teaorder);

// 

function orderTea(teatypes){
    function confirmorder() {
        return `order confirmed for chai`
    }
    return confirmorder()
}

let orderconfirmation = orderTea("chai")
console.log(orderconfirmation);

function makeTea(typeoftea) {
    return `maketea: $ {typeof tea}`
}
function processTeaorder(makeTea) {
    return teafunction("early grey")
}

let order = processTeaorder(makeTea)
console.log(order);


function createTeamaker(name) {
    return function(teatypes){ 
        return `making ${teatypes}`
    }
}

let Teamaker = createTeamaker(vino )
let result = Teamaker("green tea")
console.log(result);
