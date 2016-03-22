'use strict'

var CatListItem = function(container, cat){
  this.container = $(container)
  this.cat = cat

  this._render('cat_list_item')
  this.container.on('click', '#cat-list-item-' + cat.id, this._handleClick.bind(this))
}

CatListItem.prototype._handleClick = function(){
  $(document).trigger(Actions.SELECT_CAT, [this.cat])
}

CatListItem.prototype._render = function(templateName){
  TemplateLoader.require(templateName)
  var template = _.template($('#template_' + templateName).html())

  this.container.append(template({cat: this.cat}))
}
