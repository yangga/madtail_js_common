const _ = require('lodash')
const assert = require('assert')

exports.getValueRecursive = function(...args){
    assert(arguments.length >= 2)
    let c = arguments[0]
    for (let i=1; i<arguments.length; i++){        
        if (typeof c !== 'object') return undefined

        const param = arguments[i]
        if (c[param] === undefined) return undefined

        c = c[param]
    }
    return c
}

exports.setValueRecursive = function(...args){
    assert(typeof arguments[0] === 'object')
    assert(arguments.length >= 3)
    let c = arguments[arguments.length-1]
    for (let i=arguments.length-2; i>0; i--){
        assert(typeof arguments[i] === 'string')
        const pre = c
        c = {}
        c[arguments[i]] = pre
    }

    return _.merge(arguments[0], c)
}
