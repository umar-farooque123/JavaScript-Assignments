// MAIN
const main = document.createElement("main");
document.body.appendChild(main);

main.style.background = "linear-gradient(to top, #73c8a9, #373b44)";
main.style.height = "97vh";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";

// BOX
const box = document.createElement("div");
main.appendChild(box);

box.style.background = "linear-gradient(to top, #49525f, #57a9ad)";
box.style.height = "500px";
box.style.width = "400px";
box.style.borderRadius = "12px";
box.style.display = "flex";
box.style.flexDirection = "column";

// INPUT CONTAINER
const inputbox = document.createElement("div");
inputbox.style.padding = "25px 30px";

// INPUT
const input = document.createElement("input");
input.style.padding = "8px 15px";
input.style.border = "none";
input.style.borderRadius = "5px";
input.style.outline = "none";
input.setAttribute("placeholder", "Enter Your Task");

// BUTTON
const addbutton = document.createElement("button");
addbutton.style.padding = "8px 20px";
addbutton.style.marginLeft = "5px";
addbutton.textContent = "Add";
addbutton.style.borderRadius = "5px";
addbutton.style.border = "none";
addbutton.style.cursor = "pointer";

// APPEND INPUT
box.appendChild(inputbox);
inputbox.appendChild(input);
inputbox.appendChild(addbutton);

// TASK LIST WRAPPER
const taskWrapper = document.createElement("div");
taskWrapper.style.flex = "1";
taskWrapper.style.overflowY = "auto";
taskWrapper.style.paddingBottom = "10px";

box.appendChild(taskWrapper);

// TASK LIST
const taskList = document.createElement("ul");
taskWrapper.appendChild(taskList);

taskList.style.listStyle = "none";
taskList.style.padding = "0px 30px";
taskList.style.margin = "0px";

// FUNCTION TO ADD TASK
function addTask() {
    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.style.background = "#fff";
    li.style.margin = "8px 0";
    li.style.padding = "8px 10px";
    li.style.borderRadius = "5px";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    // TASK TEXT
    const span = document.createElement("span");
    span.textContent = input.value;

    // ICON CONTAINER
    const iconBox = document.createElement("div");

    // EDIT BUTTON
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.style.border = "none";
    editBtn.style.background = "transparent";
    editBtn.style.cursor = "pointer";

    editBtn.addEventListener("click", function () {
        span.style.display = "none";

        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = span.textContent;
        editInput.style.marginRight = "5px";

        // ✅ OPTION 2: span ke baad input
        span.after(editInput);
        editInput.focus();

        function saveEdit() {
            if (editInput.value !== "") {
                span.textContent = editInput.value;
            }
            span.style.display = "inline";
            editInput.remove();
        }

        editInput.addEventListener("blur", saveEdit);

        editInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                saveEdit();
            }
        });
    });

    // DELETE BUTTON
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.border = "none";
    delBtn.style.background = "transparent";
    delBtn.style.cursor = "pointer";

    delBtn.addEventListener("click", function () {
        li.remove();
    });

    iconBox.appendChild(editBtn);
    iconBox.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(iconBox);
    taskList.appendChild(li);

    input.value = "";
}

// EVENTS
addbutton.addEventListener("click", addTask);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});






