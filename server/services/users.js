const db = require('./DB');

async function getUser(email) {
    const result = await db.query(`SELECT * FROM takeabitedb.tblusers where email='${email}'`)
    return result[0];
}

async function setNewUser(user) {
    console.log("in post");
    const result = await db.query(`INSERT INTO tblusers (userName,email,phone,userType) VALUES('${user.name}','${user.email}','${user.phone}',${user.userType})`);
    return result;
}
module.exports = { getUser, setNewUser }