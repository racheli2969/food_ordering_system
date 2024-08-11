const db = require('./DB');


async function storeImage(inputValues, tbl, id, callback) {
    try {
        console.log("maybe");
        if (tbl == 'tblproducts') {
            await db.query(`UPDATE tblproduct SET photoLink='${inputValues.image_name}' WHERE productId=${id};`)
        }

        else {
            console.log("else stores");
            await db.query(`UPDATE tblstores SET photoLink='${inputValues.image_name}' WHERE storeId=${id};`)
            console.log('alls well');
        }
            const msg = inputValues.image_name + " was uploaded successfully";
         return callback(msg)
    }
    catch (err) {
        console.log("oops");
        return err;
    }
}

async function displayImage(tbl, id) {
    const str = tbl == 'tblstores' ? 'storeId' : 'productId';
    const result = await db.query(`select photolink from ${tbl} where ${str}=id`)
    return result[0]
}

module.exports = { storeImage, displayImage }