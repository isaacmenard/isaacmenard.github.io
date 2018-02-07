
const express = require('express')
const app = express()


app.get('/', function (req, res) {
	res.sendfile('./index.html')
})
app.use(express.static('public'));

app.listen(2999, function () {
  console.log('Example app listening on port 3000!')
})	
		
				
