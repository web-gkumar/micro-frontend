const express = require('express');
const user = express();
const routers = express.Router();
const { userSignUpValidation, userSignInValidation, verifyToken } = require('../utlity/userValidations');
const { registerUser, loginUser, getUsers } = require('../controllers/auth_controller');
const { createModule, getModules, getCurrentModule, updatModule, deleteModule } = require('../controllers/module_controller');
const { createForm, getForms, getSingleForm, getFormbyId, updatForm, deleteForm} = require('../controllers/forms_controller');
const { saveDyanimicFormsData, getByCollections, updateCollections, deleteGrid} = require('../controllers/collections_controller');
const { fileController } = require('../controllers/file_controller');
const { create, getAll } = require('../controllers/crud_controller');



//Auth Api
routers.post('/signup', userSignUpValidation, registerUser);
routers.post('/signin', userSignInValidation, loginUser);
routers.get('/users', verifyToken, getUsers);
//Modules Api
routers.get('/modules', verifyToken, getModules);
routers.get('/modules/:moduleName', verifyToken, getCurrentModule);
routers.post('/createModule', verifyToken, createModule);
routers.put('/modules/:id', verifyToken, updatModule);
routers.delete('/modules/:id', verifyToken, deleteModule);
//Forms Api
routers.post('/createForm', verifyToken, createForm);
routers.get('/forms', verifyToken, getForms);
routers.get('/forms/:id', verifyToken, getFormbyId);
//routers.get('/forms/:formName', verifyToken, getSingleForm);
routers.put('/forms/:id', verifyToken, updatForm);
routers.delete('/forms/:id', verifyToken, deleteForm);
//DynamicSaveForms Api
routers.post('/createFormData', verifyToken, saveDyanimicFormsData);
routers.post('/gridData', verifyToken, getByCollections);
routers.put('/gridData/:id', verifyToken, updateCollections);
routers.delete('/gridData/:id', verifyToken, deleteGrid);

//Users API
routers.post('/createUser', verifyToken, create);
routers.post('/getUser', verifyToken, getAll);



// const multer = require('multer');
// const path = require('path');
// user.use(express.static(path.resolve(__dirname, 'public')));
// const storageFile = multer.diskStorage({
//     destination:(req,file,cb) => {
//         createGunzip(null, './public/uploaded')
//     },
//     filename:(req,file,cb) => {
//         cb(null,file.originalname);
//     }
// })

// const upload = multer({storage: storageFile})


// routers.post('/importUser', verifyToken, upload.single('file'), fileController)


module.exports = routers;