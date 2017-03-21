// FIXME Expose underscore as global
_ = require( "underscore" );

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');


var TodoList = Marionette.View.extend({  
  el: '#app-hook',  
  template: require('./templates/layout.html'),

  initialize: function() {
    this.model = new Backbone.Model({
      items: [
        {assignee: 'Scott', text: 'Write a book about Marionette'},
        {assignee: 'Andrew', text: 'Do some coding'}
      ]
    });
  }
});

var todo = new TodoList();
todo.render();