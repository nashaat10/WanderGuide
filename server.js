const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./Natours/config.env" });
const app = require("./app");
// console.log(app.get("env"));
const DB = process.env.DATABASE;

// console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection is done"));

const port = 2000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
