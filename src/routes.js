const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController.js');
const ProductController = require('./controllers/ProductController');

const routes = express.Router();

//Rota para Lista de Usuarios
routes.get('/users', UserController.index)
//Rota para Gravar Usuarios
routes.post('/users', UserController.store);

//Rota para criar Um endereço para um Usuario
// code : 
// routes.post('/addresses', AddressController)
//Já que para criar um endereco precisamos de um usuario
//vamos usar assim
routes.post('/users/:user_id/addresses/', AddressController.store);
//Iria fica assim localhost:porta/users/2/addresses

//rota de lista de um usuario especifico
routes.get('/users/:user_id/addresses/', AddressController.index);


//rota de lista de produtos
//this routes is create in insonmia
routes.get('/products', ProductController.index);//get list all product
routes.get('/products/:id_product', ProductController.show);//get an especifed product 
routes.post('/products', ProductController.store);//insert into table product
routes.delete('/products/:id_product', ProductController.delete);//delete from table product
routes.put('/products/:id_product', ProductController.update);//update in the product

module.exports = routes;