const multer = require('multer');
const imageMiddleware = require('../middleware/image');
const imageModel = require('../services/image');


async function imageUploadForm(req, res) {
    try {
        const result = await products.displayImage(req.body.table, req.body.id);
        res.send(result);
    }
    catch (err) {
        console.error('error while getting image', err.message);
    }
    console.log("hello get");
    res.send('upload-form');
}

async function storeImage(req, res) {
    console.log("hello post");
    const upload = multer({
        storage: imageMiddleware.image.storage(),
        allowedImage: imageMiddleware.image.allowedImage
    }).single('image');

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log(err);
            res.send(err);
        } else if (err) {
            console.log(err);
            res.send(err);
        } else {
            // store image in database
            const imageName = req.params.file.name;
            console.log(req.params.file.name);
            console.log(req.params.file);
            console.log(req.body);
            const inputValues = {
                image_name: imageName
            }
            imageModel.storeImage(inputValues, req.body.table, req.body.id, function (data) {
                console.log(data);
                res.send(data)
            })
        }
    })
}

module.exports = { imageUploadForm, storeImage }




