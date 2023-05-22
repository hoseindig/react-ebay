const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({
    dest: path.join(__dirname, 'uploads')
});

app.post('/upload', upload.single('image'), (req, res) => {
    // در اینجا فایل آپلود شده در `req.file` در دسترس است
    // شما می‌توانید از `req.file.path` برای دسترسی به مسیر فایل استفاده کنید

    // اضافه کردن کد خود برای ذخیره اطلاعات مربوط به آگهی و مسیر عکس در دیتابیس

    res.status(200).send('آپلود عکس با موفقیت انجام شد.');
});

app.listen(3000, () => {
    console.log('سرور در حال اجراست...');
});