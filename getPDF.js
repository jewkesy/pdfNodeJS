var phantom = require('phantom');

phantom.create(function (ph) {
  ph.createPage(function (page) {
    // page.open("http://www.google.com", function (status) {
    //   console.log("opened google? ", status);
    //   page.evaluate(function () { return document.title; }, function (result) {
    //     console.log('Page title is ' + result);
    //     ph.exit();
    //   });
    // });

  	// page.viewportSize = { width: 1920, height: 1080 };
  	page.set('paperSize', { format: 'A4', orientation: 'portrait', margin: '1cm'});
	// var theUrl = "http://jewkesy.github.io/FormulaOne/#/2015/drivers";
	var theUrl = "http://www.daryljewkes.com"
	// var theUrl = "http://getbootstrap.com/css"
	page.open(theUrl, function start(status) {
		setTimeout(function () {
			page.render('render.pdf', {format: 'pdf', quality: '100'});
	  		ph.exit();
		}, 500);
	});
  });
});