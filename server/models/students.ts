import mongoose from "mongoose";
const {} = mongoose.Schema.Types;
const studentSchema = new mongoose.Schema({
  name: {
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
  clsName: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
  },
  Roll_No: {
    type: String,
    required: true,
  },
  attdenList: [],
  pList: [],
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png",
  },
});

const Student = mongoose.model("Student", studentSchema);
