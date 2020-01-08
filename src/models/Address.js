const { Model , DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
    //CRIAÇÃO DE UMA ASSOCIAÇÃO PARA CHAVES ESTRANGEIRAS 
    static associate(models) {
        //belongsTo siginifica q essa associação pertecem de 1 pra N
        //significa q pertence a um unico usuario
        this.belongsTo( models.User , { foreignKey: 'user_id', as: 'owner'})
    }
}

module.exports = Address;