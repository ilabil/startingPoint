require.config({
	"paths" : {
		"chart" : "./lib/chartJS_2.7",
		"ractive" : "./lib/ractiveJS_0.9.6"
	},
	"shim" : {
		"chart" : {
			exports : 'chart'
		},
		"ractive" : {
			exports : 'Ractive'
		}
	}
});


require(['./componentModule'], function() {
	
});

