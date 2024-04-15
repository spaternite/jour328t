var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
 type: 'bar',
 data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
   datasets: [{
        label: 'Songs',
        data: [134, 61, 86, 66, 128, 86, 62, 46, 56, 73, 80, 75,],
        backgroundColor: [
            '#ff00bb', 
        ]
    },
]
},
options: {
    responsive: true,
    plugins: {     
        title: {
            display: true,
            text: 'Song Releases by Month in 2023',
            font: {
                size: 18
            }
        },
        subtitle: {
            display: true,
            text: 'An analysis of which months in 2023 had the most song releases.'
        }
    },
scales: {
    y: {
    title: {
    display: true,
    text: 'Number of Songs'
      }
    },
    x: {
        title: {
            display: true,
            text: 'Month'
        }
    }
  }
}
});