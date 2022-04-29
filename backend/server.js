const express = require("express"); //backend web framework
const colors = require("colors");
const dotenv = require("dotenv").config(); //allows us to use our variables in .env
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
