'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*Add a new Column*/
    return queryInterface.addColumn(
      'users', //table name
      'age', //column name
      {
        type: Sequelize.INTEGER,
      },
    );
  },
  down: (queryInterface, Sequelize) => {
    /*THIS´S ROLLBACK DROP COLUMN*/
    return queryInterface.removeColumn(
      'users',
      'age',  
    );
  }
}
