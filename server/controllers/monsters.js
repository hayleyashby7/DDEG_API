import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
    get: async (req, res, next) => {
        try {
            if (req.query.challengeRating) {
                const monsters = await prisma.monsters.findMany({
                    where: {
                        challenge_rating: parseFloat(req.query.challengeRating),
                    },
                    include: {
                        types: { select: { type: true } },
                        sizes: { select: { size: true } },
                        monsters_senses: {
                            select: { senses: { select: { sense: true } }, value: true },
                        },
                        monster_stats: {
                            select: {
                                stats: { select: { stat: true } },
                                score: true,
                                modifier: true,
                                saving_throw: true,
                            },
                        },
                    },
                });
                return res.status(200).json(monsters);
            } else {
                // Return all monsters
                const monsters = await prisma.monsters.findMany();
                return res.status(200).json(monsters);
            }
        } catch (error) {
            next(error);
        }
    },
};
