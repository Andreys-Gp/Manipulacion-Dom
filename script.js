

   import checkComplete from "./components/checkComplete.js";
   import deleteICon from "./components/deleIcon.js";
   
   
   const btn= document.querySelector('[data-form-btn]');
/* const input=document.querySelector("[data-form-input]"); */
/* console.log(btn);  */
const createTaask=(evento)=> {
    evento.preventDefault();
    const input=document.querySelector('[data-form-input]');
    const value= input.value;

      // element's LISTS
    const list=document.querySelector('[data-list]');
    const task=document.createElement('li');
    task.classList.add('card');
    input.value='';
    /* backticks */
    /* console.log(checkComplete()); */
    const taskContent=document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask=document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText=value;
    taskContent.appendChild(titleTask);
    /* taskContent.appendChild(deleteICon()); */
   /*  const content=`<i class="fas fa-trash-alt trashIcon icon"></i>`; */
    task.appendChild(taskContent); 
    task.appendChild(deleteICon());
    /* console.log(content); */
    list.appendChild(task);

    }
    btn.addEventListener('click', createTaask);


