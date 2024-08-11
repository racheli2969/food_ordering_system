const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();
const port = 8080;
const cors = require('cors')
var bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload());

// app.post('/upload', function (req, res) {
//     let sampleFile;
//     let uploadPath;

//     if (!req.files || Object.keys(req.files).length === 0) {
//         return res.status(400).send('No files were uploaded.');
//     }
//     sampleFile = req.files.sampleFile;
//     uploadPath = __dirname + '/public/data/uploads/images/' + sampleFile.name;

//     // Use the mv() method to place the file somewhere on your server
//     sampleFile.mv(uploadPath, function (err) {
//         if (err)
//             return res.status(500).send(err);
//         console.log(uploadPath);
//         res.json(uploadPath);
//     })
// });




// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/data/uploads/images')
//     },
//     filename: (req, file, cb) => {
//         callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     },
// })


// const upload = multer({
//     storage: storage,
//     dest: './public/data/uploads/images'
//     //  fileFilter:(req,file,cb)=>{
//     //     const fileFilter=/jpeg|jpg|png|gif/ //lets only these file formats

//     //  }),

// }).single('image')

// app.post('/stats', upload.single('uploaded_file'), function (req, res) {
//     console.log(req.file, req.body)
// });

// app.post('/post', upload.single('image'), (req, res) => {
//     if (!req.file) {
//         console.log("No file upload");
//     } else {
//         console.log(req.file.filename)
//         const imgsrc = 'http://localhost:8080//public/data/uploads/images/' + req.file.filename
//         const insertData = "INSERT INTO users_file(file_src)VALUES(?)"
//         db.query(insertData, [imgsrc], (err, result) => {
//             if (err) throw err
//             console.log("file uploaded")
//         })
//     }
// });

// app.get('/image', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/image', upload, (req, res) => {
//     if (!req.file) {
//         console.log("No file upload");
//     } else {
//         console.log(req.file.filename)
//        const imgsrc = 'http://localhost:8080/public/data/uploads/images/' + req.file.filename
//         const insertData = "INSERT INTO users_file(file_src)VALUES(?)"
//         db.query(insertData, [imgsrc], (err, result) => {
//             if (err) throw err
//             console.log("file uploaded")
//         })
//     }
// });

app.use(cors())

// app.post('/image', upload.single('file'), function (req, res) {
//   res.json({})
// })
const stores = require('./routes/stores')
const products = require('./routes/products');
const orders = require('./routes/orders');
const users = require('./routes/users');
const orderDetail=require('./routes/orderDetail');
const image=require('./routes/image')

app.use('/api/stores', stores);
app.use('/api/products', products);
app.use('/api/orders', orders);
app.use('/api/users', users);
app.use('/api/orderDetail',orderDetail);
app.use('/api/image',image);



app.listen(port, () => {
    console.log(`Take A Bite app listening at http://localhost:${port}`);
});

