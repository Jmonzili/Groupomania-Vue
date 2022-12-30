const multer = require('multer');

/*
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    const { mimetype } = file;
    const extension = mimetype.split('/')[1];
    const name = file.originalname.split(' ').join('_')
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension);
  },
});

const upload = multer({ storage: storage, dest: 'uploads/' });
const imageUpload = upload.single('image');
*/

// Envoi de la photo charger par le client dans le serveur
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, callback) {
    //const name = file.originalname.split(' ').join('_')
    //const extension = MIME_TYPES[file.mimetype];
    callback(null, makeFileName(req, file));
  },
});

// Création du nom de l'image ajouté
function makeFileName(req, file) {
  const fileName = `${Date.now()}-${file.originalname}`;
  file.filename = fileName;
  return fileName;
}

const upload = multer({ storage });
const imageUpload = upload.single('image');

module.exports = { imageUpload };
