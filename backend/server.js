const express = require("express");
const app = express();
const connectDB = require("./config/database");
const PORT = process.env.PORT;
connectDB();

app.use(express.urlencoded({ entended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
