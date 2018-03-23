exports.toFixed = function(n, decimal){
    return parseFloat(parseFloat(n).toFixed(decimal))
}