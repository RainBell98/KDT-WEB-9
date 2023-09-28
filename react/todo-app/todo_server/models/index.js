'use strict';

const Sequelize = require('sequelize');
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Todo = require('./todo')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
