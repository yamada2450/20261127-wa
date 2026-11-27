const jsonString = '[
    {"name": "ノートPC","price":120000},
    {"name": "マウス","price":3000},
    {"name": "キーボード","price":8000},
 ]'

console.log(typeof jsonString);

const products = JSON.parse(jsonString);

console.log(typeof products)
console.log(Array.isArray(products));

const productNames = products.map((product) => {
    return product.name
});

console.log(productNames);


