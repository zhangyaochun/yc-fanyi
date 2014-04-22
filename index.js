'use strict';

var spawn = require('child_process').spawn;

//external third-part lib
var request = require('request');

var URLS =  require('./lib/urls.json'); 

//fanyi
exports.fanyi = function (word) {
    //say word only in mac
    spawn('say', [word]);

    //now just can use youdao
    //TODO fix more api
    request.get(URLS['youdao'] + encodeURIComponent(word), function(error, response, body) {
        if (!error && response.statusCode == 200) {
            //TODO check if decode?
            var data = JSON.parse(body);

        }
    });
};