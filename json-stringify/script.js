const {Stringify} = require("react");

const user = {
    name: "山田太郎",
    age:20,
    active:true
};

console.log(user,typeof user);
const result = JSON.stringify(user);
console.log(result, typeof result);

const fruits = ["りんご","ぶどう","みかん"];

console.log(fruits,typeof fruits);
const rosult2 = JSON.stringify(fruits);
console.log(result2, typeof result2);
