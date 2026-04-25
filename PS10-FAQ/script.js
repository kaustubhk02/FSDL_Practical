const buts = document.querySelectorAll('button');

buts.forEach(show);

function show(but){
    but.addEventListener('click', ()=>{
        let p = but.parentElement.parentElement.querySelector('p')
        if (p.style.display === 'none') p.style.display = 'block';
        else p.style.display = 'none';
    });
}