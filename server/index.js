const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MDB_URI)
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log("Failed to connect to database. Exiting now...");
            console.error(error);
            process.exit(1);
        });


app.use(express.json());
app.use("/auth", require("./routes/userRoute"));




