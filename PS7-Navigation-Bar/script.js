document.querySelector('#home').addEventListener('click', ()=>{
    document.querySelector('.content').innerText = 'You are on HOME Page........';
});

document.querySelector('#product').addEventListener('click', ()=>{
    document.querySelector('.content').innerText = 'PRODUCTS Page........';
});

document.querySelector('#service').addEventListener('click', ()=>{
    document.querySelector('.content').innerText = 'These are the Services you can have ........';
});

document.querySelector('#Logo').addEventListener('click', ()=>{
    document.querySelector('.content').innerText = 'Something is cooking !!!!111........';
});


function check(){
    const val = document.querySelector('#course').value;
    if(val === 'HTML'){
        document.querySelector('.content').innerText = 'You selected HTML Course...';
    }
    if(val === 'CSS'){
        document.querySelector('.content').innerText = 'You selected CSS Course...';
    }
    if(val === 'JS'){
        document.querySelector('.content').innerText = 'You selected JS Course...';
    }
}