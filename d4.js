let books = [];
const row = document.querySelector(".row");
let cart = [];
window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books") //get all products using API
    .then((Response) => {
      return Response.json();
    })
    .then((book) => {
      books = book;
      book.forEach((element) => {
        //1) Display the list of items available on the page using template literals `` and .forEach
        row.innerHTML = books.map(
          (displayBook) => `
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
              <div class="card mt-2 mb-2" >
                              <img src="${displayBook.img}" class="card-img-top w-100 h-100" alt="...">
                        <div class="card-body">
                                <h6 class="card-title" >${displayBook.title}</h6>
                                <p class="card-text">${displayBook.category}</p>
                                <a id="add" href="#" class="btn btn-primary" onclick="addToCart()">Go somewhere</a>
                </div>
                </div>
                </div>
            `
        );
      });
    })
    .catch((err) => {
      console.log(err);
    });

  row.querySelectorAll(".btn.btn-primary").forEach((a) => {
    a.innerHTML = "abc";
  });
};

function addToCart() {
  //var li = document.createElement("LI");
  var input = document.getElementById("add");
  row.innerHTML = cart.push(input.value);
  input.value = "";
  row.innerHTML = a.onclick = (event) =>
    // event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove(); // navigating upward in the dom tree to find the .col element and remove it
    event.currentTarget.closest(".col").cart.push();
}
