import Monster from '../models/Monster.js';

export default {
    getAll: async (req, res, next) => {
        try {
            const monsters = await Monster.findAll();
            return res.status(200).json(monsters);
        } catch (error) {
            next(error);
        }
    },
};
