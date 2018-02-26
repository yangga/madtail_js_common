exports.loadAllModulesInDirectory = function(dir, recursive=true){
    const FS = require('../fs/filesearch');
    const Path = require('../fs/path')

    const dirNormalized = Path.normalize(dir)

    let results = [];
    const listFiles = FS.getAllFilesInDirectory(dir, recursive);
    for (let i=0; i<listFiles.length; ++i) {
        const f = listFiles[i];
        if (0 > f.search('.js'))
            continue;        

        const key = f.replace(dirNormalized, '').replace('.js', '').slice(1)
        const mod = require(f.replace('.js', ''))

        results.push({
            key,
            mod
        });
    }

    return results;
}

exports.loadModulesInDirectory = function(moduleFilename, dir, recursive=true){
    const FS = require('../fs/filesearch');
    const Path = require('../fs/path')

    const dirNormalized = Path.normalize(dir)

    let results = [];
    let listFiles = FS.searchFilesInDirectory(moduleFilename, dir, recursive);
    for (let i=0; i<listFiles.length; ++i) {
        const f = listFiles[i];

        const key = f.replace(dirNormalized, '').replace('.js', '').slice(1)
        const mod = require(f.replace('.js', ''))

        results.push({
            key,
            mod
        });
    }

    return results;
}
