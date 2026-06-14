import { pool } from "./database.js";
import "./dotenv.js";
import cardData from "../data/cards.js";

const createCardsTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS cards;

        CREATE TABLE IF NOT EXISTS cards (
            id SERIAL PRIMARY KEY,
            slug VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            issuer VARCHAR(255) NOT NULL,
            minCreditLevel VARCHAR(255) NOT NULL,
            annualFee VARCHAR(10) NOT NULL,
            rewardType VARCHAR(255) NOT NULL,
            bestCategories TEXT[] NOT NULL,
            welcomeBonus TEXT NOT NULL,
            pros TEXT[] NOT NULL,
            cons TEXT[] NOT NULL,
            description TEXT NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 cards table created successfully");
  } catch (err) {
    console.error("⚠️ error creating cards table", err);
  }
};

const seedCardsTable = async () => {
  await createCardsTable();

  cardData.forEach((card) => {
    const insertQuery = {
      text: "INSERT INTO cards (id, slug, name, issuer, minCreditLevel, annualFee, rewardType, bestCategories, welcomeBonus, pros, cons, description, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
    };

    const values = [
      card.id,
      card.slug,
      card.name,
      card.issuer,
      card.minCreditLevel,
      card.annualFee,
      card.rewardType,
      card.bestCategories,
      card.welcomeBonus,
      card.pros,
      card.cons,
      card.description,
      card.image,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting card", err);
        return;
      }

      console.log(`✅ ${card.name} added successfully`);
    });
  });
};

seedCardsTable();
