function addStudent(){
    let data = {
        name: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        branch: document.getElementById("branch").value
    };

    fetch("http://localhost:3000/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => alert("Saved"));
}

function getStudents(){
    fetch("http://localhost:3000/students")
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("list");
        list.innerHTML = "";

        data.forEach(s => {
            list.innerHTML += `<li>${s.name} - ${s.roll} - ${s.branch}</li>`;
        });
    });
}