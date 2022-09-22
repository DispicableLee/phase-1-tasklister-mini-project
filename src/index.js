document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e)=>{

  e.preventDefault();
  
    const newUl = document.getElementById("tasks")
    const newLi = document.createElement("li")
    const removeButton = document.createElement("button")
  console.log("blah")

    newLi.innerText = e.target["new-task-description"].value
    newUl.append(newLi);
    newLi.append(removeButton)
    removeButton.addEventListener("click", ()=>{
      newLi.remove();
    })
  }
  
)
}
)
