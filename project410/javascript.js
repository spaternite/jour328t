var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
 type: 'bar',
 data: {
    labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
   datasets: [{
        label: 'GDP Per Capita By Region',
        data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
        backgroundColor: [
            '#0000FF'
        ]
    },
]
},
options: {
    responsive: true,
    plugins: {     
        title: {
            display: true,
            text: 'GDP Per Capita By Region',
            font: {
                size: 18
            }
        },
        subtitle: {
            display: true,
            text: 'An analysis of the total income of these regions based on their population'
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
},     
});