import Sequelize from 'sequelize';
import mongoose from 'mongoose';

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
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/desafio',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      }
    )
  }
}

export default new Database();