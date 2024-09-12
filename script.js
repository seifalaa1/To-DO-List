let input=document.getElementById("input");
let list=document.getElementById("list");



function AddTask(){
    if(input.value===""){
        alert("You Must Add Task");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
}

list.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
    };
});

function saveData(){
    localStorage.setItem=("data",list.innerHTML);
}

function showTask(){
    list.innerHTML=localStorage.getItem("data");
}