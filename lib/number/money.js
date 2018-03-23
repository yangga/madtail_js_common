const Float = require('./float')

exports.formatDecimals = function(n, decimal){
    const fixed = String(Float.toFixed(n, decimal))
    const parts=fixed.split(".")
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "")
}
