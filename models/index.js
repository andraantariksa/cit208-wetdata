const Sequelize = require('sequelize');
const config = require('../config.js');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const db = {};
const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASS,
    {
      host: config.DB_HOST,
      dialect: 'postgres',
    });

fs
    .readdirSync(__dirname)
    .filter((file) => {
      return (file.indexOf('.') !== 0) &&
        (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file) => {
      const model = sequelize['import'](path.join(__dirname, file));
      db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
