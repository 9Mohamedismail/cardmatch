import { pool } from "../config/database.js";

const getCards = async (req, res) => {
  try {
    const results = await pool.query(`
      SELECT
        id,
        slug,
        name,
        issuer,
        mincreditlevel AS "minCreditLevel",
        annualfee AS "annualFee",
        rewardtype AS "rewardType",
        bestcategories AS "bestCategories",
        welcomebonus AS "welcomeBonus",
        pros,
        cons,
        description,
        image
      FROM cards
      ORDER BY id ASC
    `);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getCards,
};
