'use strict'

$(function() {

  var cats = [
    {
      id: 1,
      name: 'Grumpy cat',
      imageUrl: 'http://i.telegraph.co.uk/multimedia/archive/03481/Grumpy_Cat__3481823b.jpg',
      clicks: 0
    },
    {
      id: 2,
      name: 'Taco cat',
      imageUrl: 'http://data.whicdn.com/images/132672627/large.jpg',
      clicks: 0
    },
    {
      id: 3,
      name: 'Space cat',
      imageUrl: 'https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ_400x400.png',
      clicks: 0
    }
  ]

  var catList = new CatList('#cat-list-container', cats)
  var catViewer = new CatViewer('#cat-viwer-container')
  var clickCounter = new ClickCounter('#click-counter-content')

})
