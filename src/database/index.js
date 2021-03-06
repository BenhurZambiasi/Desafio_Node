import Sequelize from 'sequelize';


import User from '../app/models/User';
import File from '../app/models/File';
import databaseConfig from '../config/database';
import Product from '../app/models/Product';

const models = [User, File, Product];

class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }

}

export default new Database();