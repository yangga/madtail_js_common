try {
    var FileSystem = require("fs")
}
catch(e){
    console.log('[madtail_js_common]', e)
}

function getAllFilesInDirectory(dir, recursive=true){
    if(!FileSystem) throw new Error('[madtail_js_common] fs module is not imported')

    const Path = require('./path')
    const dirNormalized = Path.normalize(dir)

    let results = [];
    FileSystem.readdirSync(dirNormalized).forEach(function(file) {

        file = dirNormalized+'/'+file;
        const stat = FileSystem.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFilesInDirectory(file, recursive))
        } else results.push(file);

    });

    return results;
}
exports.getAllFilesInDirectory = getAllFilesInDirectory

function searchFilesInDirectory(reg, dir, recursive=true){
    if(!FileSystem) throw new Error('[madtail_js_common] fs module is not imported')

    const Path = require('./path')
    const dirNormalized = Path.normalize(dir)

    let results = [];
    FileSystem.readdirSync(dirNormalized).forEach(function(file) {
        const fullPath = dirNormalized+'/'+file;
        const stat = FileSystem.statSync(fullPath);

        if (stat && stat.isDirectory()) {
            results = results.concat(searchFilesInDirectory(reg, fullPath, recursive))
        } else {
            if (0 <= file.search(reg)){
                results.push(fullPath);
            }
        }

    });

    return results;
}
exports.searchFilesInDirectory = searchFilesInDirectory
