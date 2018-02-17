const {getChangedFilesForRoots} = require('jest-changed-files')

function sum(a, b){
	return a + b;
}

test('console logs all changed Files and sums 1 + 2 to equal 3', () => {
	console.log("Hello World")
	getChangedFilesForRoots(['./'], {lastCommit: true,}).then(result => console.log(result.changedFiles))
	expect(sum(1, 2)).toBe(3)	
})
