const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.use(express.static('public'));

app.post('/upload', upload.fields([{ name: 'surfImage' }, { name: 'designImage' }]), (req, res) => {
    res.json({
        surfImage: req.files['surfImage'][0].filename,
        designImage: req.files['designImage'][0].filename
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});