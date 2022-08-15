

function createToDo(title,description,dueDate,priority) {
    let toDoList = document.getElementById("to-do-list");
    let toDoDiv = document.createElement("div");
    toDoDiv.classList.add("div-class");

    


    let myH1 = document.createElement("h1");
    myH1.innerHTML=title;
    myH1.classList.add("title-class");

    let myH6 = document.createElement("h6");
    myH6.innerHTML=description;
    myH6.classList.add("description-class");

    let date = document.createElement("h6");
    date.innerHTML=dueDate;
    date.classList.add("date-class");

    let öncelik = document.createElement("h6");
    öncelik.innerHTML=priority;
    öncelik.classList.add("priority-class");



    // let date = document.createElement("input");
    // date.setAttribute("type","date");
    // let öncelik = document.createElement("input");
    // öncelik.setAttribute("type","number");


    toDoDiv.appendChild(myH1);
    toDoDiv.appendChild(myH6);
    toDoDiv.appendChild(date);
    toDoDiv.appendChild(öncelik);
    toDoList.appendChild(toDoDiv);
}

function createElements(){
    
    let inputs = document.getElementsByClassName("create-input");
    let title=inputs[0].value;
    let description=inputs[1].value;
    let dueDate=inputs[2].value;
    let priority=inputs[3].value;


    createToDo(title,description,dueDate,priority);
    

}
let button=document.getElementById("create-button");
button.addEventListener("click",createElements);


// function addToDO(div){
//     let content =document.getElementById("content");
//     content.appendChild(div);

// }


