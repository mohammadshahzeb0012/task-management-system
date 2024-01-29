const create = document.getElementById("create");
const form = document.querySelector("#Create-task-form");
const modal = document.querySelector("#modal");
const login = document.getElementById("login");

let isLoggedIn = false;


login.addEventListener("click", (event) => {
    if (!isLoggedIn) {
        let loginVal = prompt("please enter your name");
        if (loginVal) {
            login.innerText = loginVal;
            isLoggedIn = true;
        }
    }
    else {
        isLoggedIn = false;
        login.innerText = "Login";
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskStatus = form.status.value; // "TODO" | "INPROGRESS" | "DONE" 
    const taskInfo = {
        title: form.title.value,
        description: form.description.value,
        developer: form.developer.value,
        estimate: form.estimate.value,
    }

    const TaskCard = document.createElement("div");
    TaskCard.className = "task-card";
    TaskCard.draggable = true;
    TaskCard.addEventListener("dragstart", onDragStart)
    TaskCard.innerHTML = `   
        <h3>${taskInfo.title}</h3>
        <div>
            <span class="badge">${taskInfo.estimate} days</span>
            <span class="image">${taskInfo.developer[0].toUpperCase()}</span>
        </div>`

    const taskContainer = document.getElementById(taskStatus);
    taskContainer.appendChild(TaskCard);

})


function toggleModal(element) {
 
    if (!isLoggedIn) {
      return  alert("Please Login First To Create Task")
    }
    else {
        modal.classList.toggle("hide-modal")
        element.innerText = modal.classList.contains("hide-modal") ? "expand_less" : "expand_more"
        console.log(element.innerText)
    }
}
