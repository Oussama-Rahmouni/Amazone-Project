// queries.js
import pool from './db.js';

export const query = async (sql, values) => {
  const [results] = await pool.execute(sql, values);
  return results;
};
