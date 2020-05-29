const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: [true, "pole tytul jest wymagane"] },
  description: { type: String, required: [true, "pole opis jest wymagane"] },
  created: { type: Date, default: Date.now },
});
module.exports = mongoose.model("News", newsSchema);
