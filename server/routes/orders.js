const express = require('express')
const router = express.Router();
const orders = require('../services/orders')

router.get('/:id', async function (req, res) {
    try {
        const result = await products.getPreviousUserOrders(req.params);
        res.send(result);
    }
    catch (err) {
        console.error('error while getting previous orders', err.message);
    }
});

router.get('/address/:id', async function (req, res) {
    try {
        let result = await products.getPreviousOrderAddresses(req.params);
        res.send(result);
    }
    catch (err) {
        console.error('error while getting previous orders', err.message);
    }
});

router.post('/', async function (req, res) {
    try {
        const result = await orders.setNewOrder(req.body);
        console.log(result);
        res.json(result);
    }
    catch (err){
        console.error('error while posting items', err.message);
    }
});
module.exports = router;