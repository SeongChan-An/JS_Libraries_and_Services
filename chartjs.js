const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: '매출액',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const data2 = {
    labels: labels,
    datasets: [{
      label: '매출액',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: "black",// 'rgb(255, 99, 132)',
      borderWidth: 5,
      hoverBorderWidth: 10,
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const data3 = {
    labels: labels,
    datasets: [{
        label: '매출액 현황(억)',
        backgroundColor: ['#ff0000', 'green', 'blue'], // rgba(255, 0, 0, 0.5), #ff0000
        borderColor: 'black',
        borderWidth: 5,
        hoverBorderWidth: 7,
        data: [1, 2, 5, 2, 2, 3, 4],
    }]
    };

    const data4 = {
        labels: labels,
        datasets: [{
            label: '매출액 현황(억)',
            backgroundColor: ['red', 'green', 'blue', 'pink', 'dodgerblue', 'gray', 'hotpink'], // rgba(255, 0, 0, 0.5), #ff0000
            borderColor: 'black',
            borderWidth: 5,
            hoverBorderWidth: 7,
            data: [1, 2, 5, 2, 2, 3, 4],
        }]
        };

const config = {
    type: 'line', // line, bar, pie, doughnut, ploarArea
    data: data,
    options: {}
  };

  const config2 = {
    type: 'bar', // line, bar, pie, doughnut, ploarArea
    data: data2,
    options: {}
  };

  const config3 = {
    type: 'bar', // pie, bar, line, doughnut, polarArea
    data: data3,
    options: {
        plugins:{
            title:{
                display: true,
                text: '매출액!!!!',
                color: 'red',
                position: 'bottom',
                padding: {
                    top: 10,
                    bottom: 10
                }
            },
            legend: {
                display: true,
                position:'right',
                labels:{
                    color:'blue'
                }
            }
        }
    }
};

const config4 = {
    type: 'pie', // pie, bar, line, doughnut, polarArea
    data: data4,
    options: {}
};

  const myChartOne = new Chart(
    document.getElementById('myChartOne'),
    config
);
const myChartTwo = new Chart(
    document.getElementById('myChartTwo'),
    config2
);

const myChartThree = new Chart(
    document.getElementById('myChartThree'),
    config3
);
const myChartFour = new Chart(
    document.getElementById('myChartFour'),
    config4
);