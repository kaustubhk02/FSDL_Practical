let seconds = 0
let timer = null;

function run(){
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.querySelector('#hrs').textContent = format(hrs);
    document.querySelector('#mins').textContent = format(mins);
    document.querySelector('#secs').textContent = format(secs);
}

function start(){
    if(timer != null) return;
    timer = setInterval(run, 1000);
}

function pause(){
    clearInterval(timer);
    timer = null;
}

function reset(){
    clearInterval(timer);
    timer = null;
    seconds = 0;
    document.querySelector('#hrs').textContent = '00';
    document.querySelector('#mins').textContent = '00';
    document.querySelector('#secs').textContent = '00';
}

function format(num){
    if(num<10){
        return '0'+num;
    }else{
        return num;
    }
}