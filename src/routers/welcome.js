import express from 'express';
import userController from '../controllers/welcome.js';
import { validationError } from '../validations/userSign.js';

const router = express.Router();



router.post('/signup', validationError,userController.signup);
router.post('/login', userController.login);
router.get('/users', userController.getAllUsers);

export default router;

