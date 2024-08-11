const db = require('./DB');

async function getProducts(storeName) {
    let result = await db.query(`SELECT productId,productName,price,description,photolink FROM takeabitedb.tblproduct
                                  where storeId=(SELECT storeId FROM takeabitedb.tblstores
                                  where storeName="${storeName.name}")`)
    return result;
}

async function getPByIdStore(lastStoreId) {
    let result = await db.query(`select*from tblProducts where storeId=${lastStoreId}`, (res) => result = res)
    return result;
}

async function deleteProduct(productId) {
    let result = await db.query(`DELETE FROM tblproduct WHERE productId=${productId}`)
    console.log(result);
    return result;
}

async function setProduct(product) {
    let result = await db.query(`UPDATE tblproduct SET productname='${product.name}',price=${product.price},photoLink='${product.photo}',description='${product.description}' WHERE productId=${product.productId}`)
    return result;
}

async function setNewProduct(product) {
    let result = await db.query(`insert  into tblproduct (storeId,productName,price, photolink,description) values ((select storeId from tblstores where storename='${product.storeId}') ,'${product.name}',${product.price},'${product.photo}','${product.description}' )`)
    return result;
}
module.exports = { getProducts, getPByIdStore, deleteProduct, setProduct, setNewProduct }