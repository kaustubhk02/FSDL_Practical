
async function addStudent(){
    let data = {
        name: document.getElementById('name').value,
        roll: document.getElementById('roll').value,
        branch: document.getElementById('branch').value
    }

    await fetch("http://localhost:3000/add", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    alert("Saved");
}

async function getStudents(){
    let res = await fetch("http://localhost:3000/students");
    let data = await res.json();

    let li = document.getElementById('list');
    li.innerHTML = "";

    data.forEach(s=>{
        li.innerHTML += `<li>${s.name} - ${s.roll} - ${s.branch}</li>`;
    });
}