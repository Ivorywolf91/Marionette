var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var ToDoModel = require('../models/todo');

var FormView = require('./form');
var ListView = require('./list');


var Layout = Marionette.View.extend({
  el: '#app-hook',

  template: require('../templates/layout.html'),

  regions: {
    form: '.form',
    list: '.list'
  },

  collectionEvents: {
    add: 'itemAdded'
  },

  initialize: function() {
    this.collection = new Backbone.Collection([
      {assignee: 'Scott', text: 'Write a book about Marionette'},
      {assignee: 'Andrew', text: 'Do some coding'}
    ]);
    this.model = new ToDoModel();
  },

  onShow: function() {
    var formView = new FormView({model: this.model});
    var listView = new ListView({collection: this.collection});

    this.showChildView('form', formView);
    this.showChildView('list', listView);
  },

  onChildviewAddTodoItem: function() {
    
    this.model.set({
      assignee: this.getRegion('form').currentView.ui.assignee.val(),
      text: this.getRegion('form').currentView.ui.text.val()
    }, {validate: true});
    
    var items = this.model.pick('assignee', 'text');
    this.collection.add(items);
  },

  itemAdded: function() {
    this.model.set({
      assignee: '',
      text: ''
    });
  }

});

module.exports = Layout;