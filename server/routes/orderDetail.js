
const express = require('express')
const router = express.Router();
const orders = require('../services/orderDetail')

router.get('/:storeId', async function (req, res) {
    try {
        let result = await products.getPreviousUserOrderdetails(req.params);
        res.send(result);
    }
    catch (err) {
        console.error('error while getting previous orders', err.message);
    }
});

router.post('/', async function (req, res) {
    try {
        console.log("qqqqqq");
        const result = await orders.setOrderItems(req.body);
        console.log(result+"jhjh");
        res.json(result);
    }
    catch {
        console.error('error while posting order items', err.message);
    }
});
module.exports = router;