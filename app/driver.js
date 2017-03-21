// FIXME Expose underscore as global
_ = require( "underscore" );
var Marionette = require('backbone.marionette');
var TodoView = require('./views/layout');

var initialData = {
  items: [
    {assignee: 'Scott', text: 'Write a book about Marionette'},
    {assignee: 'Andrew', text: 'Do some coding'}
  ]
};

var app = new Marionette.Application({
  onStart: function(options) {
    var todo = new TodoView(options);
    todo.render();
    todo.triggerMethod('show');
  }
});

app.start({initialData: initialData});