var fm = require('front-matter')
var fs = require('fs')

test('parse yaml delineatead by `---`', () => {
	fs.readFile('_Streams/109-webgl-with-p5js.md', 'utf8', function(err, data){
		var content = fm(data)
		expect(content).toHaveProperty('title')
		expect(content).toHaveProperty('video_number')
		expect(content).toHaveProperty('date')
		expect(content).toHaveProperty('video_id')
	})
})
