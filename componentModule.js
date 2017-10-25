define(['chart', 'ractive'], function(chart, ractive) {
	'use strict';

	var years = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
	var africa = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
	var asia = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
	var europe = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734];
	var latinAmerica = [40, 20, 10, 16, 24, 38, 74, 167, 508, 784];
	var northAmerica = [6, 3, 2, 2, 7, 26, 82, 172, 312, 433];

	var ctx = document.getElementById("myChart");

	var drawChart = Ractive.extend({
		template : '<a on-click="@.drawLineChart(), false "href="#">Test Line Chart</a>' + 
		           '<a on-click="@.drawPieChart(), false "href="#">Test Pie Chart</a>'+ 
		           '<a on-click="@.drawBarChart(), false "href="#">Test Bar Chart</a>',

		oninit : function() {
			// load data
		},
		drawLineChart : function() {
			var myChart = new Chart(ctx, {
				type : 'line',
				data : {
					labels : years,
					datasets : [{
						data : africa,
						label : "Africa",
						borderColor : "#3e95cd",
						fill : false
					}, {
						data : asia,
						label : "Asia",
						borderColor : "#8e5ea2",
						fill : false
					}, {
						data : europe,
						label : "Europe",
						borderColor : "#3cba9f",
						fill : false
					}, {
						data : latinAmerica,
						label : "Latin America",
						borderColor : "#e8c3b9",
						fill : false
					}, {
						data : northAmerica,
						label : "North America",
						borderColor : "#c45850",
						fill : false
					}]
				}
			});
		},

		drawPieChart : function() {

			var myChart = new Chart(ctx, {
				type : 'pie',
				data : {
					labels : ["Africa", "Asia", "Europe", "Latin America", "North America"],
					datasets : [{
						label : "Population (millions)",
						backgroundColor : ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
						data : [2478, 5267, 734, 784, 433]
					}]
				},
				options : {
					title : {
						display : true,
						text : 'Predicted world population (millions) in 2050'
					}
				}
			});
		},

		drawBarChart : function() {

			var myChart = new Chart(ctx, {
				type : 'bar',
				data : {
					labels : ["Africa", "Asia", "Europe", "Latin America", "North America"],
					datasets : [{
						label : "Population (millions)",
						backgroundColor : ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
						data : [2478, 5267, 734, 784, 433]
					}]
				},
				options : {
					legend : {
						display : false
					},
					title : {
						display : true,
						text : 'Predicted world population (millions) in 2050'
					}
				}

			});

		}
	});
	Ractive.components.drawChart = drawChart;

	var ractive = new Ractive({
		target : '#target',
		template : '#template'
		
	});

	//return ractive;

});
