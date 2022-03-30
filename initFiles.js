const Fs = require('fs');
module.exports = (path, CMD) => {
    let files = Fs.readdirSync(path);

    for(let file of files) {
        let cmdPath = `['${path.split('/').slice(2).join(`']['`)}']`;
        eval(`if(!CMD${cmdPath} && cmdPath != "['']") CMD${cmdPath} = {};`);

        let filePath = path + '/' + file;
        let stat = Fs.statSync(filePath);
        let isDirectory = stat.isDirectory();

        if(isDirectory == true) {
            module.exports(filePath, CMD);
        } else {
            let requireFunction = require(filePath);
            eval(`if(cmdPath != "['']") {
                CMD${cmdPath + `['${file.slice(0, -3)}']`} = requireFunction;
            } else {
                CMD${`['${file.slice(0, -3)}']`} = requireFunction;
            }`);
        }
    }

    return CMD;
};