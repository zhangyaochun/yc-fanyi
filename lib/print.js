'use strict';

function log(msg, num) {
    num = num || 1;
    msg = msg || '';

}

exports.youdao = function(data) {
    var lineFirst = '';
    lineFirst += data.query;
    //data from: fanyi.youdao.com/openapi?path=data-mode
    
    //basic dic
    if (data.basic && data.basic.phonetic) {
        lineFirst += (' [ ' + data.basic.phonetic + ' ] ').magenta;
    }
};