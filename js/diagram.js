var ctx = document.getElementById('diagram').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['','','', '','', '','', '',''],
        display: false,
        datasets: [{
            label: '',
            data: [0,83,58,72,55,95,54,85,0],
            backgroundColor: ['#f6f6f6'],
            hoverBackgroundColor: ['green'],
            borderColor: ['white'],
            scaleLineColor: 'white',
            pointBackgroundColor: 'black',
            pointRadius: [0, 4, 0, 4, 0, 4, 0, 4, 0,],
            borderWidth: 1,
             
        }]
    },
    options: {
        
        scales: {
            xAxes : [{
                gridLines : {
                    display : false
                },
            }],

            yAxes: [{
                render: 'percentage',
                ticks: {
                    min: 50,
                    max: 100,
                    stepSize: 10,
                    beginAtZero: true,
                    callback: function (value, index, values) {
                        return value + '%';
                    }
                },
                
            }]
        },
    }
});




