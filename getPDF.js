var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path
 



var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = { width: 1920, height: 1080 };
page.open("http://www.google.com", function start(status) {
  page.render('google_home.jpeg', {format: 'jpeg', quality: '100'});
  phantom.exit();
});


 
// var childArgs = [
//   path.join(__dirname, 'phantomjs-script.js'),
//   'some other argument (passed to phantomjs script)'
// ]
 
// childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
//   // handle results 
// })


