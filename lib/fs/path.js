try {
    var Path = require("path")
}
catch(e){

}

exports.normalize = function(path){
    if(!Path) throw new Error('[madtail_js_common] path module is not imported')

    return Path.normalize(path)
}
