//dependencies-------------------------------------------------------------------------------------
const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./graphql/schema");
const path = require("path");
const dir = path.join(__dirname, "assets");
const PORT = process.env.PORT || 4000;

const app = express();

//Routes--------------------------------------------------------------------------------------------
const fileRoutes = require("./routes/upload");

//middleware----------------------------------------------------------------------------------------
app.use("/assets", express.static(dir));
//middleware to parse req body from a json format
app.use(express.json());
//middleware to allow cors origin requests from client
app.use(cors());
//Routes middleware
app.use("/upload", fileRoutes);

//middleware to define graphQl schema and resolvers
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://admin:nGkoJYcfxX833CdB@companydb.qniqxwp.mongodb.net/?retryWrites=true&w=majority&appName=CompanyDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
