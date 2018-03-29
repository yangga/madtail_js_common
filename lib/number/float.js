const BigNumber = require('bignumber.js');

exports.toFixed = function(n, decimal){
    return BigNumber(String(n)).toFixed(decimal)
}

/**
 * round() returns a rounded number
 * @param {Integer} n target number
 * @param {Integer} decimal
 *      #decimal < 0  : point rounding
 *      #decimal >= 0 : natural number rounding
 * @return {String} rounded result
 */
exports.round = function(n, decimal){
    if (decimal > 0){
        return BigNumber(
                BigNumber(String(n))
                .dividedBy(Math.pow(10, decimal))
                .toFixed(0)
            ).multipliedBy(Math.pow(10, decimal))
            .toFixed()
    }
    else if (decimal < 0){
        return BigNumber(String(n))
            .toFixed(Math.abs(decimal))
            .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1')
    }
    else {
        return Math.round(n)
    }
}
