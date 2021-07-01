const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(express.json());
app.use(morgan("dev"));

// Connect to DB
mongoose.connect(
  "mongodb://localhost:27017/rockthevote-db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () =>
    console.log("You have successfully connected to the database. You rock!")
);

// Main Endpoint
app.use("/user", require("./routes/authRouter.js"));

// Error handling
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

// Listen at Port 9000
app.listen(9000, () => {
  console.log("Server running on Port 9000 my dawg...");
});
