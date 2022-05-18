const { connect } = require("mongoose");
const { config } = require("dotenv");
config();

const MONGODB_URI = process.env.MONGODB_URI;

(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
