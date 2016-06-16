/*jslint browser:true*/
/*global define, console*/
define(
    'model',
    [],
    function () {
        'use strict';
        function Model() {
            var self = this,
                list = [];

            self.init = function () {
                var todos = localStorage.getItem('todos');
                list = JSON.parse(todos);
                if (!list) {
                    list = ['Купить пачку печенья', 'Достать банку варенья', 'Праздновать!'];
                }
                return self;
            };

            self.addTodo = function (todo) {
                if (todo === "") {
                    return;
                }
                list.push(todo);
                self.save();
                return self;
            };

            self.editTodo = function (todo, newTodo) {
                var pos = list.indexOf(todo);
                if (pos >= 0 && pos < list.length) {
                    list[pos] = newTodo;
                    self.save();
                }
                return self;
            };

            self.deleteTodo = function (todo) {
                var pos = list.indexOf(todo);
                if (pos >= 0 && pos < list.length) {
                    list.splice(pos, 1);
                    self.save();
                }
                return self;
            };

            self.getList = function () {
                return list;
            };

            self.save = function () {
                localStorage.setItem('todos', JSON.stringify(list));
            };

            self.init();
        }

        return Model;
    }
);
