const express = require('express')
const router = express.Router();
const users = require('../services/users')

// router.get('/', async function (req, res) {
//     try {
//         let result = await users.navigateUser(req.params);
//         console.log(result)
//         res.json(result);
//     }
//     catch {
//         console.error('error while getting user', err.message);
//     }
// });

router.get('/:email', async function (req, res) {
    try {
        console.log("in route");
        const result = await users.getUser(req.params.email);
        console.log("route");
        res.json(result);
    }
    catch(err) {
        console.error('error while getting products', err.message);
    }
});

router.post('/', async function (req, res) {
    try {
        const data = await users.setNewUser(req.body);
        res.json(data);
    }
    catch (err) {
        console.error('error while setting artists', err.message);
    }
});
module.exports = router;