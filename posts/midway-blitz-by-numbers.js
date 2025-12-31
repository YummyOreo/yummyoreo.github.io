const hours = [
	'12a', '1a', '2a', '3a', '4a', '5a', '6a',
	'7a', '8a', '9a', '10a', '11a',
	'12p', '1p', '2p', '3p', '4p', '5p',
	'6p', '7p', '8p', '9p', '10p', '11p'
];
const days = [
	'Saturday', 'Friday', 'Thursday',
	'Wednesday', 'Tuesday', 'Monday', 'Sunday'
];


Date.prototype.addDays = function(days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
}

function getWeekNumber(d) {
	// Copy date so don't modify original
	d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	// Set to nearest Thursday: current date + 4 - current day number
	// Make Sunday's day number 7
	d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
	// Get first day of year
	var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	// Calculate full weeks to nearest Thursday
	var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
	// Return array of year and week number
	return [d.getUTCFullYear(), weekNo];
}

var detentionsByDateGraph = echarts.init(document.getElementById('detentions-by-date'), "chart-style");

function graphDetentionsByDate(icemapData) {
	fetch("../assets/ice/bydate.json")
		.then((response) => response.json()) // Parse JSON
		.then((iceData) => {
			let iceKeys = []
			let iceValues = []
			let ice7DayAvg = []
			let last7Days = []
			for (const [key, value] of Object.entries(iceData)) {
				iceKeys.push(key)
				iceValues.push(value)
				last7Days.push(value)
				if (last7Days.length > 7) {
					last7Days = last7Days.splice(1, 1)
				}
				sum = 0;
				for (let i = 0; i < last7Days.length; i++) {
					day = last7Days[i];
					sum += day;
				}
				ice7DayAvg.push(Math.round((sum / last7Days.length) * 2) / 2);
			}

			let icemapKeys = Object.keys(icemapData.sightings)
			let maxDate = new Date(icemapKeys[icemapKeys.length - 1])

			let date = new Date("2025-10-16");
			while (date < maxDate) {
				iceKeys.push(date.toISOString().split('T')[0]);
				date = date.addDays(1);
			}

			let mapValues = [];

			for (indx in iceKeys) {
				date = iceKeys[indx]
				if (icemapData.sightings[date] != null) {
					mapValues.push(icemapData.sightings[date].length)
				} else {
					mapValues.push("-")
				}
			}

			// Specify the configuration items and data for the chart
			titleTop = "auto";
			gridTop = 60;
			gridBtm = 60;
			legendBtm = "2%"
			if (mobile) {
				titleTop = 0;
				gridTop = "25%";
				gridBtm = "20%";
				legendBtm = "0%"
			}
			var option = {
				title: {
					text: 'Detentions and Sightings Over Time',
					top: titleTop
				},
				dataZoom: [
					{
						id: "dataZoomX",
						type: "inside"
					}
				],
				grid: {
					top: gridTop,
					bottom: gridBtm
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						lineStyle: {
							color: "#575848"
						}
					},
					textStyle: {
						color: "#2a2a22"
					},
				},
				legend: {
					// bottom: "2%"
					bottom: legendBtm
				},
				xAxis: {
					data: iceKeys
				},
				yAxis: [
					{
						type: "value",
						name: "Detentions",
						// axisLabel: {
						// 	formatter: "{value} detentions"
						// }
					},
					{
						type: "value",
						name: "Sightings",
						position: "right",
						// axisLabel: {
						// 	formatter: "{value} sightings"
						// }
					}
				],
				series: [
					{
						name: 'Detentions',
						type: 'scatter',
						data: iceValues,
						markLine: {
							symbol: 'none',
							lineStyle: {
								color: "#2a2a22",
								type: "dashed"
							},
							data: [
								{
									name: "Operation \"Midway Blitz\"",
									xAxis: "2025-09-08",
									label: {
										formatter: "{b}"
									}
								}
							]
						}
						// areaStyle: {
						// opacity: 0.3
						// }
					},
					{
						name: "7 Day Average",
						type: "line",
						smooth: true,
						yAxisIndex: 0,
						data: ice7DayAvg
					},
					{
						name: "Sightings",
						type: "bar",
						yAxisIndex: 1,
						data: mapValues
					}
				]
			};

			// Display the chart using the configuration items and data just specified.
			detentionsByDateGraph.setOption(option);
		})
}

