const mysql = require("mysql");
const pool = require("../sql");

// List
const list = (req, res) => {
  let sql = `SELECT * FROM ??`;
  sql = mysql.format(sql, ["games"]);
  pool.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }

    res.json(rows);
  });
};

const show = (req, res) => {
  const { id } = req.params;

  let sql = `SELECT * FROM ?? WHERE ?? = ?;`;
  let replacements = ["games", "id", id];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }
    res.json(row);
  });
};

const create = (req, res) => {
  const { title, release_year, box_art, synopsis } = req.body;

  let sql = `INSERT INTO ?? VALUES (?, ?, ?, ?, ?);`;

  let replacements = ["games", null, title, release_year, box_art, synopsis];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }
    res.json(row);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  let sql = `UPDATE ?? SET ? WHERE id = ?;`;
  sql = mysql.format(sql, ["games", body, id]);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }
    res.json(row.message);
  });
};

const remove = (req, res) => {
  const { id } = req.params;

  let sql = `DELETE FROM ?? WHERE ?? = ?;`;
  sql = mysql.format(sql, ["games", "id", id]);
  pool.query(sql, (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Hey! Something happened.");
    }
    res.json(row.affectedRows);
  });
};

module.exports = { list, show, create, update, remove };
