// @@desc  Get all monsters
// @@route GET /api/monsters
// @@access Public

const getMonsters = async (req, res) => {
    res.status(200).json({
        success: true,
    });
};

export default getMonsters;