var sightingsHeatmap = echarts.init(document.getElementById('sightings-heatmap'), "chart-style");

function graphSightingsHeatmap(icemapData) {
	let heatmapData = []
	for (const [key, value] of Object.entries(icemapData.sightings)) {
		heatmapData.push([key, value.length])
	}
	option = {
		title: {
			text: 'Sightings by Weekday'
		},
		tooltip: {},
		visualMap: {
			min: 0,
			max: 35,
			type: 'piecewise',
			orient: 'horizontal',
			bottom: "5%"
		},
		calendar: {
			left: 30,
			right: 30,
			range: ['2025-10', '2025-12-31'],
			itemStyle: {
				borderWidth: 0.5
			},
			yearLabel: { show: false }
		},
		series: {
			type: 'heatmap',
			coordinateSystem: 'calendar',
			data: heatmapData,
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowColor: 'rgba(0, 0, 0, 0.25)'
				}
			}
		}
	};
	sightingsHeatmap.setOption(option);
}

var sightingsByTime = echarts.init(document.getElementById('sightings-heatmap-time'), "chart-style");

function graphSightingsByTime(icemapData) {
	let heatmapTimeDataMap = new Map();
	let dayMap = [6, 5, 4, 3, 2, 1, 0]
	for (const [key, list] of Object.entries(icemapData.sightings)) {
		const date = new Date(`${key}T12:00:00`)
		let day = dayMap[date.getDay()];
		for (const value of list) {
			if (value.time) {
				const valueDate = value.date;
				let hour = valueDate.getUTCHours() - 5;
				if (hour < 0) {
					hour = 24 + hour;
				}
				const dictData = heatmapTimeDataMap.get(`${day},${hour}`);
				if (hour == 1) {
					console.log(valueDate)
				}
				if (dictData != undefined) {
					heatmapTimeDataMap = heatmapTimeDataMap.set(`${day},${hour}`, dictData + 1);
				} else {
					heatmapTimeDataMap = heatmapTimeDataMap.set(`${day},${hour}`, 1);
				}
			}
		}
	}

	let heatmapTimeData = []
	console.log(heatmapTimeDataMap)

	heatmapTimeDataMap.forEach((value, key) => {
		let x = key.split(",")
		heatmapTimeData.push([parseInt(x[1]), parseInt(x[0]), value])
	})

	console.log(heatmapTimeData)

	option = {
		title: {
			text: 'Sightings by Time'
		},
		tooltip: {},
		visualMap: {
			min: 0,
			max: 20,
			calculable: true,
			type: 'piecewise',
			orient: 'horizontal',
			bottom: 0
		},
		xAxis: {
			type: 'category',
			data: hours,
			splitArea: {
				show: true
			}
		},
		yAxis: {
			type: 'category',
			data: days,
			splitArea: {
				show: true
			}
		},
		series: {
			type: 'heatmap',
			data: heatmapTimeData,
			emphasis: {
				itemStyle: {
					shadowBlur: 10,
					shadowColor: 'rgba(0, 0, 0, 0.25)'
				}
			}
		}
	};

	sightingsByTime.setOption(option);
}

var sightingsNorthVsSouth = echarts.init(document.getElementById('sightings-north-vs-south'), "chart-style");

