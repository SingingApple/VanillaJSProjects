const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchForm = document.querySelector(".search input");
const generateTemplate = todo => {
  const html =
    '<li class="list-group-item d-flex justify-content-between align-items-center"> <span>' +
    todo +
    '</span> <i class="far fa-trash-alt delete"></i> </li>';

  list.innerHTML += html;
};

const filterTodos = term => {
  Array.from(list.children)
    .filter(element => {
      return !element.textContent.toLowerCase().includes(term);
    })
    .forEach(element => {
      element.classList.add("filtered");
    });

  Array.from(list.children)
    .filter(element => {
      return element.textContent.toLowerCase().includes(term);
    })
    .forEach(element => {
      element.classList.remove("filtered");
    });
};

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todo = addForm.add.value.trim().toLowerCase();
  if (todo.length > 0) {
    generateTemplate(todo);
    addForm.add.value = "";
  }
});

// Delete Todos
list.addEventListener("click", e => {
  if (e.target.classList.value.includes("delete")) {
    e.target.parentElement.remove();
  }
});

//Search Todo
searchForm.addEventListener("keyup", () => {
  const term = searchForm.value.trim();
  filterTodos(term);
});
