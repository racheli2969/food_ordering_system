const db = require('./DB');

async function getPreviousUserOrders(userId) {
    const result = await db.query(`SELECT userName,dateorder,finalprice FROM tbluser join tblorders on tblusers.userId where tblusers.userId=${userId}`)
    return result;
}

async function getPreviousOrderAddresses(userId){
    const result =await db.query(`SELECT city,street,numOfHouse FROM takeabitedb.tblorders
    where userId=${userId}`)
    return result;
}

async function setNewOrder(order) {
    const result = await db.query(`INSERT INTO tblorders (userId, storeId,  finalPrice, city, street, numOfHouse, lastDigitsPay) VALUES((select userId from tblUsers where email="${order.email}"), (select storeId from tblStores where storeName="${order.storeName}"), ${order.finalPrice}, "${order.city}", "${order.street}",  ${order.numOfHouse}, "${order.lastDigitPay}")`)
    const res=await db.query(`select max(orderId) as orderId from tblOrders where userId=(select userId from tblUsers where email="${order.email}")`)//,orderid(select orderId,dateorder from tblorders where userId=(select userId from tblUsers where email="${order.email}")) `);
    console.log(res);
    return res[0];
}
module.exports = { setNewOrder, getPreviousUserOrders,getPreviousOrderAddresses }