/*jslint browser:true*/
/*global requirejs, require, console*/
requirejs.config({
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'tmpl': {
            exports: 'tmpl'
        }
    }
});

require(["controller"], function (Controller) {
    "use strict";

    var controller = new Controller();
    
});

