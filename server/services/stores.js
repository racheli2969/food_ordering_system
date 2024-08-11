const db = require('./DB');

async function getStores() {
    const result = await db.query('SELECT * FROM takeabitedb.tblstores where subtime(current_time(),openinghour)>0&&subtime( current_time(),closingTime)<0;', (res) => result = res);
    return result;
}
async function getByChoice(data) {
    const result = await db.query(`SELECT * FROM takeabitedb.tblstores where category="${data}"and subtime(current_time(),openinghour)>0 and subtime( current_time(),closingTime)<0`);
    return result;
}
async function getDeliveryByName(data) {
    const result = await db.query(`SELECT delivery FROM takeabitedb.tblstores where storename="${data}"`, (res) => result = res);
    return result[0];
}
async function getById(data) {
    const result = await db.query(`SELECT * FROM takeabitedb.tblstores where storeId=${data}`, (res) => result = res);
    return result;
}

async function getNameById(data) {
    const result = await db.query(`SELECT storeName FROM takeabitedb.tblstores where storeId=${data}`, (res) => result = res);
    console.log(result);
    return result[0];
}

module.exports = { getStores, getByChoice, getDeliveryByName, getById, getNameById }