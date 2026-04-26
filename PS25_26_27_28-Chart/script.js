// const ctx = document.querySelector('#mychart');

// new Chart(ctx, {
//     type: 'polarArea',
//     data: {
//         labels: ['A', 'B', 'C', 'D'],
//         datasets: [{
//             label: 'Marks',
//             data: [20, 50, 70, 90],
//             backgroundColor: ['red', 'blue', 'green', 'yellow'],
//             // borderColor: ['darkred', 'darkblue', 'darkgreen', 'darkyellow']
//         }]
//     }
// });

async function loadChart(){
    const ctx = document.querySelector('#mychart');

    let res = await fetch("data.json");
    let data = await res.json();

    let days = data.forecast.map(row => row.day);
    let temps = data.forecast.map(row => row.temp);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: days,
            datasets: [{
                label: 'Temperature',
                data: temps
            }]
        }
    });
}

loadChart();