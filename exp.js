const express = require('express')
const app = express()
var fs = require('fs');

app.use(express.static('public'));
app.get('/', function (req, res) {
	var message = "";
	message = getClientIp(req);
	message = message + "\n";
	fs.readFile('/Users/Isaac/Documents/projects/isaacmenard.github.io/logs.txt', "utf8", (err, data) => {
		if (err) throw err;
		console.log(data);
	  
	  
	  number = parseInt(data);
	  var data = number;
	  var data = data + 1;
	  
	  fs.writeFile('/Users/Isaac/Documents/projects/isaacmenard.github.io/logs.txt', data, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	  });});
	res.sendfile('./index.html')
})
app.get('/moi', function (req, res) {
	res.sendfile('./page.html')
})
app.get('/experience', function (req, res) {
	res.sendfile('./exp.html')
})
app.get('/logs', function (req, response) {
	var fs = require('fs'),
		path = require('path'),
		filePath = path.join(__dirname, 'logs.txt');

	fs.readFile(filePath, {
		encoding: 'utf-8'
	}, function (err, data) {
		if (!err) {
			console.log('received data: ' + data);
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(data);
			response.end();
		} else {
			console.log(err);
		}
	});
})
app.get('/projets', function (req, res) {
	res.sendfile('./loi.html')
})
app.get('/mon-jeu', function (req, res) {
	res.sendfile('./niv1.html')
})
app.get('/contacte-moi', function (req, res) {
	res.sendfile('./cont.html')
})




app.listen(2999, function () {
	console.log('Example app listening on port 3000!')
})


function getClientIp(req) {
	var ipAddress;
	// The request may be forwarded from local web server.
	var forwardedIpsStr = req.header('x-forwarded-for');
	if (forwardedIpsStr) {
		// 'x-forwarded-for' header may return multiple IP addresses in
		// the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
		// the first one
		var forwardedIps = forwardedIpsStr.split(',');
		ipAddress = forwardedIps[0];
	}
	if (!ipAddress) {
		// If request was not forwarded
		ipAddress = req.connection.remoteAddress;
	}
	return ipAddress;
};