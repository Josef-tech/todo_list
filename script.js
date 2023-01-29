
const inputField = document.querySelector(".list_input");
const addButton = document.querySelector("#add_item");
const todoList = document.querySelector(".items-list");
const sortButton = document.querySelector("#sort_button");
const deleteButton = document.querySelector(".delete");


const getInitialInput = () => {
    const li = document.createElement("li");
    li.innerHTML = `
		<input class="list_input" type="text" value="">
		<img class="cancel" src="./img/delete.svg">
	`;
    li.querySelector("img").addEventListener("click", () => {
        li.parentElement.removeChild(li);
    });

    return li;
}



sortButton.addEventListener("click", function () {

    let tasks = Array.from(todoList.children);


    tasks.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    });


    todoList.innerHTML = "";


    tasks.forEach(function (task) {
        todoList.appendChild(task);
    });



});

sortButton.addEventListener("click", function () {
    let tasks = Array.from(todoList.children);
    tasks.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    tasks.reverse();
    todoList.innerHTML = "";
    tasks.forEach(function (task) {
        todoList.appendChild(task);
    });
});


document.getElementById("add_item").addEventListener("click", () => {
    const newItem = getInitialInput();
    document.getElementById("items_list").append(newItem);
});

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        const newItem = getInitialInput();
        document.getElementById("items_list").append(newItem);
    }
});



// // Начало перетаскивания
// todoList.addEventListener("dragstart", function (event) {
//     event.dataTransfer.setData("text", event.target.id);
// });

// // Перетаскивание над другим элементом
// todoList.addEventListener("dragover", function (event) {
//     event.preventDefault();
// });

// // Перетаскивание на другой элемент
// todoList.addEventListener("drop", function (event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData("text");
//     event.target.appendChild(document.getElementById(data));
// });

















// addButton.addEventListener("click", function () {

//     let taskText = inputField.value;


//     let newTask = document.createElement("input")
//     newTask.className = 'newInput';



// let newButton = document.createElement('button');
// let newImg = document.createElement('img');

// newImg.className = 'delete';
// newButton.append(newImg);



// newImg.src = '/img/delete.svg';
// newImg.style.backgroundColor = 'transparent';
// newImg.style.outline = 'none';
// newImg.style.border = 'none';
// newImg.style.width = '20px';
// newImg.style.height = '20px';
// newImg.style.cursor = 'pointer';
// newImg.style.right = '10px';





//     console.log(newTask);
//     newTask.textContent = taskText;
//     // newImg.textContent = taskText;



//     todoList.appendChild(newTask);

//     inputField.value = "";
// });


// deleteButton.addEventListener("click", function (event) {

//     if (event.target.tagName === "input") {

//         deleteButton.removeChild(event.target);
//     }
// });

// sortButton.addEventListener("click", function () {

//     let tasks = Array.from(todoList.children);


//     tasks.sort(function (a, b) {
//         return a.textContent.localeCompare(b.textContent);
//     });


//     todoList.innerHTML = "";


//     tasks.forEach(function (task) {
//         todoList.appendChild(task);
//     });
// });
// function toggleSortButtonState() {
//     this.classList.toggle("sort-button--reverse");
//     const allInputs = document.querySelectorAll("input");
//     console.log(allInputs);
//     const inputsArray = Array.prototype.slice.call(allInputs);
//     function byField(field) {
//         return (a, b) => a[field] > b[field] ? 1 : -1;
//     }
//     if (this.classList.contains("sort-button--reverse")) {
//         inputsArray.reverse;
//         inputsArray.forEach(input => console.log(input.value))
//     } else {
//         inputsArray.sort(byField('value'));
//         inputsArray.forEach(input => input.value = input.value)
//     }

// }