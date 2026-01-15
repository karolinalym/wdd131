console.log("bom.js is loaded");

const input = document.querySelector("#favchap");
const button = document.querySelector("#addChapter");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    const chapter = input.value.trim();

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = chapter;
    deleteButton.textContent = "❌";

    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = "";
  }

  input.focus();
});
input.addEventListener("keydown", function (event) {
    button.click();
});