let input = document.querySelector('#display');

function press(val){
    input.value += val;
}

function reset(){
    input.value = "";
}

function calculate(){
    input.value = eval(input.value);
}