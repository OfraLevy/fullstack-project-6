const express = require("express");
const connection = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  const userId = req.query.userId;

  let query = "SELECT * FROM posts";
  let values = [];

  if (userId) {
    query += " WHERE user_id = ?";
    values.push(userId);
  }

  query += " ORDER BY id";

  connection.query(query, values, (err, results) => {
    if (err) return res.status(500).send("Error fetching posts");
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  connection.query(
    "SELECT * FROM posts WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).send("Error fetching post");
      res.json(results[0]);
    }
  );
});

router.post("/", (req, res) => {
  const { user_id, title, body } = req.body;

  connection.query(
    "INSERT INTO posts (user_id, title, body) VALUES (?, ?, ?)",
    [user_id, title, body],
    (err, results) => {
      if (err) return res.status(500).send("Error adding post");
      res.json(results);
    }
  );
});

router.put("/:id", (req, res) => {
  const { title, body } = req.body;

  connection.query(
    "UPDATE posts SET title = ?, body = ? WHERE id = ?",
    [title, body, req.params.id],
    (err, results) => {
      if (err) return res.status(500).send("Error updating post");
      res.json(results);
    }
  );
});

router.delete("/:id", (req, res) => {
  connection.query(
    "DELETE FROM posts WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).send("Error deleting post");
      res.json(results);
    }
  );
});

module.exports = router;