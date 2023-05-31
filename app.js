const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const { MONGO_URI } = require("./keys");

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

// mongoose.connection.on("connected", () => {
//   console.log("mongodb is connected");
// });

require("./models/user");
require("./models/post");
require("./models/students");

app.use(express.json());
app.use(cors());
// app.use(require('./routes/auth'))
app.use(require("./routes/post"));
app.use(require("./routes/user"));
app.use(require("./routes/student"));
//mongodb+srv://wilsonibekason:nodecomplete@cluster0.cjjeqbq.mongodb.net/
app.listen(PORT, () => {
  mongoose
    .connect(
      // " mongodb+srv://mahen:12345a@cluster0.qfgbe.mongodb.net/E-voting?retryWrites=true&w=majority",
      "mongodb+srv://wilsonibekason:nodecomplete@cluster0.cjjeqbq.mongodb.net/online_voting_system?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    )
    .then((res) => {
      console.log("MongoDB is connected", res);
      console.log(`App listening on port ${PORT}`);
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
});
