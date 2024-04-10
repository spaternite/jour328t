var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#ffb6c1",
                backgroundColor: "#FF00FF",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#ffd700",
                backgroundColor: "rgb(255,255,237)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#FF0000",
                backgroundColor:"#ff8686",
                borderWidth:2,
                
              } , { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "rgb(128, 0, 128)",
                backgroundColor:"#CBC3E3",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
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
                    text: 'Top 5 Country Life Expectancy and GDP Per Capita',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'An analysis of which countries have the longest lifespan based on their population size'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP Per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });