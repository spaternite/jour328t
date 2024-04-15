var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
 type: 'pie',
 data: {
    labels: ['Karol G', 'Eminem', 'Feid', 'Latto, Jung Kook', 'NewJeans', 'The Weeknd', 'Harry Styles', 'Arctic Monkeys', 'Bad Bunny', 'Taylor Swift'],
   datasets: [{
        label: 'Number of Songs Present on Spotify Charts',
        data: [149, 152, 165, 147, 168, 180, 185, 190, 268, 542],
        backgroundColor: [
            '#33FFE6', '#ffd700', '#E933FF', '#FF9333', '#33FF6E', '#FF335E', '#6133FF', '#1ABC9C', '#5B2C6F', '#1E8449',
        ]
    },
]
},
options: {
    responsive: true,
    plugins: {     
        title: {
            display: true,
            text: 'Artists Ranked by Spotify Charts',
            font: {
                size: 18
            }
        },
        subtitle: {
            display: true,
            text: 'This shows which artists had the most presence in Spotify charts in 2023. Data was calculated according to the number of songs per artist and the rank of each song on Spotify charts.'
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
},     
});