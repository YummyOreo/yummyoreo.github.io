// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('chart'), "chart-style");

// Specify the configuration items and data for the chart
var option = {
	title: {
		text: 'Attendance over time'
	},
	tooltip: {},
	legend: {
		data: ['attendance']
	},
	xAxis: {
		data: [0, 1, 2, 3, 4, 5, 6]
	},
	yAxis: {},
	series: [
		{
			name: 'attendance',
			type: 'line',
			data: [0, 5, 20, 36, 10, 10, 20],
			areaStyle: {
				opacity: 0.3
			}
		}
	]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);
