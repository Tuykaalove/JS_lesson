function getTaskHtmlText(){
    const taskInputEl = document.getElementById('TaskInput');

    const taskTemplate = `<div class="card mb-4">
    <div class="card-body">
        <div class="text-center mb-4">${taskInputEl.value}</div>
        <div class="text-center">
        <button class="btn btn-secondary btn-sm">Edit</button>
        <button class="btn btn-info btn-sm">Save</button>
        <button class="btn btn-danger btn-sm">Delete</button>
        </div>
    </div>
</div>`;
return taskTemplate;
}

function addTask(){

    const taskListEl = document.getElementById('taskList');
   //3 dahi arga
   

taskListEl.innerHTML = taskListEl.innerHTML + getTaskHtmlText();

    // 2dahi arga
    // const newTask = document.getElementById('taskTemplate').content.cloneNode(true);
    //console.log(newTask);
  
    //Ehnii arga
    //   const newTask = document.createElement('div'); 
    // taskListEl.append(newTask);
    // console.log(taskInputEl.value);

}
