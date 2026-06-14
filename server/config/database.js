import pg from 'pg'
import './dotenv.js'

const config = process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL }
    : {}

export const pool = new pg.Pool(config)
