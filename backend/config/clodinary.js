const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;

// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME, // api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET,
// });

// const storage = new CloudinaryStorage({
//     cloudinary,
//     params: {
//         folder: 'my-uploads',
//         allowedFormats: ['jpg', 'png'],
//     },
// });

// module.exports = { storage, cloudinary };
// })