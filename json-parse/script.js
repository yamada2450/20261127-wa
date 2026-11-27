const jsonString = '{"name" : "山田太郎", "age" : "20"}';

const user = JSON.parse(jsonString);

console.log(user);
console.log(user.name);
console.log(user.age);

const jsonString2 = '["りんご","みかん","ぶどう"]'
const fruits = JSON.parse(jsonString2);

console.log(fruits);
console.log(fruits[0]);