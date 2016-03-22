'use strict'

var CatViewer = function(element){
  this.element = $(element)
  this.cat = null

  this.element.on('click', this._handleClick.bind(this))

  $(document).on(Actions.SELECT_CAT, this._handleSelectCat.bind(this))
}

CatViewer.prototype._handleClick = function(){
  $(document).trigger(Actions.CLICK_CAT, [this.cat])
}

CatViewer.prototype._handleSelectCat = function(event, cat){
  this.cat = cat
  this.element.removeClass('disabled')
  this.element.css('background-image', 'url(' + cat.imageUrl + ')')
}
