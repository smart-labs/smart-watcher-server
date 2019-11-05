import mongoose from "mongoose";

const ServerSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
  },
  {
    timestamps: true
  }
);

const Server = mongoose.model("Server", ServerSchema);

export default Server;
