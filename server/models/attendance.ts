import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
  },
  votes: [{ type: ObjectId, ref: "User" }],
  postedBy: {
    type: String,
  },
});

mongoose.model("Post", postSchema);
