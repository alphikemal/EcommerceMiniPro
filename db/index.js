import mysql from "mysql2";
import util from "util";

const db = mysql.createConnection({
  user: "root",
  password: "",
  port: 3306,
  database: "minipro",
  multipleStatements: "false",
});

export const asyncQuery = util.promisify(db.query).bind(db);

export default db;
