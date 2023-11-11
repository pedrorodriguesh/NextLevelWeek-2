// ### Coleção de rotas ### 

import ConnectionsController from './controllers/connectionsController';
import ClassesController from './controllers/classesController';

import express from 'express';

const connectionsController = new ConnectionsController()
const classesController = new ClassesController()
const routes = express.Router()

// Classes
routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index)

// Connections
routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes