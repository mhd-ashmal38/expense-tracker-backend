const multer = require('multer');

// configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // specify the destination folder for uploaded files
    },
});

// file filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // accept the file
    } else {
        cb(new Error('Only .jpeg, .jpg and .png formats are allowed'), false); // reject the file
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;