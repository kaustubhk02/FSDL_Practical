const addbut = document.querySelector('#add');
const ul = document.querySelector('#list');

let dragitem = null;

addbut.addEventListener('click', ()=>{

    // Add task logic from here

    let input = document.querySelector('#addtask').value;

    let li = document.createElement('li');
    li.textContent = input;

    li.setAttribute("draggable", "true"); /* Make draggable */

    let del = document.createElement('button');
    del.textContent = 'Delete';

    del.onclick = () => li.remove();

    li.appendChild(del);
    ul.appendChild(li);

    document.querySelector('#addtask').value = "";

    // Drag and Drop from here

    li.addEventListener('dragstart', ()=>{
        dragitem = li;
    });

    li.addEventListener('dragover', (e)=>{
        e.preventDefault();
    });
    li.addEventListener('drop', ()=>{
        if(dragitem !== li){
            ul.insertBefore(dragitem, li);
        }
    });
});