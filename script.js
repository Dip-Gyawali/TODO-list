let btn = document.querySelector('.btn');
let task = document.querySelector('.task');
let listSection = document.querySelector('.list-sec');

btn.onclick = setTask;

function setTask() {
    if (task.value === '') {
        alert('Please enter a task');
    }
    else {
        let listItem= document.createElement('li');
        let temp= task.value;
        temp= temp.trim().charAt(0).toUpperCase() + temp.trim().slice(1).toLowerCase();
        listItem.innerHTML = temp;

        let delet = document.createElement('i');
        delet.classList = 'fa-solid fa-xmark cross';

        listItem.appendChild(delet);
        listSection.appendChild(listItem);
    }
    task.value = '';
    saveData();
}

listSection.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
         e.target.classList.toggle('checked');
         saveData();
    }
    else if(e.target.tagName==="I"){
        e.target.parentElement.remove();
        saveData();
    }
    
},false);

function saveData(){
    localStorage.setItem("data",listSection.innerHTML);
}

function loadData(){
    listSection.innerHTML= localStorage.getItem("data");
}
loadData();