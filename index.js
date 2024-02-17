const titleId = document.getElementById("titleId");
const desc = document.getElementById("desc");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []; 

showAllTasks();
function showAllTasks (){
    tasks.forEach((value, index)=>{
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText = value.titleId;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.desc;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class", "deleteBtn");
        btn.innerText = "-";

        btn.addEventListener("click", ()=>{
            removeTasks();
            tasks.splice(index, 1);
            // removeFromLocalStorage();
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showAllTasks();
        });
        div.append(btn);
        

        container.append(div);
    });
}


// function removeFromLocalStorage(){
//     localStorage.removeItem("tasks", );
// }

function removeTasks (){
    tasks.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();
    });
}


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    removeTasks();
    tasks.push({
        title: titleId.value,
        desc: desc.value,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
    showAllTasks();
});