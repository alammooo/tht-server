import { existsSync, mkdirSync } from 'fs';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!existsSync('assets')) mkdirSync('assets');
    cb(null, 'assets');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    const [, filename, ext] = file.originalname?.match(/(^[^.]+)(.*)/) || [];
    cb(null, filename + '-' + uniqueSuffix + ext);
  },
});

const multerUpload = multer({ storage: storage });

export default multerUpload;
