let inputText = document.getElementById("inputText");
let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
let completedList = document.getElementById("completedList");

inputText.addEventListener('click', function() {
    this.value = ''
})

addButton.addEventListener("click", function () {
  if (inputText.value === "") {
    alert("Task name can't be blank");
    return
  }

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.id = "addButton";
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      completedList.appendChild(li);
    } else {
      taskList.appendChild(li);
    }
  });

  let label = document.createElement("lable");
  label.textContent = inputText.value;

  let removeButton = document.createElement("button");
  removeButton.id = "removeButton";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    let grandparent = this.parentElement.parentElement;
    grandparent.removeChild(this.parentElement);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(removeButton);

  taskList.appendChild(li);
});
