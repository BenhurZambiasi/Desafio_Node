import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';


import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProductController from './app/controllers/ProductController';

import authMiddleware from './app/middlewares/auth';




const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);


routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.get('/products/', ProductController.index)
routes.get('/products/:id', ProductController.index)
routes.delete('/products/', ProductController.delete)

routes.put('/users/', UserController.update);

routes.post('/files', upload.single('file'), FileController.store)



export default routes;