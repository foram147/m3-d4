let books = [];
const row = document.getElementById("myGrid");
let selectedBooks = [];
window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books") //get all products using API
    .then((Response) => {
      return Response.json();
    })
    .then((book) => {
      books = book;
      book.forEach((element) => {
        //1) Display the list of items available on the page using template literals `` and .forEach
        row.innerHTML = books.map(displayBooks(book));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

function filterBooks(query) {
  // displayBooks(books.filter(b => b.title.includes(query)))

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  displayBooks(filteredBooks);
}

displayBooks = (books) => {
  row.innerHTML = books
    .map(
      (book) => `
     
        <div class="col col-12 col-sm-6 col-md-2">
            <div class="card  mt-2">
                <img src="${book.img}" class="card-img-top"width=128px alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.price}</p>
                </div>
                
                <div class="btn-group" role="group" aria-label="Basic example">
                        <button id="add" type="button" class="btn btn-primary" >Add</button>
                        <button id="skip" type="button" class="btn ">Skip</button>
                </div>
            </div>
        </div>
        </div>
    `
    )
    .join("");
  row.querySelectorAll(".btn-group .btn:nth-child(2)").forEach((btn) => {
    btn.innerText = "Skip";
    btn.onclick = (event) => event.currentTarget.closest(".col").remove();
  });
  row.querySelectorAll(".btn-group .btn:nth-child(1)").forEach((btn) => {
    btn.addEventListener("click", function () {
      let addBtn = btn.querySelectorAll(".btn-group .btn:nth-child(1)");
      let selected = btn.parentElement.parentElement.parentElement;

      addBtn.classList.add("selected");
      if (addBtn.classList.contains("selected")) {
        selectedBooks.push(selected);
      } else {
        let cardIndex = selectedBooks.indexOf(selected);
        selectedBooks.splice(cardIndex, 1);
      }
    });
  });
};

const addBtns = document.querySelectorAll(".add");
for (let btn of addBtns) {
}

const getCartList = document.getElementById("cartList");
