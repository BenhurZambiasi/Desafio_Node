import express from 'express';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import openApiDocumentation from '../swagger.json';

import './database';
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }


  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/swagger', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
    this.server.use(routes);
  }
}

export default new App().server;

