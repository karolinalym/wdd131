console.log("bom.js is loaded");

const input = document.querySelector("#favchap");
const button = document.querySelector("#addChapter");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  const chapter = input.value;

  if (chapter === ""){
    input.focus();
    return;
  }

  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = chapter;
  deleteButton.textContent = "❌";

  li.appendChild(deleteButton);
  list.appendChild(li);

  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
  });

  input.value = "";
  input.focus();
});
