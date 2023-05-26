import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  city: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  stateName: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    default:
      "https://wallpapers.com/images/hd/cool-profile-picture-kpwjvjw5434qfzo3.jpg",
  },
});

mongoose.model("User", userSchema);
