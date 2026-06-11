const express = require("express");
const connection = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  const userId = req.query.userId;

  let query = "SELECT * FROM todos";
  let values = [];

  if (userId) {
    query += " WHERE user_id = ?";
    values.push(userId);
  }

  query += " ORDER BY id";

  connection.query(query, values, (err, results) => {
    if (err) return res.status(500).send("Error fetching todos");
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  connection.query(
    "SELECT * FROM todos WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).send("Error fetching todo");
      res.json(results[0]);
    }
  );
});

router.post("/", (req, res) => {
  const { user_id, title, completed } = req.body;

  connection.query(
    "INSERT INTO todos (user_id, title, completed) VALUES (?, ?, ?)",
    [user_id, title, completed || false],
    (err, results) => {
      if (err) return res.status(500).send("Error adding todo");
      res.json(results);
    }
  );
});

router.put("/:id", (req, res) => {
  const { title, completed } = req.body;

  connection.query(
    "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
    [title, completed, req.params.id],
    (err, results) => {
      if (err) return res.status(500).send("Error updating todo");
      res.json(results);
    }
  );
});

router.delete("/:id", (req, res) => {
  connection.query(
    "DELETE FROM todos WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).send("Error deleting todo");
      res.json(results);
    }
  );
});

module.exports = router;