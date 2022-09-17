const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: String,
    description: String,
    authorRelationWithPopulate: {
      type: Schema.Types.ObjectId,
      // this is the name of the model that the _id refers to
      ref: "Author",
    },
    authorId: Schema.Types.ObjectId,
    reviews: [
      {
        user: String,
        text: String,
      },
    ],
    rating: Number,
  },
  {
    timestamps: true,
  }
);

blogPostSchema.virtual("author", {
  ref: "Author",
  localField: "authorId",
  foreignField: "_id",
  justOne: true,
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
