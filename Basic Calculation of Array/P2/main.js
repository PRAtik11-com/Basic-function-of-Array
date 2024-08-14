let arr1 = [1000,2000,3000,4000,5000,6000]
const int = 0
let sum = arr1.reduce(function (acc , cur) {
    return  acc + cur / arr1.length
})
console.log(sum); 