let todoList=[];
let todoListHtml='';

 if (localStorage.getItem('todoss')) {
      todoList = JSON.parse(localStorage.getItem('todoss'));
    }

renderTodolist();
function renderTodolist(){
   let todoListHtml='';
   for(let i=0;i<todoList.length;i++){
      const todo=todoList[i];
      const formattedDate = new Date(todo.date).toLocaleString('en-GB', {
         day: '2-digit',
         month: 'short',
         year: 'numeric',
         hour: '2-digit',
         minute: '2-digit',
         hour12: true
      });


         const html=`<div class="todo-text"> ${todo.name}</div>
         <div>${formattedDate}</div>
         <button class="delete" onclick="deleteTodo(${i})">Delete</button>
         `
       todoListHtml += html;
        
   }
   document.querySelector(".todolist-render").innerHTML=todoListHtml
}

function deleteTodo(index){
   todoList.splice(index, 1);
   localStorage.setItem('todoss', JSON.stringify(todoList));
   renderTodolist();
}

function addTodo(){
   const inputElement= document.querySelector('.js-name')
   const name=inputElement.value;
   const dateElement= document.querySelector('#date');
   const date=dateElement.value;
   console.log(name);

   if(name!=='' && date!==''){
      todoList.push({name, date});//pushing object with name and date in array
      localStorage.setItem('todoss', JSON.stringify(todoList));
      inputElement.value='';
      dateElement.value='';
      renderTodolist();
   }
}



