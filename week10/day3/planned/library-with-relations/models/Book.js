const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
	title: String,
	description: String,
	author: {
		type: Schema.Types.ObjectId,
		// this is the name of the model that the _id refers to 
		ref: 'Author'
	},
	reviews: [
		{
			user: String,
			text: String
		}
	],
	rating: Number
}, {
	timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
