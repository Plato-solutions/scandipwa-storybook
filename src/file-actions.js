const fs = require('fs');
const path = require('path');


const createFiles = (dirname, writePath, onFileContent) => {
	fs.readdir(dirname, function (err, filenames) {
		if (err) {
			console.error(err);
			return;
		}
		filenames.forEach(function (filename) {
			fs.readFile(dirname + filename, 'utf-8', function (err, content) {
				if (err) {
					console.error(err);
					return;
				}
				onFileContent(writePath, filename, content);
			});
		});
	});
}

const writeFile = (writePath, filename, content) => {
    const fileFullPath = path.join(writePath, filename);

    try {
        fs.writeFileSync(fileFullPath, content)
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    createFiles,
    writeFile
}