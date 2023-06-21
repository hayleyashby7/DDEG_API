import Monster from '../models/Monster';
import Size from '../models/Size';
import Type from '../models/Type';

export default {
    get: async (req, res, next) => {
        try {
            // Find by Challenge Rating
            if (req.query.challengeRating) {
                const monsters = await Monster.findAll({
                    where: {
                        challenge_rating: req.query.challengeRating,
                    },
                });
                return res.status(200).json(monsters);
            } else {
                // Return all monsters
                const monsters = await Monster.findAll();
                return res.status(200).json(monsters);
            }
        } catch (error) {
            next(error);
        }
    },
};
