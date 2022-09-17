## Library CRUD Project
 
### Boilerplate created with Ironlauncher
```bash
$ npx ironlauncher <name of the project> 
or
$ npm install -g ironlauncher
$ ironlauncher <name of the project>
```
 
### To run the application
```bash
$ npm run dev
```
 
### Features
 
Seed the database with the json data 
 
When i visit the URL /books i want to see a list of all my book titles from the database
- we need a route to /books and get all the books from the db
- we need a view that get's all the books and displays the titles
 
 
 
When i click on a book title from the list i want to be taken to a route /books/:id and want to see all the details from the book
- titles should be links
- we need a route like /books/:id that get's the specific book from the db 
- we need a view to show the book details
 
 
When i click on a link 'add a book' under the books list i am taken to a form to add a book
- we need a link under the titles list
- we need a route that displays the form to add a book
 
When i click on Add after filling out the form i want to be taken to the detail view of the added book and the book should be added to the database
- we need a route to post /books
- we need to create a new document in the database using the values from the form
- we need to redirect to the details view of this book
 
 
When i click on a link 'edit' under the book details i want to be taken to a form where i can edit the book
- we need a link in the book details view to /books/edit/:id
- we need that route
- we need to retrieve that book from the db
- we need to render a form displaying the fields from that book
 
 
When i click on edit i want to be taken to the book details view showing the changed fields of the book and the book should be updated in the database
- we need a post route to /books/edit/:id
- in the route we need to update the book in the db
- we need to redirect to the details view of that book
 
 
When i click on a link 'delete' under a book details view i want to be able to delete the book and be redirected to the books list 
- we need a link under the book details view
- we need a route to /books/delete/:id
- we need to delete this book in the db
- we need to redirect to /books