
const labels = ['', '', '', ''];
const images = ['./image/skill/1.png', './image/skill/2.png', './image/skill/3.png', './image/skill/4.png'];
const values = [83, 72, 95, 85];
var ctx = document.getElementById('diagram').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    plugins: [{
        afterDraw: chart => {      
          var ctx = chart.chart.ctx; 
          var xAxis = chart.scales['x-axis-0'];
          var yAxis = chart.scales['y-axis-0'];
          xAxis.ticks.forEach((value, index) => {  
            var x = xAxis.getPixelForTick(index);      
            var image = new Image();
            image.src = images[index],
            ctx.drawImage(image, x - 12, yAxis.bottom + 10);
          });      
        }
      }],
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




