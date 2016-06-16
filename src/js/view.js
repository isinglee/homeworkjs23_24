/*jslint browser:true*/
/*global define, console*/
define(
    'view',
    ['jquery', 'tmpl'],
    function ($, tmpl) {
        'use strict';

        function View(model) {
            var self = this;
            
            self.renderList = function () {
                var html = tmpl('todos_template', {todos: model.getList()});
                $('#todos').html(html);
            };
        }
        
        return View;
    }
);
