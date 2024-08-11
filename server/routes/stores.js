const express = require('express')
const router = express.Router();
const stores = require('../services/stores')

router.get('/', async function (req, res) {
    try {
        const result = await stores.getStores();
        res.json(result);
    }
    catch {
        console.error('error while getting products', err.message);
    }
});

router.get('/:choice', async function (req, res) {
    try {
        debugger;
        const result = await stores.getByChoice(req.params.choice);
        res.json(result)
    }
    catch {
        console.error('error while getting products', err.message);
    }
});

router.get('/delivery/:name', async function (req, res) {
    try {
        const result = await stores.getDeliveryByName(req.params.name);
        res.json(result);
    }
    catch {
        console.error('error while getting products', err.message);
    }
});

router.get('/:id', async function (req, res) {
    try {
        const result = await stores.getById(req.params.id);
        console.log(result);
        res.json(result);
    }
    catch {
        console.error('error while getting products', err.message);
    }
});

router.get('/manager/name/:id', async function (req, res) {
    try {
        const result = await stores.getNameById(req.params.id);
        console.log(result);
        res.json(result);
    }
    catch {
        console.error('error while getting products', err.message);
    }
});
module.exports = router;