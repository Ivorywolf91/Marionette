// views/list.js
var Marionette = require('backbone.marionette');

var ToDo = Marionette.View.extend({
  tagName: 'li',
  template: require('../templates/todoitem.html')
});


var TodoList = Marionette.CollectionView.extend({
  tagName: 'ul',
  childView: ToDo
});


module.exports = TodoList;