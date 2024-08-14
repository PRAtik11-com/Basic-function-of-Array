let arr1 = [
    {
       name : "pratik",
       age : 20 
    },
    {
       name : "johe",
       age : 25 
    },
    {
        name : "peter",
        age : 22
    },
    {
        name : "cate",
        age : 28
    }
]

function keys() {
    arr1.sort((a, b) => a.age - b.age);
    console.log(arr1);
}
console.log(keys());


