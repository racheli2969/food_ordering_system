const db = require('./DB');
async function getPreviousUserOrderdetails(orderId) {
    const result = await db.query(`SELECT amount, productName,finalPrice FROM takeabitedb.tblorderdetails join tblproduct on tblorderdetails.productId where tblorderdetails.orderId=${orderId}`)
    return result;
}
async function setOrderItems(orderD) {
    console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    const result = await db.query(`INSERT INTO tblorderdetails (orderId,productId,amount,finalPrice) VALUES('${orderD.orderId}',${orderD.productId},'${orderD.amount}','${orderD.finalPrice}')`);
    console.log(result);
    return result;
}
module.exports = { setOrderItems, getPreviousUserOrderdetails }