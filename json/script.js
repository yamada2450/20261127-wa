const profile = {
    "name": "山田太郎",
    "age": 20,
    "high": 170.5
};

console.log(typeof profile);

console.log(profile.name, typeof profile.name);
console.log(profile.age, typeof profile.age);
console.log(profile.high, typeof profile.high);


const fruits = [
    "りんご",
    "みかん",
    "ぶどう",
    "バナナ"
];

console.log (fruits,typeof fruits);

console.log(fruits[0], typeof fruits[0]);

const dataTypes = {
    "string": "こんにちは",
    "number": 100,
    "boolean": true,
    "null": null,
    "obuject":{
        "name": "山田太郎",
        "age": 20,
    } ,
    "array": [10,20,30]
};

console.log(dataTypes);{

Object.entries(dataTypes).forEach([key,value]) => {
    console.log(key,value,typeof value) };
};