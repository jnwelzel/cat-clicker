'use strict'

var CatList = function(element, cats){
  this.element = $(element)
  this.cats = cats

  cats.forEach(function(cat){
    var catItem = new CatListItem(element, cat)
  })
}

CatList.prototype.add = function(cat){
  this.cats.push(cat)
}
