/*jslint browser:true*/
/*global define, console*/
define(
    'controller',
    ['model', 'view', 'jquery'],
    function (Model, View, $) {
        'use strict';
        function Controller() {
            var self = this,
                model,
                view;

            self.init = function () {
                model = new Model();
                view = new View(model);

                $("#addTodo").on('click', self.onAddTodo);

                self.updateView();
            };

            self.onAddTodo = function () {
                var $input = $('#newTodo'),
                    newTodo = $input.val();
                $input.val("");
                model.addTodo(newTodo);
                self.updateView();
            };

            self.onEditTodo = function () {
                $(this).closest(".todo__element").addClass('edit');
                $(this).siblings('.todo__edit').focus().val("").val($(this).siblings('.todo__edit').data('original'));
            };

            self.onSaveTodo = function () {
                var $input = $(this).siblings('.todo__edit'),
                    newTodo = $input.val(),
                    originalTodo = $input.data('original');
                model.editTodo(originalTodo, newTodo);
                self.updateView();
            };

            self.onDeleteTodo = function () {
                var todo = $(this).siblings('.todo__text').text();
                model.deleteTodo(todo);
                self.updateView();
            };

            self.updateView = function () {
                view.renderList();
                $(".todo__add").on('click', self.onSaveTodo);
                $(".todo__text").on('click', self.onEditTodo);
                $(".todo__delete").on('click', self.onDeleteTodo);
            };

            self.init();
        }

        return Controller;
    }
);
