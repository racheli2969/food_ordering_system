const express = require('express');
const router = express.Router();
const products = require('../services/products');
// const imageModel = require('../services/image');
// const imageController= require('../controllers/image');

router.get('/:name', async function (req, res) {
    try {
        let result = await products.getProducts(req.params);
        res.send(result);
    }
    catch (err) {
        console.error('error while getting products', err.message);
    }
});

router.delete('/:id', async function (req, res) {
    try {
        const data = await products.deleteProduct(req.params.id);
        res.json(data);
    } catch (err) {
        console.error('error while deleting product', err.message);
    }
});

router.put('/', async function (req, res) {
    try {
        let data = await products.setProduct(req.body,);
        res.json(data);
    } catch (err) {
        console.error('error while updating product', err.message);
    }
});

router.post('/', async function (req, res) {
    try {
        let data = await products.setNewProduct(req.body);
        res.json(data);
    } catch (err) {
        console.error('error while updating product', err.message);
    }
});

module.exports = router;

