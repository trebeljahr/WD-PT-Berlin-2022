const onContentLoad = () => {
  console.log("lab-express-basic-auth JS imported successfully!");
  console.log(document.URL);
  const url = new URL(document.URL);
  const links = document.querySelectorAll(`a[href="${url.pathname}"]`);
  console.log(links);
  links.forEach((elem) => {
    elem.style.color = "blue";
  });
};

document.addEventListener("DOMContentLoaded", onContentLoad);
