const deleteBtn = document.getElementById("delete-btn");

console.log(deleteBtn);

deleteBtn.addEventListener("click", () => {
  //   console.log("Deleting book!");
  //   console.log(window.location);
  const slugForTheBook = window.location.pathname.split("/")[2];
  //   console.log(slugForTheBook);
  fetch(`/library/${slugForTheBook}/delete`, { method: "POST" }).then(() => {
    // console.log("Success");
    window.location.replace("/library");
  });
});

const editBtn = document.getElementById("edit-btn");

editBtn.addEventListener("click", () => {
  const formElement = document.getElementById("edit-form");
  formElement.classList.toggle("hidden");

  const bookDetails = document.getElementById("book-details");
  bookDetails.classList.toggle("hidden");
});
