function searchTable(){
    const search = document.querySelector("#search-box").value.toLowerCase();
    const rows = document.querySelectorAll(".row");

    rows.forEach(searching);
    function searching(row){
        let text = row.textContent.toLowerCase();
        if(text.includes(search)){
            row.style.display = "";
        }    
        else{
            row.style.display = "none";
        }
    };
}