const Inputbox= document.getElementById("input-box")
const listContainer= document.getElementById("list-tasks")
function addtask(){
    if(Inputbox.value ===''){
        alert("you should add some tasks!!!")
    }else{
        let li=document.createElement("li")
        li.innerHTML=Inputbox.value;
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    Inputbox.value="";
    saveData()
}

listContainer.addEventListener("click", function (ee) {
    if (ee.target.tagName === "LI") {
        ee.target.classList.toggle("checked"); // Corrected "classList"
        saveData()
    } else if (ee.target.tagName === "SPAN") {
        ee.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask()