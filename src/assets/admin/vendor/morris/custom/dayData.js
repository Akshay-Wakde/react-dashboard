// Morris Days
var day_data = [
	{"period": "2016-10-01", "licensed": 3213, "Lapiz": 887},
	{"period": "2016-09-30", "licensed": 3321, "Lapiz": 776},
	{"period": "2016-09-29", "licensed": 3671, "Lapiz": 884},
	{"period": "2016-09-20", "licensed": 3176, "Lapiz": 448},
	{"period": "2016-09-19", "licensed": 3376, "Lapiz": 565},
	{"period": "2016-09-18", "licensed": 3976, "Lapiz": 627},
	{"period": "2016-09-17", "licensed": 2239, "Lapiz": 660},
	{"period": "2016-09-16", "licensed": 3871, "Lapiz": 676},
	{"period": "2016-09-15", "licensed": 3659, "Lapiz": 656},
	{"period": "2016-09-10", "licensed": 3380, "Lapiz": 663}
];
Morris.Line({
	element: 'dayData',
	data: day_data,
	xkey: 'period',
	ykeys: ['licensed', 'Unify'],
	labels: ['Licensed', 'Unify'],
	resize: true,
	hideHover: "auto",
	gridLineColor: "#e4e6f2",
	pointFillColors:['#ffffff'],
	pointStrokeColors: ['#ff5661'],
	lineColors:['#007ae1', '#e5e8f2', '#ff5661'],
});