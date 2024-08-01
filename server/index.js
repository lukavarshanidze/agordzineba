const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config');

const env = process.env.NODE_ENV || 'development';
const { username, password, database, host, dialect } = config[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const DataModel = sequelize.define('Data', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, DataModel };