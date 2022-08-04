try {
  const username = prompt("Please provide a username!");
  if (username.length < 5) {
    throw new Error("Sorry username is not long enough");
  }
  alert("Hooray!");
} catch (err) {
  alert(err);
} finally {
  console.log("This happens always");
}
