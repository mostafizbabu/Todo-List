const searchInput = document.querySelector('input[name="search"]');
const input = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-List");

todoBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const div = document.createElement("div");
  div.classList.add("todo");
  const li = document.createElement("li");
  li.classList.add("todo-item");
  const span = document.createElement("span");
  span.innerText = input.value;
  li.appendChild(span);

  const innerDiv = document.createElement("div");
  const comltBtn = document.createElement("button");
  comltBtn.innerHTML = '<i class="fas fa-check"></i>';
  comltBtn.classList.add("check");
  innerDiv.appendChild(comltBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add("trash");
  innerDiv.appendChild(deleteBtn);

  li.appendChild(innerDiv);
  div.appendChild(li);
  todoList.appendChild(div);
  input.value = "";
});

todoList.addEventListener("click", function (event) {
  const target = event.target;
  if (target.classList[0] == "trash") {
    const div = target.parentElement;
    const li = div.parentElement;
    li.remove();
} else if (target.classList[0] == "check") {
    const div = target.parentElement;
    const li = div.parentElement;
    li.classList.add("completed");
  }
});

searchInput.addEventListener("input", (e) => {
  const searchValue = e.target.value.toLowerCase();
  let ul = document.getElementById("todo");
  let li = ul.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    let span = li[i].getElementsByTagName("span")[0];
    const textValue = span.innerText;
    console.log(textValue.toLowerCase(), searchValue);
    if (textValue.toLowerCase().includes(searchValue)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});
