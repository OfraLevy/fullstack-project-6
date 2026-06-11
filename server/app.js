const express = require("express");

const app = express();

app.use(express.json());

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const todosRouter = require("./routes/todos");
const commentsRouter = require("./routes/comments");

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/todos", todosRouter);
app.use("/comments", commentsRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});