'use strict';

function log(msg, num) {
    num = num || 1;
    msg = msg || '';

    var i = 1;
    var result = '';

    for (; i < num; i++) {
        result += '   ';
    }
    console.log(result, msg);

}



exports.youdao = function(data) {
    var lineFirst = '';
    lineFirst += data.query;
    //data from: fanyi.youdao.com/openapi?path=data-mode
    
    //basic dic
    if (data.basic && data.basic.phonetic) {
        lineFirst += (' [ ' + data.basic.phonetic + ' ] ').magenta;
    }

    if (data.basic && data.basic.explains) {
        data.basic.explains.forEach(function (i){
            log('- '.faint + i.green);
        });
    }

    if (data.web && data.web.length) {
        data.web.forEach(function (item){
            log(' ' + item.value.join(',').cyan);
        });
    }

    log(lineFirst + ' ~ from -> fanyi.youdao.com'.faint);
};



exports.baidu = function(data) {
    log('------------------');
    
    if (data.trans_result) {
        log(data.from.cyan + '  ---> ' + data.to.green);

        log(data.trans_result[0].src.cyan + '  ---> ' + data.trans_result[0].dst.green);

    }
        
    log(' ~ from -> fanyi.baidu.com'.faint);
}