function graphSightingsByLocation(icemapData) {
	const divider = 41.91;
	let northVsSouthData = {
		"north": {},
		"south": {}
	}

	for (const [key, list] of Object.entries(icemapData.sightings)) {
		for (const value of list) {
			if (value.latlng[0] > divider) {
				if (northVsSouthData.north[key] == undefined) {
					northVsSouthData.north[key] = 1
				} else {
					northVsSouthData.north[key] += 1;
				}
			} else {
				if (northVsSouthData.south[key] == undefined) {
					northVsSouthData.south[key] = 1
				} else {
					northVsSouthData.south[key] += 1;
				}
			}
		}
	}

	let icemapKeys = Object.keys(icemapData.sightings)
	let maxDate = new Date(icemapKeys[icemapKeys.length - 1])

	let northVsSouthKeys = []

	let startDate = new Date("2025-10-01");
	while (startDate < maxDate) {
		northVsSouthKeys.push(startDate.toISOString().split('T')[0]);
		startDate = startDate.addDays(1);
	}

	let dataNorth = []
	let dataSouth = []
	for (const date of northVsSouthKeys) {
		if (northVsSouthData.north[date] != undefined) {
			dataNorth.push(northVsSouthData.north[date])
		} else {
			dataNorth.push(0)
		}
		if (northVsSouthData.south[date] != undefined) {
			dataSouth.push(northVsSouthData.south[date])
		} else {
			dataSouth.push(0)
		}
	}

	titleTop = "auto";
	fontSize = 18;
	gridBtm = 60;
	legendBtm = "2%"
	if (mobile) {
		titleTop = 0;
		fontSize = 12
		gridBtm = "20%";
		legendBtm = "0%"
	}
	var option = {
		title: {
			text: 'Sightings North of North Ave. Vs. South of North Ave',
			top: titleTop,
			textStyle: {
				fontSize: fontSize
			}
		},
		dataZoom: [
			{
				id: "dataZoomX",
				type: "inside"
			}
		],
		grid: {
			bottom: gridBtm
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: "#575848"
				}
			},
			textStyle: {
				color: "#2a2a22"
			}
		},
		legend: {
			bottom: "1%",
			bottom: legendBtm,
		},
		xAxis: {
			data: northVsSouthKeys
		},
		yAxis: [{
			type: "value",
			name: "Sightings",
			axisLabel: {
				formatter: "{value} sightings"
			}
		}],
		series: [
			{
				name: 'Sighting North',
				type: 'line',
				smooth: true,
				data: dataNorth
			},
			{
				name: "Sightings South",
				type: "line",
				smooth: true,
				data: dataSouth
			}
		]
	};

	sightingsNorthVsSouth.setOption(option);
}

fetch("https://icemap.quinnyates.me/sightings.json")
	.then((response) => response.json()) // Parse JSON
	.then((data) => {
		let icemapData = buildData(data);

		graphDetentionsByDate(icemapData)
		graphSightingsHeatmap(icemapData)
		graphSightingsByTime(icemapData)
		graphSightingsByLocation(icemapData)

		// map of detentions and sightings
	})


// flexable spacer
// let dots = document.getElementsByClassName("wrapper-dots")[0]
// let footer = document.getElementsByTagName("footer")[0]
// let spacer = document.getElementsByClassName("flexable-spacer")[0];
//
// let loadedChildren = 0;
//
// [...dots.children].forEach((el) => (
// 	el.onload = () => {
// 		loadedChildren++;
// 		if (loadedChildren + 1 == dots.children.length) {
// 			let dotsBox = dots.getBoundingClientRect()
// 			let footerBox = footer.getBoundingClientRect()
// 			console.log(dotsBox.bottom, footerBox.top)
// 			let offset = (dotsBox.bottom) - footerBox.top;
// 			if (offset > 0) {
// 				spacer.style.marginTop = `calc(${offset}px + 2rem)`
// 			} else {
// 				spacer.style.marginTop = ""
// 			}
// 		}
// 	}
// ))
//
// window.onresize = () => {
// 	let dotsBox = dots.getBoundingClientRect()
// 	let footerBox = footer.getBoundingClientRect()
// 	console.log(dotsBox.bottom, footerBox.top)
// 	let offset = (dotsBox.bottom) - footerBox.top;
// 	if (offset > 0) {
// 		spacer.style.marginTop = `calc(${offset}px + 2rem)`
// 	} else {
// 		spacer.style.marginTop = ""
// 	}
// }
