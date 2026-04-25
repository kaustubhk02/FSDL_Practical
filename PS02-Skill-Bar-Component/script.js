function addSkill(){
    const skillName = document.querySelector('#skillName').value;
    const percentage = document.querySelector('#percentage').value;

    let newskill = document.createElement('div');
    newskill.classList.add("skill");

    let name = document.createElement('h5');
    name.textContent = skillName + '-' + percentage + '%';
    
    let fill = document.createElement('div');
    fill.classList.add("fill");

    fill.style.backgroundColor = "black";
    fill.style.width = percentage + '%';

    newskill.appendChild(fill);
    document.body.appendChild(name);
    document.body.appendChild(newskill);
}
