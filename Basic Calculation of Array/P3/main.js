let arr1 = [10,20,30,40,50,60,70]
let arr2 = [50,60,70,80,90,100]

function check(arr1, arr2){
    return arr1.filter(e => arr2.includes(e))
}

console.log(check(arr1,arr2));