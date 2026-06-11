const express = require("express");
const connection = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send("Error fetching users");
      return;
    }

    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  connection.query(
    `SELECT * FROM users WHERE id = ${id}`,
    (err, results) => {
      if (err) {
        res.status(500).send("Error fetching user");
        return;
      }

      res.json(results);
    }
  );
});

router.post("/", (req, res) => {
  const { name, email, phone, website } = req.body;

  const query = `
    INSERT INTO users (name, email, phone, website)
    VALUES (?, ?, ?, ?)
  `;

  connection.query(
    query,
    [name, email, phone, website],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error adding user");
        return;
      }

      res.json(results);
    }
  );
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, phone, website } = req.body;

  const query = `
    UPDATE users
    SET name = ?, email = ?, phone = ?, website = ?
    WHERE id = ?
  `;

  connection.query(query, [name, email, phone, website, id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error updating user");
      return;
    }

    res.json(results);
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const query = "DELETE FROM users WHERE id = ?";

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting user");
      return;
    }

    res.json(results);
  });
});

module.exports = router;