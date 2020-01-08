const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        //fazendo um join 
        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });

        if (!user) {
            return res.status(400).json( { error : 'No address found for this use' } )
        }

        return res.json(user);
    },
    async store(req, res) {
       const { user_id } = req.params;
       const { zipcode, street, number } = req.body;
       
       //Vai buscar usuario por id
       const user = await User.findByPk(user_id);

       if (!user) {
           return res.status(400).json( { error: 'Use not found' } );
       }

        const address = await Address.create({
            zipcode,
            street,
            number,
            user_id,
       });
    }
}