const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema(
    {
      title: String,
      releaseDate:Date,
      
      // // ref is the link to an other collection, here label
      artist: { type: Schema.Types.ObjectId, ref: "artist" }, 
      // ref is the link to an other collection, here artist
      cover: String,
    },
  
  { timestamps: true }
);

const AlbumModel = mongoose.model("album", albumSchema);

module.exports = AlbumModel;
