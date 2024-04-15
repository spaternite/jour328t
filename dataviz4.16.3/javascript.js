
var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 171, y: 50 },
                ],
                label: "Blinding Lights by The Weeknd",
                borderColor: "#ffb6c1",
                backgroundColor: "#FF00FF",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 96, y: 75},
                ],
                label: "Blank Space by Taylor Swift",
                borderColor: "#ffd700",
                backgroundColor: "rgb(255,255,237)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 96, y: 83},
                ],
                label: "Shape of You by Ed Sheeran",
                borderColor: "#FF0000",
                backgroundColor:"#ff8686",
                borderWidth:2,
                
              } , { 
                data: [
                {x: 174, y: 52},
                ],
                label: "As It Was by Harry Styles",
                borderColor: "rgb(128, 0, 128)",
                backgroundColor:"#CBC3E3",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 107, y: 65},
                ],
                label: "Titi Me Preguntó by Bad Bunny",
                borderColor: "#3cba9f",
                backgroundColor:"rgb(60,186,159,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {     
                title: {
                    display: true,
                    text: 'Top 5 Streamed Artists of 2023: Comparing BPM and Danceability Rates',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'This compares the top streamed song of each top 5 streamed artist. The rates being measured are the BPM and danceability rate of each song, which helps listeners understand what tempo is best for their exercise and or activities.'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'BPM'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Danceability Rate'
                  }
              }
            }
          }
        });