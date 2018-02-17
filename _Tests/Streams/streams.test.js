const {getChangedFilesForRoots} = require('jest-changed-files')

getChangedFilesForRoots(['./'], {lastCommit: true,}).then(result => console.log(result.changedFiles))

test('logs 1st of changedFiles', () => {
	console.log("Hello World")
	return 1
})
