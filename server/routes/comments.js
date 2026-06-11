const express = require("express");
const connection = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  const postId = req.query.postId;

  let query = "SELECT * FROM comments";
  let values = [];

  if (postId) {
    query += " WHERE post_id = ?";
    values.push(postId);
  }

  connection.query(query, values, (err, results) => {
    if (err) return res.status(500).send("Error fetching comments");
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  connection.query(
    "SELECT * FROM comments WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).send("Error fetching comment");
      res.json(results[0]);
    }
  );
});

router.post("/", (req, res) => {
  const { post_id, name, email, body } = req.body;

  connection.query(
    "INSERT INTO comments (post_id, name, email, body) VALUES (?, ?, ?, ?)",
    [post_id, name, email, body],
    (err, results) => {
      if (err) return res.status(500).send("Error adding comment");
      res.json(results);
    }
  );
});

router.put("/:id", (req, res) => {
  const { name, email, body } = req.body;

  connection.query(
    "UPDATE comments SET name = ?, email = ?, body = ? WHERE id = ?",
    [name, email, body, req.params.id],
    (err, results) => {
      if (err) return res.status(500).send("Error updating comment");
      res.json(results);
    }
  );
});

router.delete("/:id", (req, res) => {
  connection.query(
    "DELETE FROM comments WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).send("Error deleting comment");
      res.json(results);
    }
  );
});

module.exports = router;