const but1 = document.querySelector('#but1');

but1.addEventListener("click", ()=>{
    const curr = localStorage.getItem('theme');
    if(!curr || localStorage.getItem('theme') === 'light'){
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }else{
        localStorage.setItem('theme', 'light');
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
});

window.addEventListener("load", ()=>{
    const theme = localStorage.getItem('theme');
    if(theme){
        document.body.classList.add(theme);
    }else{
        document.body.classList.add('light'); //by default
    }
});