const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addtask(){
    const task = inputBox.Value.trim();
    if(!task){
        alert("please write down a task");
        return;
    }



    li.innerHTML=`
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
            <span class="edit-btn">Edit</span>
            <span class="delete-btn">Delete</span>
        `;

    listContainer.appendChild(li);
    inputBox.value="";
}