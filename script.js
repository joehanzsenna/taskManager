'use strict'

const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#newTaskInput');
const listElement = document.querySelector('#tasks');


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    //console.log(input.value);
    const task = input.value
    if(task === ''){
        alert('input field must not be empty')
        const taskElement = document.createElement('div')
        taskElement.classList.add('task')
        const removeElement = taskElement.remove();
        return removeElement
    }else{
        console.log('success')
    }
    // creating div's and input fields
    // creating div with class of task
    const taskElement = document.createElement('div')
    taskElement.classList.add('task')
    // creating div with class of content
    const taskContentElement = document.createElement('div')
    taskContentElement.classList.add('content')
    const taskInputElement = document.createElement('input')
    taskInputElement.classList.add('text')
    taskInputElement.type = 'text'
    taskInputElement.value = task
    taskInputElement.setAttribute('readonly', 'readonly')
    // lets append input to the div of content using appendChild() method
    taskContentElement.appendChild(taskInputElement)



    const taskActionsElement = document.createElement('div')
    taskActionsElement.classList.add('actions')

    // edit btn
    const taskEditBtn = document.createElement('button')
    taskEditBtn.classList.add('edit')
    taskEditBtn.innerText = 'edit'

    //delete btn
    const taskDeleteBtn = document.createElement('button')
    taskDeleteBtn.classList.add('delete')
    taskDeleteBtn.innerText = 'delete'

    //appending edit and delete element using append child
    taskActionsElement.appendChild(taskEditBtn)
    taskActionsElement.appendChild(taskDeleteBtn)

    taskElement.appendChild(taskContentElement)
    taskElement.appendChild(taskActionsElement)
    listElement.appendChild(taskElement)

    taskEditBtn.addEventListener('click', ()=>{
        if(taskEditBtn.innerText === 'edit'){
            taskInputElement.removeAttribute('readonly')
            taskEditBtn.innerText = 'save'

        }else{
            taskInputElement.setAttribute('readonly', 'readonly')
            taskEditBtn.innerText = 'edit'
        }
    })

    taskDeleteBtn.addEventListener('click', function(){
        listElement.removeChild(taskElement)
    })
})