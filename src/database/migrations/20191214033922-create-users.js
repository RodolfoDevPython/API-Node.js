'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    //up Serve para indicar oque essa magrations vai fazer
    //Add altering commands here.
    //Return a promise to correctly handle asynchronicity.

    //Example:
      //Nesse caso ele vai criar
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER ,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,         
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        }, 
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
    
  },

  down: (queryInterface, Sequelize) => {
    
    //down serve para quando for reveter alguma alteração
    //Add reverting commands here.
    //Return a promise to correctly handle asynchronicity.

    //Example:
      //Nesse caso ele apaga
      return queryInterface.dropTable('users');
    
  }
};
