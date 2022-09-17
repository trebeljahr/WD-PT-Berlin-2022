const router = require("express").Router();
const Book = require('../models/Book')
const Author = require('../models/Author')

router.get('/books', (req, res, next) => {
	// retrieve all the books from the db	
	Book.find()
		.then(booksFromDB => {
			console.log(booksFromDB)
			// render the view
			res.render('books/index', { bookList: booksFromDB })
		})
		.catch(err => next(err))
	// res.send('hello')
});


router.get('/books/add', (req, res, next) => {
	// we need to get all authors
	Author.find()
		.then(authorsFromDB => {
			console.log(authorsFromDB)
			res.render('books/addForm', { authors: authorsFromDB })
		})
});

router.get('/books/:id', (req, res, next) => {
	const id = req.params.id
	// use .populate(<field to populate> to replace the _id for the whole author object) 
	Book.findById(id).populate('author')
		.then(bookFromDB => {
			console.log(bookFromDB)
			res.render('books/details', { book: bookFromDB })
		})
		.catch(err => next(err))
});

router.post('/books', (req, res, next) => {
	// create the book using the values from the request body	
	// console.log(req.body)
	// const title = req.body.title
	console.log(req.body)
	const { title, description, author, rating } = req.body
	// console.log(title, description, author, rating)

	// create a new book
	Book.create({
		title: title,
		description: description,
		rating: rating,
		author: author
	})
		.then(createdBook => {
			console.log(createdBook)
			// show the book details for the created book
			// res.render('books/details', { book: createdBook })
			res.redirect(`/books/${createdBook._id}`)
		})
});

router.get('/books/edit/:id', (req, res, next) => {
	const id = req.params.id
	// get the book with this id
	Book.findById(id)
		.then(bookFromDB => {
			console.log(bookFromDB)
			// render a form to edit the boo
			res.render('books/editForm', { book: bookFromDB })
		})
		.catch(err => next(err))
});

router.post('/books/edit/:id', (req, res, next) => {
	const id = req.params.id
	// retrieve the values from the request body
	const { title, author, description, rating } = req.body
	// find the book and update
	Book.findByIdAndUpdate(id, {
		title,
		description,
		author,
		rating
	}, { new: true })
		.then(updatedBook => {
			console.log(updatedBook)
			// redirect to the details of the updated book
			res.redirect(`/books/${updatedBook._id}`)
		})
		.catch(err => next(err))
});

router.get('/books/delete/:id', (req, res, next) => {
	const id = req.params.id
	Book.findByIdAndDelete(id)
		.then(() => {
			// redirect to the books list
			res.redirect('/books')
		})
		.catch(err => {
			next(err)
		})
});

router.post('/books/:id/reviews', (req, res, next) => {
	const id = req.params.id
	const { user, text } = req.body
	Book.findByIdAndUpdate(id, { $push: { reviews: { user: user, text: text } } }, { new: true })
		.then(updatedBook => {
			console.log(updatedBook)
			res.redirect(`/books/${id}`)
		})
})

module.exports = router;