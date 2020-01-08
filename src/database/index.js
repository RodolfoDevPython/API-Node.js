const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Product = require('../models/Products');
const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);

//Iniciacao dos Models 
User.init(connection);
Product.init(connection);
Address.init(connection);
//TODA VEZ que damos um init ele grava o models na connection
//Com isso conseguimos pegar o models para fazer a associação
Address.associate(connection.models);
User.associate(connection.models);
module.exports = connection;