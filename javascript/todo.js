let input_text= document.getElementById('task_text');
let myButton= document.getElementById('add');
let list= document.getElementById('list');

function inputValue(){
    
    if(input_text.value === ''){
        return;
    }

    let newBoxTask = document.createElement('div');
    newBoxTask.className = 'boxtaskcreated';
    let newInputValue = input_text.value;
    input_text.value = '';
    let newButton = document.createElement('button');
    newButton.className = 'newbuttoncreated';

    list.appendChild(newBoxTask);
    newBoxTask.innerHTML = newInputValue;
    newBoxTask.appendChild(newButton);
    newButton.innerHTML= 'Delete';
    newButton.addEventListener('click', deleteTask);

}

function deleteTask(e){
  let taskToDelete = e.target.parentNode;
  list.removeChild(taskToDelete);
}

function addTaskWithEnter(e) {
    if (e.keyCode === 13) {
      inputValue();
    }
}


myButton.addEventListener('click', inputValue);
input_text.addEventListener('keyup', addTaskWithEnter);