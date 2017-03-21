// FIXME Expose underscore as global
_ = require( "underscore" );
jQuery = require("jquery");

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');


var ToDo = Marionette.View.extend({
  tagName: 'li',
  template: require('./templates/todoitem.html')
});


var TodoList = Marionette.CollectionView.extend({  
  el: '#app-hook',
  tagName: 'ul',

  childView: ToDo,

  initialize: function() {
    this.collection = new Backbone.Collection([
      {assignee: 'Scott', text: 'Write a book about Marionette'},
      {assignee: 'Andrew', text: 'Do some coding'}
    ]);
  }
});

var todo = new TodoList();
todo.render();