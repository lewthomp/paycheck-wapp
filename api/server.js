require("dotenv").config();
const express = require("express");
const { connectToDb } = require("./db/db.js");
const { apolloServer, graphqlInstaller } = require("./api_handler.js");

const app = express();
const port = process.env.API_SERVER_PORT || 3000;

async function start() {
  try {
    await connectToDb();
    await apolloServer.start();
    graphqlInstaller(app);
    
    app.listen(port, () => {
      console.log(`API server started on port ${port}`);
    });
  } catch (err) {
    console.log("ERROR", err);
  }
};

start();
