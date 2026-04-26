const addbut = document.querySelector('#add');
const ul = document.querySelector('#list');

let dragitem = null;

addbut.addEventListener('click', ()=>{

    // Add task logic from here

    let input = document.querySelector('#addtask').value;
    let input2 = document.querySelector('#description').value;

    let li = document.createElement('li');
    li.textContent = input;

    let l2 = document.createElement('li');
    l2.textContent = input2;

    l2.setAttribute("id", input2);
    li.setAttribute("id", input);
    
    li.setAttribute("draggable", "true"); /* Make draggable */

    let del = document.createElement('button');
    del.textContent = 'Delete';

    del.onclick = () => {
        li.remove();
        if(localStorage.getItem(input)) localStorage.removeItem(input);
    }

    li.appendChild(del);
    li.appendChild(l2);
    ul.appendChild(li);
    
    localStorage.setItem(input, input2);

    document.querySelector('#addtask').value = "";
    document.querySelector('#description').value = "";

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