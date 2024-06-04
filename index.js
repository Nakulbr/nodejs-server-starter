const express = require("express");
const todoRoutes = require("./routes/todo.routes");
const userRoutes = require("./routes/user.routes");
const connectDb = require("./config/mongodb.config");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

app.listen(3000, async () => {
  await connectDb("mongodb://localhost:27017/todo_list");
  console.log(`Server is running on port ${3000}`);
});
