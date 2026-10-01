import mongoose from "mongoose";

const exhibitionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

export default mongoose.model("Exhibition", exhibitionSchema);