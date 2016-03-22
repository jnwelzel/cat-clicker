'use strict'

var ClickCounter = function(element){
  this.element = $(element)
  this.cat = null

  $(document).on(Actions.CLICK_CAT, this._handleClickCat.bind(this))
  $(document).on(Actions.SELECT_CAT, this._handleChangeCat.bind(this))
}

ClickCounter.prototype._handleClickCat = function(event, cat){
  this.cat = cat
  this.cat.clicks++

  $('#click-counter-container').removeClass('hidden')
  this.element.html(this.cat.clicks)
}

ClickCounter.prototype._handleChangeCat = function(event, cat){
  this.cat = cat

  $('#click-counter-container').removeClass('hidden')
  this.element.html(this.cat.clicks)
}
