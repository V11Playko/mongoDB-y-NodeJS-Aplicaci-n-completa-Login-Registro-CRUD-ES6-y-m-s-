const { connect } = require("mongoose");

(async () => {
  try {
    const db = await connect(
      "mongodb+srv://playko:komodor11@apidb.lldrd.mongodb.net/apiNotes"
    );
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
