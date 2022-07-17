const mongoose = require("mongoose");

// Schema - describe how your data looks
const PostSchema = mongoose.Schema({
  product_id: {
    type: Object,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    default: "",
  },
  product_link: {
    type: String,
    default: "",
  },
  categories: {
    type: [{ type: String }],
    default: [],
  },
  docs: {
    type: [{ type: String }],
    default: [],
  },
});

module.exports = mongoose.model("Posts", PostSchema);
