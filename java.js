const inputRef = document.getElementById("bookmarkInput");
const buttonRef = document.getElementById("addBookmarkBtn");
const listRef = document.getElementById("bookmarkList");

let books = [];

function render() {
  listRef.innerHTML = books.map((item, index) => `
    <li>
      ${item} 
      <button class="change-btn" data-index="${index}">Change</button>
      <button class="delete-btn" data-index="${index}">Delete</button>
    </li>
  `).join("");
}

buttonRef.addEventListener("click", () => {
  const value = inputRef.value.trim();
  if (value) {
    books.push(value);
    inputRef.value = "";
    render();
  }
});

listRef.addEventListener("click", (e) => {
  const index = e.target.dataset.index;
  
  if (e.target.classList.contains("delete-btn")) {
    books.splice(index, 1);
    render();
  }

  if (e.target.classList.contains("change-btn")) {
    const newValue = prompt("Enter new value:", books[index]);
    if (newValue) {
      books[index] = newValue.trim();
      render();
    }
  }
});

render();
